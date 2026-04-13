'use client';
import type { FC } from 'react';
import Link from 'next/link';
import { useState } from 'react';

const ContactPage: FC = () => {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <span style={{ color: '#fff' }}>Contact</span>
          </nav>
          <span className="section-label">Get in Touch</span>
          <h1 style={{ marginBottom: 16 }}>Contact Us</h1>
          <p>We would love to hear from you — whether you are an optical professional, retailer, or looking to partner with Vizora Optics.</p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-2" style={{ gap: 64, alignItems: 'flex-start' }}>

            {/* Form */}
            <div>
              <span className="section-label">Send a Message</span>
              <h2 style={{ marginBottom: 12, fontSize: '1.8rem' }}>Let's Start a Conversation</h2>
              <div className="divider" />
              {submitted ? (
                <div style={{ padding: '40px', background: '#f5f5f0', border: '1px solid #e8e8e4', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)', marginBottom: 16 }}>◈</div>
                  <h3 style={{ marginBottom: 12, fontSize: '1.3rem' }}>Message Sent</h3>
                  <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>
                    Thank you for reaching out. A member of our team will be in touch within 1–2 business days.
                  </p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', subject: '', message: '' }); }}
                    style={{ marginTop: 24, background: 'none', border: '2px solid #0a1628', padding: '10px 24px', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#0a1628', transition: 'all 0.2s' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid-2" style={{ gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Full Name *</label>
                      <input id="contact-name" type="text" className="form-input" required placeholder="Your full name"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-company">Company / Practice</label>
                      <input id="contact-company" type="text" className="form-input" placeholder="Your company name"
                        value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid-2" style={{ gap: 16 }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">Email Address *</label>
                      <input id="contact-email" type="email" className="form-input" required placeholder="your@email.com"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                      <input id="contact-phone" type="tel" className="form-input" placeholder="+1 (000) 000-0000"
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Subject *</label>
                    <select id="contact-subject" className="form-select" required
                      value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                      <option value="">Select a subject</option>
                      <option>Product Enquiry</option>
                      <option>Partnership / Distribution</option>
                      <option>Technical Support</option>
                      <option>Training Request</option>
                      <option>Pricing & Quotation</option>
                      <option>Media / Press</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message *</label>
                    <textarea id="contact-message" className="form-textarea" required placeholder="Tell us how we can help…"
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <button type="submit" className="btn btn-primary" id="contact-submit-btn" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <span className="section-label">Contact Information</span>
                <h2 style={{ marginBottom: 12, fontSize: '1.8rem' }}>Reach Us Directly</h2>
                <div className="divider" />
              </div>

              {/* Offices */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ padding: '28px 28px', border: '1px solid #e8e8e4', background: '#f5f5f0', borderLeft: '4px solid linear-gradient(135deg, #1565c0, #0097c7)' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Office Address — Pennsylvania</div>
                  <p style={{ color: '#0a1628', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.65 }}>Vizora Optics<br />307 Fieldbrook Dr<br />Pittsburgh, PA 15288</p>
                </div>
                <div style={{ padding: '28px 28px', border: '1px solid #e8e8e4', background: '#f5f5f0', borderLeft: '4px solid #0a1628' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#9a9a96', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Communication Address — New Jersey</div>
                  <p style={{ color: '#0a1628', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.65 }}>64 4th Street<br />Wood Ridge, NJ 07075</p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 16, padding: '20px 24px', border: '1px solid #e8e8e4', alignItems: 'center', background: '#fff' }}>
                  <div style={{ width: 44, height: 44, background: '#0a1628', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontSize: '1rem' }}>@</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#9a9a96', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Sales Enquiries</div>
                    <a href="mailto:sales@vizoraoptics.com" style={{ color: '#0a1628', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>Sales@vizoraoptics.com</a>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 16, padding: '20px 24px', border: '1px solid #e8e8e4', alignItems: 'center', background: '#fff' }}>
                  <div style={{ width: 44, height: 44, background: '#0a1628', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontSize: '1rem' }}>@</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#9a9a96', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>General Enquiries</div>
                    <a href="mailto:vizoraoptics@gmail.com" style={{ color: '#0a1628', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}>Vizoraoptics@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Hours & Response */}
              <div style={{ padding: '24px 28px', background: '#0a1628', borderLeft: '4px solid linear-gradient(135deg, #1565c0, #0097c7)' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>Business Hours</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Monday – Friday</span>
                    <span style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>9:00 AM – 6:00 PM ET</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>Email Response</span>
                    <span style={{ fontSize: '0.85rem', color: 'linear-gradient(135deg, #1565c0, #0097c7)', fontWeight: 600 }}>Within 24 hours</span>
                  </div>
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
