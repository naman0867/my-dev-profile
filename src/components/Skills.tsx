
import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "HTML & CSS", level: 95, category: "Frontend" },
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Next.js", level: 82, category: "Frontend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Express", level: 72, category: "Backend" },
    { name: "MongoDB", level: 68, category: "Backend" },
    { name: "GraphQL", level: 70, category: "Backend" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "Docker", level: 60, category: "Tools" },
    { name: "Jest", level: 75, category: "Testing" },
    { name: "React Testing Library", level: 78, category: "Testing" },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-24 bg-light-navy text-light-slate">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-blue font-mono">02.</span> Skills
        </h2>
        
        <div className="grid gap-16">
          {categories.map(category => (
            <div key={category}>
              <h3 className="text-white text-xl font-semibold mb-6">{category}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {skills
                  .filter(skill => skill.category === category)
                  .map(skill => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-mono">{skill.name}</span>
                        <span className="text-blue">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress transition-all duration-1000 ease-out" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
