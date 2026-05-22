import React, { useContext } from 'react';
import Card from '../components/Card';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { SiteContentContext } from '../context/SiteContentContext';
import './Contact.css';

const Contact = () => {
  const { content } = useContext(SiteContentContext);
  const contactData = content.contact;
  return (
    <div className="contact-page bg-purple">
      {/* Header */}
      <section className="contact-header text-center">
        <div className="container">
          <h1 className="hero-title font-sans-display" style={{ fontSize: '56px', marginBottom: '16px' }}>
            Let's start a <span className="font-sans-display text-yellow">conversation</span>
          </h1>
          <p className="hero-subtitle text-muted" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Whether you have a question about admissions, curriculum, or just want to say hello, we're here for you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section" style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div className="contact-grid">

            {/* Left Column */}
            <div className="contact-info-col">
              <div className="info-block">
                <span className="material-symbols-outlined text-brown">location_on</span>
                <div>
                  <strong className="text-navy">Main Campus</strong>
                  <p>{contactData.address}</p>
                </div>
              </div>

              <div className="info-block">
                <span className="material-symbols-outlined text-brown">call</span>
                <div>
                  <strong className="text-navy">Phone Support</strong>
                  <p>{contactData.phone1}<br />{contactData.phone2}</p>
                </div>
              </div>

              <div className="info-block">
                <span className="material-symbols-outlined text-brown">mail</span>
                <div>
                  <strong className="text-navy">Email</strong>
                  <p>{contactData.email1}<br />{contactData.email2}</p>
                </div>
              </div>

              <Card className="office-hours-card bg-cream border-brown mt-8">
                <h4 className="font-sans-display text-navy mb-4">Office Hours</h4>
                <div className="hours-row"><span>Mon - Fri</span><span>9:00 AM - 5:00 PM</span></div>
                <div className="hours-row"><span>Saturday</span><span>9:00 AM - 2:00 PM</span></div>
                <div className="hours-row"><span className="text-orange">Sunday</span><span className="text-orange">Closed</span></div>
              </Card>

              <div className="map-card mt-6" style={{ height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <iframe
                  src="https://maps.google.com/maps?q=Jabra%20Rd,%20Jabra,%20Hazaribagh,%20Jharkhand%20825301&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Geeta Science Inter College Map"
                ></iframe>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div className="contact-form-col">
              <Card className="contact-form-card">
                <h2 className="font-sans-display mb-6">Send us a message</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <InputField label="First Name" placeholder="John" />
                    <InputField label="Last Name" placeholder="Doe" />
                  </div>
                  <div className="form-row">
                    <InputField label="Email Address" type="email" placeholder="john@example.com" />
                    <InputField label="Phone Number" type="tel" placeholder="+91" />
                  </div>

                  <div className="mb-6">
                    <label className="block font-bold mb-4 text-navy" style={{ fontSize: '14px' }}>Interested Stream</label>
                    <div className="stream-radio-group">
                      <label className="stream-radio">
                        <input type="radio" name="stream" value="science" defaultChecked />
                        <span className="radio-pill">Science</span>
                      </label>
                      <label className="stream-radio">
                        <input type="radio" name="stream" value="commerce" />
                        <span className="radio-pill">Commerce</span>
                      </label>
                      <label className="stream-radio">
                        <input type="radio" name="stream" value="arts" />
                        <span className="radio-pill">Arts</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block font-bold mb-2 text-navy" style={{ fontSize: '14px' }}>Message</label>
                    <textarea
                      className="form-textarea"
                      rows="4"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <Button variant="brown" size="large" style={{ width: '100%' }}>Send Message</Button>
                </form>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
