import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { parseCookies } from "nookies"
import { useSession, signOut } from "next-auth/react"
import cookie from "js-cookie"
import Router from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'




function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

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
    const avatarID = user.ID
    //const ID = user.ID
    //console.log(JSON.stringify(avatarID));
    const Avatar = `https://res.cloudinary.com/rise-impact/image/upload/c_fill,g_faces,w_300,h_300,q_100,r_max/v1647240756/PHDuser_avatar/${avatarID}`

    return (
        <div>
            <nav className="z-30 md:z-auto fixed text-[#91466b] bg-white flex justify-between items-center w-full h-[54px] p-2  pl-10 md:pl-20  pr-10 md:pr-20 drop-shadow-md">
                <div className="  flex justify-between items-center w-[600px]">
                    <div className="max-w-[500px] " >
                        <div>
                            <Link href="/profile"><button className="mr-10 md:mr-5 text-[30px] font-semibold">DASHBOARD</button></Link>
                        </div>
                    </div>
                </div>
                <ul className="  hidden md:flex md:items-center md:w-screen" >
                    <li className=" m-2 flex  items-center">
                        <Link href='/fellow'><button onClick={handleClick}>Fellow</button></Link>
                    </li>
                    <li className=" m-2 md:ml-[30px] flex  items-center">
                        <Link href='/mentor'><button onClick={handleClick}>Mentor</button></Link>
                    </li>
                    <li className="w-1 md:w-4 lg:w-40 xl:w-80   h-10">

                    </li>
                    <li className=" lg:ml-20">
                        <Link onClick={handleClick} href="/profile">
                            <div className="cursor-pointer flex  w-[250px] md:max-w-[250px] bg-purple-100 rounded-[50px] mr-2 lg:mr-10 h-[45px] p-1 items-center">
                                <div className="bg-[#91466b] w-10 h-10 rounded-[30px]  ">
                                    <Image className="w-10 h-10 rounded-[100px] bg-gray-200"
                                        src={Avatar}
                                        width={120}
                                        height={120}
                                    />
                                </div>
                                <div className="flex w-[190px]  justify-center ">
                                    <dix className="mr-2">{user && user.firstname}</dix>
                                    <div>{user && user.lastname}</div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="cursor-pointer flex  items-center w-[60px] ml-2 mt-2">
                        <div>
                            {user ? (
                                <div >
                                    <botton onClick={logoutHandler} >Log Out</botton>
                                </div>
                            ) : (<></>)}
                        </div>
                    </li>
                </ul>




                <div className=" md:hidden">
                    {click ? (
                        <ul className="md:flex md:items-center  md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7  md:mt-0 bg-white md:opacity-100 opacity-100   transition-all ease-in duration-500  top-12  " >
                            <li className=" m-2 flex  items-center">
                                <Link href='/fellow'><button onClick={handleClick}>Fellow</button></Link>
                            </li>
                            <li className=" m-2 md:ml-[30px] flex  items-center">
                                <Link href='/mentor'><button onClick={handleClick}>Mentor</button></Link>
                            </li>
                            <li className="w-1 md:w-4 lg:w-40 xl:w-80   h-10">

                            </li>
                            <li className=" lg:ml-20">
                                <Link onClick={handleClick} href="/profile">

                                    <div className="cursor-pointer flex w-[250px] md:max-w-[250px] bg-purple-100 rounded-[50px] mr-2 lg:mr-10 h-[45px] p-1 items-center">
                                        <div className="bg-[#91466b] w-10 h-10 rounded-[30px]  mr-1">

                                        </div>
                                        <div className="flex  ">
                                            <dix className="mr-2">{user && user.firstname}</dix>
                                            <div>{user && user.lastname}</div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="cursor-pointer flex  items-center w-[60px] ml-2 mt-2">
                                <div>
                                    {user ? (
                                        <div >
                                            <botton onClick={logoutHandler} >Log Out</botton>
                                        </div>
                                    ) : (<></>)}
                                </div>
                            </li>
                        </ul>

                    ) : (
                        <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7  md:mt-0 bg-white md:opacity-0 opacity-0   top-[-200px] " >
                            <li className=" m-2 flex  items-center">
                                <Link href='/fellow'><button>Fellow</button></Link>
                            </li>
                            <li className=" m-2 md:ml-[30px] flex  items-center">
                                <Link href='/mentor'><button>Mentor</button></Link>
                            </li>
                            <li className="w-1 md:w-4 lg:w-40 xl:w-80  bg-red-400">

                            </li>
                            <li className=" lg:ml-20">
                                <Link href="/profile">

                                    <div className="cursor-pointer flex w-[250px] md:max-w-[250px] bg-purple-100 rounded-[50px] mr-2 lg:mr-10 h-[45px] p-1 items-center">
                                        <div className="bg-[#91466b] w-10 h-10 rounded-[30px]  mr-1">

                                        </div>
                                        <div className="flex  ">
                                            <dix className="mr-2">{user && user.firstname}</dix>
                                            <div>{user && user.lastname}</div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="cursor-pointer flex  items-center w-[60px] ">
                                <div>
                                    {user ? (
                                        <div >
                                            <botton onClick={logoutHandler} >Log Out</botton>
                                        </div>
                                    ) : (<></>)}
                                </div>
                            </li>
                        </ul>
                    )}
                </div>




                <div className="flex md:hidden text-[30px]" onClick={handleClick}>
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


