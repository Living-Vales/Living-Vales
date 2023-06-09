import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('users', (table) => {
        table.uuid('id').primary()
        table.text('name').notNullable()
        table.text('password').notNullable()
        table.text('email').notNullable()
    })

    await knex.schema.createTable('report_lira', (table) => {
        table.uuid('id').primary()
        table.text('municipio')
        table.text('uf')
        table.text('bairro')
        table.date('campoData')
        table.text('supervisor')
        table.date('labData')
        table.text('responsavel')
        table.text('nome')
        table.integer('numQuart')
        table.text('logradouro')
        table.text('complemento')
        table.text('tipoImv')
        table.integer('depA1')
        table.integer('depA2')
        table.integer('depB')
        table.integer('depC')
        table.integer('depD1')
        table.integer('depD2')
        table.integer('depE')
        table.string('amostras')
        table.integer('tubitos')
        table.integer('labEx')
        table.integer('labAeg')
        table.integer('labAlb')
        table.integer('aegDepA1')
        table.integer('aegDepA2')
        table.integer('aegDepB')
        table.integer('aegDepC')
        table.integer('aegDepD1')
        table.integer('aegDepD2')
        table.integer('aegDepE')
        table.integer('depAlb')
        table.double('latitude')
        table.double('longitude')

    })

    await knex.schema.createTable('visit', (table) => {
        table.uuid('id').primary()
        table.integer('codMunicipio')
        table.text('nomeBairro')
        table.text('zona')
        table.text('tipo')
        table.date('data')
        table.text('ciclo')
        table.text('agente')
        table.text('atividade')
        table.integer('numQuart')
        table.integer('ladoQuart')
        table.text('nomeLogr')
        table.integer('numImv')
        table.integer('seqImv')
        table.text('tipoImv')
        table.text('tipoVisita')
        table.text('pendencia')
        table.integer('depA1')
        table.integer('depA2')
        table.integer('depB')
        table.integer('depC')
        table.integer('depD1')
        table.integer('depD2')
        table.integer('depE')
        table.text('imvInsp')
        table.integer('numAmInic')
        table.integer('numAmFim')
        table.integer('qtdTubitos')
        table.integer('depElim')
        table.text('imvTrat')
        table.text('focLarv1Tipo')
        table.integer('focLarv1G')
        table.integer('focLarv1Qtd')
        table.text('focLarv2Tipo')
        table.integer('focLarv2G')
        table.integer('focLarv2Qtd')
        table.text('perifocTipo')
        table.integer('perifocQtd')
        table.double('latitude')
        table.double('longitude')
    })   
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('users')
    await knex.schema.dropTable('report_lira')
    await knex.schema.dropTable('visit')
}

