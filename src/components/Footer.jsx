import React from 'react'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import youtube from '../assets/icons/youtube.png'
import logoWhite from '../assets/logo/logoWhite.png'
import fourcode from '../assets/logo/fourcode.png'
import logoLL from '../assets/logo/logoLL.png'
import { LINKS_DATA } from '../data/links'
import email from '../assets/icons/email.svg'
import adress from '../assets/icons/adress.svg'
import phone from '../assets/icons/phone.svg'

export const Footer = () => {

    const year = new Date().getFullYear();
    let links = LINKS_DATA;

    return (

        <>
            <div className='bg-red-600 flex flex-col justify-center items-center py-8 font-openSans text-white'>

                <div className='flex justify-center flex-start'>
                    <div className='grid md:grid-cols-4 md:gap-10 gap-10 md:items-start w-full max-w-[1000px]'>

                        <div className='flex justify-center md:order-none order-last h-full items-center'>
                            <img src={logoLL} alt="" className='md:h-28 h-20' />
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='text-xl text-start font-bold'>LINKS ÚTEIS</h1>
                            <div className='flex flex-col pt-5 text-[16px] items-start'>
                                {links.map((link, key) => {
                                    return (
                                        <a href={link.url} key={link.key} className='text-center hover:text-slate-300 duration-200 normal-case'>{link.name}</a>
                                    )
                                })}
                            </div>
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h1 className='text-xl text-start font-bold'>SOBRE</h1>
                            <div className='pt-5 text-[13px]'>

                                <p className='text-start'>
                                    <a href="mailto:LFELIPE.DIAS10@GMAIL.COM" className='flex items-center pb-1'>
                                        <img src={email} className='h-4 pr-2' alt="" />
                                        leandro@lllog.com.br
                                    </a>
                                </p>

                                <p className='text-start flex items-center pb-1'>
                                    <img src={adress} alt="" className='h-4 pr-2' />
                                    Rua Odilla Cia Antônio, <br /> Condomínio industrial Veccon Gamma, Sumaré / SP
                                </p>

                                <p className='text-start flex items-center'>
                                    <img src={phone} alt="" className='h-4 pr-2' />
                                    <a href="tel:+551922239755" className='pr-1'>(19) 2223-9755</a> | <a href="tel:+551922239756" className='pl-1'>(19) 2223-9756</a>
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col items-start justify-center font-bold'>
                            <h1 className='text-xl text-center'>SOCIAL</h1>
                            <div className='flex gap-2 pt-5'>

                                <div className='w-6'>
                                    <a href="https://www.facebook.com/share/xqfS3gJLtLoGeny7/?mibextid=LQQJ4d" target='_blank'><img src={facebook} alt="" /></a>
                                </div>
                                <div className='w-6'>
                                    <a href="https://www.instagram.com/lllogtransportes?igsh=MXBkM2VpeGF2cDNsMw==" target='_blank'><img src={instagram} alt="" /></a>
                                </div>
                                <div className='w-6'>
                                    <a href="https://www.linkedin.com/company/ll-log-transportes" target='_blank'><img src={linkedin} alt="" /></a>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='bg-red-900 flex justify-center font-openSans text-white py-1 text-[10px]'>

                <div className='flex items-center justify-between w-full px-5 md:py-1 py-1 md:gap-0 gap-10'>

                    <div>
                        <h3 className='text-left'>Copyright © {year} LL Log</h3>
                    </div>

                    <div className='flex items-center gap-1'>
                        <p>Desenvolvido por</p><a href="https://fourcode.com.br/" target='_blank'><img src={fourcode} alt="" className='h-6' /></a>
                    </div>

                </div>

            </div>
        </>

    )
}
