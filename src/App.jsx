import './App.css'
import { AboutSection } from './components/AboutSection'
import { Button } from './components/Button'
import { Cards } from './components/Cards'
import { Nav } from './components/Nav'
import { OurCustomers } from './components/OurCustomers'
import { ServicesType } from './components/ServicesType'

function App() {
  /* verificar se o tamanho da tela é menor que 780px */
  const isMobile = window.innerWidth < 780;

  return (
    <>
      <Nav />
      <div className='h-screen w-full bgImg'>
        <div className='h-screen pb-36 flex flex-col justify-center items-center'>

          <h1 className={`md:text-5xl text-3xl text-white font-bold text-center font-openSans leading-snug shadowText md:px-28 px-10 text-wrap`}>Redefinindo o futuro da logística com eficiência, confiança e inovação!</h1>
          <h2 className='md:text-2xl text-lg text-center font-openSans text-white shadowText font-semibold pt-5 pb-10'>Faça parte da mudança: otimize sua jornada logística hoje mesmo!</h2>
          <button className={`bg-red-600 text-white px-6 py-2 md:text-2xl text-md rounded-full drop-shadow-lg hover:bg-red-500 duration-300 mb-6`}>Entre em contato</button>
          
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
