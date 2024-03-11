import React from 'react'
import { CARDS_CONTENT } from '../data/cardsContent'

const cardContent = CARDS_CONTENT;

export const Cards = () => {


    return (
        <>
            <div className='flex flex-col md:flex-row w-full items-center justify-center text-white font-openSans md:mt-[-165px] mt-[-100px]'>

                {cardContent.map((content, index) => (
                    <div key={index} className='flex flex-col text-center justify-around items-center h-[330px] w-[330px] rounded-md bg-red-600 md:mx-3 md:py-0 my-3 md:my-0 px-3 drop-shadow-lg'>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={content.icon} alt={content.title} className='md:w-16 md:h-16 h-12 w-12' />
                            <h1 className='font-bold md:text-2xl text-xl'>{content.title}</h1>
                        </div>
                        <span>{content.text}</span>
                    </div>
                ))}

            </div>
        </>
    )
}
