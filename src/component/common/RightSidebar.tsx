import React from 'react'
import Profile from '../Profile'
import Language from '../Language'
import Skills from '../Skills'
import ButtonDownload from './ButtonDownload'
import { ModeToggle } from '../mode-toggle'
import AboutMe from '../AboutMe'

const RightSidebar = () => {
  return (
    <>
        <Profile />
        <div className='mt-5'>
          <ButtonDownload />
        </div>
        <p className='w-[265px] h-[2px] bg-gray-300 my-[25px]' />
        <AboutMe />
        <p className='w-[220px] h-[2px] bg-gray-300 my-[25px]' />
        <Language />
        <p className='w-[265px] h-[2px] bg-gray-300 my-[25px]' />
        <Skills />
        <p className='w-[265px] h-[2px] bg-gray-300 my-[25px]' />
        {/* <ExtraSkills />
        <p className='w-[265px] h-[2px] bg-gray-300 my-[25px]' /> */}
        <ModeToggle />
    </>
  )
}
 
export default RightSidebar