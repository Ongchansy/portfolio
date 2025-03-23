"use client"

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      className="py-4 px-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-center items-center">
        <motion.ul 
          className="flex space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, staggerChildren: 0.1 }}
        >
          {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <motion.li key={item} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + index * 0.1 }}>
              <a href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-primary transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  )
}

