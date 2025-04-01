
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-blue-400/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 animate-fade-in">
            <h2 className="text-2xl font-bold">Balasubramanian Sundararajan</h2>
            <p className="text-gray-400 mt-1">Software Engineer II at Unum Ireland</p>
          </div>
          <div className="flex gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform-gpu">
                    <Github />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform-gpu">
                    <Linkedin />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn Profile</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="mailto:contact@balasundararajan.com" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform-gpu">
                    <Mail />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send Email</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            © {new Date().getFullYear()} Balasubramanian Sundararajan. All rights reserved.
          </p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="#hero" 
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors animate-fade-in hover:scale-105 transform-gpu"
                  style={{ animationDelay: "0.4s" }}
                >
                  Back to top <ArrowUp className="h-4 w-4" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Scroll to top</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
