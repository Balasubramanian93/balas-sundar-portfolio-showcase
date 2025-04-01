
import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certified Scrum Master™',
      issuer: 'Scrum Alliance',
      date: 'March 2022',
      description: 'Certification in Scrum methodologies and Agile project management practices.'
    },
    {
      title: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: 'January 2021',
      description: 'Validation of expertise in designing, building, testing, and maintaining cloud applications and services on Microsoft Azure.'
    },
    {
      title: 'Xamarin Certified Mobile Developer',
      issuer: 'Microsoft',
      date: 'June 2020',
      description: 'Recognition of skills in developing cross-platform mobile applications using Xamarin technology.'
    }
  ];

  return (
    <section id="certifications">
      <div className="container mx-auto">
        <h2 className="section-title">Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="card animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
              <div className="text-gray-700">
                <p className="font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-500 mb-3">{cert.date}</p>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
