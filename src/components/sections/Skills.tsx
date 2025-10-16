import { Code2, Wrench, Cloud, Package } from 'lucide-react';
import { SiPython, SiJavascript, SiReact, SiTensorflow, SiNodedotjs, SiTypescript, SiCplusplus, SiHtml5, SiCss3, SiMysql, SiFlask, SiTailwindcss, SiExpress, SiFirebase, SiC, SiGit, SiVim, SiMongodb, SiGooglecloud, SiJupyter, SiAndroidstudio, SiExpo, SiFigma, SiVite, SiPytorch, SiKeras, SiScikitlearn, SiNextdotjs, SiNumpy, SiPandas, SiPostgresql, SiOpencv } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: [
        { name: "Python", icon: <SiPython className="h-4 w-4" /> },
        { name: "Java", icon: <Code2 className="h-4 w-4" /> },
        { name: "C++", icon: <SiCplusplus className="h-4 w-4" /> },
        { name: "C", icon: <SiC className="h-4 w-4" /> },
        { name: "C0", icon: <SiC className="h-4 w-4" /> },
        { name: "TypeScript", icon: <SiTypescript className="h-4 w-4" /> },
        { name: "JavaScript", icon: <SiJavascript className="h-4 w-4" /> },
        { name: "HTML", icon: <SiHtml5 className="h-4 w-4" /> },
        { name: "CSS", icon: <SiCss3 className="h-4 w-4" /> },
        { name: "SQL", icon: <SiMysql className="h-4 w-4" /> },
        { name: "MATLAB", icon: <Code2 className="h-4 w-4" /> }
      ]
    },
    {
      category: "Developer Tools", 
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", icon: <SiGit className="h-4 w-4" /> },
        { name: "Vim", icon: <SiVim className="h-4 w-4" /> },
        { name: "Visual Studio Code", icon: <Code2 className="h-4 w-4" /> },
        { name: "AWS EC2", icon: <Cloud className="h-4 w-4" /> },
        { name: "MongoDB", icon: <SiMongodb className="h-4 w-4" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="h-4 w-4" /> },
        { name: "Firebase", icon: <SiFirebase className="h-4 w-4" /> },
        { name: "Jupyter Notebook", icon: <SiJupyter className="h-4 w-4" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="h-4 w-4" /> },
        { name: "Expo", icon: <SiExpo className="h-4 w-4" /> },
        { name: "Figma", icon: <SiFigma className="h-4 w-4" /> }
      ]
    },
    {
      category: "Libraries & Frameworks", 
      icon: <Package className="h-6 w-6" />,
      skills: [
        { name: "React", icon: <SiReact className="h-4 w-4" /> },
        { name: "Vite", icon: <SiVite className="h-4 w-4" /> },
        { name: "Node.js", icon: <SiNodedotjs className="h-4 w-4" /> },
        { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4" /> },
        { name: "Flask", icon: <SiFlask className="h-4 w-4" /> },
        { name: "NumPy", icon: <SiNumpy className="h-4 w-4" /> },
        { name: "Pandas", icon: <SiPandas className="h-4 w-4" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="h-4 w-4" /> },
        { name: "PyTorch", icon: <SiPytorch className="h-4 w-4" /> },
        { name: "Keras", icon: <SiKeras className="h-4 w-4" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="h-4 w-4" /> },
        { name: "OpenCV", icon: <SiOpencv className="h-4 w-4" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4" /> },
        { name: "Express.js", icon: <SiExpress className="h-4 w-4" /> },
        { name: "Scikit-learn", icon: <SiScikitlearn className="h-4 w-4" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-gradient">Skills</span>
          </h2>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.category}
                className="card-gradient rounded-2xl p-8 shadow-medium hover:shadow-hard transition-all duration-300 animate-fade-up border border-primary/20 hover:border-primary/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <div className="text-primary">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;