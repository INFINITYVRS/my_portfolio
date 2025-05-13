"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Badge } from "@/components/ui/button"

// Organized skills by category
const skillsData = {
  frontend: [
    { name: "Next.js", icon: "/icons/nextjs.png" },
    { name: "React", icon: "/icons/reactjs.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "JavaScript", icon: "/icons/javascript.png" },
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
    { name: "Bootstrap", icon: "/icons/bootstrap.png" },
    { name: "Framer", icon: "/icons/framer.png" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs.png" },
    { name: "Java", icon: "/icons/java.png" },
    { name: "Python", icon: "/icons/python.png" },
    { name: "C++", icon: "/icons/cpp.png" },
    { name: "C", icon: "/icons/c.png" },
    { name: "Express", icon: "/icons/express.png" },
  ],
  database: [
    { name: "MongoDB", icon: "/icons/mongodb.png" },
    { name: "PostgreSQL", icon: "/icons/postgress.png" },
    { name: "MySQL", icon: "/icons/mysql.png" },
  ],
}

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Function to filter skills based on active category
  const getFilteredSkills = () => {
    if (activeCategory === "all") {
      return [...skillsData.frontend, ...skillsData.backend, ...skillsData.database]
    }
    return skillsData[activeCategory as keyof typeof skillsData] || []
  }

  const filteredSkills = getFilteredSkills()

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-6xl font-bold">SKILLS &</h2>
        <h2 className="text-6xl font-bold text-gray-700">TECHNOLOGIES</h2>
        <p className="text-gray-400 mt-4 max-w-2xl">
          I've worked with a variety of technologies and frameworks to create robust and scalable applications. Here's a
          showcase of my technical expertise.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {["all", "frontend", "backend", "database"].map((category) => (
          <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Badge
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm cursor-pointer capitalize ${
                activeCategory === category ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {category}
            </Badge>
          </motion.div>
        ))}
      </div>

      {/* Skills Grid with Animation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 },
            }}
            className="flex flex-col items-center group"
          >
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-2xl w-24 h-24 flex items-center justify-center mb-3 shadow-lg group-hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden">
              {/* Background animation on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/10 group-hover:to-orange-600/20 transition-all duration-500"></div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-orange-500/30 rounded-2xl transition-all duration-300"></div>

              {/* Icon */}
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={69}
                height={55}
                className="relative z-10 transition-all duration-300 group-hover:brightness-110"
              />
            </div>

            {/* Skill name with animation */}
            <span className="text-sm text-gray-400 group-hover:text-orange-400 transition-colors duration-300 font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Visualization */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-20 bg-gray-900 rounded-xl p-8 border border-gray-800"
      >
        <h3 className="text-2xl font-bold mb-6">My Tech Stack</h3>

        <div className="relative h-[300px] rounded-lg overflow-hidden">
          {/* Frontend Layer */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 flex items-center justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.frontend.slice(0, 5).map((skill, i) => (
                  <div key={i} className="flex items-center bg-gray-700/50 rounded-full px-3 py-1">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    <span className="text-xs">{skill.name}</span>
                  </div>
                ))}
                {skillsData.frontend.length > 5 && (
                  <div className="flex items-center bg-gray-700/50 rounded-full px-3 py-1">
                    <span className="text-xs">+{skillsData.frontend.length - 5} more</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Backend Layer */}
          <motion.div
            className="absolute top-1/3 left-0 w-full h-1/3 bg-gradient-to-r from-green-900/30 to-teal-900/30 flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.backend.slice(0, 5).map((skill, i) => (
                  <div key={i} className="flex items-center bg-gray-700/50 rounded-full px-3 py-1">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    <span className="text-xs">{skill.name}</span>
                  </div>
                ))}
                {skillsData.backend.length > 5 && (
                  <div className="flex items-center bg-gray-700/50 rounded-full px-3 py-1">
                    <span className="text-xs">+{skillsData.backend.length - 5} more</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Database Layer */}
          <motion.div
            className="absolute top-2/3 left-0 w-full h-1/3 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 flex items-center justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              <h4 className="text-lg font-semibold text-yellow-400 mb-2">Database</h4>
              <div className="flex flex-wrap gap-2">
                {skillsData.database.map((skill, i) => (
                  <div key={i} className="flex items-center bg-gray-700/50 rounded-full px-3 py-1">
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={16}
                      height={16}
                      className="mr-2"
                    />
                    <span className="text-xs">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M100,100 C150,120 250,130 300,150 C350,170 450,180 500,200"
              stroke="rgba(249, 115, 22, 0.3)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            />
            <motion.path
              d="M500,100 C450,120 350,130 300,150 C250,170 150,180 100,200"
              stroke="rgba(249, 115, 22, 0.3)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            <motion.path
              d="M300,100 L300,200"
              stroke="rgba(249, 115, 22, 0.5)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
