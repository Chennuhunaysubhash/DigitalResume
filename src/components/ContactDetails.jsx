/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ContactDetails.css'; // Import CSS

const ContactDetails = ({ email, phone }) => (
  <section className="contact-section">
    <h3>Contact</h3>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
  </section>
);

export default ContactDetails;
