import React from 'react'
import { CARDS_CONTENT } from '../data/cardsContent'

const cardContent = CARDS_CONTENT;

export const Cards = () => {


    return (
        <>
            <div className='flex flex-col md:flex-row w-full items-center justify-center text-white font-openSans md:mt-[-80px] mt-[-100px]'>

                {cardContent.map((content, index) => (
                    <div key={index} className='flex flex-col text-center justify-around items-center h-[330px] w-[330px] rounded-md bg-red-600 md:mx-3 md:py-0 my-3 md:my-0 px-3'>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={content.icon} alt="" className='w-16 h-16' />
                            <h1 className='font-bold text-2xl'>{content.title}</h1>
                        </div>
                        <span>{content.text}</span>
                    </div>
                ))}

            </div>
        </>
    )
}
