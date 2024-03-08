import './App.css'
import { AboutSection } from './components/AboutSection'
import { Cards } from './components/Cards'
import { Nav } from './components/Nav'
import { ServicesType } from './components/ServicesType'

function App() {

  return (
    <>
      <Nav />
      <div className='h-screen w-full bgImg'>
        <div className='h-screen flex flex-col justify-center items-center'>
          <h1 className='md:text-5xl text-3xl text-white font-bold text-center font-openSans leading-snug shadowText md:px-28 px-10'>Redefinindo o futuro da logística com eficiência, confiança e inovação!</h1>
        </div>
      </div>
      <Cards />
      <AboutSection />
      <ServicesType />
    </>
  )
}

export default App
