import React from 'react'


const  progressDocList = ({progressDocList}) => {
  return (
    <div className="ml-5">
        <a href={`${progressDocList.file}` } target="_blank" rel="noreferrer noopener" className="text-[10px]" >{progressDocList.Timestamp}</a>
    </div>
  )
}



export default progressDocList

