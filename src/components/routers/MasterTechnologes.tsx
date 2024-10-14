"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Service = {
    name: string;
    description: string;
    technologies: string[];
};

const services: Service[] = [
    {
        name: "Application Development",
        description: "Build robust and scalable applications for web, mobile, and desktop platforms.",
        technologies: ["Web Applications", "Mobile Apps", "Desktop Software", "Cross-platform Development"],
    },
    {
        name: "AI & Automation",
        description: "Leverage the power of artificial intelligence and automation to streamline your business processes.",
        technologies: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Robotic Process Automation"],
    },
    {
        name: "Data Analytics",
        description: "Turn your data into actionable insights with our advanced analytics solutions.",
        technologies: ["Big Data Processing", "Predictive Analytics", "Data Visualization", "Business Intelligence"],
    },
    {
        name: "Cloud App Development",
        description: "Develop and deploy scalable, secure applications in the cloud.",
        technologies: ["AWS", "Azure", "Google Cloud", "Serverless Architecture"],
    },
    {
        name: "UI/UX Services",
        description: "Create intuitive and engaging user experiences that delight your customers.",
        technologies: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
        name: "IT Consulting",
        description: "Get expert advice on how to leverage technology to achieve your business goals.",
        technologies: ["Digital Transformation", "IT Strategy", "Technology Assessment", "Process Optimization"],
    },

];


import React from 'react'

const MasterTechnologes = () => {
    const [selectedService, setSelectedService] = useState<string>("Application Development");

    useEffect(() => {
        setSelectedService("Application Development");
    }, []);

    const handleServiceClick = useCallback((serviceName: string) => {
        setSelectedService(serviceName);
    }, []);

    const selectedServiceDetails = useMemo(() => {
        return services.find((service) => service.name === selectedService);
    }, [selectedService]);
    return (
        <section className=" py-20 text-white">
            <div className="container mx-auto px-4">
                <h2 className=" text-2xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
                    We&apos;re the Masters of Next-Gen Technologies.
                </h2>
                <p className="sm:text-xl text-lg text-gray-400 text-center mb-12 ">
                    Feel the disruption. Experience the future now with our innovative, user-friendly solutions.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {services.map((service) => (
                        <button
                            key={service.name}
                            // variant={selectedService === service.name ? "default" : "outline"}
                            className={`text-sm px-5  rounded-lg py-2 md:text-base ${selectedService === service.name
                                ? "bg-blue-600 text-white"
                                : "text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                                }`}
                            onClick={() => handleServiceClick(service.name)}
                        >
                            {service.name}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    {selectedServiceDetails && (
                        <motion.div
                            key={selectedService}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className=" sm:mx-16 mx-3 px-5 py-10 bg-gray-950  border-gray-800 border  rounded-lg">
                                <div>
                                    <h3 className="text-2xl text-blue-400">
                                        {selectedServiceDetails.name}
                                    </h3>
                                    <p className="text-gray-400">
                                        {selectedServiceDetails.description}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl mt-5 font-semibold mb-4">Key Technologies</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                                        {selectedServiceDetails.technologies.map((tech) => (
                                            <div key={tech} className="bg-gray-800 border-gray-600 px-2 py-4 rounded-md">
                                                <div>
                                                    <h3 className="text-lg mb-1">{tech}</h3>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-400">
                                                        Cutting-edge solutions leveraging the latest in {tech.toLowerCase()} technology.
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default MasterTechnologes


