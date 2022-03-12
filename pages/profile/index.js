import React, { Component } from 'react'
import Nav from "../../components/Nav"
import { parseCookies } from "nookies"
import { useSession, signOut } from "next-auth/react"
import cookie from "js-cookie"
import Router from 'next/router'





export default class profile extends Component {

  
  
  render() {

    const cookies = parseCookies()

    const user = cookies?.user ? JSON.parse(cookies.user) : ""

if (user.role ==='admin'){
    window.location.href = '/profile/adminProfile'
} else if (user.role ==='participant'){
    window.location.href = '/profile/fellowProfile'
} else if (user.role ==='mentor'){
    window.location.href = '/profile/mentorProfile'
}

 

   return (
     <div>Loding...</div>
   )
  }
}
