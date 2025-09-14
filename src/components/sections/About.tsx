import { Code, Brain, Rocket, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Software Development",
      description: "Expertise in full-stack development with modern frameworks and technologies"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI & Machine Learning",
      description: "Developing innovative AI solutions and conducting research in neural networks"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Entrepreneurship",
      description: "Co-founded Vytal.AI, secured $1.2M in funding with $12.5M valuation"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Research Excellence",
      description: "Published researcher with multiple IEEE publications and conference presentations"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="card-gradient rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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