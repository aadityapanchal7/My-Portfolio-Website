import React from 'react'
import { Experience } from '../utils/Exp-Card'

function Card() {
  return (
    <>
    {Experience.map((info, index) => (
            
    <div key={index} >
      <div className="cursor-pointer transition-all duration-500 hover:translate-y-2 md:w-96 w-72 h-40 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
        <img className="stroke-purple-300 shrink-0 rounded-full" src={info.image} alt={info.alt} width={info.width}/>
        <div>
          <span className="font-bold ">{info.Title}</span>
          <p className=" text-xs text-gray-400 space-x-2" >
            {info.Role} {info.Date}
          </p>
          <p className=' leading-relaxed text-sm text-pretty'>
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