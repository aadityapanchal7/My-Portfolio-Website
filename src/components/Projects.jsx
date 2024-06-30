import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=' pt-14 md:min-h-screen' id='Projects'>
      <div className='sticky top-0 w-full py-2 text-xl font-bold text-blue-500 md:text-2xl lg:text-3xl bg-white/90'>
        //Projects
      </div>
      <ProjectCard />
      <footer className="bottom-0 flex justify-center w-full text-sm text-center">
        <span className="mb-3">
          © {year} Aaditya Panchal All Rights Reserved.
        </span>
      </footer>
    </div>

  )
}

export default Projects
