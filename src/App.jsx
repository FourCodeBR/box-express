import { useState } from 'react'
import { Header } from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Header />
    <div className="w-screen h-screen text-white background-image flex justify-start items-center px-10 ">
      <h1 className='lg:text-7xl lg:leading-snug text-4xl leading-snug font-bold lg:max-w-6xl max-w-xl'>Redefinindo o futuro da logística com <span className='text-red-600'>eficiência confiança e inovação!</span></h1>
    </div>
   </div>
  )
}

export default App
