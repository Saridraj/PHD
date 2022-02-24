import Link from 'next/link'
import Image from 'next/image'
// import Logo from '../public/logo-kp.png'
// import { FiMenu, FiX } from 'react-icons/fi'
import React, { useState, useEffect} from 'react'
import { parseCookies } from "nookies"




function Nav() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [nav, setNav] = useState(false)

    const cookies = parseCookies()

    const user = cookies?.user ? JSON.parse(cookies.user) : ""
    
   

        return (
        <div>
            <nav className=" bg-amber-400">
                <div >
                    <div>
                        <h1>PHD</h1>
                    </div>
                </div>
                
                <ul >
                    <li>
                        <Link href='/fellow'><button>Fellow</button></Link>
                    </li>
                    <li>
                        <Link href='/mentor'><button>Mentor</button></Link>
                    </li>
                    <li>
                        <Link href='/profile'><button>Profile</button></Link>
                    </li>
                </ul>
                {user &&  user.firstname}
            </nav>
        </div>
            
            
        )
    }

   




export default Nav
