import cookieParser from 'cookie-parser'
import { checkKeyRequest } from './middlewares/check-key-request'
import { env } from './env'
import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'

async function createServer() {
    const app = express()
    
    app.use( cors() )
    app.use( cookieParser() )
    app.use( express.json() )
    app.use('/api', checkKeyRequest, routes )
    
    app.all(['/api', '/api/*'], ( req, res ): void => {
        res.sendStatus(404);
    })
    
    const staticDir = path.join(__dirname, '..', 'public' )
    app.use( express.static(staticDir) )
    
    app.get('*', (req, res): void => {
        
        const indexHtml = path.join(
            __dirname,
            '..',
            'public',
            'index.html'
        );
    
        res.sendFile(indexHtml);
    })
    
    app.listen(env.SERVER_PORT, () => {
        console.log( 'Server start on Port ' + env.SERVER_PORT )
    })

}

createServer()