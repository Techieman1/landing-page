import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-red-50'>
      <div className='flex justify-around items-center bg-red-50'>
      <div className='flex'>
        <h1 className="text-slate-800 text-2xl font-bold leading-8 tracking-normal mr-12">Brandname</h1>
        <Link href='/' className='mx-5'>Home</Link>
        <Link href='/' className='mr-5'>Product</Link>
        <Link href='/' className='mr-5'>Pricing</Link>
        <Link href='/' className='mr-5'>Contact</Link>
      </div>
          <div className="items-start self-stretch flex  max-w-full justify-between gap-5 mt-3">
          <div className="text-stone-400 text-right text-sm font-bold leading-5 tracking-wide self-center my-auto">
            Login
          </div>
          <div className="items-start bg self-stretch flex max-w-full justify-between gap-4 px-6 py-4 rounded-md">
            <div className="text-white text-sm font-bold leading-5 tracking-wide self-stretch">
              JOIN US
            </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                <g clip-path="url(#clip0_2636_3118)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_2636_3118">
                    <rect width="12" height="10" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
          </div>
        </div>
    </div>
    <div className="justify-end self-center w-full  mt-12">
    <div className="gap-5 pl-20 flex">
      <div className="flex flex-col items-stretch w-[43%] ">
        <div className="justify-center items-start flex flex-col my-auto">
          <div className="text text-base font-bold leading-6 tracking-normal">
            Welcome
          </div>
          <div className="text-slate-800 text-6xl font-bold leading-[80.04px] tracking-wide mt-8">
            Best Learning Opportunities
          </div>
          <div className="text-neutral-500 text-xl leading-8 tracking-wide mt-8">
            Our goal is to make online education work for everyone
          </div>
          <div className="items-start flex w-[305px] max-w-full gap-2.5 mt-8">
            <div className="items-center bg self-stretch flex w-[133px] max-w-full flex-col px-5 py-4 rounded-md">
              <div className="text-white text-center text-sm font-bold leading-5 tracking-wide">
                Join Us
              </div>
            </div>
            <div className="items-center border border-[color:#96BB7C] self-stretch flex w-[162px] max-w-full flex-col px-5 py-4 rounded-md border-solid">
              <div className="text text-center text-sm font-bold leading-5 tracking-wide">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[57%] ml-5">
        <Image
          loading="lazy"
          alt='Placeholder'
          width={500}
          height={650}
          src='/Placeholder.png'
          className="aspect-[1.07] object-contain object-center w-full overflow-hidden grow"
        />
      </div>
    </div>
  </div>
    </div>
  )
}

export default Header