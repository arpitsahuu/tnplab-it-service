import Image from 'next/image';
import React from 'react';
import abutImg from "../../../images/about/5757169_2965739.svg"

const AboutInfo = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-500">tnpLab</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          At tnpLab, we&apos;re passionate about transforming innovative ideas into digital realities. Our team of experts combines cutting-edge technology with creative solutions to empower businesses in the digital age.
        </p>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Unparalleled performance
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Ironclad security
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Stellar support
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Cutting-edge technology
          </li>
        </ul>
      </div>
      <div className="relative h-96">
        <Image
          src={abutImg}
          alt="Abstract Technology Graphic"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutInfo;
