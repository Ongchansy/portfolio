import React from 'react'
import { ProgressBar } from './common/ProgressBar'

const Language = () => {
  return (
    <>
        <h3 className='text-title font-medium text-[18px] mb-[15px]'>Languages</h3>
        
        <div className='flex flex-col gap-[12px]'>
            <div>
                <div className='flex items-center justify-between text-[1.4rem]'>
                    <span>Khmer</span>
                    <span>100%</span>
                </div>
                <ProgressBar start={0} end={100} />
            </div>

            <div>
                <div className='flex items-center justify-between text-[1.4rem]'>
                    <span>English</span>
                    <span>70%</span>
                </div>
                <ProgressBar start={0} end={70} />
            </div>
        </div>
    </>
  )
}

export default Language