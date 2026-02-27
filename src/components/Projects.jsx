import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        emoji: '🖥️',
        gradient: 'linear-gradient(135deg, #0c1f15 0%, #1a3826 100%)',
        tags: [
            { label: 'Spring Boot', color: '#6DB33F', bg: 'rgba(109,179,63,0.15)' },
            { label: 'MySQL', color: '#4479A1', bg: 'rgba(68,121,161,0.13)' },
            { label: 'Java', color: '#ED8B00', bg: 'rgba(237,139,0,0.13)' },
        ],
        title: 'Dynamic Content Management System',
        desc:
            'A secure admin dashboard built with Spring Boot and Spring Security featuring role-based authentication. Implements full CRUD for Products, Testimonials, and Blog Posts with RESTful APIs integrated with MySQL.',
        github: 'https://github.com/SarathyMurugesan3',
        live: null,
    },
    {
        emoji: '🔏',
        gradient: 'linear-gradient(135deg, #1c1208 0%, #3a240e 100%)',
        tags: [
            { label: 'Python', color: '#3776AB', bg: 'rgba(55,118,171,0.15)' },
            { label: 'Django', color: '#09d361', bg: 'rgba(9,211,97,0.12)' },
            { label: 'PostgreSQL', color: '#336791', bg: 'rgba(51,103,145,0.14)' },
        ],
        title: 'Privacy-Preserving Data Analytics Platform',
        desc:
            'A secure analytics engine implementing ε-Differential Privacy using IBM diffprivlib. Features a Privacy Budget Ledger with sliding-window recovery and risk-adaptive noise injection, backed by Django and PostgreSQL.',
        github: 'https://github.com/SarathyMurugesan3',
        live: null,
    },
    {
        emoji: '🔐',
        gradient: 'linear-gradient(135deg, #1a1000 0%, #3d2800 100%)',
        tags: [
            { label: 'Spring Boot', color: '#6DB33F', bg: 'rgba(109,179,63,0.15)' },
            { label: 'Java', color: '#ED8B00', bg: 'rgba(237,139,0,0.13)' },
            { label: 'MySQL', color: '#4479A1', bg: 'rgba(68,121,161,0.13)' },
        ],
        title: 'Admin CRUD System',
        desc:
            'A dynamic Admin Panel Website where admins can edit landing page content & photos with secret access. Built with secure role-based authentication and full CRUD capabilities.',
        github: 'https://github.com/SarathyMurugesan3',
        live: null,
    },
    {
        emoji: '🌐',
        gradient: 'linear-gradient(135deg, #121110 0%, #2a1e0e 100%)',
        tags: [
            { label: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)' },
            { label: 'Vite', color: '#e8a045', bg: 'rgba(232,160,69,0.14)' },
            { label: 'CSS', color: '#c4a882', bg: 'rgba(196,168,130,0.12)' },
        ],
        title: 'Portfolio Website',
        desc:
            'This very portfolio — a modern, responsive personal website built with React and Vite, featuring smooth animations, minimal design, and GitHub Pages deployment.',
        github: 'https://github.com/SarathyMurugesan3/portfolio',
        live: 'https://SarathyMurugesan3.github.io/portfolio',
    },
];

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section__tag">Projects</span>
                    <h2 className="section__title">
                        Things I've <span>built</span>
                    </h2>
                    <p className="section__subtitle">
                        A selection of my recent projects — from privacy-preserving systems to polished web
                        applications.
                    </p>
                </div>

                <div className="projects__grid">
                    {projects.map((p) => (
                        <div className="project-card" key={p.title}>
                            <div className="project-card__header" style={{ background: p.gradient }}>
                                <div className="project-card__header::before" />
                                <span style={{ fontSize: '3.5rem', position: 'relative', zIndex: 1 }}>
                                    {p.emoji}
                                </span>
                            </div>
                            <div className="project-card__body">
                                <div className="project-card__tags">
                                    {p.tags.map((t) => (
                                        <span
                                            key={t.label}
                                            className="project-tag"
                                            style={{ color: t.color, background: t.bg }}
                                        >
                                            {t.label}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-card__title">{p.title}</div>
                                <p className="project-card__desc">{p.desc}</p>
                                <div className="project-card__links">
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <Github size={13} /> Code
                                    </a>
                                    {p.live && (
                                        <a
                                            href={p.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            <ExternalLink size={13} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
