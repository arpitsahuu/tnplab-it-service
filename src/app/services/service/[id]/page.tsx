'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Code, CheckCircle, Clock, DollarSign, ChevronRight, Smartphone, Cloud, Shield, Database, Cpu, Search, CurlyBraces, Briefcase } from 'lucide-react'
import Contact from '@/components/routers/Contact'

type Props = {
  params: any;
};

export default function EnhancedServiceDetailsPage({ params }: Props) {
  console.log(params.id)
  const [serviceDetails, setService] = useState<{
    title: string;
    icon: JSX.Element;
    description: string;
    overview: string;
    features: string[];
    process: {
      title: string;
      description: string;
    }[];
    technologies: string[];
  } | null>(null);
  //   const [selectedService, setSelectedService] = useState<{
  //     title: string;
  //     icon: JSX.Element;
  //     description: string;
  //     overview: string;
  //     features: string[];
  //     process: {
  //         title: string;
  //         description: string;
  //     }[];
  //     technologies: string[];
  // } | null>(null);
  const [activeTab, setActiveTab] = useState('overview')

  const services = [
    {
      title: 'Web Development',
      icon: <Code className="w-20 h-20 text-blue-500" />,
      description: 'Create stunning, responsive websites tailored to your brand. Our expert developers use cutting-edge technologies to deliver seamless user experiences complex e-commerce platforms, we have the skills and experience to deliver web solutions that drive results. with technical expertise to build websites that not only look great but also perform exceptionally. From simple landing pages to complex e-commerce platforms, we have the skills and experience to deliver web solutions that drive results.perform exceptionally. From simple landing pages to complex e-commerce platforms, we have the skills and experience to deliver web solutions that drive results.',
      overview: 'Our web development service is designed to bring your digital vision to life. We combine creativity with technical expertise to build websites that not only look great but also perform exceptionally. From simple landing pages to complex e-commerce platforms, we have the skills and experience to deliver web solutions that drive results.',
      features: [
        'Custom design and development',
        'Responsive layouts for all devices',
        'E-commerce integration',
        'Content Management Systems (CMS)',
        'SEO optimization',
        'Performance tuning',
        'Security implementation',
        'API integration',
        'Analytics and tracking setup'
      ],
      process: [
        { title: 'Discovery', description: 'We start by understanding your business goals, target audience, and project requirements.' },
        { title: 'Planning', description: 'Our team creates a detailed project plan, including sitemap, wireframes, and technical specifications.' },
        { title: 'Design', description: 'We craft visually appealing designs that align with your brand and user expectations.' },
        { title: 'Development', description: 'Our developers bring the designs to life, ensuring clean, efficient, and scalable code.' },
        { title: 'Testing', description: 'Rigorous testing is performed to ensure functionality, compatibility, and performance across devices.' },
        { title: 'Launch', description: 'We deploy your website and provide training on content management if required.' },
        { title: 'Maintenance', description: 'Ongoing support and updates to keep your website secure and up-to-date.' }
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'AWS', 'Docker']
    },
    {
      title: 'App Development',
      icon: <Smartphone className="w-20 h-20 text-green-500" />,
      description: 'Develop feature-rich, user-friendly mobile applications tailored to your business needs. Our team specializes in creating native and cross-platform apps that provide seamless performance and an exceptional user experience, whether on iOS or Android. From concept to deployment, we ensure your app is optimized for performance, security, and scalability.',
      overview: 'Our app development service helps businesses reach their audience on mobile platforms with intuitive, responsive apps. We offer both native and cross-platform solutions that prioritize user experience and technical performance, ensuring your app stands out in a competitive market.',
      features: [
        'Custom native iOS and Android development',
        'Cross-platform app development (React Native, Flutter)',
        'App store deployment and management',
        'User-friendly UI/UX design',
        'Backend integration',
        'Push notifications and in-app messaging',
        'App performance optimization',
        'Security and data encryption',
        'Analytics and reporting'
      ],
      process: [
        { title: 'Discovery', description: 'We start by understanding your app’s goals, audience, and feature requirements.' },
        { title: 'Planning', description: 'Our team designs the app architecture and creates detailed wireframes and UI flows.' },
        { title: 'Design', description: 'We focus on crafting a mobile-friendly UI that ensures a smooth user experience.' },
        { title: 'Development', description: 'Our developers use modern technologies to build and integrate your app features.' },
        { title: 'Testing', description: 'Extensive testing is performed to ensure app functionality and performance on multiple devices.' },
        { title: 'Launch', description: 'We assist with app store deployment and provide support for a successful launch.' },
        { title: 'Maintenance', description: 'Continuous app updates and support to ensure optimal performance and security.' }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java', 'Firebase', 'Node.js', 'AWS', 'Docker']
    },
    {
      title: 'Cloud Solutions',
      icon: <Cloud className="w-20 h-20 text-blue-500" />,
      description: 'Elevate your business with scalable, secure, and efficient cloud solutions. Whether you’re looking for cloud storage, server hosting, or DevOps support, our team offers end-to-end cloud services that boost productivity and lower costs. We specialize in deploying and managing cloud infrastructure that ensures data security, scalability, and performance.',
      overview: 'Our cloud solutions are designed to help businesses transition to the cloud seamlessly. We offer cloud infrastructure setup, application migration, and ongoing management to ensure your business is future-ready and highly scalable.',
      features: [
        'Cloud infrastructure setup',
        'Application migration to cloud',
        'AWS, Google Cloud, Azure support',
        'Cloud security and compliance',
        'Scalability and performance optimization',
        'Disaster recovery planning',
        'DevOps automation',
        'Data backup and storage solutions',
        '24/7 monitoring and support'
      ],
      process: [
        { title: 'Assessment', description: 'We assess your current infrastructure and define your cloud migration strategy.' },
        { title: 'Planning', description: 'Our team develops a detailed roadmap for cloud deployment or migration.' },
        { title: 'Setup', description: 'We configure and set up your cloud environment for optimal performance and security.' },
        { title: 'Migration', description: 'Our team migrates your applications and data to the cloud with minimal downtime.' },
        { title: 'Testing', description: 'We ensure all cloud services are fully operational and optimized for your business needs.' },
        { title: 'Launch', description: 'Your cloud infrastructure is deployed, and we provide guidance on managing cloud resources.' },
        { title: 'Maintenance', description: 'Ongoing monitoring and support to ensure your cloud infrastructure remains secure and scalable.' }
      ],
      technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'MySQL', 'MongoDB']
    },
    {
      title: 'Cybersecurity',
      icon: <Shield className="w-20 h-20 text-red-500" />,
      description: 'Protect your business from cyber threats with our comprehensive cybersecurity services. From vulnerability assessments to real-time threat monitoring, we ensure your systems and data are secure. Our team leverages the latest tools and techniques to safeguard your business against unauthorized access, data breaches, and other security risks.',
      overview: 'Our cybersecurity services are designed to defend your business from modern cyber threats. We provide advanced security solutions to protect your data, networks, and infrastructure, ensuring compliance with industry regulations and best practices.',
      features: [
        'Threat detection and prevention',
        'Vulnerability assessments and penetration testing',
        'Network security and firewall setup',
        'Data encryption and protection',
        'Security incident response',
        'Compliance with industry regulations',
        'Security audits and risk assessments',
        'Real-time monitoring and reporting',
        'Security awareness training'
      ],
      process: [
        { title: 'Assessment', description: 'We begin by analyzing your current security posture and identifying vulnerabilities.' },
        { title: 'Planning', description: 'Our team creates a tailored cybersecurity strategy to mitigate risks.' },
        { title: 'Implementation', description: 'We implement robust security measures, including firewalls, encryption, and monitoring.' },
        { title: 'Monitoring', description: 'Continuous monitoring of your systems to detect and prevent cyber threats in real-time.' },
        { title: 'Response', description: 'In case of an incident, our team responds swiftly to mitigate damage and secure your systems.' },
        { title: 'Maintenance', description: 'Ongoing security updates, patching, and compliance checks to keep your business secure.' }
      ],
      technologies: ['Firewall', 'IDS/IPS', 'SSL', 'VPN', 'Encryption', 'SIEM', 'Kali Linux', 'Metasploit', 'AWS Security', 'Azure Security']
    },
    {
      title: 'Data Analytics',
      icon: <Database className="w-20 h-20 text-yellow-500" />,
      description: 'Transform your data into actionable insights with our data analytics services. We help businesses make data-driven decisions by analyzing and visualizing key metrics. Our team uses advanced tools to gather, process, and interpret data, enabling you to understand customer behavior, optimize operations, and drive growth.',
      overview: 'Our data analytics services provide businesses with the tools to unlock the full potential of their data. By leveraging big data technologies and advanced analytics, we help you make informed decisions that enhance performance and profitability.',
      features: [
        'Data collection and processing',
        'Business intelligence and reporting',
        'Predictive analytics',
        'Customer behavior analysis',
        'Data visualization dashboards',
        'ETL (Extract, Transform, Load) processes',
        'Real-time analytics',
        'Market trends and insights',
        'Data governance and quality management'
      ],
      process: [
        { title: 'Discovery', description: 'We work with you to understand your data needs and define key metrics.' },
        { title: 'Data Collection', description: 'Our team collects and processes data from various sources to ensure accuracy.' },
        { title: 'Analysis', description: 'We apply advanced analytical techniques to uncover trends and insights.' },
        { title: 'Visualization', description: 'Data is visualized through interactive dashboards and reports for easy interpretation.' },
        { title: 'Implementation', description: 'We help integrate data-driven strategies into your business processes.' },
        { title: 'Maintenance', description: 'Continuous data monitoring and updates to ensure data accuracy and relevance.' }
      ],
      technologies: ['Python', 'R', 'Power BI', 'Tableau', 'SQL', 'Hadoop', 'Spark', 'AWS Data Lakes', 'Google BigQuery']
    },
    {
      title: 'AI & Machine Learning',
      icon: <Cpu className="w-20 h-20 text-purple-500" />,
      description: 'Harness the power of artificial intelligence and machine learning to automate processes, enhance decision-making, and drive innovation. Our AI and ML solutions help businesses improve efficiency, predict trends, and create smarter products and services. From building custom algorithms to deploying AI models, we offer end-to-end solutions tailored to your needs.',
      overview: 'Our AI & Machine Learning services enable businesses to leverage intelligent systems for better decision-making and process automation. Whether you’re looking to implement AI in your product or streamline operations with machine learning, we have the expertise to deliver customized solutions.',
      features: [
        'Custom AI model development',
        'Machine learning algorithms',
        'Natural language processing (NLP)',
        'Computer vision solutions',
        'Predictive analytics and forecasting',
        'AI-powered automation',
        'Data classification and clustering',
        'Reinforcement learning',
        'AI integration with existing systems'
      ],
      process: [
        { title: 'Discovery', description: 'We assess your business needs and identify potential AI/ML use cases.' },
        { title: 'Data Preparation', description: 'Our team collects and cleans data to train AI/ML models effectively.' },
        { title: 'Model Development', description: 'We design and develop AI/ML models tailored to your specific requirements.' },
        { title: 'Testing', description: 'Rigorous testing of models to ensure accuracy and performance in real-world scenarios.' },
        { title: 'Deployment', description: 'We deploy AI/ML models into your production environment for seamless integration.' },
        { title: 'Optimization', description: 'Ongoing monitoring and refinement of AI models to improve performance over time.' }
      ],
      technologies: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'AWS SageMaker', 'Google AI Platform', 'Azure ML', 'Jupyter Notebooks']
    },
    {
      title: 'SEO (Search Engine Optimization)',
      icon: <Search className="w-20 h-20 text-green-500" />,
      description: 'Boost your online visibility and drive organic traffic to your website with our comprehensive SEO services. From keyword research to on-page optimization and link building, we help your website rank higher on search engines and attract the right audience, leading to increased conversions and business growth.',
      overview: 'Our SEO services are designed to enhance your website’s search engine performance. We implement proven SEO strategies, including content optimization, technical SEO, and link-building, to ensure long-term organic growth for your business.',
      features: [
        'Keyword research and analysis',
        'On-page optimization',
        'Technical SEO audits',
        'Content strategy and optimization',
        'Link building and outreach',
        'Local SEO',
        'Mobile SEO optimization',
        'SEO reporting and analytics',
        'Competitor analysis'
      ],
      process: [
        { title: 'Discovery', description: 'We analyze your website, target audience, and competitors to develop an SEO strategy.' },
        { title: 'Optimization', description: 'We optimize your website’s content, structure, and technical elements for search engines.' },
        { title: 'Content Strategy', description: 'Our team creates SEO-friendly content that attracts and engages your audience.' },
        { title: 'Link Building', description: 'We build high-quality backlinks to boost your domain authority and rankings.' },
        { title: 'Monitoring', description: 'Continuous monitoring of your SEO performance and refinement of strategies as needed.' },
        { title: 'Reporting', description: 'We provide detailed SEO reports to track improvements in traffic, rankings, and conversions.' }
      ],
      technologies: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Yoast SEO', 'Moz', 'Screaming Frog']
    },
    {
      title: 'Blockchain',
      icon: <CurlyBraces className="w-20 h-20 text-blue-500" />,
      description: 'Leverage the power of blockchain technology to build secure, decentralized applications and streamline your business processes. Our blockchain solutions provide transparency, security, and automation, making them ideal for industries like finance, supply chain, and healthcare. We specialize in developing smart contracts, decentralized applications (DApps), and blockchain networks.',
      overview: 'Our blockchain development services enable businesses to take advantage of distributed ledger technology. From cryptocurrency integration to smart contracts and decentralized applications, we provide innovative blockchain solutions that transform traditional business models.',
      features: [
        'Custom blockchain development',
        'Smart contract development',
        'Cryptocurrency integration',
        'Decentralized applications (DApps)',
        'Blockchain security and auditing',
        'Tokenization solutions',
        'Blockchain-based supply chain solutions',
        'Blockchain consulting and strategy',
        'Hyperledger and Ethereum development'
      ],
      process: [
        { title: 'Discovery', description: 'We assess your business needs and determine the best blockchain solution.' },
        { title: 'Planning', description: 'Our team designs the blockchain architecture and defines the project scope.' },
        { title: 'Development', description: 'We develop blockchain applications, smart contracts, or integrate cryptocurrencies as per your needs.' },
        { title: 'Testing', description: 'Comprehensive testing to ensure the security, efficiency, and functionality of the blockchain solution.' },
        { title: 'Deployment', description: 'We deploy your blockchain solution, ensuring smooth integration into your operations.' },
        { title: 'Maintenance', description: 'Ongoing support and optimization of your blockchain solution to ensure longevity.' }
      ],
      technologies: ['Ethereum', 'Hyperledger', 'Solidity', 'Truffle', 'Web3.js', 'IPFS', 'Smart Contracts', 'Chainlink', 'Blockchain APIs']
    },
    {
      title: 'IT Consulting',
      icon: <Briefcase className="w-20 h-20 text-gray-500" />,
      description: 'Optimize your IT infrastructure and align it with your business goals with our expert IT consulting services. We provide strategic advice on technology investments, system integration, and process improvements to help your business grow. Our team helps you stay ahead of the curve by implementing innovative solutions that drive efficiency and reduce costs.',
      overview: 'Our IT consulting services are tailored to provide businesses with expert guidance on technology solutions. Whether it’s system upgrades, cloud adoption, or IT project management, we help streamline your operations and boost productivity through strategic IT planning.',
      features: [
        'IT strategy and planning',
        'Technology assessments',
        'System integration services',
        'Cloud consulting',
        'Digital transformation',
        'IT infrastructure optimization',
        'Cybersecurity consulting',
        'Software selection and implementation',
        'IT project management'
      ],
      process: [
        { title: 'Assessment', description: 'We assess your current IT infrastructure and business needs to identify opportunities for improvement.' },
        { title: 'Planning', description: 'Our team develops a strategic IT roadmap to align with your business objectives.' },
        { title: 'Implementation', description: 'We implement the recommended solutions, ensuring minimal disruption to your operations.' },
        { title: 'Optimization', description: 'Continuous optimization of your IT systems to ensure they support your evolving business goals.' },
        { title: 'Support', description: 'Ongoing IT support and consulting to help your business stay competitive and efficient.' }
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'VMware', 'Cisco', 'Microsoft 365', 'ITIL', 'ServiceNow']
    }

  ]

  // const serviceDetails = {
  //   title: 'Web Development',
  //   icon: <Code className="w-20 h-20 text-blue-500" />,
  //   description: 'Create stunning, responsive websites tailored to your brand. Our expert developers use cutting-edge technologies to deliver seamless user experiences complex e-commerce platforms, we have the skills and experience to deliver web solutions that drive results. with technical expertise to build websites that not only look great but also perform exceptionally. From simple landing pages to complex e-commerce platforms, we have the skills and experience to deliver web solutions that drive results.perform exceptionally. From simple landing pages to complex e-commerce platforms, we have the skills and experience to deliver web solutions that drive results.',
  //   overview: 'Our web development service is designed to bring your digital vision to life. We combine creativity with technical expertise to build websites that not only look great but also perform exceptionally. From simple landing pages to complex e-commerce platforms, we have the skills and experience to deliver web solutions that drive results.',
  //   features: [
  //     'Custom design and development',
  //     'Responsive layouts for all devices',
  //     'E-commerce integration',
  //     'Content Management Systems (CMS)',
  //     'SEO optimization',
  //     'Performance tuning',
  //     'Security implementation',
  //     'API integration',
  //     'Analytics and tracking setup'
  //   ],
  //   process: [
  //     { title: 'Discovery', description: 'We start by understanding your business goals, target audience, and project requirements.' },
  //     { title: 'Planning', description: 'Our team creates a detailed project plan, including sitemap, wireframes, and technical specifications.' },
  //     { title: 'Design', description: 'We craft visually appealing designs that align with your brand and user expectations.' },
  //     { title: 'Development', description: 'Our developers bring the designs to life, ensuring clean, efficient, and scalable code.' },
  //     { title: 'Testing', description: 'Rigorous testing is performed to ensure functionality, compatibility, and performance across devices.' },
  //     { title: 'Launch', description: 'We deploy your website and provide training on content management if required.' },
  //     { title: 'Maintenance', description: 'Ongoing support and updates to keep your website secure and up-to-date.' }
  //   ],
  //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Node.js', 'PHP', 'MySQL', 'MongoDB', 'AWS', 'Docker']
  // }

  useEffect(() => {
    const id = params ? params.id : null;
    console.log(id)
    if (services) {
      const selectedService = services[id]
      if (selectedService) {
        setService(selectedService);
      }
    }
  }, [params]);



  return (
    <div className="min-h-screen bg-black text-white">
      {serviceDetails &&
        <main className="container  mx-auto lg:px-16 sm:px-10 px-5 py-16">
          <div className="flex items-center mb-8">
            {serviceDetails.icon}
            <h1 className="text-4xl md:text-5xl font-bold ml-4">{serviceDetails.title}</h1>
          </div>
          <p className="text-xl text-gray-400 mb-8">{serviceDetails.description}</p>


          <div className="mb-12">
            <nav className="flex flex-wrap justify-center space-x-4 border-b border-gray-700">
              {['overview', 'features', 'process', 'technologies'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-6 font-medium text-lg transition duration-300 ${activeTab === tab
                      ? 'text-blue-500 border-b-2 border-blue-500'
                      : 'text-gray-400 hover:text-blue-300'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-12 bg-gray-900 rounded-lg p-8 shadow-lg">
            {activeTab === 'overview' && (
              <div>
                <p className="text-gray-300 leading-relaxed text-lg mb-12">{serviceDetails.overview}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                    <CheckCircle className="w-16 h-16 text-blue-500 mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-400">Our developers have years of experience in creating world-class web solutions.</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                    <Clock className="w-16 h-16 text-blue-500 mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Timely Delivery</h3>
                    <p className="text-gray-400">We pride ourselves on delivering projects on time and within budget.</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
                    <DollarSign className="w-16 h-16 text-blue-500 mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Competitive Pricing</h3>
                    <p className="text-gray-400">Get top-quality web development services at competitive rates.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start bg-gray-800 p-4 rounded-lg shadow-md">
                    <ChevronRight className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'process' && (
              <div className="space-y-12">
                {serviceDetails.process.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center md:items-start bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 md:mb-0 md:mr-6">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-lg">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'technologies' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {serviceDetails.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-800 p-4 rounded-lg text-center shadow-md transform hover:scale-110 transition duration-300">
                    <span className="text-blue-300 text-lg font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Contact/>

          {/* <div className="mt-16 text-center bg-gray-900 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Development Project?</h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's bring your web vision to life. Contact us today for a free consultation and quote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-500 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div> */}

          {/* <div className="mt-16 bg-gray-900 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-300 mb-4">"ItnpLab delivered an outstanding website that exceeded our expectations. Their team was professional, responsive, and truly cared about our project's success."</p>
                <p className="text-blue-400 font-semibold">- John Doe, CEO of TechCorp</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-300 mb-4">"Working with ItnpLab was a game-changer for our online presence. They created a beautiful, functional website that has significantly increased our conversions."</p>
                <p className="text-blue-400 font-semibold">- Jane Smith, Marketing Director at InnovateCo</p>
              </div>
            </div>
          </div> */}
        </main>
      }

      <footer className="bg-gray-900 py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About ItnpLab</h3>
              <p className="text-gray-400">Empowering businesses with cutting-edge technology solutions since 2010.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/web-development" className="text-gray-400 hover:text-blue-300 transition duration-300">Web Development</Link></li>
                <li><Link href="/services/mobile-apps" className="text-gray-400 hover:text-blue-300 transition duration-300">Mobile Apps</Link></li>
                <li><Link href="/services/cloud-solutions" className="text-gray-400 hover:text-blue-300 transition duration-300">Cloud Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-blue-300 transition duration-300">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-400 hover:text-blue-300 transition duration-300">Careers</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-blue-300 transition duration-300">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-300 transition duration-300">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-300 transition duration-300">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-300 transition duration-300">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 ItnpLab. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-300 text-sm transition  duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-300 text-sm transition duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}