import React from 'react'
import { CARDS_CONTENT } from '../data/cardsContent'
import { motion } from 'framer-motion';

const cardContent = CARDS_CONTENT;

export const Cards = () => {


    return (
        <>
            <motion.div
                className='flex flex-col md:flex-row w-full items-center justify-center text-white font-openSans md:mt-[-165px] mt-[-100px]'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >

                {cardContent.map((content, index) => (
                    <div key={index} className='flex flex-col text-center justify-around items-center h-[330px] w-[330px] rounded-md bg-red-600 md:mx-3 md:py-6 py-10 my-3 md:my-0 px-4 drop-shadow-lg'>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={content.icon} alt={content.title} className='md:w-16 md:h-16 h-12 w-12' />
                            <h1 className='font-bold md:text-2xl text-xl'>{content.title}</h1>
                        </div>

                        <div className='h-full pt-10'>
                            <span>{content.text}</span>
                        </div>

                    </div>
                ))}

            </motion.div>
        </>
    )
}
