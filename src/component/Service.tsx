import Image from 'next/image'
import React from 'react'

const Service = () => {
  return (
    <>
        <div className='px-8'>
        <div className="flex flex-col justify-center items-center text-center">
            <h3 className="font-bold text-title text-[3.2rem] mb-[25px]">My Services</h3>
            <p className="text-[1.5rem] min-w-[300px] mb-[50px]">
                I specialize in building modern, scalable, and high-performance web applications. <br/>
                From front-end design to back-end development, I create seamless digital experiences  
                tailored to your business needs.
            </p>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                <div className='w-full flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <Image src={'/assets/images/coding.png'} alt='coding, web development' height={68} width={68} />
                    <span className='mt-[23px] text-center mb-[15px] text-title text-[18px] font-medium'>Web Development</span>
                    <span className='text-center'>Blog, E-commerce</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <Image src={'/assets/images/illustration.png'} alt='coding, web development' height={68} width={68} />
                    <span className='mt-[23px] text-center mb-[15px] text-title text-[18px] font-medium'>UI/UX Design</span>
                    <span className='text-center'>Mobile app, website design</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <Image src={'/assets/images/Microphone.png'} alt='coding, web development' height={68} width={68} />
                    <span className='mt-[23px] text-center mb-[15px] text-title text-[18px] font-medium'>Content Creator</span>
                    <span className='text-center'>Educatin, Learning, Video Code meme</span>
                </div>

                <div className='w-full px-[25px] flex flex-col items-center justify-center h-[250px] bg-primary-background'>
                    <h6 className='mt-[23px] text-center mb-[15px] text-title text-[18px] font-medium'>Advertising</h6>
                    <p className='text-center'>..</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Service