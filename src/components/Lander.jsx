import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaArrowRight } from 'react-icons/fa';
import { Links } from '../utils/Links';
import { routes } from '../utils/Routes'

function Lander() {
  return (
    <div className='flex flex-col h-screen leading-relaxed text-black md:box-border md:w-1/2 items-start md:pl-20 pl-14 mt-5 md:mt-0 md:fixed justify-center'>
      <img src='https://picsum.photos/200' className='rounded-full size-32 mb-6 md:hidden block'/>
      <h1 className='text-4xl md:text-5xl font-thin'>Hey, I am</h1>
      <h1 className='text-4xl font-bold text-blue-500 md:text-6xl text-balance'>Aaditya Panchal</h1>
      <div className='flex flex-col flex-wrap justify-center pt-3 md:flex-row md:px-0 md:justify-start'>
        <p className='text-balance text-sm'>
          a self-taught programmer with an <br className='md:hidden block' /> interest in 
          <ReactTyped 
            strings={[
              'Soccer.', 
              'Sports.', 
              'Business.', 
              'Startups.',
              'The Gym.',
              'Software.', 
              'Stocks.',
            ]} 
            typeSpeed={70}
            backSpeed={50}
            loop
            className='pl-1 text-orange-700 font-semibold'
          />
        </p>
      </div>

      {/* Nav Links */}
        <div className=' mt-5 items-center hidden md:block'>
        
          {routes.map((route, index) => (
            
              <a
                key={index}
                href={route.path}
              >
                <div className="transition-all hover:translate-x-5 hover:text-blue-400 flex items-center">
                  <FaArrowRight className=" mr-1" />
                  <span>{route.name}</span>
                </div>
              </a>
            ))}

        </div>


      <div className='flex mt-10 space-x-2'>
        {Links.map((link, index) => (
          <a key={index} href={link.path} target="_blank" rel="noopener noreferrer">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Lander;