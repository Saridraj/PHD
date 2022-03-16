import React from 'react'
import Link from 'next/link'
import ProgressDocList from "../components/progressDocList"
import ReflectionDocList from '../components/reflectionDocList'

function FellowDoc({
    summaryDocs,
    proposalDocs,
    progressDocs,
    reflectionDocs,
    progressDocAll,
    reflectionDocAll,
}) {
    return (

        <div className="pl-10 pt-10">
            <div><p>เอกสารจาก fellow</p></div>
            <div className="flex mb-10 ">
                <div className="min-w-[400px] text-[#A0A0A0]">
                    <p>Candidate Phase</p>
                    <div className="bg-[#A0A0A0] w-[380px] h-[2px] mb-10"></div>
                    <div className="w-[380px] h-auto  mt-2 mb-5">
                        <p className="text-[#404040]">เอกสารสรุปแนวคิดการพัฒนาระบบสุขภาพ <br />(Executive summary)</p>
                        <p className="font-light text-[14px]">อัปเดตล่าสุด {summaryDocs.map((summaryDoc) => ((summaryDoc.Timestamp)))}</p>
                        <a href={`${summaryDocs.map((summaryDoc) => ((summaryDoc.file)))}`} target="_blank" rel="noreferrer noopener">
                            <button className="bg-[#91466b] text-white w-[100px] h-[35px] rounded-[20px] mt-2">อ่าน</button>
                        </a>
                    </div>
                    <div className="w-[380px] h-auto  mt-2 mb-5">
                        <p className="text-[#404040]">เอกสารข้อเสนอโครงการ (Proposal)</p>
                        <p className="font-light text-[14px]">อัปเดตล่าสุด {proposalDocs.map((proposalDoc) => ((proposalDoc.Timestamp)))}</p>
                        <a href={`${proposalDocs.map((proposalDoc) => ((proposalDoc.file)))}`} target="_blank" rel="noreferrer noopener">
                            <button className="bg-[#91466b] text-white w-[100px] h-[35px] rounded-[20px] mt-2">อ่าน</button>
                        </a>
                    </div>


                </div>
                <div className="w-[400px] text-[#A0A0A0]">
                    <p>Felllowship Phase</p>
                    <div className="bg-[#A0A0A0] w-[380px] h-[2px] mb-10"></div>
                    <div className="w-[380px] h-auto  mt-2 mb-5">
                        <p className="text-[#404040]">เอกสารสรุปความก้าวหน้า (Progress report)</p>
                        <p className="font-light text-[14px]">อัปเดตล่าสุด {progressDocs.map((progressDoc) => ((progressDoc.Timestamp)))}</p>
                        <a href={`${progressDocs.map((progressDoc) => ((progressDoc.file)))}`} target="_blank" rel="noreferrer noopener">
                            <button className="bg-[#91466b] text-white w-[100px] h-[35px] rounded-[20px] mt-2">อ่าน</button>
                        </a>
                        <div className="ml-5">
                            <p className="text-[12px]">เอกสารสรุปความก้าวหน้า (Progress report) ทั้งหมด</p>
                            {progressDocAll.map((progressDocList) => (
                                <ProgressDocList key={progressDocList.ID} progressDocList={progressDocList} />
                            ))}
                        </div>
                    </div>
                    <div className="w-[380px] h-auto  mt-2 mb-5">
                        <p className="text-[#404040]">เอกสารสรุปบทเรียน (Reflection note)</p>
                        <p className="font-light text-[14px]">อัปเดตล่าสุด {reflectionDocs.map((reflectionDoc) => ((reflectionDoc.Timestamp)))}</p>
                        <a href={`${reflectionDocs.map((reflectionDoc) => ((reflectionDoc.file)))}`} target="_blank" rel="noreferrer noopener">
                            <button className="bg-[#91466b] text-white w-[100px] h-[35px] rounded-[20px] mt-2">อ่าน</button>
                        </a>
                        <div className="ml-5">
                            <p className="text-[12px]">เอกสารสรุปบทเรียน (Reflection note) ทั้งหมด</p>
                            {reflectionDocAll.map((reflectionDocList) => (
                                <ReflectionDocList key={reflectionDocList.ID} reflectionDocList={reflectionDocList} />
                            ))}
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FellowDoc