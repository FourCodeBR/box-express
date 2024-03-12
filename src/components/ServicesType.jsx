import React from 'react'
import { SERVICES_DATA } from '../data/servicesData'

export const ServicesType = () => {

    const services = SERVICES_DATA;

    return (

        <>

            <div className='flex flex-col justify-center items-center font-openSans'>

                {services.map((service, index) => {
                    const isEven = service.id % 2 === 0;

                    return (
                        <div key={service.id} className={`md:grid md:grid-cols-3 flex flex-col md:items-stretch items-center md:w-full md:max-w-[1000px] w-full px-10 py-5 drop-shadow-lg`}>

                            <div className={`flex justify-center ${isEven ? 'md:order-last' : ''}`}>
                                <img src={service.img} alt="" className={`md:h-52 h-64 w-96 ${isEven ? 'md:rounded-r-xl rounded-t-xl md:rounded-tl-none' : 'md:rounded-l-xl md:rounded-tr-none rounded-t-xl'}`} />
                            </div>

                            <div className={`flex flex-col justify-center gap-4 items-center shadow-custom ${isEven ? 'md:rounded-l-xl rounded-b-xl md:rounded-br-none' : 'rounded-b-xl md:rounded-bl-none md:rounded-r-xl'}  col-span-2 px-5 md:py-4 py-4 text-justify md:w-full w-full`}>
                                <h1 className='text-xl font-bold uppercase text-red-600'>{service.title}</h1>
                                <p>{service.text}</p>
                            </div>

                        </div>
                    )
                })}



            </div>

        </>

    )
}
