import { Request,Response } from "express";
import { Car } from "../models";

class CarController {
    public async create(req:Request, res:Response):Promise<Response>{
        const {model} = req.body;
        try{
            const document = new Car({model});
            const resp = await document.save();
            return res.json(resp);
        } catch (error:any){
            if(error.code ===11000 || error.code === 11001){
                return res.json({message: 'este modelo ja esta em uso'});
            }else if(error && error.errors['model']){
                return res.json({message:error.errors['model'].message})
            }
            return res.json({message:error.message})
        }
    }
    public async list(_:Request,res:Response):Promise<Response>{
        try{
            const objects = await Car.find().sort({model:'asc'});
            return res.json(objects)
        } catch(error:any){
            return res.json({message:error.message})
        }
    }
}
export default new CarController();