import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        emoji: '🔏',
        gradient: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)',
        tags: [
            { label: 'Python', color: '#3776AB', bg: 'rgba(55,118,171,0.15)' },
            { label: 'Django', color: '#09d361', bg: 'rgba(9,211,97,0.12)' },
            { label: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)' },
        ],
        title: 'Differential Privacy System',
        desc:
            'A full-stack web application for querying databases with differential privacy guarantees. Implements Laplace mechanism and sensitivity calibration for data anonymization.',
        github: 'https://github.com/SarathyMurugesan3',
        live: null,
    },
    {
        emoji: '🛡️',
        gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        tags: [
            { label: 'Python', color: '#3776AB', bg: 'rgba(55,118,171,0.15)' },
            { label: 'Flask', color: '#a8dadc', bg: 'rgba(168,218,220,0.12)' },
            { label: 'ML', color: '#f4a261', bg: 'rgba(244,162,97,0.12)' },
        ],
        title: 'Risk Analyzer Platform',
        desc:
            'An intelligent risk assessment platform leveraging machine learning models and differential privacy outputs to visualize risk scores through interactive meter visualizations.',
        github: 'https://github.com/SarathyMurugesan3',
        live: null,
    },
    {
        emoji: '🌐',
        gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a0533 100%)',
        tags: [
            { label: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.12)' },
            { label: 'Vite', color: '#646CFF', bg: 'rgba(100,108,255,0.15)' },
            { label: 'CSS', color: '#cc66ff', bg: 'rgba(204,102,255,0.12)' },
        ],
        title: 'Portfolio Website',
        desc:
            'This very portfolio — a modern, responsive personal website built with React and Vite, featuring glassmorphism design, smooth animations, and GitHub Pages deployment.',
        github: 'https://github.com/SarathyMurugesan3/portfolio',
        live: 'https://SarathyMurugesan3.github.io/portfolio',
    },
    {
        emoji: '📊',
        gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        tags: [
            { label: 'Django', color: '#09d361', bg: 'rgba(9,211,97,0.12)' },
            { label: 'REST API', color: '#22d3ee', bg: 'rgba(34,211,238,0.12)' },
            { label: 'SQLite', color: '#f4a261', bg: 'rgba(244,162,97,0.12)' },
        ],
        title: 'Data Anonymization API',
        desc:
            'A RESTful Django API backend offering dataset querying, anonymization controls, and differential privacy endpoints. Includes comprehensive documentation and error handling.',
        github: 'https://github.com/SarathyMurugesan3',
        live: null,
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
