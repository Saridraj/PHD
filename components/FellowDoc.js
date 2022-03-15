import React from 'react'
import Link from 'next/link'

function FellowDoc({summaryDocs, proposalDocs, progressDocs, reflectionDocs }) {
    return (

        <div className="pl-10 pt-10">
            <div><p>เอกสารจาก fellow</p></div>
            <div className="flex mb-10 ">
                <div className="min-w-[400px] text-[#A0A0A0]">
                    <p>Candidate Phase</p>
                    <div className="bg-[#A0A0A0] w-[380px] h-[2px] mb-10"></div>
                    <div className="w-[380px] h-auto  mt-2 mb-5">
                        <p className="text-[#404040]">เอกสารสรุปแนวคิดการพัฒนาระบบสุขภาพ <br/>(Executive summary)</p>
                        <p className="font-light text-[14px]">{summaryDocs.map((summaryDoc) => ((summaryDoc.Timestamp)))}</p>
                        <a href={`${summaryDocs.map((summaryDoc) => ((summaryDoc.file)))}`} target="_blank" rel="noreferrer">
                        <button className="bg-[#91466b] text-white w-[100px] h-[35px] rounded-[20px] mt-2">อ่าน</button>
                        </a>
                    </div>
                    <div className="w-[380px] h-auto  mt-2 mb-5">
                        <p className="text-[#404040]">เอกสารข้อเสนอโครงการ (Proposal)</p>
                        <p className="font-light text-[14px]">{proposalDocs.map((proposalDoc) => ((proposalDoc.Timestamp)))}</p>
                        <a href={`${proposalDocs.map((proposalDoc) => ((proposalDoc.file)))}`} target="_blank" rel="noreferrer">
                        <button className="bg-[#91466b] text-white w-[100px] h-[35px] rounded-[20px] mt-2">อ่าน</button>
                        </a>
                    </div>
                    
                    
                </div>
                <div className="w-[400px] text-[#A0A0A0]">
                    <p>Felllowship Phase</p>
                    <div className="bg-[#A0A0A0] w-[380px] h-[2px] mb-10"></div>
                    <div className="w-[380px] h-auto  mt-2 mb-5">
                        <p className="text-[#404040]">เอกสารสรุปความก้าวหน้า (Progress report)</p>
                        <p className="font-light text-[14px]">{progressDocs.map((progressDoc) => ((progressDoc.Timestamp)))}</p>
                        <a href={`${progressDocs.map((progressDoc) => ((progressDoc.file)))}`} target="_blank" rel="noreferrer">
                        <button className="bg-[#91466b] text-white w-[100px] h-[35px] rounded-[20px] mt-2">อ่าน</button>
                        </a>
                    </div>
                    <div className="w-[380px] h-auto  mt-2 mb-5">
                        <p className="text-[#404040]">เอกสารสรุปบทเรียน (Reflection note)</p>
                        <p className="font-light text-[14px]">{reflectionDocs.map((reflectionDoc) => ((reflectionDoc.Timestamp)))}</p>
                        <a href={`${reflectionDocs.map((reflectionDoc) => ((reflectionDoc.file)))}`} target="_blank" rel="noreferrer">
                        <button className="bg-[#91466b] text-white w-[100px] h-[35px] rounded-[20px] mt-2">อ่าน</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FellowDoc