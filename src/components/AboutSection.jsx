import React from 'react'

const aboutSectionInfos = [
    {
        icon: 'src/assets/img/office.png',
        number: '5',
        text: 'Filiais'
    },
    {
        icon: 'src/assets/img/states.png',
        number: '20',
        text: 'Estados'
    },
    {
        icon: 'src/assets/img/trucks.png',
        number: '350',
        text: 'Veículos'
    }
]

let aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum quam, tempor vestibulum velit quis, posuere egestas elit. Donec tincidunt, ligula id blandit consectetur, risus ligula viverra arcu, a rutrum leo ligula eu urna. Phasellus non tortor at nisl laoreet ultrices ac eget felis. Morbi tempus facilisis nulla interdum cursus.'

export const AboutSection = () => {

    let img = 'src/assets/img/aboutImg.png'

    return (

        <>
            <div className='md:grid md:grid-cols-2 flex flex-col gap-8 font-openSans md:py-20 py-10 px-10'>
                <div className='flex md:justify-end justify-center items-center'>
                    <img src={img} alt="" className='h-[400px] w-[400px]'/>
                </div>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <div className='w-full max-w-[390px] text-justify'>
                        <h1 className='text-center text-3xl text-red-600 font-bold pb-3'>SOBRE A EMPRESA</h1>
                        <span className='text-wrap'>{aboutText}</span>
                        <div className='grid grid-cols-3 gap-3 w-full bg-red-600 h-[150px] rounded-md mt-4'>

                            {aboutSectionInfos.map((info) => (
                                <div className='flex flex-col gap-1 py-3 justify-center items-center'>
                                    <img src={info.icon} alt="" className='w-11 h-11' />
                                    <span className='text-3xl text-white font-bold'>{info.number}</span>
                                    <span className='text-xl text-white'>{info.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
