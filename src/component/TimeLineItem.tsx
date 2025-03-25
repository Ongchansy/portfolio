"use client"
import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react'
import { LogoIcon } from './LogoIcon';
interface TimelineItem {
    id: number
    title: string
    date: string
    description: string
  }

  
const TimeLineItem = ({
    item,
    index
}:{item: TimelineItem,index:number}) => {
    const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Alternate sides for timeline items on desktop only
  const isEven = index % 2 === 0
  return (
    <div
    ref={ref}
    className={`relative flex items-start md:items-center ${
      // On mobile: always left-aligned
      // On desktop: alternating left/right
      isEven ? "justify-start" : "justify-start md:justify-end"
    }`}
  >
    {/* Timeline logo - adjusted for mobile and desktop */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="absolute left-4 md:left-1/2 top-3 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-primary-background rounded-full shadow-md z-10"
    >
      <LogoIcon item={item} />
    </motion.div>

    {/* Content card - adjusted for mobile and desktop */}
    <motion.div
      initial={{
        opacity: 0,
        x: isEven ? -20 : 20,
        y: 20,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : {
              opacity: 0,
              x: isEven ? -20 : 20,
              y: 20,
            }
      }
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.1, // Staggered delay based on index
      }}
      className={`
        ml-12 md:ml-0 
        w-[calc(100%-3rem)] md:w-5/12 
        ${isEven ? "md:pr-8" : "md:pl-8"}
      `}
    >
      <div className="bg-primary-background p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="text-xs md:text-sm font-medium text-muted-foreground mb-1">{item.date}</div>
        <h3 className="text-lg md:text-[1.8rem] text-title font-bold mb-1 md:mb-2">{item.title}</h3>
        <p className="text-sm md:text-[1.5rem] text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  </div>
  )
}

export default TimeLineItem