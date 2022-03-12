import mongoose from "mongoose"

const FellowSchema =  mongoose.Schema({
    ID:{
        type:String,

    },
    name_title:{
        type:String,

    },
    firstname:{
        type:String,
        
    },
    lastname:{
        type:String,
        
    },

    job_title:{
        type:String,
        
    },
    organization:{
        type:String,
        
    },
    email:{
        type:String,
        unique: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,  'Please add a valid email']
    },
  mentor:{
        type:String,
        
    },
    project_name:{
        type:String,
        
    },
    status:{
        type:String,
        
    },
   fellow_bio:{
        type:String,
        
    },
    project_intro:{
        type:String,
        
    },
    year:{
        type:String,
    }

   
})



export default mongoose.models.Fellow || mongoose.model("Fellow", FellowSchema)