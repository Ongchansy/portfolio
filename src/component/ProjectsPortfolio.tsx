"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A front-end e-commerce platform with no integrate with dashboard only UI",
    image: "/assets/images/ecommerce.png?height=300&width=500",
    category: "web",
    tags: ["React", "Tailwindcss"],
    demoUrl: "https://minishop-snowy.vercel.app",
    githubUrl: "https://gitlab.com/ongchansy13/minishop",
  },
  {
    id: 2,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets.",
    image: "/assets/images/admin.png?height=300&width=500",
    category: "data",
    tags: ["Nextjs", "Neon Postgres", "Shadcn", "Prisma"],
    demoUrl: "https://inventory-management-system-chi.vercel.app",
    githubUrl: "https://github.com/Ongchansy/inventory-management",
  },
  {
    id: 3,
    title: "University Library Managment system",
    description:
      "A full-stack Library Management system platform with with dashboard ",
    image: "/assets/images/university-library.png?height=300&width=500",
    category: "web",
    tags: [
      "React",
      "Nextjs",
      "Tailwindcss",
      "Neon",
      "Drizzle ORM",
      "Shadcn",
      "NextAuth",
    ],
    demoUrl: "https://university-library-five-theta.vercel.app",
    githubUrl: "https://github.com/Ongchansy/university-library",
  },
  {
    id: 4,
    title: "Invoice Generator Saas",
    description:
      "Template for generate invoice with free and pro plan subscription",
    image: "/assets/images/invoice.png?height=300&width=500",
    category: "web",
    tags: ["React", "Vite", "Tanstack query", "tailwind css"],
    demoUrl: "https://invoice-management-nu-ten.vercel.app/",
    githubUrl: "https://github.com/Ongchansy/university-library",
  },
  {
    id: 5,
    title: "AI Image Generator(Coming soon)",
    description:
      "An AI-powered image generation tool using machine learning models.",
    image: "/assets/images/placeholder.svg?height=300&width=500",
    category: "ai",
    tags: ["Python", "TensorFlow", "React"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
];

// Get unique categories from projects
const categories = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const tabVariants = {
  inactive: { scale: 1 },
  active: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="space-y-8 px-8" id="projects">
      <h1 className="text-[3.2rem] font-bold text-center text-title mb-12">
        My Portfolio
      </h1>
      <Tabs
        defaultValue="all"
        onValueChange={setActiveCategory}
        className="w-full"
      >
        <div className="flex justify-center mb-24">
          <TabsList className="grid grid-cols-4 gap-4">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover="active"
                initial="inactive"
                animate={activeCategory === category ? "active" : "inactive"}
                variants={tabVariants}
              >
                <TabsTrigger
                  value={category}
                  className="capitalize text-[1.5rem] w-full"
                >
                  {category}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>
        </div>

        <AnimatePresence>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value={activeCategory} className="mt-0">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </motion.div>
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      <Card className="overflow-hidden flex flex-col h-full transition-all duration-200 hover:shadow-xl">
        <div className="relative h-[200px] w-full overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full w-full"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <CardHeader>
          <CardTitle className="text-[1.8rem] text-title">
            {project.title}
          </CardTitle>
          <CardDescription className="text-[1.5rem]">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <motion.div
                key={tag}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge className="text-[1.4rem]" variant="secondary">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" asChild>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-[1.2rem] items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" asChild>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-[1.2rem] items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
