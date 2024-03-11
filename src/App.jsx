import './App.css'
import { AboutSection } from './components/AboutSection'
import { Button } from './components/Button'
import { Cards } from './components/Cards'
import { Nav } from './components/Nav'
import { OurCustomers } from './components/OurCustomers'
import { ServicesType } from './components/ServicesType'

function App() {

  return (
    <>
      <Nav />
      <div className='h-screen w-full bgImg'>
        <div className='h-screen pb-36 flex flex-col justify-center items-center'>
          <h1 className='md:text-5xl text-3xl text-white font-bold text-center font-openSans leading-snug shadowText md:px-28 px-10'>Redefinindo o futuro da logística com eficiência, confiança e inovação!</h1>
          <h2 className='text-2xl font-openSans text-white shadowText font-semibold py-5'>Faça parte da mudança: otimize sua jornada logística hoje mesmo!</h2>
          <button className='bg-red-600 text-white px-6 py-3 text-2xl rounded-full drop-shadow-lg hover:bg-red-500 duration-300'>Entre em contato</button>
        </div>
      </div>
      <Cards />
      <AboutSection />
      <ServicesType />
      <OurCustomers />
    </>
  )
}

export default App
