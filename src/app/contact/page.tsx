import React from 'react';
import ContactUsForm from '@/components/contact/ContactUsForm';
import ContactInfo from '@/components/contact/ContactInfo';

const Page = () => {
  return (
    <div className="min-h-screen bg-black text-white lg:px-16">
      <main className="container mx-auto px-4 pb-16 mt-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-blue-500">Touch</span> with Us
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? We&apos;d love to hear from you.
            Reach out to us and let&apos;s turn your ideas into digital reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactUsForm />
          {/* <ContactInfo /> */}
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">What services do you offer?</h3>
              <p className="text-gray-400">
                We offer a wide range of IT services including web development, mobile app development, cloud solutions, 
                and cybersecurity consulting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">How long does a typical project take?</h3>
              <p className="text-gray-400">
                Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, 
                while a complex enterprise solution could take several months.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">Do you provide ongoing support?</h3>
              <p className="text-gray-400">
                Yes, we offer various support and maintenance packages to ensure your digital solutions continue to 
                perform optimally after launch.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">How can I request a quote?</h3>
              <p className="text-gray-400">
                You can request a quote by filling out our contact form, sending us an email, or giving us a call. 
                We&apos;ll get back to you promptly to discuss your project needs.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;