import React from 'react';
import { MapPin, GraduationCap, Briefcase, Coffee } from 'lucide-react';

const skills = {
    Frontend: [
        { name: 'React.js', color: '#61DAFB' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'HTML5 / CSS3', color: '#E34F26' },
        { name: 'Tailwind CSS', color: '#06B6D4' },
        { name: 'Vite', color: '#646CFF' },
    ],
    Backend: [
        { name: 'Python', color: '#3776AB' },
        { name: 'Django', color: '#44b67a' },
        { name: 'Django REST', color: '#ea6060' },
        { name: 'Node.js', color: '#339933' },
        { name: 'Flask', color: '#cccccc' },
    ],
    'Data & Privacy': [
        { name: 'Differential Privacy', color: '#6c63ff' },
        { name: 'NumPy / Pandas', color: '#4dabcf' },
        { name: 'SQL', color: '#F29111' },
        { name: 'PostgreSQL', color: '#336791' },
    ],
    'Tools & DevOps': [
        { name: 'Git / GitHub', color: '#F05032' },
        { name: 'VS Code', color: '#007ACC' },
        { name: 'REST APIs', color: '#22d3ee' },
        { name: 'GitHub Actions', color: '#2088FF' },
    ],
};

const highlights = [
    { icon: <MapPin size={14} />, text: 'Tamil Nadu, India' },
    { icon: <GraduationCap size={14} />, text: 'B.Sc Computer Science' },
    { icon: <Briefcase size={14} />, text: 'Open to opportunities' },
    { icon: <Coffee size={14} />, text: 'Coffee-driven developer' },
];

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section__tag">About Me</span>
                    <h2 className="section__title">
                        Crafting digital <span>experiences</span>
                    </h2>
                </div>

                <div className="about__grid">
                    {/* Left: Text */}
                    <div>
                        <div className="about__text">
                            <p>
                                I'm <strong>Sarathy Murugesan</strong>, a passionate Full Stack Developer and Data
                                Privacy Engineer based in Tamil Nadu, India. I love turning complex problems into
                                elegant, user-friendly digital solutions.
                            </p>
                            <p>
                                My journey in tech has led me to work on everything from dynamic React frontends to
                                privacy-preserving backend systems using Differential Privacy algorithms. I believe
                                great software is not just functional — it's beautiful, fast, and trustworthy.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to open
                                source, or brewing the perfect cup of coffee.
                            </p>
                        </div>

                        <div className="about__highlights">
                            {highlights.map((h) => (
                                <div className="about__highlight-item" key={h.text}>
                                    <div className="about__highlight-icon">{h.icon}</div>
                                    <span>{h.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Skills */}
                    <div id="skills">
                        {Object.entries(skills).map(([category, items]) => (
                            <div className="skills__category" key={category}>
                                <div className="skills__category-title">{category}</div>
                                <div className="skills__grid">
                                    {items.map((skill) => (
                                        <div className="skill-badge" key={skill.name}>
                                            <span className="skill-dot" style={{ background: skill.color }} />
                                            {skill.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
