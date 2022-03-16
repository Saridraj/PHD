import React from 'react'


const  reflectionDocList = ({reflectionDocList}) => {
  return (
    <div className="ml-5">
        <a href={`${reflectionDocList.file}`} target="noreferrer noopener" className="text-[10px]" >{reflectionDocList.Timestamp}</a>
    </div>
  )
}



export default reflectionDocList

