import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        role: 'Full Stack Developer (Intern)',
        company: 'Self-Initiated Projects & Academic Work',
        period: '2023 – Present',
        points: [
            'Built a Differential Privacy System using Django REST Framework and React.js for secure data querying.',
            'Implemented Laplace mechanism sensitivity calibration to ensure epsilon-delta DP guarantees.',
            'Developed reusable REST API endpoints consumed by multiple React frontend components.',
            'Deployed full-stack applications to cloud platforms including Render and GitHub Pages.',
        ],
    },
    {
        role: 'Frontend Developer',
        company: 'Academic Projects — B.Sc Computer Science',
        period: '2022 – 2023',
        points: [
            'Designed and developed responsive UI components for data visualization dashboards.',
            'Integrated backend APIs with React state management for real-time data updates.',
            'Applied glassmorphism and modern CSS design patterns for polished interfaces.',
            'Collaborated on a multi-module project involving role-based access and data anonymization.',
        ],
    },
    {
        role: 'Open Source Contributor',
        company: 'Personal & GitHub Projects',
        period: '2022 – Present',
        points: [
            'Maintained and documented multiple public repositories on GitHub.',
            'Built API documentation resources for Django-based DP systems.',
            'Experimented with differential privacy query views and custom Python scripts.',
        ],
    },
];

export default function Experience() {
    return (
        <section className="section" id="experience" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section__tag">Experience</span>
                    <h2 className="section__title">
                        My <span>journey</span>
                    </h2>
                    <p className="section__subtitle">
                        A timeline of my professional growth, academic experience, and the projects I've poured my
                        energy into.
                    </p>
                </div>

                <div className="experience__timeline">
                    {experiences.map((exp, i) => (
                        <div className="experience__item" key={i}>
                            <div>
                                <div className="experience__dot">
                                    <Briefcase size={16} />
                                </div>
                            </div>
                            <div className="experience__card glass-card" style={{ background: 'var(--bg-glass)' }}>
                                <div className="experience__meta">
                                    <span className="experience__role">{exp.role}</span>
                                    <span className="experience__period">{exp.period}</span>
                                </div>
                                <div className="experience__company">{exp.company}</div>
                                <ul className="experience__points">
                                    {exp.points.map((pt, j) => (
                                        <li key={j}>{pt}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
