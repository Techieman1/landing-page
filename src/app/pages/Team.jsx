import Profile from '@/components/Profile'
import React from 'react'

function Team() {
  return (
    <div className='mx-40 mt-52'>
        <div>
            <h3 className='text font-bold leading-6'>Team</h3>
            <h1 className='name text-2xl font-bold my-3 '>Get Quality Education</h1>
            <p className='second font-normal text-sm leading-5 tracking-wide'>Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="flex flex-row justify-around">
            <Profile src="/user-cover-1.png" name={"Julian Jameson"}/>
            <Profile src="/user-cover-2.png" name={"Julian Jameson"}/>
            <Profile src="/user-cover-3.png" name={"Julian Jameson"}/>
            <Profile src="/user-cover-4.png" name={"Julian Jameson"}/>
        </div>
    </div>
  )
}

export default Team
