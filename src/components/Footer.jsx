import React from 'react'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import youtube from '../assets/icons/youtube.png'

export const Footer = () => {

    return (

        <>
            <div className='bg-red-600 flex flex-col justify-center py-20 font-openSans text-white'>

                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-3 w-full max-w-[1000px]'>

                        <div className='flex flex-col justify-center'>
                            <h1 className='text-3xl text-center'>LINKS ÚTEIS</h1>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='text-3xl text-center'>SOBRE</h1>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='text-3xl text-center'>SOCIAL</h1>
                        </div>


                        <div className='flex flex-col  pt-5'>
                            <a href="#" className='text-center hover:text-slate-300 duration-200'>INICÍO</a>
                            <a href="#" className='text-center hover:text-slate-300 duration-200'>SOBRE</a>
                            <a href="#" className='text-center hover:text-slate-300 duration-200'>CLIENTES</a>
                            <a href="#" className='text-center hover:text-slate-300 duration-200'>TRABALHE CONOSCO</a>
                            <a href="#" className='text-center hover:text-slate-300 duration-200'>CONTATO</a>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <p className='text-center'>contato@fourcode.com.br</p>
                            <p className='text-center'>Rua Diogo de Faria - 249</p>
                            <p className='text-center'>Americana/Sp</p>
                            <p className='text-center'>(19) 99999-9999</p>
                        </div>

                        <div className='flex justify-center items-center'>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='w-8'>
                                    <a href=""><img src={facebook} alt="" /></a>
                                </div>
                                <div className='w-8'>
                                    <a href=""><img src={instagram} alt="" /></a>
                                </div>
                                <div className='w-8'>
                                    <a href=""><img src={linkedin} alt="" /></a>
                                </div>
                                <div className='w-8'>
                                    <a href=""><img src={youtube} alt="" /></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>

    )
}
