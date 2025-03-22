import Image from 'next/image'
import React from 'react'

const Service = () => {
  return (
    <>
        <div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='font-bold  text-title text-3xl mb-[25px]'>My Services</h3>
                <p className='text-[15px] w-[438px] mb-[50px]'>Amet mi mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum </p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='w-full flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <Image src={'/assets/images/coding.png'} alt='coding, web development' height={68} width={68} />
                    <span className='mt-[23px] mb-[15px] text-title text-[18px] font-medium'>web development</span>
                    <span>Blog, E-commerce</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <Image src={'/assets/images/illustration.png'} alt='coding, web development' height={68} width={68} />
                    <span className='mt-[23px] mb-[15px] text-title text-[18px] font-medium'>UI/UX Design</span>
                    <span>Mobile app, website design</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <Image src={'/assets/images/Microphone.png'} alt='coding, web development' height={68} width={68} />
                    <span className='mt-[23px] mb-[15px] text-title text-[18px] font-medium'>Sound Design</span>
                    <span>Voice Over, Beat Making</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <Image src={'/assets/images/game-development.png'} alt='coding, web development' height={68} width={68} />
                    <span className='mt-[23px] mb-[15px] text-title text-[18px] font-medium'>Game Design</span>
                    <span>Character Design, Props & Objects</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <Image src={'/assets/images/Photographer.png'} alt='coding, web development' height={68} width={68} />
                    <span className='mt-[23px] mb-[15px] text-title text-[18px] font-medium'>Photography</span>
                    <span>portrait, product photography</span>
                </div>
                <div className='w-full px-[25px] flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <h6 className='mb-[23px]'>Advertising</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service