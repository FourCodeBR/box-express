"use client"

import './App.css'
import { AboutSection } from './components/AboutSection'
import { Cards } from './components/Cards'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { OurCustomers } from './components/OurCustomers'
import { ServicesType } from './components/ServicesType'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <Nav />

      <div className='h-screen w-full bgImg' id='home'>

        <motion.div 
          className='h-screen pb-36 flex flex-col justify-center items-center'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

          <h1 className={`md:text-5xl text-3xl text-white font-bold text-center font-openSans leading-snug shadowText md:px-28 px-10 text-wrap`}> Redefinindo o futuro da logística com eficiência, confiança e inovação! </h1>

          <h2 className='md:text-2xl text-lg text-center font-openSans text-white shadowText font-semibold pt-5 pb-10'> Faça parte da mudança: otimize sua jornada logística hoje mesmo! </h2>

          <button className={`bg-red-600 text-white px-6 py-2 md:text-2xl text-md rounded-full drop-shadow-lg hover:bg-red-500 duration-300 mb-6`}>Entre em contato</button>

        </motion.div>

      </div>

      <Cards />
      <AboutSection />
      <ServicesType />
      <OurCustomers />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
