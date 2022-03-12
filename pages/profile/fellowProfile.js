import React, { Component } from 'react'
import Nav from "../../components/Nav"
import FellowDoc from "../../components/FellowDoc"
import Participation from "../../components/Participation"
import ProgressReport from "../../components/ProgressReport"
import { parseCookies } from "nookies"
import { useSession, signOut } from "next-auth/react"
import cookie from "js-cookie"
import Router from 'next/router'
import axios from "axios"
import connectDB from '../../connectDB'
import clientPromise from "../../lib/mongodb"
import Image from 'next/image'

const fellowProfile = ({ fellows }) => {
  return (

    <div >
      <Nav />
      <div className=" bg-gray-100 flex  w-full h-full min-h-screen ">
        <div className=" fixed mt-12 bg-white w-[350px] h-full  pr-10 pl-10  pt-6">
          <div className="flex w-full  justify-center ">
            <div className="w-[120px] h-[120px] rounded-[100px] bg-gray-200">


            </div>
          </div>
          <div className="flex flex-col w-full  justify-center  pt-6">
            <div className="flex justify-center"><p className="text-[20px] text-[#404040]">{fellows.map((fellow) => ((fellow.name_title)))}{fellows.map((fellow) => ((fellow.firstname)))}&nbsp;&nbsp;{fellows.map((fellow) => ((fellow.lastname)))}</p></div>
            <div className="flex justify-center pt-4 text-[#91466b] font-semibold"><p className="text-[14px]">{fellows.map((fellow) => ((fellow.status)))}</p></div>
          </div>
          <div className="flex  w-fill justify-center pt-4  ">
            <Image
              src="/img/job_icon.png"
              width="25"
              height="25"
            />
          </div>

          <div className="flex flex-col w-full  justify-center  ">

            <div className="flex justify-center"><p className="flex justify-center  text-[#91466b] text-[14px]">{fellows.map((fellow) => ((fellow.job_title)))}</p></div>
            <div className="flex justify-center  text-[#91466b] text-[14px] "><p>{fellows.map((fellow) => ((fellow.organization)))}</p></div>
          </div>

          <div className="flex  w-fill justify-center pt-4  ">
            <Image
              src="/img/email_icon.png"
              width="25"
              height="25"
            />
          </div>

          <div className="flex flex-col w-full  justify-center pt-[-2] ">
            <div className="flex justify-center"><p className="flex justify-center  text-[#91466b] text-[14px]">{fellows.map((fellow) => ((fellow.email)))}</p></div>
          </div>


          <div className="flex  w-fill justify-center pt-4  ">
            <Image
              src="/img/fellow_bio_icon.png"
              width="25"
              height="25"

            />
          </div>
          <div className="flex flex-col w-full  justify-center  ">
            <div className="flex justify-center"><p className="flex justify-center  text-[#91466b] text-[14px] text-justify break-words">{fellows.map((fellow) => ((fellow.fellow_bio)))}</p></div>
          </div>

          <div className="flex flex-col w-full  justify-center  ">
            <div className="flex justify-center"><p className="flex justify-center pt-4 font-semibold text-[#404040]">Mentor</p></div>
            <div className="flex justify-center  text-[#91466b]"><p className="text-[14px]">{fellows.map((fellow) => ((fellow.mentor)))}</p></div>
          </div>

        </div>

        
        <div className="ml-[350px] bg-gray-100 w-full ">
          <div className="max-w-[800px] pl-10 pt-10"><h1 className="mt-14 text-[35px] leading-relaxed font-medium text-[#91466b]">{fellows.map((fellow) => ((fellow.project_name)))}</h1></div>
          <div className="flex max-w-[600px] h-auto pl-10 pt-10"><div className="w-[10px] h-auto bg-[#91466b] mr-4"></div><p className="text-[#91466b] text-left break-words">{fellows.map((fellow) => ((fellow.project_intro)))}</p></div>
          <div className="flex pl-10 h-[80px] mt-3 ">
            <button className="bg-[#91466b] text-white w-[200px] h-[35px] rounded-[20px] mr-3">เอกสารสรุปแนวคิด</button>
            <div className="flex h-[35px] items-center "><p className="text-[#91466b]">อัปเดตล่าสุดเมื่อ</p>&nbsp;&nbsp;</div>
            <div className="flex h-[35px] items-center"><p className="text-[#91466b]">11/3/2565 16:25</p></div>
          </div>
          <ProgressReport/>
          <Participation/>
          <FellowDoc/>
        </div>

      </div>
    </div>
  )


}

export default fellowProfile









export const getServerSideProps = async (context ) => {
  const client = await clientPromise
  const db = client.db("PHDdata")

  //for getByID
  const cookies = parseCookies(context)
  const user =  cookies?.user ? JSON.parse(cookies.user) : ""
  const ID = user.ID
  // console.log("user", JSON.stringify(user.ID))
  // console.log(ID)


  const fellowData = await db.collection("fellows").find({ ID: ID }).toArray();
  const fellows = JSON.parse(JSON.stringify(fellowData))

  return {
    props: {
      fellows,
    }
  }
}









