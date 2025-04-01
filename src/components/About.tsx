
import React from 'react';
import { Code, Users, Lightbulb, BarChart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg mb-6">
              As a Software Engineer II at Unum Ireland, I am passionate about designing and developing
              robust software solutions that deliver exceptional user experiences and drive business growth.
            </p>
            <p className="text-lg mb-6">
              With expertise in multiple programming languages and frameworks, I specialize in creating 
              efficient and scalable applications. I thrive in collaborative environments where I can 
              leverage my technical skills to solve complex challenges and contribute to innovative solutions.
            </p>
            <p className="text-lg">
              My commitment to excellence, continuous learning, and staying updated with emerging technologies
              enables me to deliver high-quality software products that meet and exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-primary mb-4">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">
                Skilled in developing robust, scalable applications using multiple languages and frameworks.
              </p>
            </div>
            <div className="card animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-primary mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Experienced in working with cross-functional teams to deliver high-impact projects.
              </p>
            </div>
            <div className="card animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-primary mb-4">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Committed to finding creative solutions to complex software challenges.
              </p>
            </div>
            <div className="card animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-primary mb-4">
                <BarChart size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Dedicated to maintaining high standards in software development and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
