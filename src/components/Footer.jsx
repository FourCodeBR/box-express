import React from 'react'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import youtube from '../assets/icons/youtube.png'
import logoWhite from '../assets/logo/logoWhite.png'
import { LINKS_DATA } from '../data/links'

export const Footer = () => {

    let links = LINKS_DATA;

    return (

        <>
            <div className='bg-red-600 flex flex-col justify-center md:py-8 py-8 font-openSans text-white'>

                <div className='flex justify-center flex-start'>
                    <div className='grid md:grid-cols-4 md:gap-0 gap-10 items-start w-full max-w-[1000px]'>

                        <div className='flex justify-center md:order-none order-last'>
                            <img src={logoWhite} alt="" className='md:h-28 h-20'/>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='text-xl text-center font-bold'>LINKS ÚTEIS</h1>
                            <div className='flex flex-col pt-5 text-[13px]'>
                                {links.map((link, key) => {
                                    return (
                                        <a href={link.url} key={link.key} className='text-center hover:text-slate-300 duration-200 uppercase'>{link.name}</a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='text-xl text-center font-bold'>SOBRE</h1>
                            <div className='pt-5 text-[13px]'>
                                <p className='text-center'>contato@fourcode.com.br</p>
                                <p className='text-center'>Rua Diogo de Faria - 249</p>
                                <p className='text-center'>Americana/Sp</p>
                                <p className='text-center'>(19) 99999-9999</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center font-bold'>
                            <h1 className='text-xl text-center'>SOCIAL</h1>
                            <div className='flex gap-2 pt-5'>

                                <div className='w-6'>
                                    <a href="" ><img src={facebook} alt="" /></a>
                                </div>
                                <div className='w-6'>
                                    <a href=""><img src={instagram} alt="" /></a>
                                </div>
                                <div className='w-6'>
                                    <a href=""><img src={linkedin} alt="" /></a>
                                </div>
                                <div className='w-6'>
                                    <a href=""><img src={youtube} alt="" /></a>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='bg-red-900 flex justify-center font-openSans text-white py-1 text-[10px]'>

                <div className='flex justify-between w-full px-5 md:py-1 py-1 md:gap-0 gap-10'>

                    <div>
                        <h3 className='text-left'>Copyright © 2024 Box Express</h3>
                    </div>
                    <div>
                        <h3 className='text-right'>Desenvolvido por : <a href="">Fourcode Technology</a></h3>
                    </div>

                </div>

            </div>
        </>

    )
}
