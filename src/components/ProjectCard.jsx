import React, { Onclick } from 'react';
import { Projects } from '../utils/Projectslist';
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";

function ProjectCard() {
  return (
    <>
      {Projects.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row items-start bg-white shadow-lg p-6  overflow-hidden mb-6 ">


            <div className=' flex flex-wrap'>
              {/* Image */}
              <img className=" h-auto object-cover mb-5" src={item.image} alt={item.alt} width={item.width} height={item.height} />
    
              <div className=' md:flex md:flex-wrap hidden'>
                {/* Languages/Frameworks */}
                {item.Languages.map((tool, index) => (
                <div key={index} className="py-1 px-3 Bg border-2 Border rounded-xl m-1 flex items-center h-8 shadow-md">
                  {tool}
                </div>
                ))}
              </div>
            </div>


          {/* Info */}
          <div className=" md:pl-5">
            <h5 className="text-xl font-semibold ">
              {item.title}
            </h5>
            <p className=' mb-2 text-sm text-gray-400'>
              {item.date}
            </p>
            <p className="text-base font-light text-gray-900">
              {item.description}
            </p>
            <div className="pt-4 flex space-x-4">
              <a href={item.repo} target='_blank' rel="noopener noreferrer">
                <FiGithub className='size-6' />
              </a>
              <a href={item.link} target='_blank' rel="noopener noreferrer">
                <FaLink className='size-6' />
              </a>
              <FaCode className='size-6 md:hidden'/>
            </div>
          </div>

          <div className=' md:hidden flex-wrap hidden'>
                {/* Languages/Frameworks */}
                {item.Languages.map((tool, index) => (
                <div key={index} className="py-1 px-3 Bg border-2 Border rounded-xl m-1 flex items-center h-8 shadow-md">
                  {tool}
                </div>
                ))}
              </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;
