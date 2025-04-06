import React from 'react'
import TimeLineItem from './TimeLineItem'
interface TimelineItem {
    id: number
    title: string
    date: string
    description: string
  }
const TimeLine = () => {
    const timelineItems: TimelineItem[] = [
        {
          id: 1,
          title: "Frontend Developer Intern at KiloIT",
          date: "16 November 2024",
          description: "I started my career as a Frontend Developer Intern at KiloIT, where I gained valuable experience in web development and honed my skills in HTML, CSS, JavaScript and Reactjs.",
        },
        {
          id: 2,
          title: "Freelance Web Developer",
          date: "Current",
          description: "I took on freelance projects, allowing me to work with various clients and gain diverse experience in web development.",
        },
      ]
  return (
    <div className="mxl:container xl:mx-auto px-8 py-8 md:py-12" id='worksTimeline'>
      <h1 className="text-2xl text-[3.2rem] font-bold text-title text-center mb-8 md:mb-12">Experience Timeline</h1>
      <div className="relative">
        {/* Center line - adjusted for mobile and desktop */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 md:transform md:-translate-x-1/2"></div>

        {/* Timeline items */}
        <div className="space-y-8 md:space-y-12">
          {timelineItems.map((item, index) => (
            <TimeLineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeLine