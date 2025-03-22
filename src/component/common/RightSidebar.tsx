import React from 'react'
import Profile from '../Profile'
import AboutMe from '../AboutMe'
import Language from '../Language'
import Skills from '../Skills'
import ExtraSkills from '../ExtraSkills'
import ButtonDownload from './ButtonDownload'

const RightSidebar = () => {
  return (
    <>
        <Profile />
        <p className='w-[220px] h-[2px] bg-gray-300 my-[25px]' />
        <AboutMe />
        <p className='w-[220px] h-[2px] bg-gray-300 my-[25px]' />
        <Language />
        <p className='w-[220px] h-[2px] bg-gray-300 my-[25px]' />
        <Skills />
        <p className='w-[220px] h-[2px] bg-gray-300 my-[25px]' />
        <ExtraSkills />
        <p className='w-[220px] h-[2px] bg-gray-300 my-[25px]' />
        <ButtonDownload />
    </>
  )
}
 
export default RightSidebar