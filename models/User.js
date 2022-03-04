import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    ID:{
        type:String,
        unique: true,
    },
    prefix:{
        type:String,
        unique: true,
    },
    firstname:{
        type:String,
        required:[true,'Please add a name'],
    },
    lastname:{
        type:String,
        required:[true,'Please add a lastname']
    },
    email:{
        type:String,
        required:[true,'Please add an email'],
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,  'Please add a valid email']
    },
    password: {
        type:String,
        required:[true,'Please add a password'],
        minlength: 6,
        select: false
    },
    role:{
        type:String,
        default:"participant",
        enum: ['participant','mentor','NHFteam','admin'],
        
    },
    createdAt:{
        type:Date,
        default:Date.nows
    }
})




export default mongoose.models.User || mongoose.model('User', userSchema)