import React from 'react'

function Participation() {
  return (
      <div>
        <div className="flex w-full h-[350px] bg-white">
            
            <div className="bg-[#FAFAFA] w-1/2 p-12">
            <p className="font-medium mb-5">บันทึกการเข้าร่วม mentoring session</p>
            <p className="text-[#404040] font-light">Fellow เข้าร่วมกิจกรรมทั้งหมด</p>
            <p className="mb-5 text-[#404040] font-light">คิดเป็น</p>
            <p className="text-[#404040] font-light">โดยมีรายละเอียดดีงนี้</p>
            </div>
            <div className="bg-[#FFFFFF] w-1/2 p-12">
            <p className="font-medium mb-5">บันทึกการเข้าร่วมกิจกรรมกลุ่ม</p>
            <p className="text-[#404040] font-light">Fellow เข้าร่วมกิจกรรมทั้งหมด</p>
            <p className="mb-5 text-[#404040] font-light">คิดเป็น</p>
            <p className="text-[#404040] font-light">โดยมีรายละเอียดดีงนี้</p>
            </div>
        </div>
      </div>
    
  )
}

export default Participation