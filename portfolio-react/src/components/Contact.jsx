import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, submitted: false, error: null });

        try {
            // Here you would typically make an API call to your backend
            // For now, we'll just simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000));

            setFormStatus({ submitting: false, submitted: true, error: null });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setFormStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' });
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    {formStatus.submitted ? (
                        <div className="success-message">
                            <h3>Thank you for your message!</h3>
                            <p>I'll get back to you as soon as possible.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={formStatus.submitting}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={formStatus.submitting}
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={formStatus.submitting}
                            />
                            {formStatus.error && (
                                <div className="error-message">{formStatus.error}</div>
                            )}
                            <button
                                type="submit"
                                className="btn primary"
                                disabled={formStatus.submitting}
                            >
                                {formStatus.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact; 