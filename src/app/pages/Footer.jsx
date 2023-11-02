import React from 'react'

const Footer = () => {
  return (
    <div className="justify-center items-start bg-neutral-50 self-stretch flex w-full flex-col">
            <div className="justify-center items-center self-stretch bg-white flex w-full flex-col px-5 py-12">
              <div className="items-start self-center flex w-full max-w-[1041px] justify-between gap-5 pr-8">
                <div className="items-start flex flex-col self-start">
                  <div className="text-slate-800 text-base font-bold ">
                    Company Info
                  </div>
                  <div className="items-start self-stretch flex grow flex-col mt-5">
                    <div className="text-neutral-500 text-sm font-bold ">
                      About Us
                    </div>
                    <div className="text-neutral-500 text-sm font-bold  mt-2.5">
                      Carrier
                    </div>
                    <div className="text-neutral-500 text-sm font-bold  mt-2.5">
                      We are hiring
                    </div>
                    <div className="text-neutral-500 text-sm font-bold  mt-2.5">
                      Blog
                    </div>
                  </div>
                </div>
                <div className="items-start flex flex-col self-start">
                  <div className="text-slate-800 text-base font-bold">
                    Legal
                  </div>
                  <div className="items-start self-stretch flex grow flex-col mt-5">
                    <div className="text-neutral-500 text-sm font-bold">
                      About Us
                    </div>
                    <div className="text-neutral-500 text-sm font-bold mt-2.5">
                      Carrier
                    </div>
                    <div className="text-neutral-500 text-sm font-bold mt-2.5">
                      We are hiring
                    </div>
                    <div className="text-neutral-500 text-sm font-bold mt-2.5">
                      Blog
                    </div>
                  </div>
                </div>
                <div className="items-start flex flex-col self-start">
                  <div className="text-slate-800 text-base font-bold">
                    Features
                  </div>
                  <div className="items-start self-stretch flex grow flex-col mt-5">
                    <div className="text-neutral-500 text-sm font-bold">
                      Business Marketing
                    </div>
                    <div className="text-neutral-500 text-sm font-bold mt-2.5">
                      User Analytic
                    </div>
                    <div className="text-neutral-500 text-sm font-bold mt-2.5">
                      Live Chat
                    </div>
                    <div className="text-neutral-500 text-sm font-bold mt-2.5">
                      Unlimited Support
                    </div>
                  </div>
                </div>
                <div className="items-start flex flex-col self-start">
                  <div className="text-slate-800 text-base font-bold">
                    Resources
                  </div>
                  <div className="items-start self-stretch flex grow flex-col mt-5">
                    <div className="text-neutral-500 text-sm font-bold">
                      IOS & Android
                    </div>
                    <div className="text-neutral-500 text-sm font-bold mt-2.5">
                      Watch a Demo
                    </div>
                    <div className="text-neutral-500 text-sm font-bold mt-2.5">
                      Customers
                    </div>
                    <div className="text-neutral-500 text-sm font-bold mt-2.5">
                      API
                    </div>
                  </div>
                </div>
                <div className="items-start flex flex-col self-start">
                  <div className="text-slate-800 text-base font-bold">
                    Get In Touch
                  </div>
                  <div className="items-start self-stretch flex grow flex-col mt-5">
                    <div className="items-start flex w-[143px] max-w-full gap-2.5 self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18.8478 12.3517C18.7365 12.2402 18.6043 12.1517 18.4587 12.0913C18.3131 12.031 18.157 11.9999 17.9995 11.9999C17.8419 11.9999 17.6858 12.031 17.5402 12.0913C17.3946 12.1517 17.2624 12.2402 17.1511 12.3517L15.2383 14.2645C14.3515 14.0005 12.6967 13.4005 11.6479 12.3517C10.5991 11.3029 9.99913 9.64814 9.73513 8.76135L11.6479 6.84857C11.7594 6.73723 11.8479 6.60498 11.9083 6.45941C11.9687 6.31383 11.9998 6.15778 11.9998 6.00018C11.9998 5.84258 11.9687 5.68653 11.9083 5.54095C11.8479 5.39538 11.7594 5.26313 11.6479 5.15179L6.84796 0.351838C6.73662 0.240304 6.60438 0.151819 6.4588 0.0914472C6.31322 0.031075 6.15717 0 5.99957 0C5.84197 0 5.68592 0.031075 5.54034 0.0914472C5.39477 0.151819 5.26252 0.240304 5.15118 0.351838L1.89681 3.60621C1.44082 4.0622 1.18402 4.68859 1.19362 5.32819C1.22122 7.03697 1.67361 12.9721 6.35117 17.6497C11.0287 22.3272 16.9639 22.7784 18.6738 22.8072H18.7074C19.341 22.8072 19.9398 22.5576 20.3934 22.104L23.6478 18.8497C23.7593 18.7383 23.8478 18.6061 23.9082 18.4605C23.9686 18.3149 23.9996 18.1589 23.9996 18.0013C23.9996 17.8437 23.9686 17.6876 23.9082 17.542C23.8478 17.3965 23.7593 17.2642 23.6478 17.1529L18.8478 12.3517ZM18.6954 20.406C17.1979 20.3808 12.0739 19.9788 8.04795 15.9517C4.00879 11.9125 3.61759 6.77057 3.5936 5.30299L5.99957 2.89701L9.10274 6.00018L7.55116 7.55177C7.41011 7.6927 7.30641 7.86657 7.24942 8.05764C7.19243 8.24872 7.18396 8.45098 7.22476 8.64615C7.25356 8.78415 7.95795 12.0565 9.94993 14.0485C11.9419 16.0405 15.2143 16.7449 15.3523 16.7737C15.5473 16.8156 15.7498 16.8078 15.941 16.751C16.1323 16.6942 16.3062 16.5901 16.4467 16.4485L17.9995 14.8969L21.1026 18.0001L18.6954 20.406Z" fill="#96BB7C"/>
                    </svg>
                      <div className="text-neutral-500 text-sm font-bold">
                        (480) 555-0103
                      </div>
                    </div>
                    <div className="items-start flex w-[290px] max-w-full gap-2.5 mt-2.5 self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 30" fill="none">
                      <g clip-path="url(#clip0_2636_3613)">
                        <path d="M12 17.9998C15.3089 17.9998 17.9999 15.3089 17.9999 11.9999C17.9999 8.69092 15.3089 5.99995 12 5.99995C8.69101 5.99995 6.00004 8.69092 6.00004 11.9999C6.00004 15.3089 8.69101 17.9998 12 17.9998ZM12 8.99992C13.6545 8.99992 14.9999 10.3454 14.9999 11.9999C14.9999 13.6544 13.6545 14.9999 12 14.9999C10.3455 14.9999 9.00001 13.6544 9.00001 11.9999C9.00001 10.3454 10.3455 8.99992 12 8.99992ZM11.13 29.7207C11.3839 29.902 11.688 29.9994 12 29.9994C12.312 29.9994 12.6161 29.902 12.87 29.7207C13.326 29.3982 24.0434 21.6598 23.9999 11.9999C23.9999 5.38344 18.6164 0 12 0C5.38357 0 0.000132055 5.38344 0.000132055 11.9924C-0.0433675 21.6598 10.674 29.3982 11.13 29.7207ZM12 2.99997C16.9634 2.99997 20.9999 7.03642 20.9999 12.0074C21.0314 18.6643 14.418 24.6417 12 26.6022C9.58353 24.6402 2.9686 18.6613 3.0001 11.9999C3.0001 7.03642 7.03655 2.99997 12 2.99997ZM12 17.9998C15.3089 17.9998 17.9999 15.3089 17.9999 11.9999C17.9999 8.69092 15.3089 5.99995 12 5.99995C8.69101 5.99995 6.00004 8.69092 6.00004 11.9999C6.00004 15.3089 8.69101 17.9998 12 17.9998ZM12 8.99992C13.6545 8.99992 14.9999 10.3454 14.9999 11.9999C14.9999 13.6544 13.6545 14.9999 12 14.9999C10.3455 14.9999 9.00001 13.6544 9.00001 11.9999C9.00001 10.3454 10.3455 8.99992 12 8.99992ZM11.13 29.7207C11.3839 29.902 11.688 29.9994 12 29.9994C12.312 29.9994 12.6161 29.902 12.87 29.7207C13.326 29.3982 24.0434 21.6598 23.9999 11.9999C23.9999 5.38344 18.6164 0 12 0C5.38357 0 0.000132055 5.38344 0.000132055 11.9924C-0.0433675 21.6598 10.674 29.3982 11.13 29.7207ZM12 2.99997C16.9634 2.99997 20.9999 7.03642 20.9999 12.0074C21.0314 18.6643 14.418 24.6417 12 26.6022C9.58353 24.6402 2.9686 18.6613 3.0001 11.9999C3.0001 7.03642 7.03655 2.99997 12 2.99997Z" fill="#96BB7C"/>
                        <path d="M12 17.9998C15.3089 17.9998 17.9999 15.3089 17.9999 11.9999C17.9999 8.69092 15.3089 5.99995 12 5.99995C8.69101 5.99995 6.00004 8.69092 6.00004 11.9999C6.00004 15.3089 8.69101 17.9998 12 17.9998ZM12 8.99992C13.6545 8.99992 14.9999 10.3454 14.9999 11.9999C14.9999 13.6544 13.6545 14.9999 12 14.9999C10.3455 14.9999 9.00001 13.6544 9.00001 11.9999C9.00001 10.3454 10.3455 8.99992 12 8.99992ZM11.13 29.7207C11.3839 29.902 11.688 29.9994 12 29.9994C12.312 29.9994 12.6161 29.902 12.87 29.7207C13.326 29.3982 24.0434 21.6598 23.9999 11.9999C23.9999 5.38344 18.6164 0 12 0C5.38357 0 0.000132055 5.38344 0.000132055 11.9924C-0.0433675 21.6598 10.674 29.3982 11.13 29.7207ZM12 2.99997C16.9634 2.99997 20.9999 7.03642 20.9999 12.0074C21.0314 18.6643 14.418 24.6417 12 26.6022C9.58353 24.6402 2.9686 18.6613 3.0001 11.9999C3.0001 7.03642 7.03655 2.99997 12 2.99997ZM12 17.9998C15.3089 17.9998 17.9999 15.3089 17.9999 11.9999C17.9999 8.69092 15.3089 5.99995 12 5.99995C8.69101 5.99995 6.00004 8.69092 6.00004 11.9999C6.00004 15.3089 8.69101 17.9998 12 17.9998ZM12 8.99992C13.6545 8.99992 14.9999 10.3454 14.9999 11.9999C14.9999 13.6544 13.6545 14.9999 12 14.9999C10.3455 14.9999 9.00001 13.6544 9.00001 11.9999C9.00001 10.3454 10.3455 8.99992 12 8.99992ZM11.13 29.7207C11.3839 29.902 11.688 29.9994 12 29.9994C12.312 29.9994 12.6161 29.902 12.87 29.7207C13.326 29.3982 24.0434 21.6598 23.9999 11.9999C23.9999 5.38344 18.6164 0 12 0C5.38357 0 0.000132055 5.38344 0.000132055 11.9924C-0.0433675 21.6598 10.674 29.3982 11.13 29.7207ZM12 2.99997C16.9634 2.99997 20.9999 7.03642 20.9999 12.0074C21.0314 18.6643 14.418 24.6417 12 26.6022C9.58353 24.6402 2.9686 18.6613 3.0001 11.9999C3.0001 7.03642 7.03655 2.99997 12 2.99997Z" fill="#96BB7C"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2636_3613">
                          <rect width="24" height="29.9997" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                      <div className="text-neutral-500 text-sm font-bold max-w-[256px] grow shrink-0 basis-auto">
                        4517 Washington Ave. Manchester, <br />
                        Kentucky 39495
                      </div>
                    </div>
                    <div className="items-start flex w-[290px] max-w-full gap-2.5 mt-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                      <g clip-path="url(#clip0_2636_3617)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.91875 5.71667C-0.75492 4.9804 -0.352185 4.32302 0.223498 3.85218C0.79918 3.38134 1.51369 3.12495 2.25 3.125H21.75C22.4863 3.12495 23.2008 3.38134 23.7765 3.85218C24.3522 4.32302 24.7549 4.9804 24.9187 5.71667L12 13.815L-0.91875 5.71667ZM-1 7.62V19.46L8.42988 13.53L-1 7.62ZM9.98663 14.5083L-0.689625 21.22C-0.425844 21.7905 -0.00951922 22.2724 0.510895 22.6096C1.03131 22.9469 1.63441 23.1256 2.25 23.125H21.75C22.3655 23.1251 22.9684 22.946 23.4885 22.6085C24.0086 22.2709 24.4246 21.7889 24.688 21.2183L14.0118 14.5067L12 15.7683L9.98663 14.5067V14.5083ZM15.5701 13.5317L25 19.46V7.62L15.5701 13.53V13.5317Z" fill="#96BB7C"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_2636_3617">
                          <rect width="24" height="26" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                      <div className="text-neutral-500 text-sm font-bold grow shrink-0 basis-auto">
                        debra.holt@example.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-center items-center  bg-neutral-50 flex w-full flex-col px-5 py-6">
              <div className="items-start self-center flex w-full max-w-[987px] justify-between gap-5">
                <div className="text-neutral-500 text-sm font-bold leading-6 tracking-wide max-w-[386px]  grow shrink-0 basis-auto">
                  Made With Love By Figmaland All Right Reserved
                </div>
                <div className="justify-center items-start flex gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5 11.5704C23.5 5.1801 18.3515 0 12.0014 0C5.64848 0.00143732 0.5 5.1801 0.5 11.5719C0.5 17.3456 4.7056 22.1319 10.2019 23V14.9151H7.28415V11.5719H10.2048V9.02062C10.2048 6.12155 11.9224 4.52037 14.5484 4.52037C15.8075 4.52037 17.1226 4.74603 17.1226 4.74603V7.59193H15.6724C14.2451 7.59193 13.7995 8.4845 13.7995 9.40008V11.5704H16.9875L16.4787 14.9136H13.7981V22.9986C19.2944 22.1304 23.5 17.3441 23.5 11.5704Z" fill="#96BB7C"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.5 1C9.51488 1 9.1395 1.01375 7.96663 1.066C6.79375 1.121 5.99487 1.30525 5.295 1.5775C4.56088 1.85363 3.89593 2.28676 3.34663 2.84663C2.7871 3.39621 2.35402 4.06108 2.0775 4.795C1.80525 5.4935 1.61963 6.29375 1.566 7.4625C1.51375 8.63812 1.5 9.01213 1.5 12.0014C1.5 14.9879 1.51375 15.3619 1.566 16.5347C1.621 17.7062 1.80525 18.5051 2.0775 19.205C2.35938 19.9282 2.73475 20.5415 3.34663 21.1534C3.95713 21.7652 4.57037 22.142 5.29363 22.4225C5.99487 22.6947 6.79238 22.8804 7.96388 22.934C9.13813 22.9862 9.51213 23 12.5 23C15.4879 23 15.8605 22.9862 17.0347 22.934C18.2049 22.879 19.0065 22.6947 19.7064 22.4225C20.44 22.1462 21.1045 21.7131 21.6534 21.1534C22.2652 20.5415 22.6406 19.9282 22.9225 19.205C23.1934 18.5051 23.379 17.7062 23.434 16.5347C23.4862 15.3619 23.5 14.9879 23.5 12C23.5 9.01213 23.4862 8.63813 23.434 7.46388C23.379 6.29375 23.1934 5.4935 22.9225 4.795C22.646 4.06106 22.2129 3.39618 21.6534 2.84663C21.1042 2.28655 20.4392 1.85339 19.705 1.5775C19.0037 1.30525 18.2035 1.11963 17.0334 1.066C15.8591 1.01375 15.4865 1 12.4973 1H12.5014H12.5ZM11.5141 2.98275H12.5014C15.4384 2.98275 15.7862 2.99238 16.9454 3.046C18.0179 3.09413 18.6009 3.27425 18.9886 3.42412C19.5015 3.6235 19.8686 3.86275 20.2536 4.24775C20.6386 4.63275 20.8765 4.9985 21.0759 5.51275C21.2271 5.89913 21.4059 6.48213 21.454 7.55463C21.5076 8.71375 21.5186 9.06163 21.5186 11.9973C21.5186 14.9329 21.5076 15.2821 21.454 16.4412C21.4059 17.5138 21.2258 18.0954 21.0759 18.4831C20.8995 18.9607 20.618 19.3926 20.2522 19.7467C19.8672 20.1318 19.5015 20.3696 18.9873 20.569C18.6023 20.7203 18.0192 20.899 16.9454 20.9485C15.7862 21.0007 15.4384 21.0131 12.5014 21.0131C9.56437 21.0131 9.21513 21.0007 8.056 20.9485C6.9835 20.899 6.40188 20.7203 6.01412 20.569C5.53631 20.3929 5.10405 20.1119 4.74913 19.7467C4.38303 19.392 4.10112 18.9598 3.92412 18.4818C3.77425 18.0954 3.59413 17.5124 3.546 16.4399C3.49375 15.2807 3.48275 14.9329 3.48275 11.9945C3.48275 9.0575 3.49375 8.711 3.546 7.55187C3.5955 6.47937 3.77425 5.89638 3.9255 5.50863C4.12488 4.99575 4.36413 4.62862 4.74913 4.24362C5.13412 3.85862 5.49987 3.62075 6.01412 3.42138C6.40188 3.27012 6.9835 3.09138 8.056 3.04188C9.07075 2.99513 9.464 2.98137 11.5141 2.98V2.98275ZM18.3726 4.80875C18.1993 4.80875 18.0276 4.84289 17.8675 4.90923C17.7073 4.97557 17.5618 5.0728 17.4392 5.19537C17.3167 5.31794 17.2194 5.46346 17.1531 5.62361C17.0868 5.78376 17.0526 5.9554 17.0526 6.12875C17.0526 6.30209 17.0868 6.47374 17.1531 6.63389C17.2194 6.79404 17.3167 6.93956 17.4392 7.06213C17.5618 7.1847 17.7073 7.28193 17.8675 7.34827C18.0276 7.41461 18.1993 7.44875 18.3726 7.44875C18.7227 7.44875 19.0585 7.30968 19.306 7.06213C19.5536 6.81458 19.6926 6.47884 19.6926 6.12875C19.6926 5.77866 19.5536 5.44292 19.306 5.19537C19.0585 4.94782 18.7227 4.80875 18.3726 4.80875ZM12.5014 6.3515C11.7521 6.33981 11.008 6.47729 10.3123 6.75594C9.61671 7.0346 8.98346 7.44885 8.44946 7.97458C7.91546 8.50032 7.49138 9.12703 7.20191 9.81823C6.91244 10.5094 6.76336 11.2513 6.76336 12.0007C6.76336 12.7501 6.91244 13.4919 7.20191 14.1831C7.49138 14.8743 7.91546 15.5011 8.44946 16.0268C8.98346 16.5525 9.61671 16.9668 10.3123 17.2454C11.008 17.5241 11.7521 17.6616 12.5014 17.6499C13.9844 17.6267 15.3988 17.0214 16.4393 15.9645C17.4799 14.9076 18.0631 13.4839 18.0631 12.0007C18.0631 10.5175 17.4799 9.09382 16.4393 8.03691C15.3988 6.97999 13.9844 6.37464 12.5014 6.3515ZM12.5014 8.33288C13.474 8.33288 14.4067 8.71923 15.0944 9.40695C15.7821 10.0947 16.1685 11.0274 16.1685 12C16.1685 12.9726 15.7821 13.9053 15.0944 14.593C14.4067 15.2808 13.474 15.6671 12.5014 15.6671C11.5288 15.6671 10.596 15.2808 9.90833 14.593C9.22061 13.9053 8.83425 12.9726 8.83425 12C8.83425 11.0274 9.22061 10.0947 9.90833 9.40695C10.596 8.71923 11.5288 8.33288 12.5014 8.33288Z" fill="#96BB7C"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
  <path d="M8.41075 19C16.713 19 21.2546 12.0731 21.2546 6.07669C21.2546 5.88285 21.2546 5.68625 21.2464 5.49241C22.1306 4.84789 22.8937 4.04993 23.5 3.13592C22.6741 3.50262 21.7988 3.7443 20.9026 3.85312C21.8466 3.28495 22.5536 2.391 22.8923 1.3374C22.0054 1.86647 21.0346 2.23787 20.0226 2.43534C19.3423 1.70572 18.4419 1.22237 17.4611 1.06016C16.4803 0.897946 15.4737 1.06592 14.5973 1.53807C13.7209 2.01023 13.0236 2.7602 12.6134 3.67182C12.2031 4.58345 12.1029 5.60585 12.3281 6.58066C10.5334 6.49005 8.77762 6.02057 7.17468 5.20269C5.57175 4.3848 4.15744 3.23678 3.0235 1.83307C2.44784 2.83421 2.27216 4.01843 2.53214 5.14526C2.79211 6.27209 3.46825 7.25705 4.42325 7.90013C3.70762 7.87565 3.00772 7.68215 2.38 7.33524V7.39754C2.38123 8.44631 2.74205 9.46247 3.40145 10.2743C4.06086 11.0861 4.9784 11.6438 5.999 11.853C5.61161 11.9605 5.21144 12.014 4.80963 12.0122C4.52635 12.0131 4.24365 11.9867 3.96537 11.9333C4.25383 12.8361 4.8155 13.6254 5.57171 14.1908C6.32793 14.7561 7.24081 15.0691 8.1825 15.0859C6.58276 16.3511 4.60668 17.0373 2.5725 17.034C2.21407 17.0355 1.85588 17.0147 1.5 16.9716C3.56458 18.297 5.96228 19.0008 8.41075 19Z" fill="#96BB7C"/>
</svg>
                </div>
              </div>
            </div>
          </div>
        
    
  )
}

export default Footer