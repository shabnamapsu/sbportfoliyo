import React from 'react'

function Sectiontitle({
    title,
}) {
    
  return (
    <div className='flex gap-10 items-center '>
        <h1 className='text-3xl text-white  py-3'>{title}</h1>
        <div className='w-35 h-[1px] bg-green-200 mt-2'>

        </div>
    </div>
  )
}

export default Sectiontitle