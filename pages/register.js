import axios from "axios"
import { useState } from "react"

const Register = () =>{
    const [ID, setID] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const SubmitHandler = async (e) =>{
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.post(
            `/api/register`,
            { ID, firstname, lastname, email, password, role},
            config
        )

        console.log(data)


        
    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <h1>Register</h1>
                <input value={ID} onChange={(e) => setID(e.target.value)} placeholder="ID"/>
                <input value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Firstname"/>
                <input value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Lastname"/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="role"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register