import Product from '@/components/Product'
import Image from 'next/image'
import React from 'react'

function Practice() {
  return (
    <div className='mx-40 mt-52'>
    <div>
        <h3 className='text font-bold leading-6'>Practice Advice</h3>
        <h1 className='name text-4xl font-bold my-3 '>Approdable Packages</h1>
        <p className='second font-normal text-sm leading-5 tracking-wide'>Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics </p>
    </div>
    <div className="flex flex-row justify-around">
            <Product src='/Screenshot.png'/>
            <Product src='/Screen.png'/>
    </div>
</div>
  )
}

export default Practice