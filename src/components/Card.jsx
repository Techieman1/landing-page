import Image from 'next/image'
import React from 'react'

function Card({name, des, src}) {
  return (
    <div className="mr-10 items-start shadow bg-white flex w-full grow flex-col flex-1 mx-auto px-5 py-9 max-md:mt-4">
        <Image
        alt='scope'
        className='bg py-5 px-5 w-20 rounded-xl mb-5'
        src={src}
        width={50}
        height={42}
        />
        <h1 className='name font-bold text-base'>{name}</h1>
        <div className="bg-red-500 flex w-[50px] h-0.5 flex-col my-2 self-start max-md:ml-2.5" />
        <p className='des font-normal text-sm'>{des}</p>
    </div>
  )
}

export default Card