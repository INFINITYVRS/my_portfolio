"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Diabetes Prediction",
    description:
      "An AI-powered web application that predicts diabetes risk using Hyperparametrized tuning of Artificial Neural Networks. The model was trained on a comprehensive dataset and achieves 94% accuracy in early detection.",
    image: "/diabetes.png",
    tools: [
      { name: "Next.js", icon: "/icons/nextjs.png?height=30&width=30" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png?height=30&width=30" },
      { name: "Python", icon: "/icons/python.png?height=30&width=30" },
      
    ],
  },
  {
    id: 2,
    title: "Real Estate Tokenization",
    description:
      "A blockchain-based platform that enables fractional ownership of real estate properties through tokenization on the Ethereum network, making property investment more accessible.",
    image: "/realestate.png?height=300&width=500",
    tools: [
      { name: "Ethereum", icon: "/icons/etherium.png?height=50&width=50" },
      { name: "Solidity", icon: "/icons/solidity.png?height=30&width=30" },
      { name: "React", icon: "/icons/reactjs.png?height=30&width=30" },
      { name: "Web3.js", icon: "/icons/javascript.png?height=30&width=30" },
    ],
  },
  {
    id: 3,
    title: "WebDev Intern (KINETON)",
    description:
      "A have an experience of over 6 months, as an Web Developer Intern in a startup called Kineton. I have worked in the development of the company's landing and web page.",
    image: "/startup.png?height=300&width=500",
    tools: [
      { name: "Next.js", icon: "/icons/nextjs.png?height=30&width=30" },
      { name: "postgres", icon: "/icons/postgress.png?height=30&width=30" },
      { name: "python", icon: "/icons/python.png?height=30&width=30" },
      { name: "typescript", icon: "/icons/typescript.png?height=30&width=30" },
    ],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="flex items-center mb-16">
        <h2 className="text-6xl font-bold">RECENT</h2>
        <div className="ml-4">
          <h2 className="text-6xl font-bold text-gray-700">PROJECTS</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/projects/${project.id}`}>
              <Card className="bg-gray-900 border-gray-800 overflow-hidden project-card h-full">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <div key={i} className="flex items-center tool-icon bg-gray-800 rounded-full p-1" title={tool.name}>
                      <Image
                        src={tool.icon || "/placeholder.svg"}
                        alt={tool.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                  ))}
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
