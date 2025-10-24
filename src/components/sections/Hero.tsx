import { ArrowDown, Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/8898.jpg';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Hero background with overlay */}
      <div 
        className="absolute inset-0 z-0 hero-bg"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/80"></div>
      </div>


      {/* Main hero content */}
      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col justify-center h-full">
        <div className="max-w-6xl mx-auto">
          {/* Profile image and intro text */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 mb-8">
            {/* Professional headshot */}
            <div className="flex-shrink-0 animate-fade-up [animation-delay:0.05s]">
              <img 
                src={profileImage} 
                alt="Soham Jain" 
                className="w-60 h-60 md:w-68 md:h-68 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-3xl shadow-hard border-4 border-primary/20 object-cover object-center scale-[1.13]"
                loading="eager"
                decoding="async"
              />
            </div>
            
            {/* Name and title */}
            <div className="flex-1 text-center lg:text-left max-w-2xl mt-14">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-up [animation-delay:0.05s]">
                <span className="inline-block overflow-hidden border-r-4 border-primary whitespace-nowrap animate-typing-blink bg-gradient-to-r from-white via-primary to-accent bg-clip-text text-transparent">
                  Soham Jain
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white font-bold mb-10 animate-fade-up [animation-delay:0.05s] whitespace-nowrap">Software Engineer  •  AI Researcher  •  Entrepreneur</p>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-up [animation-delay:0.05s] leading-relaxed">
              Ambitious computer scientist with a passion for software development and artificial intelligence. Leveraging
              interpersonal skills and technical proficiency to innovate modern solutions to real-world problems.
              </p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-fade-up [animation-delay:0.05s]">
            <Button 
              size="lg"
              className="group relative overflow-hidden primary-gradient hover:scale-105 transition-all duration-300 shadow-medium hover:shadow-hard px-10 py-6 text-lg font-semibold rounded-2xl border-0 hover:glow"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="group relative overflow-hidden hover:scale-105 transition-all duration-300 px-10 py-6 text-lg font-semibold rounded-2xl border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 backdrop-blur-sm hover:text-white"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Social media links */}
          <div className="flex justify-center space-x-4 mb-8 animate-fade-up [animation-delay:0.05s]">
            <Button 
              variant="ghost" 
              size="icon"
              className="group relative rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/10 w-14 h-14 backdrop-blur-sm border border-primary/20 hover:border-primary/40"
              asChild
            >
              <a href="mailto:sohamj@andrew.cmu.edu" aria-label="Email">
                <Mail className="h-6 w-6 transition-colors group-hover:text-primary" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="group relative rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/10 w-14 h-14 backdrop-blur-sm border border-primary/20 hover:border-primary/40"
              asChild
            >
              <a href="https://www.linkedin.com/in/soham-jain1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 transition-colors group-hover:text-primary" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="group relative rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/10 w-14 h-14 backdrop-blur-sm border border-primary/20 hover:border-primary/40"
              asChild
            >
              <a href="https://github.com/sjain2025" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6 transition-colors group-hover:text-primary" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="group relative rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/10 w-14 h-14 backdrop-blur-sm border border-primary/20 hover:border-primary/40"
              asChild
            >
              <a href="https://www.youtube.com/@CodingWithSohamJain" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-6 w-6 transition-colors group-hover:text-primary" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </Button>
          </div>

        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToNext}
            className="group relative animate-float hover:scale-110 transition-all duration-300 p-3 rounded-full border border-primary/20 hover:border-primary/40 backdrop-blur-sm hover:bg-primary/5"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;