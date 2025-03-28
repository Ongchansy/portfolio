import React from 'react'

const AboutMe = () => {
  return (
    <div className="px-8 lg:px-0">
        <h1 className="text-[3.2rem] lg:hidden lg:text-[18px] font-bold text-center text-title mb-12">About Me</h1>
        <div className='flex flex-col gap-[10px] bg-primary-background p-8 lg:p-0'>
            <div className='flex  justify-between items-baseline'>
                <span className='bg-yellow-100 text-title text-[15px] px-2'>Name: </span>
                <span className='text-title text-[15px]'>Ong Chansy</span>
            </div>
            <div className='flex  justify-between items-baseline'>
                <span className='bg-yellow-100 text-title text-[15px] px-2'>Age: </span>
                <span className='text-title text-[15px]'>23</span>
            </div>
            <div className='flex  justify-between items-baseline'>
                <span className='bg-yellow-100 text-title text-[15px] px-2'>Freelance:</span>
                <span className=' text-[15px] text-[#7EB942]'>Available</span>
            </div>
            <div className='flex  justify-between items-baseline'>
                <span className='bg-yellow-100 text-title text-[15px] px-2'>Address:</span>
                <span className='text-title text-[15px]'>Phnom Penh</span>
            </div>
            <div className='flex  justify-between items-baseline'>
                <span className='bg-yellow-100 text-title text-[15px] px-2'>Phone:</span>
                <span className='text-title text-[15px]'>0973775764</span>
            </div>
        </div>
    </div>
  )
}

export default AboutMe