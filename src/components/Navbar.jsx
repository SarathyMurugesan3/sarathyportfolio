import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <div className="navbar__inner">
                    <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
                        SM
                    </a>
                    <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
                        {links.map((l) => (
                            <li key={l.label}>
                                <a href={l.href} onClick={(e) => handleNavClick(e, l.href)}>
                                    {l.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="#contact"
                                className="navbar__cta"
                                onClick={(e) => handleNavClick(e, '#contact')}
                            >
                                Hire Me
                            </a>
                        </li>
                    </ul>
                    <button
                        className="navbar__hamburger"
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
}
