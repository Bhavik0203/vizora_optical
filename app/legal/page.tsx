'use client'
import Link from 'next/link';

export default function LegalPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <span style={{ color: '#fff' }}>Legal</span>
          </nav>
          <span className="section-label">Legal</span>
          <h1 style={{ marginBottom: 16 }}>Legal & Privacy Policy</h1>
          <p>Important legal information, privacy policy, and terms governing your use of Vizora Optics services.</p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="section-sm bg-off-white">
        <div className="container">
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Data Protection'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ padding: '8px 18px', background: '#fff', border: '1px solid #e8e8e4', fontSize: '0.8rem', fontWeight: 600, color: '#0a1628', textDecoration: 'none', letterSpacing: '0.04em', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'linear-gradient(135deg, #1565c0, #0097c7)'; (e.currentTarget as HTMLAnchorElement).style.color = 'linear-gradient(135deg, #1565c0, #0097c7)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#e8e8e4'; (e.currentTarget as HTMLAnchorElement).style.color = '#0a1628'; }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 64 }}>

            {/* Privacy Policy */}
            <div id="privacy-policy">
              <span className="section-label">Data Protection</span>
              <h2 style={{ marginBottom: 12 }}>Privacy Policy</h2>
              <div className="divider" />
              <p style={{ marginBottom: 16, fontSize: '0.82rem', color: '#9a9a96' }}>Last Updated: January 2025</p>

              {[
                {
                  title: '1. Information We Collect',
                  content: 'Vizora Optics collects information that you provide directly when you contact us, request information, or engage with our services. This may include your name, company name, email address, phone number, and any details you share in correspondence with us. We also collect standard web analytics data such as page views and session duration through our website.',
                },
                {
                  title: '2. How We Use Your Information',
                  content: 'We use the information you provide to respond to your enquiries, process orders and partnership requests, provide product information and technical documentation, improve our products and services, and communicate relevant updates. We do not sell or share your personal information with third parties for marketing purposes.',
                },
                {
                  title: '3. Information Sharing',
                  content: 'Vizora Optics does not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist in our business operations, subject to strict confidentiality agreements. We may also disclose information when required by law or to protect the rights and safety of Vizora Optics and its partners.',
                },
                {
                  title: '4. Data Security',
                  content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.',
                },
                {
                  title: '5. Data Retention',
                  content: 'We retain personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Business contact information is retained for the duration of our business relationship and for a reasonable period thereafter for record-keeping purposes.',
                },
                {
                  title: '6. Your Rights',
                  content: 'You have the right to access, correct, or request deletion of your personal information held by Vizora Optics. To exercise these rights, please contact us at Vizoraoptics@gmail.com. We will respond to your request within 30 days.',
                },
                {
                  title: '7. Cookies',
                  content: 'Our website uses cookies to improve user experience and analyze site traffic. You can control cookie settings through your browser. By continuing to use our website, you consent to our use of cookies in accordance with this policy.',
                },
                {
                  title: '8. Third-Party Links',
                  content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.',
                },
              ].map((section, i) => (
                <div key={i} style={{ marginBottom: 28 }}>
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 10, color: '#0a1628' }}>{section.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.8 }}>{section.content}</p>
                </div>
              ))}
            </div>

            {/* Terms of Use */}
            <div id="terms-of-use" style={{ borderTop: '1px solid #e8e8e4', paddingTop: 48 }}>
              <span className="section-label">Usage Terms</span>
              <h2 style={{ marginBottom: 12 }}>Terms of Use</h2>
              <div className="divider" />
              <p style={{ marginBottom: 16, fontSize: '0.82rem', color: '#9a9a96' }}>Last Updated: January 2025</p>

              {[
                {
                  title: '1. Acceptance of Terms',
                  content: 'By accessing and using the Vizora Optics website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services.',
                },
                {
                  title: '2. Intellectual Property',
                  content: 'All content on the Vizora Optics website, including text, images, product names, logos, and technical documentation, is the intellectual property of Vizora Optics and is protected by applicable copyright and trademark laws. Unauthorized reproduction or use is prohibited.',
                },
                {
                  title: '3. Product Information',
                  content: 'Product specifications, features, and pricing information on this website are provided for informational purposes and are subject to change without notice. Final product details and pricing will be confirmed in writing via our sales team.',
                },
                {
                  title: '4. Limitation of Liability',
                  content: 'Vizora Optics shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or reliance on information contained herein. Our liability is limited to the maximum extent permitted by applicable law.',
                },
                {
                  title: '5. Governing Law',
                  content: 'These terms are governed by the laws of the Commonwealth of Pennsylvania, United States. Any disputes shall be subject to the exclusive jurisdiction of the courts of Pennsylvania.',
                },
              ].map((section, i) => (
                <div key={i} style={{ marginBottom: 28 }}>
                  <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1rem', marginBottom: 10, color: '#0a1628' }}>{section.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: 1.8 }}>{section.content}</p>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div id="cookie-policy" style={{ borderTop: '1px solid #e8e8e4', paddingTop: 48 }}>
              <h2 style={{ marginBottom: 12 }}>Contact Regarding Legal Matters</h2>
              <div className="divider" />
              <p style={{ marginBottom: 24, fontSize: '0.9rem', color: '#4a5568' }}>
                For any legal or privacy-related enquiries, please contact us at the address below. We aim to acknowledge all legal correspondence within 5 business days.
              </p>
              <div style={{ padding: '28px 32px', background: '#f5f5f0', border: '1px solid #e8e8e4', borderLeft: '4px solid linear-gradient(135deg, #1565c0, #0097c7)' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'linear-gradient(135deg, #1565c0, #0097c7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Vizora Optics Legal</div>
                <p style={{ fontSize: '0.9rem', color: '#0a1628', lineHeight: 1.75, fontWeight: 600 }}>
                  307 Fieldbrook Dr<br />Pittsburgh, PA 15288<br />
                  <a href="mailto:vizoraoptics@gmail.com" style={{ color: 'linear-gradient(135deg, #1565c0, #0097c7)', textDecoration: 'none' }}>Vizoraoptics@gmail.com</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
