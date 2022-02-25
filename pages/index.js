import axios from "axios"
import { useState } from "react"
import cookie from "js-cookie"
import { useSession, signOut } from "next-auth/react"
import Router from 'next/router'




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
     Router.push('/profile');
        
    }

    return (
        
        <div className=" bg-gray-100 flex justify-center items-center w-full h-full min-h-screen">
            <form onSubmit={SubmitHandler}  className="bg-white flex flex-col w-96 h-96 p-6 ">
                <div className="flex justify-center h-12">
                    <h1 className="text-[#91466D]">Positive Health Disruptor</h1>
                </div>
                <div className="bg-red-100 h-12 mb-6 ">
                    {/* <div><label>Username</label></div> */}
                    <input className="w-full h-full p-2 border-2 border-[#91466D]"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username"/>
                </div>
                <div className="bg-red-100 h-12 mb-6">
                    {/* <div><label>Password</label></div> */}
                    <input className="w-full h-full p-2 border-2 border-[#91466D]"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#91466D] h-12 w-24"  type="submit"><p className="text-white">Log in</p></button>
                </div>
            </form>
        </div>
    )
}

export default Home