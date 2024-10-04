/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLinkedin, FaGithub, FaCode, FaGlobe, FaEnvelope, FaFileAlt, FaDocker, FaMapMarkerAlt } from 'react-icons/fa'; // Import the icons you need
import './Header.css'; 

const Header = ({ name, title }) => (
  <header>
    <h1>{name}</h1>
    <h2>{title}</h2>
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/hunaysubhash-chennu-b65560202" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaLinkedin />
        <span className="tooltip">LinkedIn</span>
      </a>
      <a href="https://github.com/Chennuhunaysubhash" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaGithub />
        <span className="tooltip">GitHub</span>
      </a>
      <a href="https://leetcode.com/u/Hunaysubhash_Chennu/" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaCode />
        <span className="tooltip">LeetCode</span>
      </a>
      <a href="https://chennuhunaysubhash.github.io/my-portfolio1/" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaGlobe />
        <span className="tooltip">Portfolio</span>
      </a>
      <a href="mailto:hunaysubhash97@gmail.com" className="icon-link" rel="noopener noreferrer">
        <FaEnvelope />
        <span className="tooltip">Email</span>
      </a>
      <a href="https://hub.docker.com/u/your-dockerhub-username" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaDocker />
        <span className="tooltip">Docker Hub</span>
      </a>
      <a href="https://www.google.com/maps/search/?api=1&query=Dno:+8-179,+Sivalayam+Street,+Dirusumarru,+Bhimavaram,+West+Godavari,+Andhra+Pradesh,+Pin:+534239" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaMapMarkerAlt />
        <span className="tooltip">Address: Dno: 8-179, Sivalayam Street, Dirusumarru, Bhimavaram, West Godavari, Andhra Pradesh, Pin: 534239</span>
      </a>
      <a href="https://chennuhunaysubhash.github.io/my-portfolio1/ChennuHunaySubhash97.pdf" target="_blank" rel="noopener noreferrer" className="icon-link">
        <FaFileAlt />
        <span className="tooltip">Resume</span>
      </a>
    </div>
  </header>
);

export default Header;
