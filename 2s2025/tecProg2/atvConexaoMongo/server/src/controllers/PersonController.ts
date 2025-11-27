import {Request, Response} from 'express';
import { Person } from '../models';

class PersonController {
    public async create(req:Request, res:Response):Promise<Response>{
        const {name} = req.body;
        try{
            const document = new Person({name});
            const resp = await document.save();
            return res.json(resp);
        } catch (error:any){
            if(error.code ===11000 || error.code === 11001){
                return res.json({message: 'este nome ja esta em uso'});
            }else if(error && error.errors['name']){
                return res.json({message:error.errors['name'].message})
            }
            return res.json({message:error.message})
        }
    }
    public async list(_:Request,res:Response):Promise<Response>{
        try{
            const objects = await Person.find().sort({name:'asc'});
            return res.json(objects)
        } catch(error:any){
            return res.json({message:error.message})
        }
    }
}

export default new PersonController();  