import {Request, Response, NextFunction } from 'express'


export async function checkKeyRequest(request: Request, reply: Response, next: NextFunction ) {

    const livingValesKey = 'e9ceaa7c-deb6-11ed-b5ea-0242ac120002'

    const requestKey = request.headers.key

    if( livingValesKey != requestKey ) {
        return reply.status(401).send({
            error: 'Unauthorized'
        })
    }
    next()

}