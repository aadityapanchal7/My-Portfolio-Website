import React from 'react'
import { Experience } from '../utils/Exp-Card'

function Card() {
  return (
    <>
    {Experience.map((info, index) => (
            
    <div key={index} className='mt-5' >
      <div className="flex flex-row items-center h-40 gap-4 px-4 transition-all duration-500 rounded-lg shadow-xl cursor-pointer hover:translate-y-2 md:w-96 w-72 bg-neutral-50 justify-evenly">
        <img className="rounded-full stroke-purple-300 shrink-0" src={info.image} alt={info.alt} width={info.width}/>
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