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
          title: "Company Founded",
          date: "January 2020",
          description: "Our company was founded with a mission to create innovative solutions for modern problems.",
        },
        {
          id: 2,
          title: "First Major Client",
          date: "March 2020",
          description: "We secured our first major client and began working on our flagship project.",
        },
        {
          id: 3,
          title: "Team Expansion",
          date: "August 2020",
          description: "Our team grew to 10 members, bringing in diverse talents and perspectives.",
        },
        {
          id: 4,
          title: "Product Launch",
          date: "January 2021",
          description: "We successfully launched our first product to the market with positive reception.",
        },
        {
          id: 5,
          title: "International Expansion",
          date: "June 2021",
          description: "We expanded our operations to three new countries, establishing a global presence.",
        },
        {
          id: 6,
          title: "Award Recognition",
          date: "December 2021",
          description: "Our work was recognized with an industry award for innovation and excellence.",
        },
      ]
  return (
    <div className="mxl:container xl:mx-auto px-4 py-8 md:py-12" id='worksTimeline'>
      <h1 className="text-2xl text-[3.2rem] font-bold text-title text-center mb-8 md:mb-12">Company Timeline</h1>
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