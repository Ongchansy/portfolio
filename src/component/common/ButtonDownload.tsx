import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const ButtonDownload = () => {
  return <Button className='flex w-full cursor-pointer items-center gap-3 border-0 bg-yellow-100 rounded-none hover:bg-yellow-600'>
    <span className='text-title font-bold text-[15px]'>DOWNLOAD CV</span>
    <Image src={'/assets/icons/Frame.svg'} alt='download cv' height={16} width={14} />
  </Button>
}

export default ButtonDownload