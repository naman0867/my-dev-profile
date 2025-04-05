
import React from 'react';
import { Button } from '@/components/ui/button';
import TypingEffect from './TypingEffect';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = [
    "Frontend Developer",
    "React Specialist",
    "UI/UX Enthusiast",
    "Web Developer",
    "Software Engineer"
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-navy text-white px-4 relative">
      <div className="container mx-auto text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <p className="text-blue font-mono mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Hi, my name is
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            John Doe
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-slate opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            I'm a <TypingEffect texts={roles} />
          </h2>
          <p className="text-slate max-w-2xl mx-auto md:mx-0 mb-12 text-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            I build exceptional and accessible digital experiences for the web. Focused on creating clean, efficient, and user-friendly interfaces with modern technologies.
          </p>
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button 
              className="bg-transparent text-blue border border-blue hover:bg-blue/10 px-8 py-6 text-lg"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Check out my work
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <button onClick={scrollToAbout} className="animate-bounce text-slate hover:text-blue transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
