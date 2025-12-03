import mongoose from 'mongoose';

//expenses interface
export interface IItem extends mongoose.Document{
    title:String;
    description:String;
    date:Date;
    location:String;
    value:Number;
};

//expense Schema
const ItemSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String},
    date:{type:Date,required:true},
    location:{type:String,required:true},
    value:{type:Number,required:true},
});

export default mongoose.model<IItem>('Item',ItemSchema);