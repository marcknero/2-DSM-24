import mongoose ,{Schema} from 'mongoose';

//definitions of schemas
const CarSchema = new Schema({
    model:{type:String, maxLength:[15,'maximo 15 caracteres'],unique:true, required:[true,'o modelo é obrigatorio']}, 
})

const PersonSchema = new Schema({
    name: {type:String, unique:true, required:true}
});

const PhoneSchema = new Schema({
    person:{type:mongoose.Schema.Types.ObjectId, ref: 'Person', required:true,validate:{
        validator: async function(id:string){
        const person = await Person.findById(id);
        return !! person;
        },
        message:'pessoa inexixtente'
    },
    },
    number:{type:String,match:[/^[0-9]{11}$/, "O número deve conter exatamente 11 dígitos"],required:[true, 'numero é obrigatorio']}
});

const CarByPersonSchema = new Schema({
    person:{type:mongoose.Schema.Types.ObjectId, ref: 'Person', required:true,validate:{
        validator: async function(id:string){
        const person = await Person.findById(id);
        return !! person;
        },
        message:'pessoa inexixtente'
    },
    },
    car:{type:mongoose.Schema.Types.ObjectId, ref:'Car', required: true,
        validate:{validator: async function(id:string){
            const car = await Car.findById(id);
            return !!car;
        },
        message:'carro inexistente'
    },
    },

});

//compilando modelo
const Car = mongoose.model('Car', CarSchema);
const Person = mongoose.model('Person',PersonSchema,'people');
const Phone = mongoose.model('Phone',PhoneSchema);
const CarByPerson = mongoose.model('CarByPerson',CarByPersonSchema,'car_by_person');

export {Car, Person, Phone, CarByPerson}