
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy py-8 text-slate">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a href="#" className="text-slate hover:text-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate hover:text-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate hover:text-blue transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate hover:text-blue transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <div className="font-mono text-sm text-center">
            <p>Designed & Built by John Doe</p>
            <p className="mt-2">&copy; {new Date().getFullYear()} - All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
