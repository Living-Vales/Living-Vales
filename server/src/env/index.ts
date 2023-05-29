import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    DBA_HOST: z.string().default('localhost'),
    DBA_USER: z.string().default('root'),
    DBA_PASSWORD: z.string().default('password'),
    DBA_DATABASE: z.string().default('living_vales'),
    DBA_PORT: z.coerce.number().default(3306),
    SERVER_PORT: z.coerce.number().default(8080),
    SERVER_HOST: z.string().default('192.168.60.123')

})

const _env = envSchema.safeParse(process.env)

if( _env.success === false ) {
    console.error('Invalid environment variables!', _env.error.format() )
    
    throw new Error('Invalid environment variables');
}

export const env = _env.data