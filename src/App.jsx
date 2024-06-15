import Lander from './components/Lander'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  return (
    <div className='flex flex-col h-screen md:flex-row'>
      <Lander />
      <div className='items-start text-left flex flex-col h-screen md:ml-[50%] p-16'>
        <About />
        <Skills />
        <Experience />
      </div>

    </div>
  )
}

export default App