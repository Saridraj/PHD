import axios from "axios"
import { useState } from "react"
import cookie from "js-cookie"


const Home = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SubmitHandler = async (e) =>{
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        const { data } = await axios.post(
            `/api/login`,
            { email, password},
            config
        )
        console.log({data})
        
    }

    return (
        
        <div>
            <form onSubmit={SubmitHandler}>
                <h1>Positive Health Disruptor</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Home