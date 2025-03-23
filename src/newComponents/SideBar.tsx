"use client"

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Moon, Sun, Github, Linkedin, Twitter, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Sidebar() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.aside 
      className="w-[305px] bg-background border-r flex flex-col p-6"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <Image
            src="/placeholder.svg"
            alt="John Doe"
            width={120}
            height={120}
            className="rounded-full"
          />
        </motion.div>
        <motion.h1 
          className="text-2xl font-bold mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          John Doe
        </motion.h1>
        <motion.p 
          className="text-sm text-muted-foreground mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full-stack Web Developer
        </motion.p>
        <motion.div
          className="space-y-2 w-full"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button className="w-full" asChild>
            <a href="/john-doe-cv.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Hire Me
            </a>
          </Button>
        </motion.div>
      </div>
      <div className="mt-auto">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-full"
        >
          {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem] mr-2" /> : <Moon className="h-[1.2rem] w-[1.2rem] mr-2" />}
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>
    </motion.aside>
  )
}

