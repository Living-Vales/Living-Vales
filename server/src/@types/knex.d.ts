import { Knex } from 'knex'

declare module 'knex/types/tables' {
    export interface Tables {
        users: {
            id: string,
            name: string,
            password: string,
            email: string
        },
        report_lira: {
            nome: string,
            bairro:string,
            logradouro:string,
            supervisor:string,
            tipoImv:string,
            municipio:string,
            complemento:string,
            responsavel:string,
            uf:string,
            tubitos:number,
            aegDepA1:number,
            labAlb:number,
            aegDepA2:number,
            depD1:number,
            depD2:number,
            amostras:string,
            depA2:number,
            aegDepC:number,
            aegDepB:number,
            aegDepE:number,
            aegDepD1:number,
            aegDepD2: number,
            depA1: number,
            depAlb:number,
            depE: number,
            labAeg: number,
            depC: number,
            depB: number,
            numQuart: number,
            labEx:number,
            campoData: Date,
            labData: Date,
            latitude: number,
            longitude: number,
            id: string,
        },
        visit : {
            zona: string,
            agente: string,
            ciclo: string,
            atividade: string,
            pendencia: string,
            tipoImv: string,
            nomeBairro: string,
            tipoVisita: string,
            imvInsp: string,
            nomeLogr: string,
            imvTrat: string,
            perifocTipo: string,
            focLarv2Tipo: string,
            tipo: string,
            focLarv1Tipo: string,
            focLarv2Qtd: number,
            qtdTubitos: number,
            focLarv2G: number,
            depD1: number,
            depD2: number,
            depA2: number,
            numAmInic: number,
            numAmFim: number,
            perifocQtd: number,
            codMunicipio: number,
            focLarv1Qtd: number,
            focLarv1G: number,
            ladoQuart: number,
            depElim: number,
            depA1: number,
            seqImv: number,
            numImv: number,
            depE: number,
            depC: number,
            depB: number,
            numQuart: number,
            data: Date,
            latitude: number,
            longitude: number,
            id: string,
        }
    }
}