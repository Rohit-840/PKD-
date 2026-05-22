import { useState } from 'react';
import { FiCalendar, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { profile } from '../../data/site.js';
import { useReveal } from '../../hooks/useReveal.js';
import './Contact.css';

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  purpose: 'consultation',
  message: '',
};

const PURPOSE_LABEL = {
  consultation: 'Consultation',
  collaboration: 'Collaboration',
  media: 'Media / Interview',
  other: 'Other',
};

const buildMailto = (form) => {
  const subject = `[Inquiry · ${PURPOSE_LABEL[form.purpose]}] ${form.name}`;
  const lines = [
    `Name:    ${form.name}`,
    `Email:   ${form.email}`,
    form.phone ? `Phone:   ${form.phone}` : null,
    `Purpose: ${PURPOSE_LABEL[form.purpose]}`,
    '',
    'Message:',
    form.message,
  ].filter(Boolean);

  const body = lines.join('\n');
  return `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const Contact = () => {
  const [ref, visible] = useReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildMailto(form);
    setSent(true);
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <div className="contact__grid">
          <div className="contact__intro">
            <span className="eyebrow">Connect</span>
            <h2>
              Begin a conversation
              <br />
              with Payal.
            </h2>
            <p className="lede">
              For consultations, collaborations, media or speaking — share a short note and
              the right person from her team will respond, usually within two working days.
            </p>

            <ul className="contact__meta">
              <li>
                <FiMail aria-hidden="true" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <FiPhone aria-hidden="true" />
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <FiMapPin aria-hidden="true" />
                <span>{profile.location}</span>
              </li>
            </ul>

            {profile.calendlyUrl && (
              <a
                className="contact__calendly"
                href={profile.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiCalendar aria-hidden="true" />
                <span>
                  <strong>Book a 30-minute meeting</strong>
                  <em>pick a time directly</em>
                </span>
              </a>
            )}
          </div>

          <form className="contact__form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone <small>(optional)</small></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="purpose">Reason for reaching out</label>
              <select id="purpose" name="purpose" value={form.purpose} onChange={onChange}>
                <option value="consultation">Consultation</option>
                <option value="collaboration">Collaboration</option>
                <option value="media">Media / Interview</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                required
                minLength={10}
                maxLength={2000}
                placeholder="A few sentences about what you'd like to discuss…"
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              Send Inquiry
            </button>

            {sent && (
              <p className="contact__feedback" role="status">
                Your email client should have opened with the message ready to send.
                If nothing happened, please email{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a> directly or use the
                Calendly link.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
