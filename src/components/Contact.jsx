import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const contactLinks = [
    {
        href: 'mailto:sarathyofficial90@gmail.com',
        icon: <Mail size={20} />,
        iconBg: 'rgba(232,160,69,0.15)',
        iconColor: '#e8a045',
        title: 'Email Me',
        sub: 'sarathyofficial90@gmail.com',
    },
    {
        href: 'https://github.com/SarathyMurugesan3',
        target: '_blank',
        icon: <Github size={20} />,
        iconBg: 'rgba(255,255,255,0.07)',
        iconColor: '#f0ede8',
        title: 'GitHub',
        sub: '@SarathyMurugesan3',
    },
    {
        href: 'https://www.linkedin.com/in/sarathy-m-098b6a291/',
        target: '_blank',
        icon: <Linkedin size={20} />,
        iconBg: 'rgba(0,119,181,0.18)',
        iconColor: '#0077b5',
        title: 'LinkedIn',
        sub: 'sarathy-m-098b6a291',
    },
];

export default function Contact() {
    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="contact__center">
                    <span className="section__tag">Get In Touch</span>
                    <h2 className="section__title">
                        Let's <span>connect</span>
                    </h2>
                    <p className="section__subtitle">
                        I'm actively looking for internship and entry-level opportunities. Whether you have a
                        role, a project, or just want to say hi — I'd love to hear from you.
                    </p>
                </div>

                <div className="contact__cta-box">
                    <h3 className="contact__cta-title">Open to Opportunities</h3>
                    <p className="contact__cta-sub">
                        Reach out and I'll get back to you within 24 hours. Let's build something meaningful together.
                    </p>
                    <a
                        href="mailto:sarathyofficial90@gmail.com"
                        className="btn btn--primary"
                        style={{ display: 'inline-flex', margin: '0 auto' }}
                    >
                        <Mail size={17} />
                        Send Me an Email
                    </a>

                    <div className="contact__links">
                        {contactLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                target={link.target || '_self'}
                                rel="noopener noreferrer"
                                className="contact__link-card"
                            >
                                <div
                                    className="contact__link-icon"
                                    style={{ background: link.iconBg, color: link.iconColor }}
                                >
                                    {link.icon}
                                </div>
                                <div>
                                    <div className="contact__link-title">{link.title}</div>
                                    <div className="contact__link-sub">{link.sub}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
