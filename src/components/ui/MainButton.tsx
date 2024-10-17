import Link from 'next/link';
import React from 'react';

const GetStartedButton = () => {
  return (
    <Link href="/contact">
      <button className="bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 rounded">
        Get Started
      </button>
    </Link>
  );
};

export default GetStartedButton;
