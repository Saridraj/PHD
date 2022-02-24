import connectDB from "../../connectDB"
import User from "../../models/User"
import bcrypt from "bcryptjs"

connectDB()

export default async (req, res) => {
    try{
        if (req.method === "POST") {
            const { ID, firstname, lastname, email, password, role } = req.body
            const user = await User.findOne({email: email})
            
            if(user) {
                res.status(422).json({message:"User alreaddy exists"})
            }

            const HashedPassword = await bcrypt.hash(password, 12)
            const newUser = await new User({ 
                ID,
                firstname, 
                lastname, 
                email, 
                password: HashedPassword, 
                role
            }).save()
            res.status(200).json({ message:"Sign Up Success"})
        }
    } catch (error) {
        console.log(error)
    }
    
}


