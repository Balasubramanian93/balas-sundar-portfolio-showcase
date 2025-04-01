
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer II',
      company: 'Unum Ireland',
      period: '2020 - Present',
      description: [
        'Design and develop robust software solutions that meet customer requirements and organizational objectives.',
        'Collaborate with cross-functional teams to deliver high-impact projects within specified timelines.',
        'Implement best practices in software development to ensure code quality, maintainability, and scalability.',
        'Troubleshoot and resolve complex technical issues to improve application performance and user experience.',
        'Participate in code reviews and provide constructive feedback to enhance team capabilities and software quality.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Previous Company',
      period: '2018 - 2020',
      description: [
        'Developed and maintained web and mobile applications using .NET, WPF, and Xamarin frameworks.',
        'Collaborated with UX/UI designers to implement responsive and user-friendly interfaces.',
        'Implemented RESTful APIs for seamless communication between front-end and back-end systems.',
        'Participated in agile development processes including sprint planning, daily stand-ups, and retrospectives.'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'First Company',
      period: '2017 - 2018',
      description: [
        'Assisted in the development and maintenance of applications using C# and JavaScript.',
        'Contributed to database design and optimization using SQL Server.',
        'Participated in code reviews and improved coding practices.',
        'Supported senior developers in testing and debugging applications.'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="container mx-auto">
        <h2 className="section-title">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="card animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-500">
                    <span className="font-medium">{exp.company}</span>
                    <span className="hidden md:block">•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
