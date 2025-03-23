import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="bg-primary-background  grid grid-cols-1 lg:grid-cols-2">
        <div className="justify-self-end self-center md:pl-32">
          <h1 className="text-[4.8rem] mb-[18px] leading-[59px] font-bold text-title ">I’m Rayan Adlrdard <br /> <span className="text-yellow-100">Front-end</span> Developer</h1>
          <p className="mb-[25px] ">
          I am currently in my fourth year of studying Computer Science at Phnom Penh International University (PPIU). Alongside my academic pursuits, I have been gaining hands-on experience in web development, specializing in React.js/nextjs for front-end development and working with frameworks like Bootstrap and Tailwind CSS.
          </p>
          <Button className="h-[51px] w-[154px] bg-yellow-100 text-title hover:bg-yellow-600">
            <span>HIRE ME</span>
            <Image src={'/assets/icons/ArrowRight.svg'}  alt="my profile cv" height={16} width={16}/>
          </Button>
        </div>
        <div className="self-center justify-self-center">
          <Image src={'/assets/images/profile.png'}  alt="my profile cv" height={459} width={325}/>
        </div>
      </div>
    </>
  )
}

export default Hero