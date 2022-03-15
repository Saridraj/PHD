import React, { useState } from 'react'
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
import Highcharts from 'highcharts'

const fellowProfile = ({ 
  fellows,
  ID,
  Avatar,
  summaryDocs,
  proposalDocs,
  progressDocs,
  reflectionDocs, 
}) => {
  // const avatarID = ID
  // //const ID = user.ID
  // console.log(JSON.stringify(avatarID));
  // const Avatar = `https://res.cloudinary.com/rise-impact/image/upload/v1647240756/PHDuser_avatar/${avatarID}`

  // function handleOnChange(changeEvent) {
  //   const reader = new FileReader();

  //   reader.onload = function (onLoadEvent) {
  //     setImageSrc(onLoadEvent.target.result);
  //     setUploadData(undefined);
  //   }

  //   reader.readAsDataURL(changeEvent.target.files[0]);
  // }

  // async function handleOnSubmit(e) {
  //   e.preventDefault();
  //   console.log(e.currentTarget);
  // }

  return (

    <div >
      <Nav />
      <div className=" bg-gray-100 flex  w-full h-full min-h-screen ">
        <div className=" fixed mt-12 bg-white w-[350px] h-full  pr-10 pl-10  pt-6">
          <div className="flex w-full  justify-center ">
            <div className="w-[120px] h-[120px] rounded-[100px] bg-gray-200">
            <Image className="w-[120px] h-[120px] rounded-[100px] bg-gray-200"
            src={Avatar}
            width={120}
            height={120}
          />

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
            <a href={`${summaryDocs.map((summaryDoc) => ((summaryDoc.file)))}`} target="_blank">
                <button className="bg-[#91466b] text-white w-[200px] h-[35px] rounded-[20px] mr-3">เอกสารสรุปแนวคิด</button>
            </a>
            <div className="flex h-[35px] items-center "><p className="text-[#91466b]">อัปเดตล่าสุดเมื่อ</p>&nbsp;&nbsp;</div>
            <div className="flex h-[35px] items-center"><p className="text-[#91466b]">{summaryDocs.map((summaryDoc) => ((summaryDoc.Timestamp)))}</p></div>
          </div>
          
          <ProgressReport />
          <Participation />
          <FellowDoc 
            summaryDocs={summaryDocs} 
            proposalDocs={proposalDocs} 
            progressDocs={progressDocs}
            reflectionDocs={reflectionDocs}
          />
        </div>

      </div>
    </div>
  )


}

export default fellowProfile


export const getServerSideProps = async (context) => {
  const client = await clientPromise
  const db = client.db("PHDdata")

  //For get by ID
  const cookies = parseCookies(context)
  const user = cookies?.user ? JSON.parse(cookies.user) : ""
  const ID = user.ID

  //Get avatar by ID
  const avatarID = ID
  const Avatar = `https://res.cloudinary.com/rise-impact/image/upload/c_fill,g_faces,w_300,h_300,q_100,r_max/v1647240756/PHDuser_avatar/${avatarID}`
  
  //Get data form DB
  const fellowData = await db.collection("fellows").find({ ID: ID }).toArray();
  const fellows = JSON.parse(JSON.stringify(fellowData))

  const summary = await db.collection("summarys").find({ ID: ID }).toArray();
  const summaryDocs = JSON.parse(JSON.stringify(summary))

  const proposal = await db.collection("proposals").find({ ID: ID }).toArray();
  const proposalDocs = JSON.parse(JSON.stringify(proposal))

  const progress = await db.collection("progresses").find({ ID: ID }).toArray();
  const progressDocs = JSON.parse(JSON.stringify(progress))

  const reflection = await db.collection("reflections").find({ ID: ID }).toArray();
  const reflectionDocs = JSON.parse(JSON.stringify(reflection))

  return {
    props: {
      fellows,
      ID,
      Avatar,
      summaryDocs,
      proposalDocs,
      progressDocs,
      reflectionDocs,
    }
  }
}









