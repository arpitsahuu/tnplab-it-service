// components/GetStartedButton.tsx
"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const GetStartedButton = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    console.log("enter")
    router.push('/contact');
  };

  return (
    <button onClick={handleGetStartedClick} className="bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 rounded">
      Get Started
    </button>
  );
};

export default GetStartedButton;
