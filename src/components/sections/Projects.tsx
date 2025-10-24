import { ExternalLink, Github, Smartphone, Eye, Users, Utensils, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "RoutineRemind",
      description: "Provisional patented, utility patent-pending scheduling application specifically designed for individuals with speech and cognitive disabilities. Currently being deployed on both Google Play Store and Apple App Store.",
      icon: <Smartphone className="h-8 w-8" />,
      period: "June 2022 - Present",
      technologies: ["React", "JavaScript", "TypeScript", "Python", "HTML/CSS", "Firebase", "Rasa"],
      achievements: [
        "Presented app at Capitol Hill",
        "Featured on House.gov, FFXnow, LoudounNow, Fairfax Times, & more", 
        "Developed accessibility features for children with autism",
        "User-friendly interface designed for individuals with special needs",
        "Real-time scheduling and reminder system",
        "Fully functional login authentication system"
      ],
      links: {
        demo: "https://www.congressionalappchallenge.us/22-va10/",
        github: "https://github.com/sjain2025/RoutineRemind"
      }
    },
    {
      title: "EyeLS",
      description: "Gaze-tracking web application designed to enable ALS patients to communicate nonverbally. Implements Kalman Filtering and Monte Carlo algorithms for precise eye movement detection.",
      icon: <Eye className="h-8 w-8" />,
      period: "August 2023 - Present",
      technologies: ["JavaScript", "HTML/CSS", "Computer Vision", "Kalman Filtering", "Monte Carlo"],
      achievements: [
        "Recognized with IEEE Technical Excellence Award",
        "Implements novel gaze-tracking algorithms",
        "Cost-effective, accessible alternative to modern eye-tracking devices",
        "Real-time eye tracking with high accuracy"
      ],
      links: {
        demo: "https://www.youtube.com/watch?v=YAlBLGYtgLA",
        github: "https://github.com/sjain2025/EyeLS"
      }
    },
    {
      title: "CMUEats",
      description: "Comprehensive dining locations website for Carnegie Mellon University, providing real-time information about campus dining options, hours, and menus. Developed as part of ScottyLabs student organization.",
      icon: <Utensils className="h-8 w-8" />,
      period: "August 2025 - Present",
      technologies: ["Vite", "React", "TypeScript", "HTML", "Vanilla CSS", "Elysia"],
      achievements: [
        "Most used student-made website on campus",
        "Implemented sort by location feature",
        "Real-time dining information and hours",
        "Interactive campus dining map",
        "Mobile and web responsive design"
      ],
      links: {
        demo: "https://cmueats.com/",
        github: "https://github.com/ScottyLabs/cmueats"
      }
    },
    {
      title: "Memory Lane",
      description: "Mobile application designed to provide people with Alzheimer's and other memory loss-related conditions with a platform to replay memories from their past. The app requires a login through email for each user, and upon authentication, the user is presented with three options: Add an entry, Ask a question, and a unique feature called \"A Memory A Day\".",
      icon: <Brain className="h-8 w-8" />,
      period: "March 2023 - June 2024",
      technologies: ["React Native", "JavaScript", "Firebase", "TypeScript", "HTML/CSS"],
      achievements: [
        "Designed for Alzheimer's and memory loss patients",
        "Interactive Q&A feature built with NLPs",
        "Email-based authentication system",
        "User-friendly interface for elderly users"
      ],
      links: {
        demo: "https://www.youtube.com/watch?v=ySS6zBkvRq4",
        github: "https://github.com/sjain2025/MemoryLane"
      }
    },
    {
      title: "NeurOS",
      description: "Smartphone AI application that quantifies brain health using gaze-tracking algorithms. Developed during my time at Vytal.AI.",
      icon: <Users className="h-8 w-8" />,
      period: "May 2022 - Present",
      technologies: ["React Native", "Python", "AI/ML", "Mobile Development", "Computer Vision"],
      achievements: [
        "Novel gaze-tracking algorithms for brain health",
        "AI-powered health assessment platform",
        "Commercial deployment and user acquisition"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`card-gradient rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 animate-fade-up group relative overflow-hidden border-2 border-primary/20 hover:border-primary/50 ${project.title === "NeurOS" ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated border glow */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                
                {/* Project Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-primary group-hover:scale-105 transition-all duration-300 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-md">
                    <div className="scale-125">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-muted-foreground font-medium text-sm">{project.period}</span>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-white/80 mb-6 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Split into features and tech stack */}
                <div className="grid grid-cols-1 gap-6 mb-6">
                  {/* What makes this project special */}
                  <div>
                    <h4 className="font-bold text-white text-base mb-3">Key Features & Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm text-white/70">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack used */}
                  <div>
                    <h4 className="font-bold text-white text-base mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-xs font-semibold border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links to demo and source code */}
                {project.title !== "NeurOS" && (
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-primary/20">
                    <Button 
                      className="primary-gradient hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg flex-1 sm:flex-none"
                      asChild
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.title === "RoutineRemind" ? "Read More" : project.title === "CMUEats" ? "View Website" : "View Demo"}
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="hover:scale-105 transition-all duration-200 border border-primary/30 hover:bg-transparent hover:text-white hover:border-white flex-1 sm:flex-none"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to action for more projects */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub!
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-all duration-200 border border-primary/30 hover:bg-transparent hover:text-white hover:border-white"
              asChild
            >
              <a href="https://github.com/sjain2025" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;