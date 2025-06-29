"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 bg-white rounded-3xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 z-0"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white">
              <Image
                src="/profile.png"
                alt="Vijay Raj Shekhar"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold text-black">VIJAY RAJ SHEKHAR</h1>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mt-4">
              <code className="text-white font-bold">&lt;/&gt;</code>
            </div>
            <p className="text-center text-black mt-6 max-w-xs">
              A Software Engineer who specializes in building innovative solutions with modern technologies.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="https://github.com/INFINITYVRS" target="_blank">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-white/20 border-none text-black hover:bg-white/30"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/vijay-raj-shekhar-408549269/" target="_blank">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-white/20 border-none text-black hover:bg-white/30"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="mailto:vijay.rshekhar@gmail.com">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-white/20 border-none text-black hover:bg-white/30"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full -mr-16 -mb-16 opacity-50"></div>
          <div className="absolute top-10 left-0 w-20 h-20 bg-orange-300 rounded-full -ml-10 opacity-30"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-5xl font-bold mb-6">
            Hello, I'm a <span className="text-orange-500">Developer</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I specialize in building modern web applications using Next.js, React, and various other technologies. With
            a passion for clean code and user-friendly interfaces, I create solutions that make a difference.
          </p>
          <div className="flex gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={scrollToContact}>
              Contact Me
            </Button>
            <Link href="/VijayRSresume.pdf" download target="_blank">
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500/10">
                View Resume <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
