import React from 'react';

function About() {
  return (
    <div className='text-black lg:pb-20' id='About'>
      <div className=' text-blue-500 font-bold text-xl md:text-2xl lg:text-3xl sticky top-0 w-full bg-white/90 py-2'>
        //About
      </div>
      <div className=' font-thin text-lg md:text-xl xl:text-2xl leading-relaxed space-y-5 mt-5'>
        <p>
          My name is Aaditya, I am a 14 year old programmer currently in my sophomore year of high school. When I am not sitting at my desk, you can usually find me watching soccer, hanging out with friends, or working out!
        </p>
        <p>
          I first discovered my passion for technology in my computer science class and have been hooked ever since. I'm always looking to hone my skills and create new things to benefit and help society. I also started a youtube channel to help people alike me. 
        </p>
      </div>
    </div>
  );
}

export default About;