import React, { useEffect, useState } from 'react';
import './Header.css';
import closeIcon from '../assets/icons/closeIcon.svg';


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const imgSrc = !isMenuOpen ? 'src/assets/icons/hamburguerMenu.svg' : 'src/assets/icons/closeIcon.svg';

    const handleMenubutton = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });
    }, []);

    return (
        <>
            <div className='flex items-center justify-between px-10 py-5 font-openSans font-bold text-lg absolute top-0 left-0 right-0 teste'>
                <img src="src\assets\logo\logo.png" alt="logo da empresa" />

                <div className='text-white gap-20 lg:flex hidden'>
                    <button className='hover:text-gray-400 transition-all btn'>Início</button>
                    <button className='hover:text-gray-400 transition-all btn'>Sobre</button>
                    <button className='hover:text-gray-400 transition-all btn'>Cliente</button>
                    <button className='hover:text-gray-400 transition-all btn'>Trabalhe conosco</button>
                </div>

                <div className='text-white lg:flex hidden gap-4'>
                    <button
                        className='bg-red-600 hover:bg-red-500 transition-all py-3 px-7 rounded-full btn'
                    >Rastreio
                    </button>

                    <button
                        className='bg-red-600 hover:bg-red-500 transition ease-in delay-50 py-3 px-7 rounded-full btn'
                    >Contato
                    </button>
                </div>

                <div className='text-white lg:hidden sm:flex w-7 h-7'>
                    <img src={imgSrc} alt="" onClick={handleMenubutton} />
                </div>

                {/* Mobile menu */}
            </div>
        </>
    );
};

