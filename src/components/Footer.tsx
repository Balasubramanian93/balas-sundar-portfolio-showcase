
import React from 'react';
import { GitHub, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Balasubramanian Sundararajan</h2>
            <p className="text-gray-400 mt-1">Software Engineer II at Unum Ireland</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <GitHub />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin />
            </a>
            <a href="mailto:contact@balasundararajan.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Balasubramanian Sundararajan. All rights reserved.
          </p>
          <a 
            href="#hero" 
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
