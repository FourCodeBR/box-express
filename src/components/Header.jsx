import React, { useState } from 'react'
import './Header.css'


export const Header = () => {

    const [isMobile, setIsMobile] = useState(false)

  return (
    <div className='flex items-center justify-between px-10 py-5 font-openSans font-bold text-lg'>
        <img src="src\assets\logo\logo.png" alt="logo da empresa" />


        <div className='text-white flex gap-20'>
            <button >Início</button>
            <button>Sobre</button>
            <button>Cliente</button>
            <button>Trabalhe conosco</button>
        </div>

        <div className='text-white flex gap-4'>

            <button 
            className='bg-red-600 hover:bg-red-500 transition ease-in delay-50 py-3 px-7 rounded-full textShadow-lg'
            >Rastreio
            </button>

            <button 
            className='bg-red-600 hover:bg-red-500 transition ease-in delay-50 py-3 px-7 rounded-full'
            >Contato
            </button>
            
        </div>
    </div>
  )
}
