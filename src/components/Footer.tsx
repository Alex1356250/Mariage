import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-rose-500" />
            <span className="text-lg font-serif">Alex & Sophie</span>
          </div>
          <p className="text-gray-500 text-sm">23 Mai 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;