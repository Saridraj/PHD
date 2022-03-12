import React from 'react'
import { BiArrowToBottom } from 'react-icons/bi'

function ProgressReport() {
  return (
    <div className=" h-auto w-full pl-10 pr-10 pb-10">
        <p className="font-medium mb-5">หมุดหมายสำคัญ</p>
        <div className="bg-white w-full h-[100px] mb-10"></div>
        <div className="flex w-full h-auto mb-5">
            <div className="bg-red-200 w-[400px] h-[500px] mr-10">

            </div>
            <div className="bg-red-200 w-[400px] h-[500px]">
                
            </div>
        </div>
        <button className="flex justify-center items-center text-[#91466b] w-[200px] h-[35px] rounded-[20px] border-solid border-2 border-[#91466b] "><p className="mr-5">Monthly Report</p><BiArrowToBottom/></button>
    </div>
  )
}

export default ProgressReport