import React from 'react';
import { MapPin, GraduationCap, Briefcase, BookOpen } from 'lucide-react';

const skills = {
    Frontend: [
        { name: 'React.js', color: '#61DAFB' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'HTML5 / CSS3', color: '#E34F26' },
        { name: 'Tailwind CSS', color: '#06B6D4' },
    ],
    Backend: [
        { name: 'Java', color: '#ED8B00' },
        { name: 'Spring Boot', color: '#6DB33F' },
        { name: 'Python', color: '#3776AB' },
        { name: 'Django', color: '#09d361' },
        { name: 'Node.js', color: '#8CC84B' },
    ],
    'Database & Tools': [
        { name: 'MySQL', color: '#4479A1' },
        { name: 'PostgreSQL', color: '#336791' },
        { name: 'MongoDB', color: '#47A248' },
        { name: 'Git / GitHub', color: '#F05032' },
        { name: 'Postman', color: '#FF6C37' },
    ],
    'Core CS Concepts': [
        { name: 'OOP', color: '#e8a045' },
        { name: 'Data Structures & Algorithms', color: '#7ec8a4' },
        { name: 'SOLID Principles', color: '#c4a882' },
        { name: 'RESTful API Design', color: '#e8a045' },
        { name: 'Differential Privacy', color: '#7ec8a4' },
    ],
};

const highlights = [
    { icon: <GraduationCap size={14} />, text: 'B.Tech IT — Final Year (2025)' },
    { icon: <MapPin size={14} />, text: 'Tamil Nadu, India' },
    { icon: <Briefcase size={14} />, text: 'Seeking Internship / Full-time Roles' },
    { icon: <BookOpen size={14} />, text: '4 Projects · Full Stack Focus' },
];

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section__tag">About Me</span>
                    <h2 className="section__title">
                        A developer who <span>builds & learns</span>
                    </h2>
                </div>

                <div className="about__grid">
                    {/* Left: Text */}
                    <div>
                        <div className="about__text">
                            <p>
                                I'm a <strong>final-year B.Tech Information Technology student</strong> from Tamil
                                Nadu, India, passionate about building web applications that are both functional and
                                well-crafted. I specialize in <strong>Java, Spring Boot, and React.js</strong>, with
                                growing experience in Python and Django.
                            </p>
                            <p>
                                My academic journey has given me a strong foundation in Data Structures & Algorithms,
                                Object-Oriented Programming, and software design principles. I've applied these in
                                real projects — from secure admin dashboards to <strong>privacy-preserving analytics
                                    platforms</strong> using Differential Privacy techniques.
                            </p>
                            <p>
                                I'm actively looking for <strong>internship or entry-level opportunities</strong> where
                                I can contribute, grow, and work alongside experienced engineers on meaningful products.
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
