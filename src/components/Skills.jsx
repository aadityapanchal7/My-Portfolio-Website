import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";
import { Languages, Frameworks, Tools } from '../utils/Skillset'

function Skills() {
  return (
    <div className=' pt-10 md:pt-0 md:min-h-screen ' id='Skills'>

      <div className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl sticky top-0 w-full bg-white/90 py-2'>
        //Skills
      </div>


      {/* Languages */}
      <div className='mt-14'>
        <div className='flex items-center'>
        <IoChevronForwardOutline />
          <div className=' font-bold  text-orange-600 '>
            Languages
          </div>
        </div>
  
        <div className=' flex mt-2'>
          {Languages.map((Lang, index) => (
            <div className=' py-1 px-3 Bg border-2 Border rounded-xl m-1 flex items-center h-8 shadow-md' key={index}>
              {Lang.Language}
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks */}
      <div className='mt-14'>
        <div className='flex items-center'>
        <IoChevronForwardOutline />
          <div className=' font-bold  text-orange-600 '>
            Frameworks
          </div>
        </div>
        
        <div className=' flex mt-2'>
          {Frameworks.map((Frame, index) => (
            <div className=' py-1 px-3 Bg border-2 Border rounded-xl m-1 flex items-center h-8 shadow-md' key={index}>
              {Frame.Framework}
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className='mt-14'>
        <div className='flex items-center'>
        <IoChevronForwardOutline />
          <div className=' font-bold  text-orange-600 '>
            Tools
          </div>
        </div>
        
        <div className=' flex mt-2 flex-wrap'>
          {Tools.map((Tool, index) => (
            <div className=' py-1 px-3 Bg border-2 Border rounded-xl m-1 flex items-center h-8 shadow-md' key={index}>
              {Tool.Tool}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Skills