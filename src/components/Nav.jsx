import React, { useState } from 'react'
import { Button } from './Button'

export const Nav = () => {
    const [open, setOpen] = useState(false)
    const handleMenuClick = () => {
        setOpen(!open)
    }


    let links = [
        { name: 'Início', url: '/', key: 0 },
        { name: 'Sobre', url: '/', key: 1 },
        { name: 'Clientes', url: '/', key: 2 },
        { name: 'Trabalhe conosco', url: '/', key: 3 },

    ]

    return (

        <div className='shadow-md w-full top-0 left-0'>
            <div className='md:flex bg-neutral-800 py-4 items-center justify-between px-8'>
                <div>
                    <img src="src\assets\logo\logo.png" alt="" className='h-10 md:scale-125 cursor-pointer' />
                </div>
                <div className='text-3xl absolute right-8 top-6 text-white md:hidden cursor-pointer' onClick={handleMenuClick}>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-neutral-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[70px]' : '-top-96'}`}>
                    {links.map((link, key) => (
                        <li key={link.key} className='md:pl-8 text-lg md:my-0 my-5'>
                            <a href={link.url} className='text-white hover:text-gray-400 duration-300 font-semibold font-openSans'>{link.name}</a>
                        </li>
                    )
                    )}
                    <Button>Contato</Button>
                </ul>
            </div>
        </div>
    )
}
