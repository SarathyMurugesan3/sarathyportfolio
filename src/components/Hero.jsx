import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code2, Database, Shield } from 'lucide-react';

const badgeCards = [
    {
        icon: '💻',
        bg: 'rgba(108,99,255,0.15)',
        title: 'Full Stack Dev',
        sub: 'React · Django · Node',
    },
    {
        icon: '🔒',
        bg: 'rgba(34,211,238,0.12)',
        title: 'Data Privacy',
        sub: 'Differential Privacy',
    },
];

export default function Hero() {
    const scrollDown = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
            <div className="hero__orb hero__orb--3" />

            <div className="container">
                <div className="hero__inner">
                    {/* Left Content */}
                    <div>
                        <div className="hero__badge">
                            <span className="hero__badge-dot" />
                            Available for work
                        </div>

                        <h1 className="hero__title">
                            Hi, I'm{' '}
                            <span className="gradient-text">Sarathy</span>
                            <br />
                            Murugesan
                        </h1>

                        <p className="hero__roles">
                            <span>Full Stack Developer</span> · Data Privacy Engineer · Problem Solver
                        </p>

                        <p className="hero__desc">
                            I build innovative, privacy-first web applications with a passion for clean code and
                            beautiful interfaces. Specializing in React, Django, and Differential Privacy systems.
                        </p>

                        <div className="hero__actions">
                            <a href="#projects" className="btn btn--primary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                <Code2 size={16} />
                                View My Work
                            </a>
                            <a href="#contact" className="btn btn--outline" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                <Mail size={16} />
                                Get In Touch
                            </a>
                        </div>

                        <div className="hero__stats">
                            <div>
                                <div className="hero__stat-number">3+</div>
                                <div className="hero__stat-label">Years Coding</div>
                            </div>
                            <div>
                                <div className="hero__stat-number">10+</div>
                                <div className="hero__stat-label">Projects Built</div>
                            </div>
                            <div>
                                <div className="hero__stat-number">5+</div>
                                <div className="hero__stat-label">Technologies</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="hero__visual">
                        <div className="hero__avatar-wrap">
                            <div className="hero__avatar-ring2" />
                            <div className="hero__avatar-ring" />
                            <div className="hero__avatar-emoji">👨‍💻</div>
                        </div>
                        {badgeCards.map((card) => (
                            <div className="hero__badge-card" key={card.title}>
                                <div className="hero__badge-card-icon" style={{ background: card.bg }}>
                                    {card.icon}
                                </div>
                                <div>
                                    <div className="hero__badge-card-title">{card.title}</div>
                                    <div className="hero__badge-card-sub">{card.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button
                onClick={scrollDown}
                style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'none',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    borderRadius: '99px',
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    transition: 'all 0.3s',
                    animation: 'float 2s ease-in-out infinite',
                    zIndex: 1,
                }}
            >
                <ArrowDown size={14} /> Scroll Down
            </button>
        </section>
    );
}
