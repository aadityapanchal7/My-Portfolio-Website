import React from 'react';
import Lander from './components/Lander';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col md:flex-row max-w-[1600px] w-full h-full bg-white'>
        <Lander />
        <div className='flex flex-col justify-start items-start text-left p-16 w-full md:ml-[50%]'>
          <About />
          <Skills />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
