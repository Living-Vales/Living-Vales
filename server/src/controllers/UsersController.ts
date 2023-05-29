import { Request, Response } from "express";
import { z } from 'zod'
import bcrypt from 'bcrypt'
import { knex } from '../database';
import { randomUUID } from 'node:crypto';

class UsersController {
    public async store (req: Request, res: Response ) {
        
        const createUserSchema = z.object({
            name: z.string(),
            password: z.string(),
            email: z.string(),
        });
        
        const { name, password, email } = createUserSchema.parse(req.body);
    
        const hash_password = await bcrypt.hash( password, 5 );
        const user = await knex('users').select().where('email', email).first()
        
        if( !user ) {
            
            await knex('users').insert({
                id: randomUUID(),
                name,
                email,
                password: hash_password
            });
    
            return res.status(201).send();
        }
    
        else {
            return res.status(401).send({ message: "User already Exists" })
        }
    }

    public async login(req: Request, res: Response) {

        const createUserSchema = z.object({
            password: z.string(),
            email: z.string(),
        });        
        
        const { email, password } = createUserSchema.parse(req.body);
        
        const user = await knex('users').select().where('email', email).first();

        const validate = user && bcrypt.compareSync( password, user.password )

        if ( validate ) {
            
            let sessionId = randomUUID();

            return res.status(201).send({
                user,
                'sessionId' : sessionId
            });
        }

        return res.status(401).send({message: 'Unauthorized'})
    }
}

export default UsersController

