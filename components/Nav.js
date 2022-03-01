import Link from 'next/link'
import Image from 'next/image'
// import Logo from '../public/logo-kp.png'
// import { FiMenu, FiX } from 'react-icons/fi'
import React, { useState, useEffect } from 'react'
import { parseCookies } from "nookies"
import { useSession, signOut } from "next-auth/react"
import cookie from "js-cookie"
import Router from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'




function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [nav, setNav] = useState(false)

    const { data: session } = useSession

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
            <nav className="text-[#91466b] bg-white flex justify-between items-center w-full h-[54px] p-2 pl-20 pr-20 drop-shadow-md">
                <div className="  flex justify-between items-center w-[600px]">
                    <div className="max-w-[500px] " >
                        <div>
                            <Link href="/profile"><button className="text-[30px] font-semibold">DASHBOARD</button></Link>
                        </div>
                    </div>
                    <ul className="min-w-3/4 hidden md:flex">
                        <li className=" m-2">
                            <Link href='/fellow'><button>Fellow</button></Link>
                        </li>
                        <li className=" m-2 ml-[30px]">
                            <Link href='/mentor'><button>Mentor</button></Link>
                        </li>

                    </ul>
                </div>


                <div className="hidden md:flex ">
                    <Link href="/profile">
                        <div className="cursor-pointer flex min-w-[200px] bg-purple-100 rounded-[50px] mr-20 h-[45px] p-1 items-center">
                            <div className="bg-[#91466b] w-10 h-10 rounded-[30px] mr-1">

                            </div>
                            <div className="flex  ">
                                <dix className="mr-2">{user && user.firstname}</dix>
                                <div>{user && user.lastname}</div>
                            </div>
                        </div>
                    </Link>
                    <div className="cursor-pointer flex justify-between items-center ">
                        {user ? (
                            <div >
                                <botton onClick={logoutHandler} >Logout</botton>
                            </div>
                        ) : (<></>)}
                    </div>
                    {click ? (
                        <div >
                            <ul className="min-w-3/4 flex">
                                <li className=" m-2">
                                    <Link href='/fellow'><button>Fellow</button></Link>
                                </li>
                                <li className=" m-2 ml-[30px]">
                                    <Link href='/mentor'><button>Mentor</button></Link>
                                </li>

                            </ul>
                        </div>
                    ) : (<></>)}
                </div>

                <div className="flex md:hidden" onClick={handleClick}>
                    {
                        click ? (
                            <FiX />
                        ) : (
                            <FiMenu />
                        )

                    }
                </div>

            </nav>
        </div>


    )
}






export default Nav
