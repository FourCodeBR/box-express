import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import validator from 'validator';
import emailjs from '@emailjs/browser';
import loading from '../assets/icons/loading.svg';

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const form = useRef();

  const onSubmit = async (data) => {
    setIsLoading(true);
    await emailjs.sendForm('service_4gpihbb', 'template_1qbbldh', form.current, {
      publicKey: 'FmK8BLE1KliR3nfc8'
    }).then((result) => {
      return;
    }
    ).catch((error) => {
      setError(true);
    });

    reset();
    setIsLoading(false);
    setIsVisible(true);
    setStartTimer(true);
  };

  useEffect(() => {
    if (startTimer) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setStartTimer(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [startTimer]);

  return (

    <>

      <div className='flex justify-center pb-20 font-openSans md:px-10 px-2 md:py-20 py-10' id='contact'>

        <div className='flex justify-center items-center flex-col w-full max-w-[1000px] shadow-custom py-10 rounded-md'>

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
            ref={form}
          >

            <div className='grid grid-cols-2 gap-4'>

              <div>
                <input
                  type="text"
                  placeholder='Nome'
                  className={`w-full rounded-xl py-2 px-3 bg-slate-100 ${errors.name ? 'border border-red-600' : ''} focus:outline-none `}
                  {...register('name', { required: true })}
                />
                {errors.name && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder='Sobrenome'
                  className={`w-full rounded-xl py-2 px-3 bg-slate-100 focus:outline-none ${errors.lastName ? 'border border-red-600' : ''}`}
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder='Telefone'
                  className={`w-full rounded-xl py-2 px-3 bg-slate-100 focus:outline-none ${errors.phone ? 'border border-red-600' : ''}`}
                  {...register('phone', { required: true, minLength: 11 })}
                />
                {errors.phone?.type === 'required' && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
                {errors.phone?.type === 'minLength' && <p className='text-red-600 text-sm'>Telefone inválido</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder='E-mail'
                  className={`w-full rounded-xl py-2 px-3 bg-slate-100 focus:outline-none ${errors.email ? 'border border-red-600' : ''}`}
                  {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
                />
                {errors.email?.type === 'validate' && <p className='text-red-600 text-sm'>E-mail inválido</p>}
                {errors.email?.type === 'required' && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
              </div>

              <div className='col-span-2'>
                <textarea
                  name="message"
                  cols="60"
                  placeholder='Digite sua mensgaem'
                  className={`col-span-2 w-full rounded-xl py-2 px-3 bg-slate-100 focus:outline-none ${errors.message ? 'border border-red-600' : ''}`}
                  {...register('message', { required: true })}
                ></textarea>
                {errors.message && <p className='text-red-600 text-sm'>Campo obrigatório</p>}
              </div>

              <div className='col-span-2 flex justify-center'>

                <button
                  className='flex gap-3 items-center bg-red-600 px-6 py-1 rounded-md font-openSans text-lg text-white hover:bg-red-800 duration-300'
                  onClick={() => handleSubmit(onSubmit)()}
                  disabled={isLoading}>
                  <img src={loading} alt="" className={`h-5 animate-spin ${isLoading ? '' : 'hidden'}`} />
                  Enviar
                </button>

              </div>

              <div className='col-span-2 flex items-center justify-center'>
                {isVisible && !error && <p className='text-green-600 text-md'>Mensagem enviada com sucesso!</p>}
                {error && <p className='text-red-600 text-md'>Erro ao enviar mensagem!</p>}
              </div>

            </div>

          </form>



        </div>

      </div>



    </>

  )
}
