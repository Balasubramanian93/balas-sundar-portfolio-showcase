
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Marine Dredge Configurator',
      description: 'A sophisticated application that allows users to configure dredging equipment by manipulating 3D models. The application was built using C#, WPF, and Helix Toolkit for 3D visualization.',
      role: 'Lead developer responsible for implementing 3D model visualization, interaction logic, and user interface design.',
      achievements: [
        'Successfully delivered a complex application with advanced 3D visualization capabilities.',
        'Implemented intuitive drag-and-drop functionality for configuring dredge components.',
        'Optimized performance for handling large 3D models while maintaining responsive user interface.'
      ],
      technologies: ['C#', 'WPF', 'MVVM', 'Helix Toolkit', '3D Modeling']
    },
    {
      title: 'CrewSight Mobile Application',
      description: 'A cross-platform mobile application for tracking and managing crew members on construction sites. The application provides real-time information about crew presence, certifications, and assignments.',
      role: 'Full-stack developer responsible for building the mobile application using Xamarin and the backend API using .NET Core.',
      achievements: [
        'Developed a cross-platform mobile app with offline synchronization capabilities.',
        'Implemented a real-time notification system for crew status updates.',
        'Integrated with biometric authentication for secure access control.'
      ],
      technologies: ['Xamarin.Forms', '.NET Core', 'REST API', 'SQL Server', 'Azure Services']
    },
    {
      title: 'PDF Viewer Maintenance',
      description: 'Enhanced and maintained a PDF viewer application used by insurance agents to view and manage policy documents. The project involved improving performance, fixing bugs, and adding new features.',
      role: 'Maintenance developer tasked with improving application performance and extending functionality.',
      achievements: [
        'Reduced document loading time by 40% through optimization of rendering pipeline.',
        'Implemented advanced search functionality with text highlighting features.',
        'Added annotation tools for marking up and commenting on policy documents.'
      ],
      technologies: ['C#', '.NET', 'WPF', 'PDF Rendering Libraries']
    }
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div key={index} className="card animate-fade-in" style={{ animationDelay: `${0.2 * index}s` }}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>
                <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-700 mb-6">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-2">Role:</h4>
                <p className="text-gray-700">{project.role}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
