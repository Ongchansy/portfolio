import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Profile = () => { 
  return (
    <>
        <div className='flex flex-col items-center justify-center '>
            <Image src="/assets/images/my-profile.png" height={150} width={150}  alt='profile' style={{height:150, width: 150}} className='border z-10 bg-gray-50 border-b-fuchsia-50  rounded-full'/>
        </div>

        <h3 className='text-[1.8rem] text-title font-medium mt-[31px] text-center'>Ong Chansy</h3>
        <p className='text-[15px] mt-[1.5rem]  text-center'>Front-End Developer</p>

        <ul className='flex items-center gap-4 justify-center mt-4'>
           <Link href={'#'}>
                <li className='bg-yellow-100 flex items-center justify-center rounded-full size-[24px]'>
                    <Image src={`/assets/icons/social/Icons-facebook.svg`} alt='facebook' height={14} width={14}/>
                </li>
           </Link>
           <Link href={'#'}>
                <li className='bg-yellow-100 flex items-center justify-center rounded-full size-[24px]'>
                    <Image src={`/assets/icons/social/Icons-Youtube.svg`} alt='facebook' height={14} width={14}/>
                </li>
           </Link>
           <Link href={'#'}>
                <li className='bg-yellow-100 flex items-center justify-center rounded-full size-[24px]'>
                    <Image src={`/assets/icons/social/Icons-twitter.svg`} alt='facebook' height={14} width={14}/>
                </li>
           </Link>
           <Link href={'#'}>
                <li className='bg-yellow-100 flex items-center justify-center rounded-full size-[24px]'>
                    <Image src={`/assets/icons/social/Icons-instagram.svg`} alt='facebook' height={14} width={14}/>
                </li>
           </Link>
           <Link href={'#'}>
                <li className='bg-yellow-100 flex items-center justify-center rounded-full size-[24px]'>
                    <Image src={`/assets/icons/social/Icons-linkedin.svg`} alt='facebook' height={14} width={14}/>
                </li>
           </Link>
           <Link href={'#'}>
                <li className='bg-yellow-100 flex items-center justify-center rounded-full size-[24px]'>
                    <Image src={`/assets/icons/social/Icons-dribbble.svg`} alt='facebook' height={14} width={14}/>
                </li>
           </Link>
        </ul>
    </>
  )
}
 
export default Profile