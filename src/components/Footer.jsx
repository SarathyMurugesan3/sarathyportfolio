import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <p className="footer__copy">
                        © {year} <span>Sarathy Murugesan</span>. Built with{' '}
                        <Heart size={12} style={{ display: 'inline', color: '#6c63ff', verticalAlign: 'middle' }} />{' '}
                        using React &amp; Vite.
                    </p>
                    <div className="footer__social">
                        <a
                            href="https://github.com/SarathyMurugesan3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-btn"
                            title="GitHub"
                        >
                            <Github size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sarathy-m-098b6a291/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-btn"
                            title="LinkedIn"
                        >
                            <Linkedin size={16} />
                        </a>
                        <a
                            href="mailto:sarathymurugesan@gmail.com"
                            className="footer__social-btn"
                            title="Email"
                        >
                            <Mail size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
