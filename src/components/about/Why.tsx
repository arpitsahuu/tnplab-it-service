import React from 'react'
import { CheckCircle, Code, Zap, Shield, Users, Headphones } from "lucide-react"

const Why = () => {
    return (
        <main className="container mx-auto px-4 py-10">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8 text-center">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">tnpLab</span>?
            </h1>
            <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
                At tnpLab, we&apos;re not just another IT company. We&apos;re your partners in digital transformation,
                committed to turning your ideas into reality with cutting-edge technology and unparalleled expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                    {
                        icon: <Code className="h-12 w-12 text-blue-500" />,
                        title: "Cutting-edge Technology",
                        description: "We stay ahead of the curve, utilizing the latest technologies to deliver innovative solutions.",
                    },
                    {
                        icon: <Zap className="h-12 w-12 text-blue-500" />,
                        title: "Rapid Development",
                        description: "Our agile methodology ensures quick turnaround times without compromising on quality.",
                    },
                    {
                        icon: <Shield className="h-12 w-12 text-blue-500" />,
                        title: "Ironclad Security",
                        description: "We prioritize the security of your data and applications with industry-leading practices.",
                    },
                    {
                        icon: <Users className="h-12 w-12 text-blue-500" />,
                        title: "Expert Team",
                        description: "Our team of seasoned professionals brings a wealth of experience to every project.",
                    },
                    {
                        icon: <Headphones className="h-12 w-12 text-blue-500" />,
                        title: "24/7 Support",
                        description: "We're always here for you, providing round-the-clock support to ensure your success.",
                    },
                    {
                        icon: <CheckCircle className="h-12 w-12 text-blue-500" />,
                        title: "Proven Track Record",
                        description: "Our portfolio of successful projects speaks to our ability to deliver results.",
                    },
                ].map((feature, index) => (
                    <div key={index} className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
                        <div className="p-6">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">How We Build Your Application</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Lightbulb className="h-12 w-12 text-yellow-400" />,
            title: "1. Ideation",
            description: "We work closely with you to understand your vision and refine your ideas.",
          },
          {
            icon: <PenTool className="h-12 w-12 text-green-400" />,
            title: "2. Design",
            description: "Our designers create intuitive and visually appealing interfaces for your application.",
          },
          {
            icon: <Cpu className="h-12 w-12 text-red-400" />,
            title: "3. Development",
            description: "Our expert developers bring your application to life using cutting-edge technologies.",
          },
          {
            icon: <Rocket className="h-12 w-12 text-purple-400" />,
            title: "4. Launch",
            description: "We ensure a smooth deployment and provide ongoing support for your application.",
          },
        ].map((step, index) => (
          <div key={index} className="bg-gray-900 border-gray-800 hover:border-blue-500 transition-colors">
            <div className="p-6">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}


            {/* <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            quote: "tnpLab transformed our business with their innovative solutions. Their expertise and support are unmatched.",
            author: "Jane Doe, CEO of TechCorp",
          },
          {
            quote: "Working with tnpLab was a game-changer for us. They delivered beyond our expectations, on time and within budget.",
            author: "John Smith, CTO of InnovateCo",
          },
          {
            quote: "The team at tnpLab is not just skilled, but also incredibly dedicated. They're true partners in our success.",
            author: "Alice Johnson, Founder of StartupX",
          },
        ].map((testimonial, index) => (
          <div key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors">
            <div className="p-6">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="text-blue-500 font-semibold">{testimonial.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}
        </main>
    )
}

export default Why