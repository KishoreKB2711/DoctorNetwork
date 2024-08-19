import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="dn-contact-container">
      <div className="dn-contact-box dn-contact-about">
        <h2 className="dn-contact-title">About Doctor Network</h2>
        <div className="dn-contact-highlight">
          <p><strong>Founded:</strong> August 2024</p>
          <p><strong>Founder:</strong> A passionate undergraduate student at the University of South Carolina</p>
          <p><strong>Co-founder:</strong> Dr. Cecilia Fernandes</p>
          <p><strong>Supported by:</strong> Various physicians and healthcare professionals</p>
        </div>
        <p>Doctor Network was born from a vision to empower pre-health students with comprehensive resources for their medical journey. Our mission is to bridge the gap between aspiring medical professionals and experienced physicians.</p>
        <p>We offer a unique platform that provides:</p>
        <ul className="dn-contact-list">
          <li>Exclusive shadowing opportunities</li>
          <li>Personalized mentorship programs</li>
          <li>Expert advice from practicing physicians</li>
          <li>Networking events and forums</li>
        </ul>
        <p>Our goal is to nurture the next generation of healthcare providers by offering real-world insights and guidance from those already in the field.</p>
        <div className="dn-contact-highlight">
          <p><strong>Getting Started:</strong> Visit our "Doctor of the Month" page to begin interacting with featured physicians and exploring shadowing opportunities!</p>
        </div>
        <div className="dn-contact-button-container dn-contact-button-container-spaced">
          <a href="/" className="dn-contact-cta-button">Visit Doctor of the Month</a>
        </div>
        <div className="dn-contact-highlight">
          <p><strong>Utilize the Doctor Database:</strong> Use our database of doctors from previous months to learn about additional specialties and view the questions that were asked. Utilize the contact page if you are interested in reaching out to a specific doctor.</p>
        </div>
        <div className="dn-contact-button-container">
          <a href="/PreviousDoc" className="dn-contact-cta-button">View Previous Doctors</a>
        </div>
      </div>
      <div className="dn-contact-box dn-contact-info-box">
        <h2 className="dn-contact-title">Contact Us</h2>
        <p>We welcome inquiries from pre-health students, healthcare professionals, and anyone interested in supporting our mission. Whether you have questions, feedback, or partnership proposals, we'd love to hear from you!</p>
        <div className="dn-contact-info-details">
          <div className="dn-contact-info-item">
            <span className="dn-contact-info-label">Contact Person:</span>
            <span className="dn-contact-info-value">Shyam Ganesh Babu</span>
          </div>
          <div className="dn-contact-info-item">
            <span className="dn-contact-info-label">Email:</span>
            <span className="dn-contact-info-value">shyamgb2022@gmail.com</span>
          </div>
          <div className="dn-contact-info-item">
            <span className="dn-contact-info-label">Phone:</span>
            <span className="dn-contact-info-value">803-357-3579</span>
          </div>
          <div className="dn-contact-info-item">
            <span className="dn-contact-info-label">Current Status:</span>
            <span className="dn-contact-info-value">Undergraduate student studying pre-med at the University of South Carolina</span>
          </div>
        </div>
        <p>We encourage reaching out from:</p>
        <ul className="dn-contact-list">
          <li>Pre-health students at any educational level</li>
          <li>Medical professionals interested in mentoring</li>
          <li>Healthcare institutions for partnerships</li>
          <li>Anyone passionate about supporting medical education</li>
        </ul>
        <p>Your support, ideas, and collaborations are invaluable to us as we work to enhance the journey of future medical professionals.</p>
        <div className="dn-contact-button-container">
          <a href="mailto:shyamgb2022@gmail.com" className="dn-contact-cta-button">Contact Us Now</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;