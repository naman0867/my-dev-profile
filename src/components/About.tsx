
import React from 'react';
import { cn } from '@/lib/utils';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-navy text-slate">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-blue font-mono">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <p className="mb-4 text-light-slate">
              Hello! I'm John, a passionate web developer with expertise in building exceptional digital experiences. My interest in web development started back in 2015 when I decided to try customizing a Wordpress theme — turns out hacking together a custom theme taught me a lot about HTML & CSS!
            </p>
            
            <p className="mb-4 text-light-slate">
              Fast-forward to today, and I've had the privilege of working at a <a href="#" className="text-blue hover:underline">marketing agency</a>, a <a href="#" className="text-blue hover:underline">tech startup</a>, and a <a href="#" className="text-blue hover:underline">large corporation</a>. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            
            <p className="mb-6 text-light-slate">
              I also recently launched a course that covers everything you need to build a modern web application with React from scratch.
            </p>
            
            <p className="text-light-slate">
              Here are a few technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6">
              {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "GraphQL"].map((tech, index) => (
                <div key={tech} className="flex items-center" style={{ animationDelay: `${0.1 * index}s` }}>
                  <span className="text-blue mr-2">▹</span> {tech}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue opacity-75 rounded-lg blur-sm group-hover:opacity-100 transition duration-300"></div>
            <div className={cn(
              "relative aspect-square overflow-hidden rounded-lg",
              "before:content-[''] before:absolute before:inset-0 before:border-2 before:border-blue before:rounded-lg before:z-10",
              "before:translate-x-5 before:translate-y-5 before:transition-transform before:duration-300",
              "group-hover:before:translate-x-4 group-hover:before:translate-y-4"
            )}>
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="John Doe" 
                className="rounded-lg w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" 
              />
              <div className="absolute inset-0 bg-blue bg-opacity-20 hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
