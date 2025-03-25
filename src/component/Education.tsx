import React from 'react'

const Education = () => {
  return (
    <div className='px-8'>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-[3.2rem] font-bold text-title mb-[2.5rem]'>Education</h3>
            <p className='text-[1.5rem] w-[600px] mb-[5rem] text-center'> Pursuing a Bachelor&apos; Degree in Computer Science at PPIU University.
            Passionate about full-stack development, web technologies, and building scalable digital solutions.</p>
        </div>

        <div className='bg-primary-background px-[5rem] lg:px-[10rem] py-[4.7rem] '>
            <div className='grid grid-cols-2'>
                <div>
                    <h5 className='mb-[2.5rem] font-medium text-[1.8rem] text-title'>Phnom Penh International University</h5>
                    <div className='flex gap-5 items-center'>
                        <p className='text-[1.5rem]'>Student</p>
                        <p className='bg-yellow-100 text-[1rem] px-[0.7rem] py-[0.4rem] text-white'>Jan 2020 - Dec 2025</p>
                    </div>
                </div>
                <div>
                    <p className='mb-[2.5rem] font-medium text-[1.8rem] text-title'>Bachelor&apos; Degree in Computer Science</p>
                    <p className='text-[1.5rem] leading-[24px]'> Gaining expertise in full-stack development, software engineering, and database
                    management, with a focus on building scalable and high-performance applications.</p>
                </div>
            </div>
            <p className=' h-[2px] bg-gray-300 my-[25px]' />

            <div className='grid grid-cols-2'>
                <div>
                    <h5 className='mb-[2.5rem] font-medium text-[1.8rem] text-title'>Front-End Development Training</h5>
                    <div className='flex gap-5 items-center'>
                        <p className='text-[1.5rem]'>Student</p>
                        <p className='bg-yellow-100 text-[1rem] px-[0.7rem] py-[0.4rem] text-white'>Jan 2024 - Dec 2024</p>
                    </div>
                </div>
                <div>
                    <p className='mb-[2.5rem] font-medium text-[1.8rem] text-title'>Certificate of web front-end training</p>
                    <p className='text-[1.5rem]'>Specialized training in modern front-end technologies, including React.js,
                    Tailwind CSS, and responsive UI/UX design.</p>
                </div>
            </div>
            <p className=' h-[2px] bg-gray-300 my-[25px]' />

            <div className='grid grid-cols-2'>
                <div>
                    <h5 className='mb-[2.5rem] font-medium text-[1.8rem] text-title'>Web Development Courses</h5>
                    <div className='flex gap-5 items-center'>
                        <p className='text-[1.5rem]'>Student</p>
                        <p className='bg-yellow-100 text-[1rem] px-[0.7rem]  py-[0.4rem] text-white'>Jan 2024 - Dec 2024</p>
                    </div>
                </div>
                <div>
                    <p className='mb-[2.5rem] font-medium text-[1.8rem] text-title'>Certificate of web training</p>
                    <p className='text-[1.5rem]'> Completed various courses on web development, covering JavaScript, Next.js,
                    API integration, and best practices for modern web applications.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education