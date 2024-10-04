/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Education.css'; // Import CSS

// eslint-disable-next-line react/prop-types
const Education = ({ education }) => (
  <section className="education-section">
    <h3>Education</h3>
    <ul>
      {education.map((edu, index) => (
        <li key={index}>
          <strong>{edu.degree}</strong> from {edu.institution} ({edu.year})
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
