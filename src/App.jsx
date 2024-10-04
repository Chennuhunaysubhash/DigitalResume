/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import ContactDetails from './components/ContactDetails';
import ProfileSummary from './components/ProfileSummary';

const App = () => {
  const skills = {
    'Programming Languages': ['Java', 'JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'NoSQL'],
    'Backend Technologies': ['Spring Boot', 'Spring Framework', 'Hibernate', 'Node.js'],
    'Frontend Technologies':['HTML', 'CSS', 'React', 'Angular'],
    'Database Management': ['MySQL', 'PostgreSQL', 'Oracle', 'MongoDB'],
    'Tools & Methodologies':['Git', 'Docker', 'Kubernates', 'AWS', 'Microservices', 'Kafka', 'RabbitMQ', 'BitBucket', 'Jira', 'Agile'],
    // Add more categories if needed
  };
  const experiences = [
    { position: 'Java Full Stack Developer', company: 'Virtusa Corporation', years: '2022-Present', description: 'Developed web applications...' },
    { position: 'Associate Engineer', company: 'Virtusa Consulting Services Pvt Ltd', years: '2021-2022', description: 'Worked on software development...' }
  ];
  const education = [
    { degree: 'Bachelor of Technology in Computer Science', institution: 'DNR College Of Engineering & Technology', year: '2020' }
  ];

  
  return (
    <div>
      <Header name="Hunay Subhash Chennu" title="Java Full Stack Developer" />
      <ProfileSummary/>
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Education education={education} />
      <ContactDetails email="hunaysubhash97@gmail.com" phone="+91 8074243933" />
    </div>
  );
};

export default App;
