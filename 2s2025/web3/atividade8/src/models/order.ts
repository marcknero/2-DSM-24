import mongoose from 'mongoose';

//expenses interface
export interface IOrder extends mongoose.Document{
    title:String;
    description:String;
    date:Date;
    status:String;
    priority:String;
    assignedTo:String;
    sector:String;
    estimatedCompletionDate:Date;
    value:Number;
};

//expense Schema
const orderSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    date:{type:Date,default:Date.now},
    status:{type:String,required:true},
    priority:{type:String,required:true},
    assignedTo:{type:String},
    sector:{type:String,required:true},
    estimatedCompletionDate:{type:Date},
    value:{type:Number,required:true},
});

export default mongoose.model<IOrder>('Order',orderSchema);