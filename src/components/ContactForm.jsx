import React from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator';

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (

    <>

      <div className='flex justify-center pb-20 font-openSans md:px-10 px-2 md:py-20 py-10' id='contact'>

        <div className='flex justify-center items-center flex-col w-full  shadow-custom py-10 rounded-md'>

          <div className='flex justify-center text-center md:text-3xl text-2xl font-bold text-red-600 pb-10 px-5'>
              <h1>
                ENTRE EM CONTATO CONOSCO
              </h1>
          </div>

          <form action="" className='pt10 w-full px-10'
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
          >

            <div className='grid grid-cols-2 gap-4'>

              <div>
                <input
                  type="text"
                  placeholder='NOME'
                  className={`w-full rounded-xl py-2 px-3 bg-slate-100 ${errors.name ? 'border border-red-600' : ''} focus:outline-none `}
                  {...register('name', { required: true })}
                />
                {errors.name && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder='SOBRENOME'
                  className={`w-full rounded-xl py-2 px-3 bg-slate-100 focus:outline-none ${errors.lastName ? 'border border-red-600' : ''}`}
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder='TELEFONE'
                  className={`w-full rounded-xl py-2 px-3 bg-slate-100 focus:outline-none ${errors.phone ? 'border border-red-600' : ''}`}
                  {...register('phone', { required: true, minLength: 11 })}
                />
                {errors.phone?.type === 'required' && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
                {errors.phone?.type === 'minLength' && <p className='text-red-600 text-sm'>Telefone inválido</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder='E-MAIL'
                  className={`w-full rounded-xl py-2 px-3 bg-slate-100 focus:outline-none ${errors.email ? 'border border-red-600' : ''}`}
                  {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
                />
                {errors.email?.type === 'validate' && <p className='text-red-600 text-sm'>E-mail inválido</p>}
                {errors.email?.type === 'required' && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
              </div>

              <div className='col-span-2'>
                <textarea
                  name="mensage"
                  cols="60"
                  placeholder='DIGITE SUA MENSAGEM'
                  className={`col-span-2 w-full rounded-xl py-2 px-3 bg-slate-100 focus:outline-none ${errors.mensage ? 'border border-red-600' : ''}`}
                  {...register('mensage', { required: true })}
                ></textarea>
                {errors.mensage && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
              </div>

              <div className='col-span-2 flex justify-center'>
                <button
                  className='bg-red-600 px-6 py-1 rounded-md font-openSans text-lg text-white md:ml-8 hover:bg-red-500 duration-300'
                  onSubmit={() => handleSubmit(onSubmit)()}
                > Enviar </button>
              </div>

            </div>

          </form>



        </div>

      </div>



    </>

  )
}
