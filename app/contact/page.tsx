'use client';
import type { FC } from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactPage: FC = () => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .contact-form-wrapper {
          position: relative;
        }
        
        .form-header {
          margin-bottom: 40px;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-label {
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #374151;
        }
        
        .required {
          color: #ef4444;
          font-size: 0.8rem;
        }
        
        .input-wrapper {
          position: relative;
        }
        
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 16px 20px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #111827;
          background: #ffffff;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }
        
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: #1565c0;
          box-shadow: 0 0 0 4px rgba(21, 101, 192, 0.1);
        }
        
        .form-input::placeholder, .form-textarea::placeholder {
          color: #9ca3af;
        }
        
        .input-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(135deg, #1565c0, #0097c7);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 0 0 10px 10px;
        }
        
        .form-input:focus ~ .input-border,
        .form-select:focus ~ .input-border,
        .form-textarea:focus ~ .input-border {
          transform: scaleX(1);
        }
        
        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          padding: 18px 32px;
          background: linear-gradient(135deg, #1565c0, #0097c7);
          color: white;
          border: none;
          border-radius: 12px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(21, 101, 192, 0.3);
        }
        
        .submit-btn:hover::before {
          left: 100%;
        }
        
        .submit-btn:active {
          transform: translateY(0);
        }
        
        .success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, #f0fdf4, #dcfce7);
          border: 2px solid #22c55e;
          border-radius: 16px;
          animation: slideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .success-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
        }
        
        .success-icon svg {
          color: white;
        }
        
        .secondary-btn {
          padding: 12px 28px;
          background: white;
          color: #1565c0;
          border: 2px solid #1565c0;
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .secondary-btn:hover {
          background: #1565c0;
          color: white;
          transform: translateY(-1px);
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .success-message {
            padding: 40px 24px;
          }
        }
        
        /* FAQ Accordion Styles */
        details {
          transition: all 0.3s ease;
        }
        
        details:hover {
          border-color: #1565c0;
          box-shadow: 0 4px 12px rgba(21, 101, 192, 0.1);
        }
        
        details[open] {
          background: linear-gradient(135deg, #f8fafc, #ffffff);
          border-color: #1565c0;
        }
        
        summary::-webkit-details-marker {
          display: none;
        }
        
        summary {
          list-style: none;
        }
        
        summary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
        }
        
        details[open] summary span:last-child {
          transform: rotate(45deg);
          background: linear-gradient(135deg, #0097c7, #1565c0);
        }
        
        details[open] summary {
          color: #1565c0;
        }
      `}</style>

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <span style={{ color: '#fff' }}>Contact</span>
          </nav>
          <span className="section-label">Get in Touch</span>
          <h1 style={{ marginBottom: 16 }}>Contact Us</h1>
          <p>We would love to hear from you whether you are an optical professional, retailer, or looking to partner with Vizora Optics.</p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'flex-start' }}>

            {/* Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <span className="section-label">Send a Message</span>
                <h2 style={{ marginBottom: 12, fontSize: '2rem', fontFamily: 'Playfair Display, serif' }}>Let's Start a Conversation</h2>
                <div className="divider" />
              </div>
              
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">
                    <CheckCircle size={48} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ marginBottom: 12, fontSize: '1.5rem', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>Message Sent Successfully</h3>
                  <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6, maxWidth: '400px', margin: '0 auto 24px' }}>
                    Thank you for reaching out. A member of our team will be in touch within 1–2 business days.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="secondary-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        <span>Full Name</span>
                        <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input 
                          id="contact-name" 
                          type="text" 
                          className="form-input" 
                          required 
                          placeholder="Your full name"
                          value={form.name} 
                          onChange={(e) => setForm({ ...form, name: e.target.value })} 
                        />
                        <div className="input-border"></div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-company">Company / Practice</label>
                      <div className="input-wrapper">
                        <input 
                          id="contact-company" 
                          type="text" 
                          className="form-input" 
                          placeholder="Your company name"
                          value={form.company} 
                          onChange={(e) => setForm({ ...form, company: e.target.value })} 
                        />
                        <div className="input-border"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">
                        <span>Email Address</span>
                        <span className="required">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input 
                          id="contact-email" 
                          type="email" 
                          className="form-input" 
                          required 
                          placeholder="your@email.com"
                          value={form.email} 
                          onChange={(e) => setForm({ ...form, email: e.target.value })} 
                        />
                        <div className="input-border"></div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                      <div className="input-wrapper">
                        <input 
                          id="contact-phone" 
                          type="tel" 
                          className="form-input" 
                          placeholder="+1 (000) 000-0000"
                          value={form.phone} 
                          onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                        />
                        <div className="input-border"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">
                      <span>Subject</span>
                      <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <select 
                        id="contact-subject" 
                        className="form-select" 
                        required
                        value={form.subject} 
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        <option value="">Select a subject</option>
                        <option>Product Enquiry</option>
                        <option>Partnership / Distribution</option>
                        <option>Technical Support</option>
                        <option>Training Request</option>
                        <option>Pricing & Quotation</option>
                        <option>Media / Press</option>
                        <option>General Enquiry</option>
                      </select>
                      <div className="input-border"></div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      <span>Message</span>
                      <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                      <textarea 
                        id="contact-message" 
                        className="form-textarea" 
                        required 
                        placeholder="Tell us how we can help…"
                        rows={6}
                        value={form.message} 
                        onChange={(e) => setForm({ ...form, message: e.target.value })} 
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    <span>Send Message</span>
                    <Send size={16} strokeWidth={1.5} />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div>
                <span className="section-label">Contact Information</span>
                <h2 style={{ marginBottom: 12, fontSize: '1.8rem' }}>Reach Us Directly</h2>
                <div className="divider" />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: 48, 
                    height: 48, 
                    background: 'linear-gradient(135deg, #1565c0, #0097c7)', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} color="white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>Email</h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      info@vizoraoptics.com<br />
                      support@vizoraoptics.com
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: 48, 
                    height: 48, 
                    background: 'linear-gradient(135deg, #1565c0, #0097c7)', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} color="white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>Phone</h4>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      +44 (0) 20 7123 4567<br />
                      Mon-Fri 9:00-17:30 GMT
                    </p>
                  </div>
                </div>
              </div>

             {/* FAQ Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <span className="section-label">Frequently Asked Questions</span>
                <h2 style={{ marginBottom: 12, fontSize: '1.8rem' }}>Quick Answers</h2>
                <div className="divider" />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  {
                    question: "How do I become a Vizora Optics distributor?",
                    answer: "Contact our partnerships team through the form above or email partnerships@vizoraoptics.com. We'll review your application and schedule a consultation to discuss distribution opportunities in your region."
                  },
                  {
                    question: "What is your standard delivery time?",
                    answer: "Standard orders typically ship within 3-5 business days. Express shipping options are available for urgent orders. International delivery times vary by location but usually range from 7-14 business days."
                  },
                  {
                    question: "Do you offer technical training for optical professionals?",
                    answer: "Yes! We provide comprehensive training programs for optical professionals. Visit our Training page to learn about available modules, certification programs, and upcoming workshop dates."
                  },
                  {
                    question: "What is your warranty policy?",
                    answer: "All Vizora Optics lenses come with a standard 2-year warranty against manufacturing defects. Extended warranty options are available for professional accounts. Contact support for specific warranty claims."
                  },
                  {
                    question: "How can I request product samples?",
                    answer: "Professional accounts can request samples through their account manager or by contacting our sales team. New customers should include their business details in the contact form for sample consideration."
                  }
                ].map((faq, index) => (
                  <div key={index} style={{
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}>
                    <details style={{
                      padding: '20px 24px',
                      cursor: 'pointer',
                      userSelect: 'none',
                      listStyle: 'none'
                    }}>
                      <summary style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '1rem',
                        color: '#111827',
                        outline: 'none',
                        position: 'relative'
                      }}>
                        <span>{faq.question}</span>
                        <span style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #1565c0, #0097c7)',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: 700,
                          transition: 'transform 0.3s ease'
                        }}>+</span>
                      </summary>
                      <p style={{
                        marginTop: '16px',
                        color: '#64748b',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {faq.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
              
              <div style={{
                padding: '20px 24px',
                background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                border: '1px solid #bae6fd',
                borderRadius: '12px',
                marginTop: 8
              }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.9rem',
                  color: '#0c4a6e',
                  margin: 0,
                  textAlign: 'center'
                }}>
                  <strong>Still have questions?</strong> Use the contact form above or call our support team directly. We're here to help!
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
