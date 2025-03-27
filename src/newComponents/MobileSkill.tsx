"use client"

import { motion } from "framer-motion"
import ScrollAnimation from "@/component/ScrollAnimation";

const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "Git", level: 85 },
]

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-8">
            <ScrollAnimation>
                <h2 className="text-[3.2rem] text-title font-bold mb-12 text-center">Skills</h2>
            </ScrollAnimation>

            <div className="bg-primary-background p-4">
                {skills.map((skill, index) => (
                    <ScrollAnimation key={index} delay={index * 0.1} direction="left">
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-yellow-100"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </div>
                    </ScrollAnimation>
                ))}
            </div>
        </section>
    )
}

