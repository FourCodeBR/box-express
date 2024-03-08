import React from 'react'
import {SERVICES_DATA} from '../data/servicesData'

export const ServicesType = () => {

    const services = SERVICES_DATA;

    return (

        <>

            <div className='flex flex-col justify-center items-center'>

                {services.map((service, index) => (
                    <div className='md:grid md:grid-cols-3 flex flex-col md:items-stretch items-center md:w-full md:max-w-[1000px] px-10 py-10'>

                        <div className='flex justify-center'>
                            <img src={service.img} alt="" className='md:h-52 h-64 w-96 md:rounded-l-xl md:rounded-tr-none rounded-t-xl' />
                        </div>

                        <div className='flex items-center bg-gray-200 rounded-b-xl md:rounded-bl-none md:rounded-r-xl col-span-2 px-5 md:py-0 py-4 md:text-center text-justify md:w-full w-96'>
                            <p>{service.text}</p>
                        </div>

                    </div>
                ))}



            </div>

        </>

    )
}
