import axios from "axios"
import { useState } from "react"


const Register = () => {
    const [ID, setID] = useState("")
    const [prefix, setPrefix] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")

    const SubmitHandler = async (e) => {
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.post(
            `/api/register`,
            { ID,prefix, firstname, lastname, email, password, role },
            config
        )

        console.log(data)



    }

    return (
        <div className=" bg-gray-100 flex justify-center items-center w-full h-full min-h-screen">
            <form onSubmit={SubmitHandler} className="bg-white flex flex-col w-96 h-4/6 p-6 ">
                <div className="flex justify-center h-12 mb-4">
                    <h1 className="text-[#91466D]">ลงทะเบียน</h1>
                </div>
                <div className=" h-12 mb-2 ">
                    <input className="w-full h-full p-2 border-2 border-[#91466D]" value={ID} onChange={(e) => setID(e.target.value)} placeholder="ID" />
                </div>

                <div className=" h-12 mb-2 ">
                    <select className="w-full h-full p-2 border-2 border-[#91466D]" value={prefix} onChange={(e) => setPrefix(e.target.value)}>
                        <option value="0">เลือก</option>
                        <option value="-">-</option>
                        <option value="นาย">นาย</option>
                        <option value="นาง">นาง</option>
                        <option value="น.ส.">น.ส.</option>
                        <option value="นพ.">นพ.</option>
                        <option value="พญ.">พญ.</option>
                        <option value="ทพญ.">ทพญ.</option>
                        <option value="ดร.">ดร.</option>
                    </select>
                </div>

                <div className=" h-12 mb-2 ">
                    <input className="w-full h-full p-2 border-2 border-[#91466D]" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="ชื่อ" />
                </div>
                <div className=" h-12 mb-2 ">
                    <input className="w-full h-full p-2 border-2 border-[#91466D]" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="นามสกุล" />
                </div>
                <div className=" h-12 mb-2 ">
                    <input className="w-full h-full p-2 border-2 border-[#91466D]" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className=" h-12 mb-2 ">
                    <input className="w-full h-full p-2 border-2 border-[#91466D]" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="รหัสผ่าน" />
                </div>
                

                <div className=" h-12 mb-2 ">
                    <select className="w-full h-full p-2 border-2 border-[#91466D]" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="0">เลือก</option>
                        <option value="participant">participant</option>
                        <option value="mentor">mentor</option>
                        <option value="NHFteam">NHFteam</option>
                        <option value="admin">admin</option>
                    </select>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#91466D] h-12 w-24" type="submit"><p className="text-white">บันทึก</p></button>
                </div>
            </form>
        </div>
    )
}

export default Register