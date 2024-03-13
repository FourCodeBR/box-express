import React from 'react';
import { CUSTOMERS_DATA } from '../data/customers';

export const OurCustomers = () => {

    const customersLogo = CUSTOMERS_DATA;

    return (

        <>
            <div className='flex flex-col items-center justify-center font-openSans' id='customers'>

                <div className='flex flex-col justify-center items-center w-full max-w-[1000px]'>
                    <div className='pt-24'>
                        <h1 className='md:text-3xl text-2xl font-bold text-red-600'>NOSSOS CLIENTES</h1>
                    </div>

                    <div className='grid md:grid-cols-3 grid-cols-2  md:gap-20 gap-16 py-20 px-5'>

                        {customersLogo.map((customer, index) => {
                            return(
                                <div key={index} className='flex items-center justify-center'>
                                    <img src={customer.logo} alt="" />
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </>

    )
}
