import React from 'react'
import { ProgressBar } from './common/ProgressBar'

const Skills = () => {
  return (
    <>
        <h3 className='text-title font-medium test-[18px] mb-[15px]'>Skills</h3>
        <div className='flex flex-col gap-[12px]'>
                    <div>
                        <div className='flex items-center justify-between text-[1.4rem]'>
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <ProgressBar start={0} end={90} />
                    </div>
                    <div>
                        <div className='flex items-center justify-between text-[1.4rem]'>
                            <span>CSS</span>
                            <span>85%</span>
                        </div>
                        <ProgressBar start={0} end={85} />
                    </div>
                    <div>
                        <div className='flex items-center justify-between text-[1.4rem]'>
                        <span>JAVASCRIPT</span>
                        <span>67%</span>
                        </div>
                        <ProgressBar start={0} end={67} />
                    </div>
                    <div>
                        <div className='flex items-center justify-between text-[1.4rem]'>
                            <span>REACTJS</span>
                            <span>80%</span>
                        </div>
                        <ProgressBar start={0} end={80} />
                    </div>
                </div>
    </>
  )
}

export default Skills