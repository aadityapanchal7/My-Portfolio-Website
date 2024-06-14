import Lander from '../components/Lander'
import About from '../components/About'

function App() {
  return (
    <div className='flex flex-col h-screen md:flex-row'>
      <Lander />
      <About />
    </div>
  )
}

export default App