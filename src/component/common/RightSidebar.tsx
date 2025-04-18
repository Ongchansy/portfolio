import React from 'react'
import Profile from '../Profile'
import Language from '../Language'
import Skills from '../Skills'
import { ModeToggle } from '../mode-toggle'
import AboutMe from '../AboutMe'

const RightSidebar = () => {
  return (
    <>
        <Profile />
        <p className='w-[310px] h-[2px] bg-gray-300 my-[25px]' />
        <AboutMe />
        <p className='w-[310px] h-[2px] bg-gray-300 my-[25px]' />
        <Language />
        <p className='w-[310px] h-[2px] bg-gray-300 my-[25px]' />
        <Skills />
        <p className='w-[310px] h-[2px] bg-gray-300 my-[12px]' />
        <ModeToggle />
    </>
  )
}
 
export default RightSidebar