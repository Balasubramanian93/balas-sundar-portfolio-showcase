
import React from 'react';
import { ArrowDown, GitHub, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Balasubramanian Sundararajan
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Software Engineer II at Unum Ireland
            </h2>
            <p className="text-gray-700 mb-8 max-w-lg">
              Passionate about designing and developing robust software solutions
              with a commitment to innovation and excellence in software development.
            </p>
            <div className="flex gap-4 mb-8">
              <a
                href="#contact"
                className="btn-primary"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-primary text-primary px-6 py-2 rounded-md hover:bg-primary/10 transition-colors"
              >
                View Projects
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <GitHub size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@balasundararajan.com" className="text-gray-600 hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="bg-primary/10 w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  BS
                </div>
              </div>
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary/5 rounded-full -z-10 translate-x-4 translate-y-4"></div>
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
