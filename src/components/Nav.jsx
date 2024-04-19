import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import logoEscritaLL from '../assets/logo/logoEscritaLL.png';
import { LINKS_DATA } from '../data/links';
import { motion } from 'framer-motion';

export const Nav = () => {
    const [open, setOpen] = useState(false);
    const handleMenuClick = () => setOpen(!open);
    const [activeLink, setActiveLink] = useState('');
    const links = LINKS_DATA;

    useEffect(() => {
        const onScroll = () => {
            links.forEach(link => {
                const section = document.querySelector(link.url);
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top;
                    const offset = 150;
                    if (sectionTop < offset && sectionTop >= -offset) {
                        setActiveLink(link.name);
                        return; // Stop checking once the active link is found
                    }
                }
            });
        };
    
        const intervalId = setInterval(() => {
            const isLoaded = document.querySelector(links[0].url); // Verifica se o primeiro link pode ser selecionado
            if (isLoaded) {
                window.addEventListener('scroll', onScroll);
                clearInterval(intervalId); // Limpa o intervalo uma vez que o elemento é encontrado
            }
        }, 100); // Verifica a cada 100ms
    
        return () => {
            window.removeEventListener('scroll', onScroll);
            clearInterval(intervalId);
        };
    }, []);

    return (
        <motion.div
            className="shadow-md w-full top-0 left-0 fixed z-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
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
                        <li key={key} className={`md:pl-8 text-lg md:my-0 my-5 text-white ${activeLink === link.name ? 'nav-active-link' : ''}`}>
                            <a
                                href={link.url}
                                className={`hover:text-gray-400 duration-300 font-semibold`}
                                onClick={() => setActiveLink(link.name)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <Button>Contato</Button>
                </ul>
            </div>
        </motion.div>
    );
};
