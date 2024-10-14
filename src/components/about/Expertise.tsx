import React from 'react'
import {  ChevronRight, Code, Smartphone, Cloud} from 'lucide-react'
import Link from 'next/link'

const Expertise = () => {
    const services = [
        {
          title: 'Web Development',
          icon: <Code className="w-12 h-12 text-blue-500" />,
          description: 'Create stunning, responsive websites tailored to your brand. Our expert developers use cutting-edge technologies to deliver seamless user experiences.',
          features: ['Custom design', 'Responsive layouts', 'E-commerce solutions', 'Content Management Systems']
        },
        {
          title: 'Mobile App Development',
          icon: <Smartphone className="w-12 h-12 text-blue-500" />,
          description: 'Transform your ideas into powerful mobile applications. We develop for both iOS and Android platforms, ensuring your app reaches the widest audience.',
          features: ['Native and cross-platform apps', 'UI/UX design', 'App Store optimization', 'Ongoing support and updates']
        },
        {
          title: 'Cloud Solutions',
          icon: <Cloud className="w-12 h-12 text-blue-500" />,
          description: 'Harness the power of the cloud to scale your business. Our cloud experts will help you migrate, manage, and optimize your infrastructure.',
          features: ['Cloud migration', 'Serverless architecture', 'DevOps implementation', 'Performance optimization']
        },
    
    
      ]
  return (
    <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 flex flex-col">
                <Link href={`/services/service/${index}`}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h2 className="text-2xl font-bold ml-4">{service.title}</h2>
                  </div>
                  <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-blue-300">
                        <ChevronRight className="w-4 h-4 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              </div>
            ))}
          </section>
        </section>
  )
}

export default Expertise