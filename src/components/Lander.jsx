import React from 'react';
import Emoji from './Emoji';
import ReactTyped from 'react-typed';  
import { FaArrowRight } from 'react-icons/fa';
import { Links } from '../utils/Links';

function Lander() {
  return (
    <div className='flex flex-col h-screen leading-relaxed text-black md:box-border md:w-1/2 items-start md:pl-20 pl-16 mt-5 md:mt-0 md:fixed md:justify-center'>
      <Emoji />

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
            className='pl-1'
          />
        </p>
      </div>

      <div className='hidden md:mt-10 mt-5 md:block'>
        <ul>
          <li className='transition-all hover:translate-x-5 hover:text-blue-400'>
            <a href='#About'>
              <span className='flex items-center'><FaArrowRight className='mr-1' /> About</span>
            </a>
          </li>
          <li className='transition-all hover:translate-x-5 hover:text-blue-400'>
            <a href='#Experience'>
              <span className='flex items-center'><FaArrowRight className='mr-1' /> Experience</span>
            </a>
          </li>
          <li className='transition-all hover:translate-x-5 hover:text-blue-400'>
            <a href='#Projects'>
              <span className='flex items-center'><FaArrowRight className='mr-1' /> Projects</span>
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
