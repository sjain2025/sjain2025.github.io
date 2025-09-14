import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile.png';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-up">
            <img 
              src={profileImage} 
              alt="Soham Jain" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-hard border-4 border-primary/20"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up [animation-delay:0.2s]">
            <span className="inline-block overflow-hidden border-r-4 border-primary whitespace-nowrap animate-typing-blink">
              Hi, I'm Soham Jain
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up [animation-delay:0.2s]">
            Computer Science Student at Carnegie Mellon University
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-up [animation-delay:0.4s]">
            Passionate about AI, machine learning, and building innovative solutions. 
            Currently developing cutting-edge applications at Vytal.AI and conducting 
            research in quantum computing and neural networks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-up [animation-delay:0.6s]">
            <Button 
              size="lg"
              className="primary-gradient hover:scale-105 transition-bounce shadow-medium hover:shadow-hard px-8 py-6 text-lg"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-bounce px-8 py-6 text-lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-up [animation-delay:0.8s]">
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
              <a href="https://linkedin.com/in/sohamjain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-full hover:scale-110 transition-bounce hover:bg-primary/20"
              asChild
            >
              <a href="https://github.com/sohamjain" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToNext}
            className="animate-float"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-smooth" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;