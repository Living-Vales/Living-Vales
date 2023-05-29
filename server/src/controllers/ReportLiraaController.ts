import { Request, Response } from "express"
import { z } from  'zod'
import { knex } from '../database'
import DateUtilities from "../utilities/DateUtilities"

const dateUtilities = new DateUtilities()

class ReportLiraaController {

    public async register( req: Request, res: Response ) {

        const createReportLiraSchema = z.object({
            visitas_boletim_liraa: z.object({            
                nome: z.string(),
                bairro: z.string(),
                logradouro: z.string(),
                supervisor: z.string(),
                tipoImv: z.string(),
                municipio: z.string(),
                complemento: z.string(),
                responsavel: z.string(),
                uf: z.string(),
                tubitos: z.number(),
                aegDepA1: z.number(),
                labAlb: z.number(),
                aegDepA2: z.number(),
                depD1: z.number(),
                depD2: z.number(),
                amostras: z.string(),
                depA2: z.number(),
                aegDepC: z.number(),
                aegDepB: z.number(),
                aegDepE: z.number(),
                aegDepD1: z.number(),
                aegDepD2: z.number(),
                depA1: z.number(),
                depAlb:z.number(),
                depE: z.number(),
                labAeg: z.number(),
                depC: z.number(),
                depB: z.number(),
                numQuart: z.number(),
                labEx:z.number(),
                campoData: z.string(),
                labData: z.string(),
                longitude: z.string(),
                latitude: z.string(),
                id: z.string()
            }).array()
        })
        
        try {
            const { visitas_boletim_liraa } = createReportLiraSchema.parse(req.body)

            const ids: String[] = []

            const isDuplicateValue = visitas_boletim_liraa.every( (liraReport) => {
                
                if( ids.find( element => liraReport.id === element ) === undefined )
                {
                    ids.push(liraReport.id)
                    return true;
                }

                else
                {
                    return false;
                }
            })


            if ( !isDuplicateValue ) {
                return res.status(400).send({message: 'Id duplicado'});
            }
            
            else {
                const registeredIds = await knex('report_lira').where( ( builder ) => {
                    builder.whereIn('id', ids)
                }).select('id')
    
                if( registeredIds.length === 0 ) {
                    
                    visitas_boletim_liraa.forEach( async (liraReport) => {
                        const {
                            tubitos, 
                            aegDepA1,
                            labAlb,
                            aegDepA2,
                            depD1,
                            depD2,
                            amostras,
                            depA2,
                            uf,
                            complemento,
                            aegDepC,
                            aegDepB,
                            aegDepE,
                            responsavel,
                            aegDepD1,
                            aegDepD2,
                            tipoImv,
                            municipio,
                            bairro,
                            nome,
                            depA1,
                            depAlb,
                            campoData,
                            logradouro,
                            depE,
                            labAeg,
                            depC,
                            labData,
                            depB,
                            supervisor,
                            numQuart,
                            labEx,
                            id,
                            longitude,
                            latitude
                        } = liraReport

                        const dateField = dateUtilities.formatStringDmY(campoData)
                        const labDate = dateUtilities.formatStringDmY(labData)
                        
                        await knex('report_lira').insert({
                            tubitos, 
                            aegDepA1,
                            labAlb,
                            aegDepA2,
                            depD1,
                            depD2,
                            amostras,
                            depA2,
                            uf,
                            complemento,
                            aegDepC,
                            aegDepB,
                            aegDepE,
                            responsavel,
                            aegDepD1,
                            aegDepD2,
                            tipoImv,
                            municipio,
                            bairro,
                            nome,
                            depA1,
                            depAlb,
                            campoData: dateField,
                            logradouro,
                            depE,
                            labAeg,
                            depC,
                            labData: labDate,
                            depB,
                            supervisor,
                            numQuart,
                            labEx,
                            longitude: Number(longitude),
                            latitude: Number(latitude),
                            id
                        })
                    })
                }
                else {
                    return res.status(400).send({message: 'Existe uma das Visistas Boletim Lira já registrada', uuidVisitaRegistrada: registeredIds })
                }

            }
            
        } catch (error) {
            console.log(error);
            return res.status(500).send({message: 'Internal Error'})
        }

        return res.status(200).send({message: 'Boletim Lira registrado' })
    }

    public async getReports(req: Request, res: Response) {
        
        const params = req.query
        
        const fromDate = String(params.fromDate)
        const toDate = String(params.toDate)

        const reports = await knex('report_lira').select().where( ( builder ) => {
            
            if( toDate && fromDate ) {
                builder.whereBetween('campoData', [ fromDate, toDate ])
            }

            else if ( fromDate ) {
                builder.where('campoData', '>=', fromDate )
            }

            else if ( toDate ) {
                builder.where('campoData', '<=', toDate )
            }

            else {
                builder.where('id', '<>', '')
            }
        }).orderBy('campoData')

        res.status(200).send(reports)
    }
}

export default ReportLiraaController