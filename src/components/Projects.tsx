
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
  category: string[];
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for e-commerce businesses with analytics, inventory management, and customer insights. Built with React, Redux, and Chart.js.",
      tags: ["React", "Redux", "Chart.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      github: "#",
      liveUrl: "#",
      featured: true,
      category: ["Frontend", "Web App"]
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description: "A real-time messaging platform with features like group chats, direct messages, and file sharing. Uses Socket.io for real-time communication.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "#",
      liveUrl: "#",
      featured: true,
      category: ["Fullstack", "Web App"]
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A Kanban-style task management application with drag-and-drop functionality, task priorities, and team collaboration features.",
      tags: ["TypeScript", "React", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      github: "#",
      featured: false,
      category: ["Fullstack", "Web App"]
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A weather application that provides real-time weather data and forecasts based on location. Integrates with OpenWeatherMap API.",
      tags: ["JavaScript", "React", "API Integration"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      github: "#",
      liveUrl: "#",
      featured: false,
      category: ["Frontend", "API"]
    },
    {
      id: 5,
      title: "Restaurant Reservation System",
      description: "An online booking system for restaurants that allows customers to make reservations and helps restaurant owners manage their bookings.",
      tags: ["NextJS", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      github: "#",
      liveUrl: "#",
      featured: true,
      category: ["Fullstack", "Web App"]
    },
    {
      id: 6,
      title: "Personal Blog",
      description: "A personal blog built with Gatsby and MDX for writing technical articles and tutorials with code highlighting.",
      tags: ["Gatsby", "GraphQL", "Markdown", "Styled Components"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      github: "#",
      liveUrl: "#",
      featured: false,
      category: ["Frontend", "Blog"]
    },
  ];

  const categories = ["All", ...Array.from(new Set(projects.flatMap(p => p.category)))];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
  
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const otherProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 bg-navy text-light-slate">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-blue font-mono">03.</span> My Projects
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              className={activeFilter === category ? "bg-blue text-white" : "text-slate border-slate hover:text-white"}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {featuredProjects.length > 0 && (
          <>
            <h3 className="text-xl text-lightest-slate font-semibold mb-8">Featured Projects</h3>
            <div className="space-y-24 mb-20">
              {featuredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`relative md:grid md:grid-cols-12 md:gap-10 md:items-center ${
                    index % 2 === 0 ? '' : 'md:justify-items-end'
                  }`}
                >
                  <div className={`project-content md:col-span-7 ${
                    index % 2 === 0 ? 'md:col-start-7' : 'md:col-start-1'
                  } ${index % 2 === 0 ? 'md:text-right' : ''} z-10`}>
                    <p className="font-mono text-blue mb-2">Featured Project</p>
                    <h3 className="text-2xl font-semibold text-lightest-slate mb-4">{project.title}</h3>
                    <div className="bg-light-navy p-6 rounded-lg shadow-xl mb-4">
                      <p>{project.description}</p>
                    </div>
                    <ul className={`flex flex-wrap gap-3 mb-6 text-xs font-mono ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {project.tags.map(tag => (
                        <li key={tag} className="text-lightest-slate">{tag}</li>
                      ))}
                    </ul>
                    <div className={`flex gap-4 text-lightest-slate ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue">
                          <Github size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue">
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className={`project-image md:col-span-7 ${
                    index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'
                  } relative rounded-lg overflow-hidden aspect-video mb-6 md:mb-0`}>
                    <div className="absolute inset-0 bg-blue opacity-30 hover:opacity-0 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        
        <h3 className="text-xl text-lightest-slate font-semibold mb-8">Other Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map(project => (
            <div key={project.id} className="project-card group">
              <div className="flex justify-between items-start mb-4">
                <div className="folder-icon text-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="flex gap-4 text-lightest-slate">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-lightest-slate mb-3">{project.title}</h3>
              <p className="text-slate mb-6">{project.description}</p>
              
              <ul className="flex flex-wrap gap-3 text-xs font-mono mt-auto">
                {project.tags.map(tag => (
                  <li key={tag} className="text-slate">{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button className="bg-transparent text-blue border border-blue hover:bg-blue/10">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
