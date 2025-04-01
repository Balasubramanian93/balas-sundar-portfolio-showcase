
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-blue-400/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <p className="text-primary font-medium mb-2 animate-slide-in" style={{ animationDelay: '0.1s' }}>Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              Balasubramanian Sundararajan
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              Software Engineer II at Unum Ireland
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg animate-slide-in" style={{ animationDelay: '0.4s' }}>
              Passionate about designing and developing robust software solutions
              with a commitment to innovation and excellence in software development.
            </p>
            <div className="flex gap-4 mb-8 animate-slide-in" style={{ animationDelay: '0.5s' }}>
              <a
                href="#contact"
                className="btn-primary hover:scale-105 transition-transform"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary/10 hover:scale-105 transition-all"
              >
                View Projects
              </a>
            </div>
            <div className="flex gap-4 animate-slide-in" style={{ animationDelay: '0.6s' }}>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors hover:scale-110 transform-gpu">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors hover:scale-110 transform-gpu">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@balasundararajan.com" className="text-gray-600 hover:text-primary transition-colors hover:scale-110 transform-gpu">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 animate-fade-in relative" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Enhanced avatar with gradient animation */}
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-full blur-xl animate-pulse"></div>
                
                {/* Main avatar circle with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-full animate-slow-spin">
                  {/* Avatar container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <Avatar className="w-full h-full">
                      <AvatarFallback className="text-8xl font-bold bg-gradient-to-br from-primary/20 to-primary text-white">
                        BS
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                {/* Decorative orbit rings */}
                <div className="absolute inset-0 border-4 border-primary/10 rounded-full animate-slow-spin-reverse"></div>
                <div className="absolute inset-[-15px] border-2 border-primary/20 rounded-full"></div>
                <div className="absolute inset-[-30px] border border-primary/10 rounded-full animate-slow-spin"></div>
                
                {/* Floating dots */}
                <div className="absolute top-5 right-10 w-4 h-4 bg-primary rounded-full animate-float"></div>
                <div className="absolute bottom-10 right-5 w-3 h-3 bg-blue-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-primary/60 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="text-gray-400 hover:text-primary">
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
