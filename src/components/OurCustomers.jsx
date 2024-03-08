import React from 'react';
import { CUSTOMERS_DATA } from '../data/customers';

export const OurCustomers = () => {

    const customersLogo = CUSTOMERS_DATA;

    return (

        <>
            <div className='flex flex-col items-center justify-center font-openSans'>

                <div className='flex flex-col justify-center items-center w-full max-w-[1000px]'>
                    <div className='pt-24'>
                        <h1 className='text-3xl font-bold text-red-600'>NOSSOS CLIENTES</h1>
                    </div>

                    <div className='grid md:grid-cols-3 md:gap-4 gap-16 py-20'>

                        {customersLogo.map((customer, index) => {
                            return(
                                <div key={index}>
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
