import React from 'react'

const AboutMe = () => {
  return (
    <>
        <div className='flex flex-col gap-[10px]'>
            <div className='flex  justify-between items-baseline'>
                <span className='bg-yellow-100 text-title text-[15px] px-2'>Age: </span>
                <span className='text-title text-[15px]'>23</span>
            </div>
            <div className='flex  justify-between items-baseline'>
                <span className='bg-yellow-100 text-title text-[15px] px-2'>Residence:</span>
                <span className='text-title text-[15px]'>BD</span>
            </div>
            <div className='flex  justify-between items-baseline'>
                <span className='bg-yellow-100 text-title text-[15px] px-2'>Freelance:</span>
                <span className=' text-[15px] text-[#7EB942]'>Available</span>
            </div>
            <div className='flex  justify-between items-baseline'>
                <span className='bg-yellow-100 text-title text-[15px] px-2'>Address:</span>
                <span className='text-title text-[15px]'>Phnom Penh</span>
            </div>
        </div>
    </>
  )
}

export default AboutMe