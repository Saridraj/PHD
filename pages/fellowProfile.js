import React, { Component } from 'react'
import Nav from "../components/Nav"
import { parseCookies } from "nookies"
import { useSession, signOut } from "next-auth/react"
import cookie from "js-cookie"
import Router from 'next/router'


export default class fellowProfile extends Component {


  
  render() {
    return (

      <div >
        <Nav />

        <div className=" bg-gray-100 flex  w-full h-full min-h-screen ">
          <div className=" fixed mt-12 bg-white w-[350px] h-full  p-3 ">
            <div className="flex w-full  justify-center bg-red-200">
              <div className="w-[150px] h-[150px] rounded-[100px] bg-gray-200">
                  1
              </div>
            </div>
            <div className="flex w-full  justify-center bg-red-400">
              <div className="w-[150px] h-[150px] rounded-[100px] bg-gray-200">
              
              </div>
            </div>
            <div className="flex w-full  justify-center bg-red-300">
              <div className="w-[150px] h-[150px] rounded-[100px] bg-gray-200">
                  3
              </div>
            </div>

          </div>
          <div className="ml-[350px]">
            <div><h1 className="mt-14">profile</h1></div>
            <div className="w-96 h-96 bg-red-50"></div>
            <div className="w-96 h-96 bg-red-100"></div>
            <div className="w-96 h-96 bg-red-200"></div>
            <div className="w-96 h-96 bg-red-300"></div>
            <div className="w-96 h-96 bg-red-400"></div>
          </div>

        </div>
      </div>
    )
  }
}
