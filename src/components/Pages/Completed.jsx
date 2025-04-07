import React from 'react'
import { Button } from '../ui/button'
const Completed = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen py-20 px-36">
        <div className='flex flex-col items-center gap-5'>
            <h1 className='text-[26px] font-[500]'><span className='text-[#f66136]'>Great!</span> Thank You for Applying</h1>
            <p className='text-black/50 text-center'> 
                We appreciate your application. Our Team will review it, and we'll<br/>
                reach out soon if there's a match. Stay tuned!
            </p>
            <Button className="bg-[#f66136] rounded-sm text-white mt-5 px-[50px] py-6">TRACK APPLICATION</Button> 
        </div>
    </div>
  )
}

export default Completed