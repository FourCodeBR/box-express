import React from 'react'

export const ContactForm = () => {

  return (

    <>

      <div className='flex justify-center items-center flex-col'>

        <div className='text-3xl font-bold text-red-600'>
          ENTRE EM CONTATO CONOSCO
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <input type="text" placeholder='Nome' />
          </div>

          <div>
            <input type="text" placeholder='E-mail' />
          </div>

        </div>

      </div>

    </>

  )
}
