
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface Job {
  title: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

const Experience: React.FC = () => {
  const jobs: Job[] = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2022 - Present",
      description: "Led the development of a comprehensive e-commerce platform, improving conversion rates by 35%. Mentored junior developers and implemented modern React patterns and best practices across the team.",
      skills: ["React", "TypeScript", "Redux", "Jest"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Group",
      duration: "Mar 2019 - Dec 2021",
      description: "Developed and maintained multiple client web applications. Implemented CI/CD pipelines and reduced deployment time by 40%. Collaborated with design and backend teams to deliver seamless user experiences.",
      skills: ["JavaScript", "Node.js", "React", "MongoDB"]
    },
    {
      title: "Web Developer",
      company: "Creative Web Agency",
      duration: "Jun 2017 - Feb 2019",
      description: "Designed and built responsive websites for various clients across different industries. Improved site performance and SEO rankings through optimization techniques and best practices.",
      skills: ["HTML/CSS", "JavaScript", "WordPress", "PHP"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-navy text-slate">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-blue font-mono">03.</span> Work Experience
        </h2>
        
        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div 
              key={index} 
              className="bg-light-navy bg-opacity-30 p-6 rounded-lg transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-lightest-slate">{job.title}</h3>
                <span className="font-mono text-blue">{job.duration}</span>
              </div>
              
              <h4 className="text-lg text-light-slate mb-4">{job.company}</h4>
              
              <p className="mb-6 text-light-slate">
                {job.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {job.skills.map(skill => (
                  <Badge key={skill} variant="outline" className="bg-lightest-navy bg-opacity-50 text-blue border-blue">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
