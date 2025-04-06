"use client"

import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ScrollAnimation from "./ScrollAnimation"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-16 text-[1.5rem]">
      <div className="px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About Column */}
          <ScrollAnimation direction="up" delay={0.1}>
            <div>
              <h3 className="text-lg md:text-[1.6rem] font-semibold mb-4 text-title">Ong Chansy</h3>
              <p className=" mb-4">
                A passionate full-stack developer focused on creating intuitive and efficient web applications.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </ScrollAnimation>

          {/* Quick Links */}
          <ScrollAnimation direction="up" delay={0.2}>
            <div>
              <h3 className="text-lg text-title font-semibold mb-4 md:text-[1.6rem]">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className=" hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className=" hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className=" hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#tools" className=" hover:text-primary transition-colors">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="#worksTimeline" className=" hover:text-primary transition-colors">
                    Timeline
                  </a>
                </li>
                <li>
                  <a href="#contact" className=" hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Contact Info */}
          <ScrollAnimation direction="up" delay={0.3}>
            <div>
              <h3 className="text-lg font-semibold mb-4 md:text-[1.6rem] text-title">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail size={16} className="mr-2 " />
                  <a
                    href="mailto:john@example.com"
                    className=" hover:text-primary transition-colors"
                  >
                    ongchansy13@example.com
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2 text-primary" />
                  <span className="">Phnom Penh, Steng Mean Chey</span>
                </li>
                <li className="mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="/assets/images/MyResume.pdf" download>
                      Download CV
                    </a>
                  </Button>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>

        {/* Copyright */}
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="pt-8 border-t border-t-gray-300 text-center text-sm ">
            <p>© {currentYear} Ong Chansy. All rights reserved.</p>
            <p className="mt-2">
              Built with <span className="">❤</span> using Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  )
}

