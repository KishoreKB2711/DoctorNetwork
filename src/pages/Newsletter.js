import React, { useState } from 'react';
import './Newsletter.css';
import NewsletterService from '../services/newsletter.service.js';

export default function Newsletter() {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(false);
    const [confirmation, setConfirmation] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await NewsletterService.submitNewsletter(formData);
            setConfirmation(formData);
            setFormData({ name: '', email: '' });
        } catch (error) {
            console.error('Error submitting newsletter:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="box join-newsletter">
                <div className="title">Stay Updated with Our Newsletter</div>
                {!confirmation ? (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">
                            {loading ? (
                                <div className="loading-icon"></div>
                            ) : (
                                'Subscribe'
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="confirmation-message">
                        <p>
                            Thank you, <strong>{confirmation.name}</strong>, for subscribing to our
                            newsletter! We will be sending emails to <strong>{confirmation.email}</strong>. Keep an eye out for them!
                        </p>
                    </div>
                )}
            </div>
            <div className="newsletter-description">
                <div className="title">Why Join Our Newsletter?</div>
                <p>
                Stay up-to-date with the latest from PhysiLink by joining our newsletter! You'll get updates on new physicians, specialties, Zoom sessions, and answered questions, plus insights directly from the experts. Sign up today to be part of an exclusive network of pre-health students and healthcare professionals, and stay informed with valuable advice and opportunities!
                </p>
            </div>
        </div>
    );
}
