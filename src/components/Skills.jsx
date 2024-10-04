/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Skills.css'; // Import CSS

const Skills = ({ skills }) => (
  <section className="skills-section">
    <h3>Skills</h3>
    {Object.keys(skills).map((category, index) => (
      <div key={index} className="skills-card">
        <h4>{category}</h4>
        <ul>
          {skills[category].map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Skills;
