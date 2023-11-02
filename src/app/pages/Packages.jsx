import Card from '@/components/Card'
import Image from 'next/image'
import React from 'react'

function Packages() {
  return (
  <div className='flex mt-36'>
    <div className='ml-40 '>
      <div className="bg-red-500 flex w-[94px] h-[7px] flex-col self-start" />
      <div className="text-slate-800 text-4xl font-bold leading-[50px] tracking-wide whitespace-nowrap mt-9 self-start max-md:max-w-full">
                Approdable Packages
      </div>
      <div className="text-neutral-500 text-sm leading-5 tracking-wide max-w-[351px] mt-9 self-start max-md:max-w-full">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: <br />
                Newtonian mechanics
      </div>
      <div className="items-start flex w-[101px] max-w-full gap-2.5 mt-9 self-start">
                <div className="text text-sm font-bold leading-6 tracking-wide self-stretch">
                  Learn More
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" viewBox="0 0 9 16" fill="none">
                  <g clip-path="url(#clip0_2636_3164)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780065 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780065 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16123 8.56959 8.23599C8.53857 8.31074 8.4931 8.37864 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994896 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z" fill="#96BB7C"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2636_3164">
                      <rect width="9" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
        </div>
    </div>
    <div>
    </div>

    <div className='flex ml-16 mr-20'>
      <Card src='/012.png' name={"Certified Teacher"} des={"The gradual accumulation of information about"}/>
      <Card src='/013.png' name={"Certified Teacher"} des={"The gradual accumulation of information about"}/>
    </div>
  </div>
            
  )
}

export default Packages