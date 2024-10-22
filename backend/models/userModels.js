import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    email :{
        type:String,
        required:true,
    },
    mobile :{
        type:Number,
        require:true,
    },
    password :{
        type:String,
        required:true,
    }
})


export default mongoose.model("users", userSchema);