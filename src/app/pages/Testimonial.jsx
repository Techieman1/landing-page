import Testimonials from '@/components/Testimonial'
import React from 'react'

function Testimonial() {
  return (
    <div className='mx-40 mt-48'>
        <div>
            <h3 className='text font-bold leading-6'>Testimonials</h3>
            <h1 className='name text-2xl font-bold my-3 '>Watch our Courses</h1>
            <p className='second font-normal text-sm leading-5 tracking-wide'>Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="flex flex-row justify-around">
            <Testimonials src='/testimonial-user-cover-1.png' 
            name={"Regina Miles"}
            job={"Designer"}
            des={"Slate helps you see how many more days you need to work to reach your financial goal for the month and year."}
             />
            <Testimonials src='/testimonial-user-cover-2.png' 
            name={"Regina Miles"}
            job={"Designer"}
            des={"Slate helps you see how many more days you need to work to reach your financial goal for the month and year."}
             />
        </div>
    </div>
  )
}

export default Testimonial