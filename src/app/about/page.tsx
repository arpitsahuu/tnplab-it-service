import React from 'react'
import AboutInfo from '@/components/about/AboutInfo'
import Expertise from '@/components/about/Expertise'
import Faq from '@/components/faq/Faq'
import Location from '@/components/about/Location';
import Contact from '@/components/routers/Contact';

export default function EnhancedAboutPage() {
  

  return (
    <div className="min-h-screen bg-black text-white md:px-16 sm:px-10 px-5 ">
      <main className="container mx-auto px-4 py-16 space-y-24">
        <AboutInfo/>
        <Expertise/>
        <Faq/>
        {/* <Projects/> */}
        <Location/>
        <Contact/>
        {/* <section className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-blue-500" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-blue-500" />
                  info@itnplab.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                  123 Tech Street, Innovation City, TC 12345
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500"><Facebook className="w-6 h-6" /></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500"><Twitter className="w-6 h-6" /></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500"><Linkedin className="w-6 h-6" /></a>
                  <a href="#" className="text-gray-400 hover:text-blue-500"><Github className="w-6 h-6" /></a>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section> */}
      </main>


    </div>
  )
}