"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
    SiReact,
    SiTailwindcss,
    SiGithub,
    SiTypescript,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiDocker,
    SiFirebase,
    SiGraphql,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import ScrollAnimation from "@/component/ScrollAnimation";

const toolCategories = [
    {
        name: "Frontend",
        tools: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        ],
    },
    {
        name: "Backend",
        tools: [
            { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
        ],
    },
    {
        name: "DevOps",
        tools: [
            { name: "GitHub", icon: SiGithub, color: "#181717" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "AWS", icon: FaAws, color: "#232F3E" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        ],
    },
]

export default function Tools() {
    return (
        <section id="tools" className="py-20 px-8">
            <ScrollAnimation>
                <h2 className="text-[3.2rem] text-title font-bold mb-12 text-center">Tools & Technologies</h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
                <Tabs defaultValue={toolCategories[0].name} className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        {toolCategories.map((category) => (
                            <TabsTrigger key={category.name} value={category.name}>
                                {category.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {toolCategories.map((category) => (
                        <TabsContent key={category.name} value={category.name}>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {category.tools.map((tool, index) => (
                                    <ScrollAnimation key={tool.name} delay={index * 0.1} direction="up">
                                        <Card>
                                            <CardContent className="flex flex-col items-center justify-center p-6">
                                                <tool.icon size={48} color={tool.color} />
                                                <h3 className="mt-4 font-semibold">{tool.name}</h3>
                                            </CardContent>
                                        </Card>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </ScrollAnimation>
        </section>
    )
}

