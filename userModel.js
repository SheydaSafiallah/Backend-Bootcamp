import mongoose from 'mongoose'
import validator from validator
/// name, email, photo, password, password confirm

//my code
// const {Schema} = mongoose;
// const usrdata = new Schema;
// usrdata = {
//     name: String,
//     email: String,
//     photo : String,
//     password : String,
//     passwordConfrim : String
// }

//video code
const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : [true, 'please enter your name']
    },
    email: {
        type : String,
        required : [true, 'please enter your email'],
        unique : true,
        lowercase : true,
        validator : [validator.isEmail, 'enter valid email']
    },
    photo : String ,
    password : {
        type : String,
        required : [true, 'please enter your password'],
        minlength : 8,
    } ,
    passwordConfirm : {
        type : String,
        required : [true, 'please confirm your password']
    }
});

const User = mongoose.model('User', userSchema)
module.exports = User;