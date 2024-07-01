import React from 'react'
import { Experience } from '../utils/Exp-Card'

function Card() {
  return (
    <>
    {Experience.map((info, index) => (
            
    <div key={index} className='mt-5' >
      <div className="flex flex-col h-auto gap-4 px-4 py-5 transition-all duration-500 z-[-5] rounded-lg shadow-xl cursor-pointer md:flex-row hover:translate-y-2 md:w-full bg-neutral-50 justify-evenly">
        <img className="rounded-full shadow-lg stroke-purple-300 shrink-0 md:h-20 " src={info.image} alt={info.alt} width={info.width} height={info.height}/>
        <div>
          <span className="font-bold ">{info.Title}</span>
          <p className="space-x-2 text-xs text-gray-400 " >
            {info.Role} {info.Date}
          </p>
          <p className='text-sm leading-relaxed text-pretty'>
            {info.Description}
          </p>
        </div>
      </div>
    </div>
    ))}
    </>


  )
}


export default Card