import { Code2, MessageSquare, Users, Lightbulb, Target, Zap, Wrench, Brain, TrendingUp, MessageCircle, Cpu, RefreshCw, FolderKanban } from 'lucide-react';
import { SiPython, SiJavascript, SiReact, SiTensorflow, SiMongodb, SiNodedotjs, SiTypescript, SiCplusplus, SiHtml5, SiCss3, SiMysql, SiFlask, SiTailwindcss, SiExpress, SiFirebase, SiPytorch, SiScikitlearn } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 100, icon: <SiPython className="h-4 w-4" /> },
        { name: "Java", level: 100, icon: <Code2 className="h-4 w-4" /> },
        { name: "TypeScript", level: 100, icon: <SiTypescript className="h-4 w-4" /> },
        { name: "C/C++", level: 100, icon: <SiCplusplus className="h-4 w-4" /> },
        { name: "JavaScript", level: 100, icon: <SiJavascript className="h-4 w-4" /> },
        { name: "HTML/CSS", level: 100, icon: <SiHtml5 className="h-4 w-4" /> },
        { name: "SQL", level: 100, icon: <SiMysql className="h-4 w-4" /> }
      ]
    },
    {
      category: "Frameworks & Tools", 
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "React/Vite", level: 100, icon: <SiReact className="h-4 w-4" /> },
        { name: "Flask", level: 100, icon: <SiFlask className="h-4 w-4" /> },
        { name: "Tailwind CSS", level: 100, icon: <SiTailwindcss className="h-4 w-4" /> },
        { name: "Node.js", level: 100, icon: <SiNodedotjs className="h-4 w-4" /> },
        { name: "Express.js", level: 100, icon: <SiExpress className="h-4 w-4" /> },
        { name: "MongoDB/Cloud/Firebase", level: 100, icon: <SiFirebase className="h-4 w-4" /> },
        { name: "Tensorflow/PyTorch/Keras/Scikit-learn", level: 100, icon: <SiTensorflow className="h-4 w-4" /> }
      ]
    },
    {
      category: "Languages",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: [
        { name: "English", level: 100 },
        { name: "Hindi", level: 90 },
        { name: "Spanish", level: 75 }
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { icon: <Target className="h-8 w-8" />, label: "Problem Solving" },
                { icon: <Brain className="h-8 w-8" />, label: "Critical Thinking" },
                { icon: <Users className="h-8 w-8" />, label: "Leadership" },
                { icon: <Lightbulb className="h-8 w-8" />, label: "Innovation" },
                { icon: <MessageCircle className="h-8 w-8" />, label: "Communication" },
                { icon: <Cpu className="h-8 w-8" />, label: "Technical Experience" },
                { icon: <RefreshCw className="h-8 w-8" />, label: "Adaptability" },
                { icon: <FolderKanban className="h-8 w-8" />, label: "Project Management" }
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