import React from 'react'
import { ModeToggle } from '../mode-toggle'
import { MenuTooltip } from '../HoverNavMenu'

const SideNavigation = () => {
  return (
    <nav className=''>
        <div className='mb-27'>
            <ModeToggle />
        </div>

        <div className='flex flex-col gap-11 items-center'>
            <MenuTooltip href='/home' iconUrl='./assets/icons/Home.svg' message='Home' />
            <MenuTooltip href='/service' iconUrl='./assets/icons/Services.svg' message='Service' />
            <MenuTooltip href='/portfolio' iconUrl='./assets/icons/Portfolio.svg' message='Portfolio' />
            <MenuTooltip href='/blog' iconUrl='./assets/icons/Blog.svg' message='Blog' />
            <MenuTooltip href='/contact' iconUrl='./assets/icons/Contact.svg' message='Contact' />
        </div>
    </nav>
  )
}

export default SideNavigation