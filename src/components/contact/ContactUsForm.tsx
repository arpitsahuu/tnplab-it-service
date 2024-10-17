"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Loader2 } from 'lucide-react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// Validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    contactNumber: Yup.string()
        .matches(/^[0-9]+$/, "Contact number must be digits only")
        .min(10, 'Contact number must be at least 10 digits')
        .max(15, 'Contact number cannot exceed 15 digits')
        .required('Contact number is required'),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required'),
})

const ContactUsForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (values: { name: string; email: string; contactNumber: string; message: string }) => {
        setIsSubmitting(true)
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            console.log('Form data:', values)
        }, 2000)
    }

    return (
        <>
            <motion.div
                className="bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Send us a message</h2>
                <Formik
                    initialValues={{ name: '', email: '', contactNumber: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isValid }) => (
                        <Form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                                    placeholder="Your name"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                                    placeholder="your@email.com"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-300 mb-1">Contact Number</label>
                                <Field
                                    type="text"
                                    id="contactNumber"
                                    name="contactNumber"
                                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                                    placeholder="Your contact number"
                                />
                                <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                                <Field
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                                    placeholder="Your message here..."
                                />
                                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                            </div>

                            <button
                                type="submit"
                                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out transform hover:scale-105 ${!isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={!isValid || isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 h-5 w-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </Form>
                    )}
                </Formik>
            </motion.div>
        </>
    )
}

export default ContactUsForm
