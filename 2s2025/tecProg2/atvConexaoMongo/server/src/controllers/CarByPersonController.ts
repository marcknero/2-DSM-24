import { Request,Response } from "express";
import { CarByPerson } from "../models";

class CarByPersonController {
    public async create(req:Request, res:Response):Promise<Response>{
        const {person, car} = req.body;
        try{
            const document = new CarByPerson({person, car});
            const resp = await document.save();
            return res.json(resp);
        } catch (error:any){
            if(error.code ===11000 || error.code === 11001){
                return res.json({message: 'esta associacao ja esta em uso'});
            }else if(error && error.errors){
                const errorMessages = Object.values(error.errors).map((err:any) => err.message);
                return res.json({message: errorMessages.join(', ')});
            }
            return res.json({message:error.message})
        }
    }
    public async list(_:Request,res:Response):Promise<Response>{
        try{
            const objects = await CarByPerson.find().populate('person').populate('car').sort({'person.name':'asc'});
            return res.json(objects)
        } catch(error:any){
            return res.json({message:error.message})
        }
    }
}
export default new CarByPersonController();