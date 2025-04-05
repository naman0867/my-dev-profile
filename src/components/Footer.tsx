
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ExternalLink, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/johndoe", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/johndoe", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/johndoe", label: "Twitter" },
    { icon: Mail, href: "mailto:john@example.com", label: "Email" },
    { icon: Globe, href: "https://johndoe-blog.com", label: "Blog" }
  ];

  return (
    <footer className="bg-navy py-12 text-slate">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-slate hover:text-blue transition-colors" 
                aria-label={link.label}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <link.icon size={22} />
              </a>
            ))}
          </div>
          
          <div className="font-mono text-sm text-center">
            <p>Designed & Built by John Doe</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} - All Rights Reserved</p>
            <p className="mt-4 text-xs max-w-md text-center">
              Built with React, TypeScript, Tailwind CSS and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
