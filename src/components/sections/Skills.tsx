import { Code2, Wrench, Package } from 'lucide-react';
import { SiPython, SiJavascript, SiReact, SiTensorflow, SiNodedotjs, SiTypescript, SiCplusplus, SiHtml5, SiCss3, SiMysql, SiFlask, SiExpress, SiFirebase, SiC, SiGit, SiMongodb, SiGooglecloud, SiVite, SiKeras, SiNextdotjs, SiNumpy, SiPandas, SiOpencv, SiSharp, SiKotlin, SiDocker, SiRailway, SiAmazon, SiLinux } from 'react-icons/si';

const categoryIcons = {
  Code2,
  Wrench,
  Package,
};

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      iconKey: "Code2" as const,
      skills: [
        { name: "Python", icon: <SiPython className="h-5 w-5" /> },
        { name: "Java", icon: <Code2 className="h-5 w-5" /> },
        { name: "C/C++", icon: <SiCplusplus className="h-5 w-5" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-5 w-5" /> },
        { name: "TypeScript", icon: <SiTypescript className="h-5 w-5" /> },
        { name: "C#", icon: <SiSharp className="h-5 w-5" /> },
        { name: "SQL", icon: <SiMysql className="h-5 w-5" /> },
        { name: "HTML/CSS", icon: <SiHtml5 className="h-5 w-5" /> },
        { name: "Kotlin", icon: <SiKotlin className="h-5 w-5" /> },
        { name: "Assembly", icon: <Code2 className="h-5 w-5" /> }
      ]
    },
    {
      category: "Developer Tools",
      iconKey: "Wrench" as const,
      skills: [
        { name: "Git", icon: <SiGit className="h-5 w-5" /> },
        { name: "Linux/Unix (Bash)", icon: <SiLinux className="h-5 w-5" /> },
        { name: "Docker", icon: <SiDocker className="h-5 w-5" /> },
        { name: "VS Code", icon: <Code2 className="h-5 w-5" /> },
        { name: "Railway", icon: <SiRailway className="h-5 w-5" /> },
        { name: "AWS", icon: <SiAmazon className="h-5 w-5" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="h-5 w-5" /> },
        { name: "Firebase", icon: <SiFirebase className="h-5 w-5" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-5 w-5" /> }
      ]
    },
    {
      category: "Frameworks & Libraries",
      iconKey: "Package" as const,
      skills: [
        { name: "React", icon: <SiReact className="h-5 w-5" /> },
        { name: "Vite", icon: <SiVite className="h-5 w-5" /> },
        { name: "Node.js", icon: <SiNodedotjs className="h-5 w-5" /> },
        { name: "Flask", icon: <SiFlask className="h-5 w-5" /> },
        { name: "Express", icon: <SiExpress className="h-5 w-5" /> },
        { name: "Next.js", icon: <SiNextdotjs className="h-5 w-5" /> },
        { name: "OpenCV", icon: <SiOpencv className="h-5 w-5" /> },
        { name: "NumPy", icon: <SiNumpy className="h-5 w-5" /> },
        { name: "Pandas", icon: <SiPandas className="h-5 w-5" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="h-5 w-5" /> },
        { name: "Keras", icon: <SiKeras className="h-5 w-5" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-card">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="text-gradient">Skills</span>
            </h2>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category, index) => {
              const IconComponent = categoryIcons[category.iconKey];
              return (
                <div
                  key={category.category}
                  className="group animate-fade-up"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground tracking-tight">
                      {category.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {category.skills.map((skill, i) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card/80 border border-border/80 text-foreground hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 cursor-default"
                        style={{
                          animationDelay: `${(index * 0.05 + i * 0.02)}s`
                        }}
                      >
                        <span className="flex-shrink-0 text-primary [&>svg]:stroke-[0.5]">
                          {skill.icon}
                        </span>
                        <span className="font-medium text-sm truncate">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
