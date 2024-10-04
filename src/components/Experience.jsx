/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Experience.css'; // Import CSS

const Experience = ({ experiences }) => (
  <section className="experience-section">
    <h3>Experience</h3>
    <ul>
      {experiences.map((exp, index) => (
        <li key={index}>
          <strong>{exp.position}</strong> at {exp.company} ({exp.years})
          <p>{exp.description}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;
