"use client"
import { useState } from 'react'
import { Handshake, Shield, Code, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

const processSteps = [
  {
    icon: <Handshake className="w-12 h-12 text-blue-400" />,
    title: "Understanding",
    description: "We carefully understand your requirements, pain points, and budget before considering suitable solutions."
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-400" />,
    title: "Strategizing",
    description: "Our experts brainstorm and strategize to create the best roadmaps aligned with your goals."
  },
  {
    icon: <Code className="w-12 h-12 text-blue-400" />,
    title: "Planning",
    description: "We collaboratively select the best plan that makes sense to all stakeholders."
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-blue-400" />,
    title: "Execution",
    description: "We use modern development techniques to build and iterate IT platforms efficiently."
  }
]

export default function CustomerOnboarding() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null) // Specify the type here

  return (
    <section className="bg-gradient-to-b  to-gray-800 sm:py-20  text-white overflow-hidden sm:px-[70px] px-3">
      <div className="container mx-auto px-4 relative">
        <div className="lg:flex lg:items-start  lg:gap-12">
          <div className="lg:w-2/5 mb-12 lg:mb-0 relative z-10 ">
            <h2 className="text-sm uppercase tracking-wider text-gray-300  mb-2">Our Customer on-boarding Process</h2>
            <h3 className="sm:text-4xl text-2xl md:text-5xl font-semibold mb-4 text-gray-200 sm:mt-5 mt-2">
              Discover Our Streamlined Workflow
            </h3>
            <p className="sm:text-xl text-lg text-gray-300 mb-6">
              tnpLab&apos;s streamlined on-boarding process ensures a frictionless and diligent collaboration with our clients.
            </p>
            <div className="bg-gray-900 px-3 py-4 rounded-md border-gray-700">
              <div>
                <h2 className="text-2xl mb-2 font-semibold text-gray-200">Our Approach</h2>
              </div>
              <div>
                <p className="text-gray-400">
                  At tnpLab, we believe in a structured yet flexible approach to onboarding. Our process is designed to
                  ensure that we fully understand your needs and deliver solutions that exceed your expectations.
                </p>
              </div>
              <button className='bg-blue-500 text-white py-2 px-5 rounded-md text-lg mt-3 hover:bg-blue-600 transition duration-300'>Get Started</button>
            </div>
          </div>
          <div className="lg:w-3/5 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div className="h-full px-2 py-8 rounded-md bg-gray-900 border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    <div>
                      <div className="mb-4 flex justify-center">
                        <motion.div
                          animate={{
                            scale: hoveredIndex === index ? 1.1 : 1,
                            rotate: hoveredIndex === index ? 360 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.icon}
                        </motion.div>
                      </div>
                      <h2 className="text-xl font-semibold text-center text-gray-200 pb-1">{step.title}</h2>
                    </div>
                    <div>
                      <p className="text-gray-400 text-center">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
    </section>
  )
}
