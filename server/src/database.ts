import { knex as setupKnex, Knex } from "knex"
import { env } from './env'

export const config : Knex.Config = {
    client: 'mysql',
    connection: {
        host: env.DBA_HOST,
        user: env.DBA_USER,
        password: env.DBA_PASSWORD,
        database: env.DBA_DATABASE,
        port: env.DBA_PORT,
    },
    useNullAsDefault: true,
    migrations: {
        extension: 'ts',
        directory: './db/migrations'
    }
}

export const knex = setupKnex(config);