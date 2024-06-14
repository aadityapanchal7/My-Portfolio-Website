import React from 'react'
import { IoChevronForwardOutline } from "react-icons/io5";

function Skills() {
  return (
    <div className=' pt-5'>
      <div className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl md:hidden sticky top-0 w-full bg-white/100 py-2'>
        //Skills
      </div>
      <div className=' '>

      <IoChevronForwardOutline /> <p>Languages</p>
      <IoChevronForwardOutline /> <p>Frameworks</p>
      <IoChevronForwardOutline /> <p>Skills</p>

      </div>
    </div>
  )
}

export default Skills