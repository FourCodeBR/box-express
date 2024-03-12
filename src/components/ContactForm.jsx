import React from 'react'
import { Button } from './Button'

export const ContactForm = () => {

  return (

    <>

      <div className='flex justify-center pb-20 font-openSans'>

        <div className='flex justify-center items-center flex-col w-full max-w-[1000px] shadow-custom py-10 rounded-md'>

          <div className='flex justify-center md:text-3xl text-2xl font-bold text-red-600 pb-10 px-5 w-full'>
            <h1>
              ENTRE EM CONTATO CONOSCO
            </h1>
          </div>

          <form action="" className='pt10 w-full px-10'>

            <div className='grid grid-cols-2 gap-4'>

              <div>
                <input type="text" placeholder='NOME' className='w-full rounded-xl py-2 px-3 bg-slate-100' />
              </div>

              <div>
                <input type="text" placeholder='SOBRENOME' className='w-full rounded-xl py-2 px-3 bg-slate-100' />
              </div>

              <div>
                <input type="tel" placeholder='TELEFONE' className='w-full rounded-xl py-2 px-3 bg-slate-100' />
              </div>

              <div>
                <input type="email" placeholder='E-MAIL' className='w-full rounded-xl py-2 px-3 bg-slate-100' />
              </div>

              <div className='col-span-2'>
                <textarea name="mensage" id="" cols="60" rows="" placeholder='DIGITE SUA MENSAGEM' className='col-span-2 w-full rounded-xl py-2 px-3 bg-slate-100'></textarea>
              </div>

              <div className='col-span-2 flex justify-center'>
                <Button>ENVIAR</Button>
              </div>

            </div>

          </form>



        </div>

      </div>



    </>

  )
}
