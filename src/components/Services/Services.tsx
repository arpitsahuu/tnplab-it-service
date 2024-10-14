import Link from 'next/link'
import { ChevronRight, Code, Smartphone, Cloud, Shield, Database, Cpu, Search, CurlyBraces, Briefcase } from 'lucide-react'

import React from 'react'

const Services = () => {
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
    {
      title: 'Cybersecurity',
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      description: 'Protect your digital assets with our comprehensive cybersecurity services. We offer robust solutions to safeguard your data and systems.',
      features: ['Vulnerability assessment', 'Penetration testing', 'Security audits', 'Incident response planning']
    },
    {
      title: 'Data Analytics',
      icon: <Database className="w-12 h-12 text-blue-500" />,
      description: 'Turn your data into actionable insights. Our data analytics services help you make informed decisions and drive business growth.',
      features: ['Big data processing', 'Predictive analytics', 'Data visualization', 'Machine learning integration']
    },
    {
      title: 'AI & Machine Learning',
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      description: 'Leverage the power of AI to automate processes and gain competitive advantage. We develop custom AI solutions tailored to your business needs.',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Modeling', 'AI-powered chatbots']
    },
    {
      title: 'SEO (Search Engine Optimization)',
      icon: <Search className="w-12 h-12 text-blue-500" />,
      description: 'Improve your website’s visibility on search engines and drive organic traffic. Our SEO experts use proven strategies to enhance your online presence.',
      features: ['Keyword research', 'On-page optimization', 'Link building', 'Performance tracking']
    },
    {
      title: 'Blockchain',
      icon: <CurlyBraces className="w-12 h-12 text-blue-500" />, // Replace with your actual Blockchain icon component
      description: 'Unlock the potential of blockchain technology for secure, transparent transactions. We offer tailored blockchain solutions to meet your business needs.',
      features: ['Smart contracts', 'Decentralized applications', 'Blockchain integration', 'Consultation and development']
    },
    {
      title: 'IT Consulting',
      icon: <Briefcase className="w-12 h-12 text-blue-500" />, // Replace with your actual IT Consulting icon component
      description: 'Optimize your IT strategy and infrastructure with our expert consulting services. We help you align technology with your business goals.',
      features: ['IT strategy development', 'Technology assessment', 'Project management', 'Change management']
    }
  ]
  return (
    <div className="min-h-screen bg-black text-white lg:px-16">


      <main className="container mx-auto px-4 py-10 ">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Empower your business with our cutting-edge technology solutions. We offer a wide range of services to help you achieve your digital goals.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 flex flex-col">
              <Link href={`/services/service/${index}`} >

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

        
      </main>

    </div>
  )
}

export default Services

// export default function ServicePage() {
//   const services = [
//     {
//       title: 'Web Development',
//       icon: <Code className="w-12 h-12 text-blue-500" />,
//       description: 'Create stunning, responsive websites tailored to your brand. Our expert developers use cutting-edge technologies to deliver seamless user experiences.',
//       features: ['Custom design', 'Responsive layouts', 'E-commerce solutions', 'Content Management Systems']
//     },
//     {
//       title: 'Mobile App Development',
//       icon: <Smartphone className="w-12 h-12 text-blue-500" />,
//       description: 'Transform your ideas into powerful mobile applications. We develop for both iOS and Android platforms, ensuring your app reaches the widest audience.',
//       features: ['Native and cross-platform apps', 'UI/UX design', 'App Store optimization', 'Ongoing support and updates']
//     },
//     {
//       title: 'Cloud Solutions',
//       icon: <Cloud className="w-12 h-12 text-blue-500" />,
//       description: 'Harness the power of the cloud to scale your business. Our cloud experts will help you migrate, manage, and optimize your infrastructure.',
//       features: ['Cloud migration', 'Serverless architecture', 'DevOps implementation', 'Performance optimization']
//     },
//     {
//       title: 'Cybersecurity',
//       icon: <Shield className="w-12 h-12 text-blue-500" />,
//       description: 'Protect your digital assets with our comprehensive cybersecurity services. We offer robust solutions to safeguard your data and systems.',
//       features: ['Vulnerability assessment', 'Penetration testing', 'Security audits', 'Incident response planning']
//     },
//     {
//       title: 'Data Analytics',
//       icon: <Database className="w-12 h-12 text-blue-500" />,
//       description: 'Turn your data into actionable insights. Our data analytics services help you make informed decisions and drive business growth.',
//       features: ['Big data processing', 'Predictive analytics', 'Data visualization', 'Machine learning integration']
//     },
//     {
//       title: 'AI & Machine Learning',
//       icon: <Cpu className="w-12 h-12 text-blue-500" />,
//       description: 'Leverage the power of AI to automate processes and gain competitive advantage. We develop custom AI solutions tailored to your business needs.',
//       features: ['Natural Language Processing', 'Computer Vision', 'Predictive Modeling', 'AI-powered chatbots']
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-black text-white lg:px-16">


//       <main className="container mx-auto px-4 py-10 ">
//         <section className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             Empower your business with our cutting-edge technology solutions. We offer a wide range of services to help you achieve your digital goals.
//           </p>
//         </section>

//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-gray-900 rounded-lg p-6 flex flex-col">
//               <Link href={`/services/servic/${index}`} >

//                 <div className="flex items-center mb-4">
//                   {service.icon}
//                   <h2 className="text-2xl font-bold ml-4">{service.title}</h2>
//                 </div>
//                 <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-blue-300">
//                       <ChevronRight className="w-4 h-4 mr-2" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </Link>
//             </div>
//           ))}
//         </section>

//         <section className="mt-16 text-center">
//           <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
//           <p className="text-xl text-gray-400 mb-8">
//             Let's transform your ideas into digital reality. Contact us today for a free consultation.
//           </p>
//           <Link
//             href="/contact"
//             className="bg-blue-500 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300"
//           >
//             Contact Us
//           </Link>
//         </section>
//       </main>

//     </div>
//   )
// }