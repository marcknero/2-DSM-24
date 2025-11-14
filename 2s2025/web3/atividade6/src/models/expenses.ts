import mongoose from 'mongoose';

//expenses interface
export interface IExpense extends mongoose.Document{
    description:String;
    amount:Number;
    date:Date
};

//expense Schema
const ExpenseSchema = new mongoose.Schema({
    description:{type:String, required:true},
    amount:{type:String, required:true},
    date:{type:Date, required:true}
});

export default mongoose.model<IExpense>('Expense',ExpenseSchema);