import React from 'react'
import office from '../assets/img/office.png'
import states from '../assets/img/states.png'
import trucks from '../assets/img/trucks.png'
import aboutImg from '../assets/img/aboutImg.png'

const aboutSectionInfos = [
    {
        icon: office,
        number: '5',
        text: 'Filiais'
    },
    {
        icon: states,
        number: '20',
        text: 'Estados'
    },
    {
        icon: trucks,
        number: '350',
        text: 'Veículos'
    }
]

let aboutText = 'Bem-vindo à Box Express, sua parceira confiável em soluções logísticas. Fundada com o compromisso de simplificar a complexidade do transporte e da cadeia de suprimentos, nós oferecemos serviços ágeis e personalizados para atender às necessidades de nossos clientes. Com uma equipe experiente e uma abordagem orientada para a excelência, estamos dedicados a impulsionar o sucesso de seus negócios através de operações eficientes e confiáveis.'

export const AboutSection = () => {

    let img = aboutImg;

    return (

        <>
            <div className='md:grid md:grid-cols-2 flex flex-col gap-8 font-openSans md:py-20 py-10 px-10' id='about'>
                <div className='flex md:justify-end justify-center items-center'>
                    <img src={img} alt="" className='h-[450px] w-[450px] hidden md:block'/>
                </div>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <div className='w-full max-w-[390px] text-justify'>
                        <h1 className='text-center md:text-3xl text-2xl text-red-600 font-bold pb-3'>SOBRE A EMPRESA</h1>
                        <span className='text-wrap'>{aboutText}</span>
                        <div className='grid grid-cols-3 gap-3 w-full bg-red-600 h-[150px] rounded-md mt-4 drop-shadow-lg'>

                            {aboutSectionInfos.map((info, index) => (
                                <div key={index} className='flex flex-col gap-1 py-3 justify-center items-center'>
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
