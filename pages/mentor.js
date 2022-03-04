import React, { Component } from 'react'
import Nav from "../components/Nav"
import { parseCookies } from "nookies"
import { useSession, signOut } from "next-auth/react"
import cookie from "js-cookie"
import Router from 'next/router'

export default class mentor extends Component {

  
  render() {
    return (
      
      <div>
        <Nav />
        <div className="bg-gray-100 flex  w-full h-full min-h-screen ">
        <div className="mt-12 flex h-full min-h-screen items-center  w-full justify-center">
        <h1>mentor</h1>
        </div>
        </div>
       
      </div>
    )
  }
}