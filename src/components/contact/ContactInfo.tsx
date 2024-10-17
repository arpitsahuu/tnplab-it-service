"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin} from 'lucide-react';
import Faq from '../faq/Faq';

const ContactInfo = () => {
    return (
        <>
            <motion.div
                className="bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Contact Information</h2>
                <div className="space-y-6">
                    {[
                        {
                            icon: <Mail className="flex-shrink-0 h-6 w-6 text-blue-400 mr-4" />,
                            title: 'Email',
                            info: <a href="mailto:contact@tnplab.in?subject=Let's%20Work%20Together" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">contact@tnplab.in</a>,
                        },
                        {
                            icon: <Phone className="flex-shrink-0 h-6 w-6 text-blue-400 mr-4" />,
                            title: 'Phone',
                            info: <a href="tel:+919244107733" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">+91-9244107733</a>,
                        },
                        {
                            icon: <MapPin className="flex-shrink-0 h-6 w-6 text-blue-400 mr-4" />,
                            title: 'Address',
                            info: '123 Tech Street, Silicon Valley, CA 94000',
                        },
                    ].map(({ icon, title, info }) => (
                        <motion.div
                            key={title}
                            className="flex items-start bg-gray-700 bg-opacity-50 p-4 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                        >
                            {icon}
                            <div>
                                <p className="text-lg font-medium">{title}</p>
                                <p className="text-gray-300">{info}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-center">Connect with us</h3>
                    <div className="flex justify-center space-x-4">
                        {[
                            { name: 'Facebook', href: 'https://facebook.com', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
                            { name: 'Instagram', href: 'https://instagram.com', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg> },
                            { name: 'Twitter', href: 'https://twitter.com', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6.01c-.77.34-1.6.57-2.46.67.88-.53 1.56-1.36 1.88-2.36-.82.49-1.73.84-2.7 1.03-.77-.83-1.88-1.35-3.1-1.35-2.47 0-4.47 2.01-4.47 4.48 0 .35.04.69.11 1.02-3.72-.19-7.03-1.96-9.23-4.66-.38.65-.6 1.41-.6 2.22 0 1.53.78 2.88 1.97 3.67-.73-.02-1.42-.22-2.02-.55v.06c0 2.14 1.53 3.93 3.56 4.33-.37.1-.76.15-1.16.15-.28 0-.56-.03-.83-.07.56 1.74 2.19 3.01 4.12 3.04-1.5 1.17-3.39 1.87-5.44 1.87-.35 0-.7-.02-1.04-.06 1.94 1.25 4.25 1.99 6.74 1.99 8.08 0 12.5-6.69 12.5-12.48 0-.19 0-.38-.02-.56.86-.62 1.61-1.4 2.2-2.29z" /></svg> },
                        ].map(({ name, href, icon }) => (
                            <a
                                key={name}
                                href={"/"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition duration-200"
                                aria-label={`Connect with us on ${name}`}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
           
        </>
    );
};

export default ContactInfo;
