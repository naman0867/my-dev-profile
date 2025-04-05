
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-light-navy text-light-slate">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          <span className="text-blue font-mono">04.</span> Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="mb-6 text-lg">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-navy border-lightest-navy text-light-slate focus:border-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-navy border-lightest-navy text-light-slate focus:border-blue"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can I help you?" 
                  className="bg-navy border-lightest-navy text-light-slate focus:border-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  className="bg-navy border-lightest-navy text-light-slate focus:border-blue min-h-[150px]"
                />
              </div>
              
              <Button className="w-full bg-blue hover:bg-blue/80">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-lightest-slate mb-4">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-blue mr-4 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-lightest-slate">Email</p>
                    <a href="mailto:john.doe@example.com" className="text-slate hover:text-blue transition-colors">
                      john.doe@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue mr-4 mt-1">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-lightest-slate">LinkedIn</p>
                    <a href="#" className="text-slate hover:text-blue transition-colors">
                      linkedin.com/in/johndoe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue mr-4 mt-1">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-lightest-slate">GitHub</p>
                    <a href="#" className="text-slate hover:text-blue transition-colors">
                      github.com/johndoe
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue mr-4 mt-1">
                    <Twitter size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-lightest-slate">Twitter</p>
                    <a href="#" className="text-slate hover:text-blue transition-colors">
                      @johndoedev
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-navy rounded-lg p-6 mt-8">
              <h4 className="text-xl font-medium text-lightest-slate mb-4">Let's work together</h4>
              <p className="mb-4">Looking for a developer for your next project? I'm currently available for freelance work.</p>
              <Button variant="outline" className="border-blue text-blue hover:bg-blue/10">
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
