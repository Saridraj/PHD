import axios from "axios"
import { useState } from "react"
import cookie from "js-cookie"
import { useSession, signOut } from "next-auth/react"
import Router from 'next/router'




const Home = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const SubmitHandler = async (e) => {
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json",
            }
        }

        const { data } = await axios.post(
            `/api/login`,
            { email, password },
            config
        )
        cookie.set('token', data.token)
        cookie.set('user', JSON.stringify(data?.user))
        Router.push('/profile');

    }

    return (
        <div className=" bg-gray-100 flex justify-center items-center w-full h-full min-h-screen">
            <div className="lg:flex drop-shadow-lg ">
                <div className="pt-[30px] lg:pt-[90px]  flex flex-col items-left bg-[#91466b] w-[450px] h-[250px] pl-[50px] lg:h-[412px]">
                    <div><h1 className="text-[#fff] text-[35px]  leading-[45px]">สวัสดี <br /> ยินดีต้อนรับสู่ <br /> Dashboard</h1></div>
                    <div className="h-[30px]"></div>
                    <div className="flex"><h1 className="text-slate-100 text-[15px]  leading-[45px]">Hello, Welcome to </h1> <h1 className=" ml-1 text-[#fff] text-[15px]  leading-[45px]">DASHBOARD.</h1> </div>
                </div>
                <form onSubmit={SubmitHandler} className="bg-white flex flex-col w-[450px] h-[412px] p-6 pl-[50px] pt-[50px] ">
                    <div className="flex h-12">
                        <div><h1 className="text-[#a0a0a0] font-semibold text-[30px]">Login</h1> </div>
                    </div>
                    <div className="flex h-12 text-[#a0a0a0]">
                        <div><p className="">ลงชื่อเข้าใช้บัญชีของคุณ</p></div>
                    </div>
                    <div className=" h-12 mb-[18px] ">
                        {/* <div><label>Username</label></div> */}
                        <input className="w-[350px] h-[48px] p-2 border-[1px] border-solid border-[#a0a0a0] rounded-lg " value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username@email.com" />
                    </div>
                    <div className=" h-12 ">
                        {/* <div><label>Password</label></div> */}
                        <input className="w-[350px] h-[48px] p-2 border-[1px] border-solid border-[#a0a0a0] rounded-lg" type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className=" h-12 ">

                    </div>
                    <div className="flex">
                        <button className="bg-[#91466b] h-[48px] w-[350px] rounded-lg" type="submit"><p className="text-white">Log in</p></button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Home