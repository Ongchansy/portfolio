import React from 'react'
import Image from 'next/image'

const ExtraSkills = () => {
  return (
    <>
        <h3 className='text-title font-medium test-[18px] mb-[15px]'>Extra Skills</h3>
        <div className='flex flex-col gap-[12px]'>
            <div className='flex items-center gap-4'>
                <Image src={'/assets/icons/Icons.svg'} height={15} width={15} alt='extra skill'/>
                <span>Bootstrap, Tailwindcss</span>
            </div>
            <div className='flex items-center gap-4'>
                <Image src={'/assets/icons/Icons.svg'} height={15} width={15} alt='extra skill'/>
                <span>Sql Server, Postgresql</span>
            </div>
            <div className='flex items-center gap-4'>
                <Image src={'/assets/icons/Icons.svg'} height={15} width={15} alt='extra skill'/>
                <span>Redux toolkit, Zustand</span>
            </div>
            <div className='flex items-center gap-4'>
                <Image src={'/assets/icons/Icons.svg'} height={15} width={15} alt='extra skill'/>
                <span>Git Knowledge</span>
            </div>
            <div className='flex items-center gap-4'>
                <Image src={'/assets/icons/Icons.svg'} height={15} width={15} alt='extra skill'/>
                <span>Agile/Scrum</span>
            </div>
        </div>
    </>
  )
}

export default ExtraSkills