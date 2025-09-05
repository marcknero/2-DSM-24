import mongoose, {Schema,Document} from "mongoose";

//items structure on database
export interface IItems extends Document {
    name: String;
    price: Number;
}

//scheme on DB contruction
const ItemsScheme: Schema = new Schema({
    name: {type: String, require:true},
    price:{type: Number, require:true}
});

export default mongoose.model<IItems>("Items", ItemsScheme);