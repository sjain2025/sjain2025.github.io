import { ExternalLink, Github, Smartphone, Eye, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Projects = () => {
  const projects = [
    {
      title: "RoutineRemind",
      description: "Provisional patented, utility patent-pending scheduling application specifically designed for individuals with speech and cognitive disabilities. Currently being deployed on both Google Play Store and Apple App Store.",
      icon: <Smartphone className="h-8 w-8" />,
      status: "Live on App Stores",
      period: "June 2022 - Present",
      technologies: ["React Native", "Node.js", "MongoDB", "Push Notifications", "Accessibility APIs"],
      achievements: [
        "Provisional patent granted with utility patent pending",
        "Deployed on both Google Play and Apple App Store", 
        "Specialized accessibility features for cognitive disabilities",
        "Real-time scheduling and reminder system",
        "User-friendly interface designed for special needs"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "EyeLS",
      description: "Revolutionary gaze-tracking web application designed to help ALS patients communicate nonverbally. Implements advanced Kalman Filtering and Monte Carlo algorithms for precise eye movement detection.",
      icon: <Eye className="h-8 w-8" />,
      status: "IEEE Award Winner",
      period: "August 2023 - Present",
      technologies: ["JavaScript", "WebRTC", "Computer Vision", "Kalman Filters", "Monte Carlo Methods"],
      achievements: [
        "Recognized with IEEE Technical Excellence Award",
        "Implements cutting-edge gaze-tracking algorithms",
        "Helps ALS patients communicate through eye movements",
        "Real-time eye tracking with high accuracy",
        "Web-based solution for accessibility"
      ],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "NeurOS (Vytal.AI)",
      description: "Smartphone AI application that quantifies brain health using novel gaze-tracking algorithms. Part of the successful $1.2M funding round at Vytal.AI with $12.5M company valuation.",
      icon: <Users className="h-8 w-8" />,
      status: "Funded Startup",
      period: "May 2022 - Present",
      technologies: ["AI/ML", "Mobile Development", "Computer Vision", "React Native", "Python"],
      achievements: [
        "Secured $1.2 million in seed investments",
        "Achieved $12.5 million company valuation",
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
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div 
                    className="card-gradient rounded-xl p-8 shadow-medium hover:shadow-hard hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-smooth group animate-fade-up cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="text-primary group-hover:scale-110 transition-bounce">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-primary font-medium">{project.status}</span>
                            <span className="text-muted-foreground">{project.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies Preview */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </DialogTrigger>
                
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-2xl">
                      <div className="text-primary">
                        {project.icon}
                      </div>
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-primary font-medium">{project.status}</span>
                      <span className="text-muted-foreground">{project.period}</span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Features & Achievements:</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button 
                        className="primary-gradient hover:scale-105 transition-bounce"
                        asChild
                      >
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Demo
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
                  </div>
                </DialogContent>
              </Dialog>
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