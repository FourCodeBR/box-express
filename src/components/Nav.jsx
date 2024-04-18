import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import logoLL from '../assets/logo/logoLL.png'
import logoEscritaLL from '../assets/logo/logoEscritaLL.png'
import { LINKS_DATA } from '../data/links'
import { motion } from 'framer-motion'

export const Nav = () => {
    const [open, setOpen] = useState(false)
    const handleMenuClick = () => {
        setOpen(!open)
    }
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }

    // Inicialmente chama handleResize para lidar com o carregamento inicial
    handleResize();

    window.addEventListener('resize', handleResize);

    // Limpeza na desmontagem
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []); // Vazio [] significa que este useEffect será executado uma vez na montagem e na desmontagem



    let links = LINKS_DATA;

    return (

        <motion.div
            className='shadow-md w-full top-0 left-0 fixed z-10'
            initial={{ y: -100 }} // initial position above the screen
            animate={{ y: 0 }} // animate to y position 0
            transition={{ duration: 0.5 }} // transition duration of 0.5 seconds
        >
            <div className={`md:flex bg-neutral-800 py-4 items-center justify-around px-16`}>

                <div>
                    <a href="https://box.fourcode.com.br/">
                        <img src={logoEscritaLL} alt="" className='h-10 scale-150 cursor-pointer' />
                    </a>
                </div>

                <div className='text-3xl absolute right-8 top-6 text-white md:hidden cursor-pointer' onClick={handleMenuClick}>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static md:bg-transparent bg-neutral-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[70px]' : '-top-96'}`}>

                    {links.map((link, key) => (

                        <li key={link.key} className='md:pl-8 text-lg md:my-0 my-5'>
                            <a href={link.url} className='text-white hover:text-gray-400 duration-300 font-semibold font-openSans'>{link.name}</a>
                        </li>

                    )
                    )}

                    <Button>Contato</Button>

                </ul>
            </div>
        </motion.div>
    )
}
