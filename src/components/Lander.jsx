import React from 'react';
import { ReactTyped } from 'react-typed';
import { FaArrowRight } from 'react-icons/fa';
import { Links } from '../utils/Links'

function Lander() {
  return (
    <div className='flex flex-col items-center justify-center h-screen leading-relaxed text-black md:box-border md:w-1/2 md:items-start md:pl-20 md:fixed'>
      <h1 className='text-4xl font-thin'>hey i am</h1>
      <h1 className='text-4xl font-bold text-blue-500 md:text-6xl text-balance'>aaditya panchal</h1>
      <div className='flex flex-col flex-wrap justify-center pt-3 md:flex-row md:px-0 md:justify-start'>
        <p className=' text-balance'>
          a self taught programmer with an interest in 
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
            className='pl-1 '
          />
        </p>
      </div>
      <div className='hidden mt-10 md:block'>
        <ul>
          <li className='transition-all hover:translate-x-5 hover:text-blue-400'>
            <a href='#Home'>
              <span className='flex items-center'><FaArrowRight className='mr-1'/> Home</span>
            </a>
          </li>
          <li className='transition-all hover:translate-x-5 hover:text-blue-400'>
            <a href='#Experience'>
              <span className='flex items-center'><FaArrowRight className='mr-1'/> Experience</span>
            </a>
          </li>
          <li className='transition-all hover:translate-x-5 hover:text-blue-400'>
            <a href='#Projects'>
              <span className='flex items-center'><FaArrowRight className='mr-1'/> Projects</span>
            </a>
          </li>
        </ul>
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