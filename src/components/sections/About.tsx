import { Code, Brain, Rocket, Award, Users, Lightbulb, ArrowDown } from 'lucide-react';

const About = () => {
  const scrollToNext = () => {
    const educationSection = document.querySelector('#education');
    educationSection?.scrollIntoView({ behavior: 'smooth' });
  };

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="card-gradient rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-base">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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