import Image from 'next/image'
import React from 'react'

function Product({src}) {
  return (
    <div className='flex mt-24'>
       <Image
            src={src}
            alt='product'
            width={210}
            height={410}
            />
            <div className="flex flex-col items-stretch w-[50%] ml-5 mr-10">
                    <div className="items-start flex flex-col my-auto">
                      <div className="justify-between items-start flex w-[242px] max-w-full gap-5">
                        <div className="text text-sm font-bold leading-6 tracking-wide">
                          2,769 online courses
                        </div>
                        <div className="items-start bg-slate-700  flex w-[50px] max-w-full justify-between gap-1.5 p-1.5 rounded-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M16 6.3H10.275L8.5 0.75L6.725 6.3H1L5.625 9.725L3.875 15.25L8.5 11.825L13.125 15.25L11.35 9.7L16 6.3Z" fill="#FFCE31"/>
                        </svg>
                          <div className="text-white text-xs leading-4 tracking-wide">
                            4.9
                          </div>
                        </div>
                      </div>
                      <div className="name text-base font-bold leading-6 tracking-normal mt-2.5">
                        Watch our Courses
                      </div>
                      <div className="des text-sm leading-5 tracking-wide mt-2.5">
                        We focus on ergonomics and <br />
                        meeting you where you work. It's <br />
                        only a keystroke away.
                      </div>
                      <div className="items-start flex w-[83px] max-w-full gap-2.5 mt-2.5 ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <g clip-path="url(#clip0_2636_3304)">
                            <path d="M1 9.8999C1.13261 9.8999 1.25979 9.95258 1.35355 10.0463C1.44732 10.1401 1.5 10.2673 1.5 10.3999V12.8999C1.5 13.1651 1.60536 13.4195 1.79289 13.607C1.98043 13.7945 2.23478 13.8999 2.5 13.8999H14.5C14.7652 13.8999 15.0196 13.7945 15.2071 13.607C15.3946 13.4195 15.5 13.1651 15.5 12.8999V10.3999C15.5 10.2673 15.5527 10.1401 15.6464 10.0463C15.7402 9.95258 15.8674 9.8999 16 9.8999C16.1326 9.8999 16.2598 9.95258 16.3536 10.0463C16.4473 10.1401 16.5 10.2673 16.5 10.3999V12.8999C16.5 13.4303 16.2893 13.939 15.9142 14.3141C15.5391 14.6892 15.0304 14.8999 14.5 14.8999H2.5C1.96957 14.8999 1.46086 14.6892 1.08579 14.3141C0.710714 13.939 0.5 13.4303 0.5 12.8999V10.3999C0.5 10.2673 0.552678 10.1401 0.646447 10.0463C0.740215 9.95258 0.867392 9.8999 1 9.8999Z" fill="#737373"/>
                            <path d="M8.14663 11.854C8.19308 11.9006 8.24825 11.9375 8.309 11.9627C8.36974 11.9879 8.43486 12.0009 8.50063 12.0009C8.5664 12.0009 8.63152 11.9879 8.69227 11.9627C8.75301 11.9375 8.80819 11.9006 8.85463 11.854L11.8546 8.854C11.9485 8.76011 12.0013 8.63278 12.0013 8.5C12.0013 8.36722 11.9485 8.23989 11.8546 8.146C11.7607 8.05211 11.6334 7.99937 11.5006 7.99937C11.3679 7.99937 11.2405 8.05211 11.1466 8.146L9.00063 10.293V1.5C9.00063 1.36739 8.94795 1.24021 8.85419 1.14645C8.76042 1.05268 8.63324 1 8.50063 1C8.36802 1 8.24085 1.05268 8.14708 1.14645C8.05331 1.24021 8.00063 1.36739 8.00063 1.5V10.293L5.85463 8.146C5.76075 8.05211 5.63341 7.99937 5.50063 7.99937C5.36786 7.99937 5.24052 8.05211 5.14663 8.146C5.05275 8.23989 5 8.36722 5 8.5C5 8.63278 5.05275 8.76011 5.14663 8.854L8.14663 11.854Z" fill="#737373"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_2636_3304">
                            <rect width="16" height="16" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide">
                          15 Sales
                        </div>
                      </div>
                      <div className="items-start flex w-[102px] max-w-full gap-1.5 mt-4 ">
                        <div className="text-stone-300 text-center text-base font-bold leading-6 tracking-normal">
                          $16.48
                        </div>
                        <div className="text-orange-300 text-center text-base font-bold leading-6 tracking-normal">
                          $6.48
                        </div>
                      </div>
                      <div className="justify-between items-start flex w-[242px] max-w-full gap-3 mt-8">
                        <div className="items-start flex justify-between gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66668C2.54278 5.37113 5.20379 2.71011 8.49934 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 4.00001C5.93612 4.03376 3.86642 6.10346 3.83268 8.66668C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66668C13.1323 6.10346 11.0626 4.03376 8.49934 4.00001ZM11.8327 9.33334H7.83268V5.33334H9.16601V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97068 4.47201L2.02734 3.52734L4.02134 1.52734L4.96468 2.47201L2.97201 4.47201H2.97068Z" fill="#96BB7C"/>
                        </svg>
                          <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                            22h...
                          </div>
                        </div>
                        <div className="items-start flex justify-between gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M15 3.307L14.3425 3.5255C13.4214 3.81404 12.4649 3.97373 11.5 4C10.633 4 9.839 3.5465 8.998 3.066C8.081 2.542 7.133 2 6 2C4.5615 2 2.9575 3.103 2 3.886V1H1V14C1.00026 14.2651 1.10571 14.5193 1.29319 14.7068C1.48066 14.8943 1.73486 14.9997 2 15H15V3.307ZM2 10.147C2.937 8.688 4.78 6.5 6 6.5C6.819 6.5 7.48 7.051 8.18 7.6345C8.9485 8.2745 9.819 9 11 9C12.118 8.94638 13.1809 8.49837 14 7.7355V10.2135C13.0781 10.7138 12.0488 10.9837 11 11C10.1978 10.9786 9.40531 10.8181 8.658 10.5255C7.80921 10.1974 6.90978 10.0196 6 10C4.5365 10 2.966 11.4795 2 12.579V10.147ZM6 3C6.867 3 7.661 3.4535 8.502 3.934C9.419 4.458 10.367 5 11.5 5C12.3438 4.98583 13.1829 4.87204 14 4.661V6.3215C13.6585 6.723 12.458 8 11 8C10.181 8 9.52 7.449 8.82 6.8655C8.0515 6.2255 7.181 5.5 6 5.5C4.532 5.5 2.9685 7.17 2 8.4225V5.212C2.773 4.483 4.6295 3 6 3ZM2.1245 14C2.931 12.9545 4.705 11 6 11C6.80225 11.0214 7.59469 11.1819 8.342 11.4745C9.19079 11.8026 10.0902 11.9804 11 12C12.036 11.9901 13.0582 11.7618 14 11.33V14H2.1245Z" fill="#E77C40"/>
                        </svg>
                          <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                            64 Lessons
                          </div>
                        </div>
                        <div className="items-start flex justify-between gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <g clip-path="url(#clip0_2636_3322)">
                                <path d="M16.3333 13.8332H2V0.833171C2 0.741504 1.925 0.666504 1.83333 0.666504H0.666667C0.575 0.666504 0.5 0.741504 0.5 0.833171V15.1665C0.5 15.2582 0.575 15.3332 0.666667 15.3332H16.3333C16.425 15.3332 16.5 15.2582 16.5 15.1665V13.9998C16.5 13.9082 16.425 13.8332 16.3333 13.8332ZM3.5 12.4998H14.6667C14.7583 12.4998 14.8333 12.4248 14.8333 12.3332V3.24984C14.8333 3.09984 14.6521 3.02692 14.5479 3.13109L10.1667 7.51234L7.55417 4.929C7.52284 4.89799 7.48054 4.88059 7.43646 4.88059C7.39238 4.88059 7.35007 4.89799 7.31875 4.929L3.38125 8.879C3.36596 8.89433 3.35385 8.91252 3.34562 8.93255C3.3374 8.95257 3.33322 8.97402 3.33333 8.99567V12.3332C3.33333 12.4248 3.40833 12.4998 3.5 12.4998Z" fill="#FFAB71"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2636_3322">
                                <rect width="16" height="14.6667" fill="white" transform="translate(0.5 0.666504)"/>
                                </clipPath>
                            </defs>
                        </svg>
                          <div className="text-neutral-500 text-xs leading-4 tracking-wide">
                            Progress
                          </div>
                        </div>
                      </div>
                      <div className="items-start border flex w-[141px] max-w-full gap-2.5 mt-6 px-5 py-2.5 rounded-[37px] border-solid">
                        <div className="text text-sm font-bold leading-5">
                          Learn More
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
                            <g clip-path="url(#clip0_2636_3327)">
                                <path d="M0.5 13.7143L6.21428 8L0.5 2.28571L1.64286 0L9.64286 8L1.64286 16L0.5 13.7143Z" fill="#96BB7C"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_2636_3327">
                                <rect width="9.14286" height="16" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                            </svg>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default Product