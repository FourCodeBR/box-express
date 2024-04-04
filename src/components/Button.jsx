import React from 'react'

export const Button = (props) => {

    return (


        <a href="#contact">
            <button className='bg-neutral-800 px-6 py-1 rounded-md font-openSans text-lg text-white md:ml-8 hover:bg-neutral-600 duration-300' >
                {props.children}
            </button>
        </a>




    )
}
