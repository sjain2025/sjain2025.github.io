import { Code2, MessageSquare, Users, Lightbulb, Target, Zap } from 'lucide-react';
import { SiPython, SiJavascript, SiReact, SiTensorflow, SiMongodb, SiNodedotjs } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: "Technical Skills",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95, icon: <SiPython className="h-4 w-4" /> },
        { name: "JavaScript/TypeScript", level: 90, icon: <SiJavascript className="h-4 w-4" /> },
        { name: "Machine Learning", level: 88, icon: <SiTensorflow className="h-4 w-4" /> },
        { name: "React/Next.js", level: 85, icon: <SiReact className="h-4 w-4" /> },
        { name: "TensorFlow/PyTorch", level: 82, icon: <SiTensorflow className="h-4 w-4" /> },
        { name: "SQL/NoSQL", level: 80, icon: <SiMongodb className="h-4 w-4" /> }
      ]
    },
    {
      category: "Soft Skills", 
      icon: <Users className="h-6 w-6" />,
      skills: [
        { name: "Leadership", level: 95 },
        { name: "Communication", level: 92 },
        { name: "Problem Solving", level: 98 },
        { name: "Critical Thinking", level: 94 },
        { name: "Adaptability", level: 90 },
        { name: "Project Management", level: 85 }
      ]
    },
    {
      category: "Languages",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: [
        { name: "English", level: 100 },
        { name: "Hindi", level: 85 },
        { name: "Spanish", level: 65 }
      ]
    }
  ];

  const SkillBar = ({ name, level, icon }: { name: string; level: number; icon?: React.ReactNode }) => (
    <div className="mb-3">
      <div className="flex items-center gap-2 mb-2">
        {icon && <div className="text-primary">{icon}</div>}
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="primary-gradient h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.category}
                className="card-gradient rounded-xl p-8 shadow-medium hover:shadow-hard transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar 
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      icon={skill.icon}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Competencies */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: <Lightbulb className="h-8 w-8" />, label: "Innovation" },
                { icon: <Target className="h-8 w-8" />, label: "Problem Solving" },
                { icon: <Users className="h-8 w-8" />, label: "Team Leadership" },
                { icon: <Zap className="h-8 w-8" />, label: "Quick Learning" },
                { icon: <Code2 className="h-8 w-8" />, label: "Technical Excellence" },
                { icon: <MessageSquare className="h-8 w-8" />, label: "Communication" }
              ].map((competency, index) => (
                <div 
                  key={competency.label}
                  className="card-gradient rounded-lg p-6 text-center hover:scale-105 transition-bounce animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-3 flex justify-center">
                    {competency.icon}
                  </div>
                  <p className="text-sm font-medium text-foreground">{competency.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;