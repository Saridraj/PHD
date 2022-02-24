import axios from "axios"
import { useState } from "react"
import cookie from "js-cookie"
import Nav from "../components/Nav"




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
     cookie.set('token', data.token)
     cookie.set('user', JSON.stringify(data?.user))
        
    }

    return (
        
        <div>
            <Nav />
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