import { Request, Response } from 'express'
import { z } from  'zod'
import { knex } from '../database'
import DateUtilities from '../utilities/DateUtilities'
import { build } from 'vite'

const dateUtilities = new DateUtilities()


class VisitController {

    public async register(req: Request, res: Response ) {
        const createVisitSchema = z.object({
            visitas_registro_diario: z.object({
                zona: z.string(),
                agente: z.string(),
                ciclo: z.string(),
                atividade: z.string(),
                pendencia: z.string(),
                tipoImv: z.string(),
                nomeBairro: z.string(),
                tipoVisita: z.string(),
                imvInsp: z.string(),
                nomeLogr: z.string(),
                imvTrat: z.string(),
                perifocTipo: z.string(),
                focLarv2Tipo: z.string(),
                tipo: z.string(),
                focLarv1Tipo: z.string(),
                focLarv2Qtd: z.number(),
                qtdTubitos: z.number(),
                focLarv2G: z.number(),
                depD1: z.number(),
                depD2: z.number(),
                depA2: z.number(),
                numAmInic: z.number(),
                numAmFim: z.number(),
                perifocQtd: z.number(),
                codMunicipio: z.number(),
                focLarv1Qtd: z.number(),
                focLarv1G: z.number(),
                ladoQuart: z.number(),
                depElim: z.number(),
                depA1: z.number(),
                seqImv: z.number(),
                numImv: z.number(),
                depE: z.number(),
                depC: z.number(),
                depB: z.number(),
                numQuart: z.number(),
                data: z.string(),
                longitude: z.string(),
                latitude: z.string(),
                id: z.string()
            }).array()
        })

        try {
            const { visitas_registro_diario } = createVisitSchema.parse(req.body)

            const ids: String[] = []

            const isDuplicateValue = visitas_registro_diario.every( (visit) => {

                if( ids.find( element => visit.id === element ) === undefined )
                {
                    ids.push(visit.id)
                    return true
                }

                else
                {
                    return false
                }
            })

            if( !isDuplicateValue ) {
                return res.status(400).send({message: 'Id duplicado'});
            }
            else {
                
                const registeredIds = await knex('visit').where( ( builder ) => {
                    builder.whereIn('id', ids)
                }).select('id')
                
                if( registeredIds.length === 0 ) {
                    visitas_registro_diario.forEach( async (visit) => {
                        const {
                            zona,
                            agente,
                            ciclo,
                            atividade,
                            pendencia,
                            tipoImv,
                            nomeBairro,
                            tipoVisita,
                            imvInsp,
                            nomeLogr,
                            imvTrat,
                            perifocTipo,
                            focLarv2Tipo,
                            tipo,
                            focLarv1Tipo,
                            focLarv2Qtd,
                            qtdTubitos,
                            focLarv2G,
                            depD1,
                            depD2,
                            depA2,
                            numAmInic,
                            numAmFim,
                            perifocQtd,
                            codMunicipio,
                            focLarv1Qtd,
                            focLarv1G,
                            ladoQuart,
                            depElim,
                            depA1,
                            seqImv,
                            numImv,
                            depE,
                            depC,
                            depB,
                            numQuart,
                            data,
                            longitude,
                            latitude,
                            id
                        } = visit

                        const date = dateUtilities.formatStringDmY(data)
    
                        await knex('visit').insert({
                            zona,
                            agente,
                            ciclo,
                            atividade,
                            pendencia,
                            tipoImv,
                            nomeBairro,
                            tipoVisita,
                            imvInsp,
                            nomeLogr,
                            imvTrat,
                            perifocTipo,
                            focLarv2Tipo,
                            tipo,
                            focLarv1Tipo,
                            focLarv2Qtd,
                            qtdTubitos,
                            focLarv2G,
                            depD1,
                            depD2,
                            depA2,
                            numAmInic,
                            numAmFim,
                            perifocQtd,
                            codMunicipio,
                            focLarv1Qtd,
                            focLarv1G,
                            ladoQuart,
                            depElim,
                            depA1,
                            seqImv,
                            numImv,
                            depE,
                            depC,
                            depB,
                            numQuart,
                            data: date,
                            longitude: Number(longitude),
                            latitude: Number(latitude),
                            id
                        })
                    })
                }
                else {
                    return res.status(400).send({message: 'Existe uma das visitas já registrada', uuidVisitaRegistrada: registeredIds })
                }
            }

        } catch (error) {

            console.log(error);
            return res.status(500).send({message: 'Interna Error'})
        }

        return res.status(200).send({message: 'Visita Registrada'})
    }

    public async getVisits(req: Request, res: Response) {
        
        const params = req.query
        const fromDate = String(params.fromDate)
        const toDate = String(params.toDate)
        
        const reports = await knex('visit').select().where( ( builder ) => {
            
            if( toDate && fromDate ) {
                builder.whereBetween('data', [ fromDate, toDate ])
            }

            else if ( fromDate ) {
                builder.where('data', '>=', fromDate )
            }

            else if ( toDate ) {
                builder.where('data', '<=', toDate )
            }

            else {
                builder.where('id', '<>', '')
            }
        }).orderBy('data')

        res.status(200).send(reports)
    }

    public async getLocations(req: Request, res: Response) {
        
        const params = req.query
        
        const fromDate = String(params.fromDate)
        const toDate = String(params.toDate)

        const subquery = knex('visit').select('id').where((builder) => {
            builder
            .whereNotIn('depA1',   [0])
            .orWhereNotIn('depA2', [0])
            .orWhereNotIn('depB',  [0])
            .orWhereNotIn('depC',  [0])
            .orWhereNotIn('depD1', [0])
            .orWhereNotIn('depD2', [0])
            .orWhereNotIn('depE',  [0])
            })

        const positions = await knex('visit')
            .select('latitude', 'longitude', 'id', 'data')
            .where('id', 'in', subquery)
            .andWhere( (builder) => {
                
                if( toDate && fromDate ) {
                    builder.whereBetween('data', [fromDate, toDate]).orderBy('data')
                }

                else if ( fromDate ) {
                    builder.where('data', '>=', fromDate ).orderBy('data')
                }

                else if( toDate ) {
                    builder.where('data', '<=', toDate ).orderBy('data')
                }

                else {
                    builder.where('id', '<>', '' ).orderBy('data')
                }
            })

        return res.status(200).send(positions)
    }
    
}

export default VisitController