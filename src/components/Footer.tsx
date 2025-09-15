import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">Soham Jain</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Computer Science at Carnegie Mellon University, software developer, AI researcher, 
              and entrepreneur.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full hover:scale-110 transition-bounce hover:bg-primary/20"
                asChild
              >
                <a href="mailto:sohamj@andrew.cmu.edu" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full hover:scale-110 transition-bounce hover:bg-primary/20"
                asChild
              >
                <a href="https://www.linkedin.com/in/soham-jain1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full hover:scale-110 transition-bounce hover:bg-primary/20"
                asChild
              >
                <a href="https://github.com/sjain2025" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-smooth text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Soham Jain. All rights reserved.
          </p>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <span>Made using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;