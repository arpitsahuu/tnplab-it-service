"use client"
import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index)
    }
    return (
        <section className='max-w-[1050px] m-auto'>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {[
                    { question: "What services does ItnpLab offer?", answer: "ItnpLab offers a wide range of IT services including web development, mobile app development, cloud solutions, and cybersecurity consulting." },
                    { question: "How long does a typical project take?", answer: "Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex enterprise solution could take several months." },
                    { question: "Do you provide ongoing support after project completion?", answer: "Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally after launch." },
                    { question: "What industries do you serve?", answer: "We serve various industries including e-commerce, education, healthcare, finance, and more, providing customized digital solutions tailored to their specific needs." },
                    { question: "How do you ensure the security of your solutions?", answer: "We follow industry best practices for security, including regular audits, secure coding practices, and offering additional services like penetration testing and vulnerability assessments." },
                    { question: "Can you help scale an existing solution?", answer: "Yes, we specialize in scaling existing solutions by optimizing code, improving infrastructure, and integrating scalable cloud services such as AWS." },
                    { question: "What makes ItnpLab different from other IT service providers?", answer: "At ItnpLab, we focus on creating long-term partnerships with our clients, offering unparalleled customer service, and delivering innovative, high-quality solutions tailored to each client’s needs." },
                    { question: "How can I get a quote for my project?", answer: "You can reach out to us via our contact form or email with details of your project, and we’ll get back to you with a customized quote after understanding your requirements." },
                    { question: "Do you offer flexible payment plans?", answer: "Yes, we offer flexible payment options to accommodate the varying financial needs of our clients, ensuring that our services remain accessible to businesses of all sizes." }
                ].map((faq, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg">
                        <button
                            className="flex justify-between items-center w-full p-4 text-left"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-semibold">{faq.question}</span>
                            {activeAccordion === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>

                        {/* AnimatePresence for smooth enter/exit */}
                        <AnimatePresence initial={false}>
                            {activeAccordion === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden border-t-[1px] border-gray-700 "
                                >
                                    <div className="p-4">
                                        <p className="text-gray-300">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faq