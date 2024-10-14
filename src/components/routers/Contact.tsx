import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <section className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-xl text-gray-400 mb-8">
        Let&apos;s transform your ideas into digital reality. Contact us today for a free consultation.
      </p>
      <Link href="/contact" className="bg-blue-500 text-white py-3 px-8 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300">
          Contact Us
      </Link>
    </section>
  );
}

export default Contact;
