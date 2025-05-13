"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Diabetes Prediction",
    description:
      "An AI-powered web application that predicts diabetes risk using Artificial Neural Networks. The model was trained on a comprehensive dataset and achieves 94% accuracy in early detection.",
    fullDescription:
      "This project leverages machine learning to help identify individuals at risk of developing diabetes. Using a combination of Artificial Neural Networks (ANN) and a carefully curated dataset, the application analyzes various health parameters to provide an early risk assessment with high accuracy.\n\nThe frontend is built with Next.js and Tailwind CSS, offering a clean and intuitive user interface where users can input their health metrics. The backend processing is handled by Python, which runs the trained ANN model to generate predictions. The system includes data visualization components to help users understand their risk factors and provides personalized recommendations for preventive measures.",
    image: "/diabetes.png?height=600&width=1200",
    tools: [
      { name: "Next.js", icon: "/icons/nextjs.png?height=30&width=30" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png?height=30&width=30" },
      { name: "Python", icon: "/icons/python.png?height=30&width=30" },
    ],
    features: [
      "Real-time diabetes risk prediction",
      "Interactive data visualization dashboard",
      "Personalized health recommendations",
      "Secure user data handling",
      "Mobile-responsive design",
    ],
  },
  {
    id: 2,
    title: "Real Estate Tokenization",
    description:
      "A blockchain-based platform that enables fractional ownership of real estate properties through tokenization on the Ethereum network, making property investment more accessible.",
    fullDescription:
      "This innovative platform democratizes real estate investment by leveraging blockchain technology to tokenize property assets. Built on the Ethereum network, it allows investors to purchase fractional ownership in properties that would otherwise be financially out of reach.\n\nThe system uses smart contracts to handle the tokenization process, ensuring transparent and secure transactions. Each property is represented as a set of tokens, with each token representing a percentage of ownership. The platform includes features for property listing, token purchasing, dividend distribution from rental income, and a secondary market for trading tokens.",
      image: "/realestate.png?height=300&width=500",
      tools: [
        { name: "Ethereum", icon: "/icons/etherium.png?height=50&width=50" },
        { name: "Solidity", icon: "/icons/solidity.png?height=30&width=30" },
        { name: "React", icon: "/icons/reactjs.png?height=30&width=30" },
        { name: "Web3.js", icon: "/icons/javascript.png?height=30&width=30" },
    ],
    features: [
      "Fractional property ownership through tokenization",
      "Automated dividend distribution",
      "Secondary market for token trading",
      "Property management dashboard",
      "Blockchain-verified ownership records",
    ],
  },
  {
    id: 3,
    title: "WebDev Internship Project and Experience",
    description:
      "A have an experience of over 6 months, as an Web Developer Intern in a startup called Kineton. I have worked in the development of the company's landing and web page.",
    fullDescription:
      "I worked as a Frontend Developer at Kinetoon for 6 months, where I helped build responsive, user-friendly web interfaces using React, Next.js, Tailwind CSS, and JavaScript. I collaborated closely with designers and backend teams to deliver clean, functional UI components that met performance and accessibility standards.During my time there, I learned and implemented various tools including Git, API integration, and responsive design frameworks. Working in a fast-paced startup environment helped me grow quickly, improve my problem-solving skills, and become more confident as a web developer.",
      image: "/startup.png?height=300&width=500",
      tools: [
        { name: "Next.js", icon: "/icons/nextjs.png?height=30&width=30" },
        { name: "postgres", icon: "/icons/postgress.png?height=30&width=30" },
        { name: "python", icon: "/icons/python.png?height=30&width=30" },
        { name: "typescript", icon: "/icons/typescript.png?height=30&width=30" },
    ],
    features: [
      "Developed responsive and dynamic web interfaces using React, Next.js, and Tailwind CSS",
      "Collaborated with cross-functional teams to deliver seamless UI/UX",
      "mplemented API integrations and handled real-time data rendering",
      "Gained hands-on experience with Git and version control workflows",
      "Followed best practices in clean code, component reusability, and accessibility",
    ],
  },
]

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = Number(params.id)

  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen bg-black text-white">
      <Button variant="ghost" className="mb-8" onClick={() => router.push("/")}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
      </Button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="relative w-full h-[40vh] mb-8 rounded-xl overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-8">{project.description}</p>
              <div className="whitespace-pre-line text-gray-400">{project.fullDescription}</div>
            </div>

            <h3 className="text-2xl font-bold mt-12 mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-4">
                {project.tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="bg-gray-800 p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-2">
                      <Image src={tool.icon || "/placeholder.svg"} alt={tool.name} width={30} height={30} />
                    </div>
                    <span className="text-sm text-gray-400">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
