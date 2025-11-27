import mongoose ,{Schema} from 'mongoose';

//definitions of schemas
const DistrictSchema = new Schema({
    name:{type:String, required:true}
});    
const CitySchema = new Schema({
    name: {type:String, required:true},
    districts: [DistrictSchema]
});
const StateSchema = new Schema({
    name:{type:String,unique:true, required:[true,'nome obrigatorio ']},
    cities:[CitySchema]
})



//compilando modelo
const State = mongoose.model('State', StateSchema);
// const City = mongoose.model('City', CitySchema);
// const District = mongoose.model('District', DistrictSchema);

//exportando modelos
export {State};