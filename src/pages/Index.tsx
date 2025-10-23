import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Resume from '@/components/sections/Resume';
import Education from '@/components/sections/Education';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Research from '@/components/sections/Research';
import Awards from '@/components/sections/Awards';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* All the main sections of the portfolio */}
        <Hero />
        <Resume />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Awards />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
