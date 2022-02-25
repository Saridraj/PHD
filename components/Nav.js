import Link from 'next/link'
import Image from 'next/image'
// import Logo from '../public/logo-kp.png'
// import { FiMenu, FiX } from 'react-icons/fi'
import React, { useState, useEffect} from 'react'
import { parseCookies } from "nookies"
import { useSession, signOut } from "next-auth/react"
import cookie from "js-cookie"
import Router from 'next/router'





function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [nav, setNav] = useState(false)

    const { data:session } = useSession

    const logoutHandler = async () => {
        if (session) {
            signOut()
        }
        cookie.remove("token")
        cookie.remove("user")
        Router.push('/');
    }

    const cookies = parseCookies()

    const user = cookies?.user ? JSON.parse(cookies.user) : ""
    
   

        return (
        <div>
            <nav className="text-slate-100 bg-[#91466D] flex justify-between items-center w-full h-16 p-2 pl-20 pr-20">
                <div >
                    <div>
                        <h1>LOGO</h1>
                    </div>
                </div>
                <ul className="flex  w-96 justify-between">
                    <li className=" m-2">
                        <Link href='/fellow'><button>Fellow</button></Link>
                    </li>
                    <li className=" m-2"> 
                        <Link href='/mentor'><button>Mentor</button></Link>
                    </li>
                    <li className=" m-2">
                        <Link href='/profile'><button>Profile</button></Link>
                    </li>
                </ul>
                
                <div>
                <div className=" w-36">
                {user &&  user.firstname}
                {user &&  user.lastname}
                </div>
                
                
                {user ? (
                    <div>
                        <botton onClick={logoutHandler} >Logout</botton>
                    </div>
                ):(<></>) }
                </div>
                
            </nav>
        </div>
            
            
        )
    }

   




export default Nav
