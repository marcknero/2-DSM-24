import { Request,Response } from "express";
import { Phone } from "../models";

class PhoneController {         
    public async create(req:Request, res:Response):Promise<Response>{
        const {person, number} = req.body;
        try{
            const document = new Phone({person, number});
            const resp = await document.save();
            return res.json(resp);
        } catch (error:any){
            if(error.code ===11000 || error.code === 11001){
                return res.json({message: 'este numero ja esta em uso'});
            }else if(error && error.errors){
                const errorMessages = Object.values(error.errors).map((err:any) => err.message);
                return res.json({message: errorMessages.join(', ')});
            }
            return res.json({message:error.message})
        }
    }
    public async list(_:Request,res:Response):Promise<Response>{
        try{
            const objects = await Phone.find().populate('person').sort({number:'asc'});
            return res.json(objects)
        } catch(error:any){
            return res.json({message:error.message})
        }
    }
}

export default new PhoneController();
