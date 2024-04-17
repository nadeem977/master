const mongoose = require('mongoose');


const userChema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    picture:{
        type:String,
        default:""
    }

},{timestamps:true})


module.exports = mongoose.model("User",userChema)