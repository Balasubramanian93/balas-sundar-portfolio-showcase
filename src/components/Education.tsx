
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        <div className="card animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <GraduationCap className="text-primary h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Bachelor of Engineering in Computer Science and Engineering</h3>
              <p className="text-lg text-gray-600">University College of Engineering Arni</p>
              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <Calendar className="h-4 w-4" />
                <span>2013 - 2017</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pl-0 md:pl-24">
            <p className="text-gray-700">
              Completed a comprehensive program covering fundamental and advanced concepts in computer science, 
              including data structures, algorithms, database management, networking, and software engineering.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">Key Courses:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-badge">Data Structures & Algorithms</span>
                <span className="skill-badge">Database Management Systems</span>
                <span className="skill-badge">Computer Networks</span>
                <span className="skill-badge">Operating Systems</span>
                <span className="skill-badge">Software Engineering</span>
                <span className="skill-badge">Web Technologies</span>
                <span className="skill-badge">Object-Oriented Programming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
