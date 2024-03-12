import React from 'react'
import { Button } from './Button'

export const ContactForm = () => {

  return (

    <>

      <div className='flex justify-center pb-20'>

        <div className='flex justify-center items-center flex-col w-full max-w-[1000px] shadow-custom py-5 rounded-md'>

          <div className='text-3xl font-bold text-red-600'>
            ENTRE EM CONTATO CONOSCO
          </div>

          <form action="" className='py-10'>

            <div className='grid grid-cols-2 gap-4 w-full min-w-[900px]'>

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
