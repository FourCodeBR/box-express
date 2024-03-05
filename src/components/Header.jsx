import React, { useEffect, useState } from 'react'
import './Header.css'


export const Header = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });
    }, []);


    return (

        <div className='flex items-center justify-between px-10 py-5 font-openSans font-bold text-lg absolute top-0 left-0 right-0'>
            <img src="src\assets\logo\logo.png" alt="logo da empresa" />

            <div className='text-white gap-20 lg:flex hidden'>
                <button >Início</button>
                <button>Sobre</button>
                <button>Cliente</button>
                <button>Trabalhe conosco</button>
            </div>

            <div className='text-white lg:flex hidden gap-4'>

                <button
                    className='bg-red-600 hover:bg-red-500 transition ease-in delay-50 py-3 px-7 rounded-full   '
                >Rastreio
                </button>

                <button
                    className='bg-red-600 hover:bg-red-500 transition ease-in delay-50 py-3 px-7 rounded-full'
                >Contato
                </button>

            </div>

            <div className='text-white lg:hidden sm:flex w-7 h-7'>
                <img src="src\assets\icons\hamburguerMenu.svg" alt=""/>
            </div>

        </div>
    )
}
