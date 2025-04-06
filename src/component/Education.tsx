import React from 'react'

const Education = () => {
  return (
    <div className='md:px-8' id='education'>
        <div className='flex flex-col px-4 justify-center items-center'>
            <h3 className='text-[3.2rem] font-bold text-title mb-[2.5rem]'>Education</h3>
            <p className='text-[1.5rem] min-w-[200px] mb-[5rem] text-center'> Pursuing a Bachelor&apos; Degree in Computer Science at PPIU University. <br/>
            Passionate about full-stack development, web technologies, and building scalable digital solutions.</p>
        </div>

        <div className='bg-primary-background px-[1.6rem] md:px-[5rem] lg:px-[10rem] py-[4.7rem] '>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <h5 className='md:mb-[2.5rem] mb-[1rem] font-medium text-[1.8rem] text-title'>Phnom Penh International University</h5>
                    <div className='flex gap-5 items-center mb-[1rem]'>
                        <p className='text-[1.5rem]'>Student</p>
                        <p className='bg-yellow-100 text-[1rem] px-[0.7rem] py-[0.4rem] text-white'>Jan 2020 - Dec 2025</p>
                    </div>
                </div>
                <div>
                    <p className='md:mb-[2.5rem] mb-[1rem] font-medium text-2xl md:text-[1.8rem] md:text-title'>Bachelor&apos; Degree in Computer Science</p>
                    <p className='text-[1.5rem] leading-[24px]'> Gaining expertise in full-stack development, software engineering, and database
                    management, with a focus on building scalable and high-performance applications.</p>
                </div>
            </div>
            <p className=' h-[2px] bg-gray-300 my-[25px]' />

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <h5 className='md:mb-[2.5rem] mb-[1rem] font-medium text-[1.8rem] text-title'>Front-End Development Internship</h5>
                    <div className='flex gap-5 items-center mb-[1rem]'>
                        <p className='text-[1.5rem]'>Junior frontend developer</p>
                        <p className='bg-yellow-100 text-[1rem] px-[0.7rem] py-[0.4rem] text-white'>November 2024 - Current</p>
                    </div>
                </div>
                <div>
                    <p className='md:mb-[2.5rem] mb-[1rem] font-medium text-2xl md:text-[1.8rem] md:text-title'>Certificate of web front-end Internship</p>
                    <p className='text-[1.5rem]'>Specialized in modern front-end technologies, including React.js,
                    Tailwind CSS, and responsive UI/UX design.</p>
                </div>
            </div>
            <p className='h-[2px] bg-gray-300 my-[25px]' />

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className=''>
                    <h5 className='md:mb-[2.5rem] mb-[1rem] font-medium text-[1.8rem] text-title'>Web Development Courses (Completed)</h5>
                    <div className='flex gap-5 items-center mb-[1rem]'>
                        <p className='text-[1.5rem]'>Student</p>
                        <p className='bg-yellow-100 text-[1rem] px-[0.7rem]  py-[0.4rem] text-white'>March 2023</p>
                    </div>
                </div>
                <div>
                    <p className='md:mb-[2.5rem] mb-[1rem] font-medium text-2xl md:text-[1.8rem] md:text-title'>Certificate of web training</p>
                    <p className='text-[1.5rem]'> Completed various courses on web development, covering JavaScript, Next.js,
                    API integration, and best practices for modern web applications.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education