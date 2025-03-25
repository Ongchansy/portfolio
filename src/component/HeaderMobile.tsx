"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, Moon, Sun, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useMobile } from "@/hook/use-mobile"

export default function MobileHeader() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()

  if (!isMobile) return null

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Tools", href: "#education" },
    { name: "Timeline", href: "#timeline" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-primary-background/80 backdrop-blur-md z-50 shadow-sm flex items-center justify-between px-4">
        <div className="flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[280px]">
              <SheetHeader className="text-left">
                <SheetTitle></SheetTitle>
              </SheetHeader>

              <div className="flex flex-col items-center py-6">
                <Image src="/assets/images/my-profile.png" alt="John Doe" width={80} height={80} className="rounded-full mb-4" />
                <h2 className="text-xl font-bold mb-1">Ong Chansy</h2>
                <p className="text-sm text-muted-foreground mb-4">Front-End Web Developer</p>

                <Button className="w-1/2 mb-2" asChild>
                  <a href="/john-doe-cv.pdf" download onClick={() => setOpen(false)}>
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </a>
                </Button>
              </div>

              <nav className="flex-1 overflow-auto">
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        className="block py-2 px-4 hover:bg-accent rounded-md transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
          <h1 className="ml-2 font-bold">Ong Chansy</h1>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden under the fixed header */}
      <div className="h-16 md:hidden" />
    </>
  )
}

