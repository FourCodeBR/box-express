import React from 'react'
import { CUSTOMERS_DATA } from '../data/customers'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';




export const OurCustomers = () => {



    const clients = CUSTOMERS_DATA;

    return (

        <>

            <div className='container flex flex-col mx-auto items-center justify-center font-openSans py-20' id='customers'>

                <div>
                    <h1 className='text-center md:text-3xl text-2xl text-red-600 font-bold'>NOSSOS CLIENTES</h1>
                </div>

                <div className='w-full max-w-[1000px] pt-16'>

                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                       breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50
                            }
                        
                       }}
                    >
                        {clients.map((client, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='flex justify-center items-center'>
                                        <img src={client.logo} alt={client.logo} className='w-32 h-32 object-contain' />
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

            </div>

        </>

    )
}
