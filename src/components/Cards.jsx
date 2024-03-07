import React from 'react'

const cardContent = [
    {
        id: 1,
        icon: 'src/assets/icons/efficiency.svg',
        title: 'EFICIÊNCIA',
        text: 'Nossa abordagem focada na eficiência garante entregas pontuais e otimiza cada etapa do processo logístico. Economize tempo e recursos com a nossa eficiência operacional.'
    },
    {
        id: 2,
        icon: 'src/assets/icons/trust.svg',
        title: 'CONFIANÇA',
        text: 'Construímos confiança por meio de desempenho consistente. Com uma sólida reputação, garantimos a segurança e integridade de suas remessas. Sua carga, nossa responsabilidade.'
    },
    {
        id: 3,
        icon: 'src/assets/icons/inovation.svg',
        title: 'INOVAÇÃO',
        text: 'Impulsionamos o futuro da logística com soluções inovadoras. Da rastreabilidade avançada à tecnologia de ponta, estamos na vanguarda da inovação para oferecer resultados excepcionais.'
    }
]

export const Cards = () => {


    return (
        <>
            <div className='flex flex-col md:flex-row w-full items-center justify-center text-white font-openSans md:mt-[-80px] mt-[-100px]'>

                {cardContent.map((content) => (
                    <div className='flex flex-col text-center justify-around items-center h-[330px] w-[330px] rounded-md bg-red-600 md:mx-3 md:py-0 my-3 md:my-0 px-3'>
                        <div className='flex flex-col items-center gap-2'>
                            <img src={content.icon} alt="" className='w-16 h-16' />
                            <h1 className='font-bold text-2xl'>{content.title}</h1>
                        </div>
                        <span>{content.text}</span>
                    </div>
                ))}

            </div>
        </>
    )
}
