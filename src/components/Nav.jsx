import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import logoEscritaLL from '../assets/logo/logoEscritaLL.png'
import { LINKS_DATA } from '../data/links'
import { motion } from 'framer-motion'

export const Nav = () => {
    const [open, setOpen] = useState(false);
    const handleMenuClick = () => { setOpen(!open) };
    const [activeLink, setActiveLink] = useState('');
    let links = LINKS_DATA;

    useEffect(() => {
        /* Definir o activeLink como o ID da seção que estiver sendo visualizada */
        window.addEventListener('scroll', () => {
            links.forEach(link => {
                const section = document.querySelector(link.url);
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop < 150 && sectionTop > -150) {
                    setActiveLink(link.name);
                    console.log(link.name);
                }
            });
        });

        /* Remover o event listener quando o componente for desmontado */
        return () => {
            window.removeEventListener('scroll', () => {
                links.forEach(link => {
                    const section = document.querySelector(link.url);
                    const sectionTop = section.getBoundingClientRect().top;
                    if (sectionTop < 150 && sectionTop > -150) {
                        setActiveLink(link.name);
                    }
                });
            });
        }


    },[]);



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
                            <a
                                href={link.url}
                                className={`text-white hover:text-gray-400 duration-300 font-semibold font-openSans ${activeLink === link.name ? 'text-gray-500' : ''}`}
                                onClick={() => setActiveLink(link.name)}
                            >
                                {link.name}
                            </a>

                        </li>

                    )
                    )}

                    <Button>Contato</Button>

                </ul>
            </div>
        </motion.div>
    )
}
