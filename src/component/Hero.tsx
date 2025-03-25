import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="bg-primary-background  grid grid-cols-1 lg:grid-cols-2 px-8 py-16">
        <div className="justify-self-end self-center md:pl-32">
          <h1 className="text-[4.8rem] mb-[18px] leading-[59px] font-bold text-title ">I’m Ong Chansy<br /> <span className="text-yellow-100">Front-end</span> Developer</h1>
          <p className="mb-[25px] text-[1.6rem]">
          I am currently in my fourth year of studying Computer Science at Phnom Penh International University (PPIU). Alongside my academic pursuits, I have been gaining hands-on experience in web development, specializing in React.js/nextjs for front-end development and working with frameworks like Bootstrap and Tailwind CSS.
          </p>
          <Button className="h-[51px] w-[154px] bg-yellow-100 text-title hover:bg-yellow-600">
            <span>HIRE ME</span>
            <Image src={'/assets/icons/ArrowRight.svg'}  alt="my profile cv" height={16} width={16}/>
          </Button>
        </div>
        <div className="self-center justify-self-center">

          <Image src={'/assets/images/my-profile.png'}  alt="my profile cv" height={459} width={325} className='min-h-[459px] min-w-[200px]'/>
        </div>
      </div>
    </>
  )
}

export default Hero