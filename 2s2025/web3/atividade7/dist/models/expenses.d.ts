import mongoose from 'mongoose';
export interface IExpense extends mongoose.Document {
    description: String;
    amount: Number;
    date: Date;
}
declare const _default: mongoose.Model<IExpense, {}, {}, {}, mongoose.Document<unknown, {}, IExpense, {}, {}> & IExpense & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=expenses.d.ts.map