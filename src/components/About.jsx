import React from 'react';

function About() {
  const milliseconds = new Date().getTime() - new Date("07/16/2009").getTime();
  const age = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 365);

  return (
    <div className='text-black lg:pb-20' id='About'>
      <div className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl sticky top-0 w-full bg-white/90 py-2'>
        //About
      </div>
      <div className=' font-thin text-lg md:text-xl xl:text-2xl leading-relaxed space-y-5 mt-5'>
        <p>
          hey I'm Aaditya, a {age} year old programmer currently in my sophomore year of high school.  I have a passion for both technology, and business. I love creating new projects and exploring how they can be applied to solve real-world problems.
        </p>
        <p>
         When I'm not not sitting at my desk, you can usually find me watching soccer, hanging out with friends, or working out! I enjoy networking, and staying physically fit and active, feel free to text or contact me and we can have a chat!
        </p>
      </div>
    </div>
  );
}

export default About;