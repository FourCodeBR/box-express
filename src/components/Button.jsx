import React from 'react'

export const Button = (props) => {

    return (


        <a href="#contact">
            <button className='bg-red-600 px-6 py-1 rounded-md font-openSans text-lg text-white md:ml-8 hover:bg-red-500 duration-300' >
                {props.children}
            </button>
        </a>




    )
}
