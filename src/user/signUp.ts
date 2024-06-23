import { Request, Response } from "express";
import zod from "zod";

import { UserRepository } from "../libs/repository";

const userRepository = new UserRepository();

const createUserRequestSchema = zod.object({
   name: zod.string(),
   email: zod.string().email()
});

export default async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        
        // TODO: Check whether a user already exists with the same email
    
        try {
            createUserRequestSchema.parse(req.body);
        } catch (error) {
            console.error(error);
            // TODO: Return a more informative response to the client
            res.status(422).end();
        }
        
        await userRepository.createUser(name, email);
        
        res.status(201).end();
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
}