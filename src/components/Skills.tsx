
import React from 'react';

const Skills = () => {
  const skills = {
    languages: ['C++', 'C#', 'JavaScript', 'Java', 'HTML', 'CSS', 'SQL', 'TypeScript'],
    frameworks: ['.NET', 'WPF', 'UWP', 'Xamarin', 'MAUI', 'React', 'Node.js', 'Express', 'MongoDB', 'React Native'],
    mobile: ['iOS', 'Android', 'React Native', 'Xamarin'],
    tools: ['Visual Studio', 'Visual Studio Code', 'JetBrains Profilers', 'Telerik', 'DevExpress', 'Helix Toolkit', 'MvvmLight', 'Git', 'Docker']
  };

  return (
    <section id="skills" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-4 text-primary">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {skills.languages.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-4 text-primary">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frameworks.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-4 text-primary">Mobile Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.mobile.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
          <div className="card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-4 text-primary">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <span key={index} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
