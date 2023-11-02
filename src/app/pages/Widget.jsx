import React from 'react'

function Widget() {
  return (
    <div className="justify-center items-center bg-red-50 flex flex-col px-5">
    <div className="items-center self-center flex w-[691px] max-w-full flex-col mt-40 mb-36 max-md:my-10">
      <div className="items-center self-center flex w-[469px] max-w-full flex-col">
        <div className="text text-center text-sm font-bold leading-6 tracking-wide self-center whitespace-nowrap">
          Newsletter
        </div>
        <div className="text-slate-800 text-center text-2xl font-bold leading-8 tracking-normal self-center whitespace-nowrap mt-2.5">
          Watch our Courses
        </div>
        <div className="text-neutral-500 text-center text-sm leading-5 tracking-wide self-stretch mt-2.5 max-md:max-w-full">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </div>
      </div>
      <div className="items-start border bg-stone-50 self-stretch flex w-full justify-between gap-5 mt-20 pl-5 rounded-md border-solid border-neutral-200 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-neutral-500 text-sm leading-7 tracking-wide self-center my-auto">
          Your Email
        </div>
        <div className="justify-center items-center border bg self-stretch flex w-[117px] max-w-full flex-col px-5 py-6 rounded-none border-solid border-neutral-200">
          <div className="text-white text-center text-sm leading-7 tracking-wide self-center whitespace-nowrap">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Widget