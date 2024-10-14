import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Past Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Project+${item}`}
                    alt={`Project ${item}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
                  <p className="text-gray-400">A brief description of the project and the technologies used.</p>
                  <Link href={`/project/${item}`} className="mt-4 inline-block text-blue-400 hover:text-blue-300">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Projects