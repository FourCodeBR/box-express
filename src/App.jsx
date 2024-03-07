import './App.css'
import { Nav } from './components/Nav'

function App() {

  return (
    <>
      <Nav />
      <div className='h-screen w-full bgImg'>
        <div className='h-screen flex flex-col justify-center items-center'>
          <h1 className='text-5xl text-white font-bold w-3/4 text-center font-openSans leading-snug shadowText'>Redefinindo o futuro da logística com eficiência, confiança e inovação!</h1>
        </div>
      </div>
    </>
  )
}

export default App
