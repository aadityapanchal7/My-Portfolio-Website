import Lander from './components/Lander'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return (
    <div className='flex flex-col h-screen md:flex-row'>
      <Lander />
      <div className='items-start text-left flex flex-col h-screen md:ml-[50%] p-16'>
        <About />
        <Skills />
      </div>

    </div>
  )
}

export default App