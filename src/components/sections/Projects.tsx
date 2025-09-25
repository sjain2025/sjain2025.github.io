import { ExternalLink, Github, Smartphone, Eye, Users, Utensils, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "RoutineRemind",
      description: "Provisional patented, utility patent-pending scheduling application specifically designed for individuals with speech and cognitive disabilities. Currently being deployed on both Google Play Store and Apple App Store.",
      icon: <Smartphone className="h-8 w-8" />,
      status: "Patent-Pending Mobile App",
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
      status: "IEEE Award Winner",
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
      technologies: ["Vite","React", "TypeScript", "HTML", "Vanilla CSS", "Elysia"],
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
      status: "Funded Startup",
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`card-gradient rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:bg-primary/5 hover:border-primary/30 border border-transparent transition-all duration-300 group animate-fade-up hover:scale-[1.02] hover:-translate-y-3 backdrop-blur-sm ${project.title === "NeurOS" ? "lg:col-span-2 lg:max-w-2xl lg:mx-auto" : ""}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-primary group-hover:scale-110 transition-all duration-300 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-muted-foreground">{project.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                  {project.description}
                </p>

                {/* Key Features & Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Key Features & Achievements:</h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {project.title !== "NeurOS" && (
                  <div className="flex gap-3 pt-6 border-t border-border/50">
                    <Button 
                      className="primary-gradient hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                      asChild
                    >
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {project.title === "RoutineRemind" ? "Read More" : project.title === "CMUEats" ? "View Website" : "View Demo"}
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="hover:scale-105 transition-bounce"
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

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub!
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="hover:scale-105 transition-bounce"
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