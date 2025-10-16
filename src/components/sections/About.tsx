import { Code, Brain, Rocket, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      description: "Expertise in full-stack development with modern frameworks and technologies."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning",
      description: "Developing innovative artificial intelligence solutions while conducting research in assistive technology."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Entrepreneurship",
      description: "Helped design a scalable business model for Vytal.AI, securing $1.2M in seed investments and a $12.5M valuation."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Research Excellence",
      description: "Published researcher with multiple IEEE first-author papers and international conference presentations."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Leadership & Mentoring",
      description: "Experienced in leading teams and mentoring students in software development projects."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Technical Innovation",
      description: "Passionate about creating cutting-edge solutions that bridge the gap between research and real-world applications."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="card-gradient rounded-2xl shadow-soft hover:shadow-medium transition-smooth hover:scale-105 animate-fade-up group relative overflow-hidden min-h-[200px] cursor-pointer border-2 border-primary/20 hover:border-primary/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated border glow */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                
                {/* Default State: Show icon and title centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-between p-8 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="text-primary mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="scale-150">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-foreground text-xl text-center leading-tight">{item.title}</h3>
                  </div>
                  
                  {/* Visual hint - three dots */}
                  <div className="flex gap-1.5 opacity-40">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                </div>
                
                {/* Hover State: Show description centered */}
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <p className="text-white text-center text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;