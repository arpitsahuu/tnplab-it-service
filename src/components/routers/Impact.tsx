import React from 'react'
import Spline from '@splinetool/react-spline/next';
import { Laptop, Globe, Users } from "lucide-react";
const Impact = () => {
    const stats = [
        {
          icon: <Laptop className="w-8 h-8 text-blue-400" />,
          number: "300+",
          title: "Projects Completed",
          description: "Successfully delivered innovative solutions across various industries.",
        },
        {
          icon: <Globe className="w-8 h-8 text-blue-400" />,
          number: "200+",
          title: "Global Clients",
          description: "Trusted by businesses worldwide for their IT needs and digital transformation.",
        },
        {
          icon: <Users className="w-8 h-8 text-blue-400" />,
          number: "80+",
          title: "Expert Team Members",
          description: "Skilled professionals dedicated to delivering cutting-edge technology solutions.",
        },
      ];
    return (
        <>
            <h2 className="sm:text-3xl text-2xl px-3 text-gray-200  md:text-4xl font-bold mt-16 text-center ">
                Our Impact in Numbers
            </h2>
            <div className=' relative md:overflow-hidden w-[99vw] overflow-x-hidden  md:h-[80vh] h-[99vh] '>
                <div className='relative w-full top-[-5%] md:top-24 lg:left-[1%] xl:left-[10%]  sm:left-[20%] left-[5%] overflow-hidden'>
                    <Spline
                        className=' bg-black w-full h-full hidden xl:block xl:scale-[0.65]  '
                        scene="https://prod.spline.design/DXsy9ZCChzB0Pbaj/scene.splinecode"
                    />
                </div>
                <section className="bg-gradient-to-b px-10  py-20 text-white absolute top-0 left-0 w-full">
                    <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-12">

                        {/* Left: Stats Section */}
                        <div className="w-full xl:w-1/2">

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-gray-950 rounded-lg border-gray-700">
                                        <div className="p-6 text-center lg:text-left">
                                            {/* <div className="mb-4 flex justify-center lg:justify-start">{stat.icon}</div> */}
                                            <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-600">
                                                {stat.number}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2 text-blue-200">{stat.title}</h3>
                                            <p className="text-gray-400">{stat.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        {/* Right: Image Section */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end  ">
                            {/* <img
                src="/path-to-your-image.jpg"
                alt="Our Impact"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              /> */}
                        </div>

                    </div>
                </section>


            </div>
        </>
    )
}

export default Impact