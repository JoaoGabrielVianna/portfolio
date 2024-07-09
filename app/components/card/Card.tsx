import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

const Card = ({ src = '', href = '', title = '' }) => {
  return (
    <div className={clsx(
      !href && ' cursor-not-allowed opacity-50',
      'sm:w-[400px] sm:h-[320px] mx-8 bg-background-card-color rounded-[50px] cursor-pointer'
    )}>
      <Image
        width={400}
        height={240}
        src={src}
        alt='card'
        className='rounded-t-[50px]'
      />
      <div className='px-8 py-4 flex justify-between '>
        <div className='flex flex-col gap-1'>
          <h2 className=' text-[.7rem] font-extrabold'>{href ? 'CLIQUE AQUI PARA VISITAR' : 'EM BREVE...'}</h2>
          <h1 className='text-[1.2rem] font-extrabold'>{title}</h1>
        </div>

        <Image
          width={12}
          height={12}
          alt='arrow'
          src="/assets/svgs/arrow-icon.svg" />
      </div>
    </div>
  )
}

export default Card