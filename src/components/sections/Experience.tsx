import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description?: string;
  achievements: string[];
  technologies: string[];
  location?: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "ScottyLabs",
      position: "Software Engineer",
      period: "Aug 2025 – Present",
      location: "Pittsburgh, PA",
      achievements: [
        "Integrate live data from Dining Services into CMUEats using React, TypeScript, and Railway, streamlining menus and specials for 10,000+ users each month across mobile and web.",
        "Lead the development of a geospatial routing system with JavaScript and REST APIs to rank dining locations by walking distance, resulting in a 30-50% reduction in search time.",
        "Automate CI/CD pipelines for 50+ developers with GitHub Actions and Docker to enforce linting and unit testing."
      ],
      technologies: ["React", "TypeScript", "Railway", "JavaScript", "REST APIs", "GitHub Actions", "Docker"]
    },
    {
      company: "Vytal.AI",
      position: "Software Engineer",
      period: "May 2022 – Feb 2025",
      location: "Alexandria, VA",
      achievements: [
        "Developed a mobile application that analyzes ocular biometrics using OpenCV and Next.js to quantify brain health in under 30 seconds.",
        "Optimized Python pipelines and deployed ML models on AWS EC2 and MongoDB to scale to 300 clinical beta users.",
        "Implemented OCR-driven PDF parsing using Agile methodologies like sprint cycles and stand-ups, decreasing the average processing time for uploaded health records by 90 seconds."
      ],
      technologies: ["OpenCV", "Next.js", "Python", "AWS EC2", "MongoDB", "Agile"]
    },
    {
      company: "Virginia Tech",
      position: "Computer Science Research Intern",
      period: "Apr 2024 – Jan 2025",
      location: "Blacksburg, VA",
      achievements: [
        "Spearheaded research with a team of 10+ developers to develop algorithms for constraint satisfaction problems in C# and Python, reducing computation time by up to 65% compared to standard recursive methods.",
        "Implemented object-oriented programming architecture for nodes and edges, solving the graph coloring problem on a map of the United States in less than 25 seconds."
      ],
      technologies: ["C#", "Python", "Algorithms", "OOP"]
    },
    {
      company: "George Mason University",
      position: "Machine Learning Research Intern",
      period: "Jun 2023 – Jan 2024",
      location: "Fairfax, VA",
      achievements: [
        "Published a first-author paper in the Journal of Student-Scientists' Research, introducing a web dashboard built with Flask and HTML/CSS to standardize five technical metrics for analyzing molecular dynamics simulations.",
        "Visualized data for 20,000+ simulations with Matplotlib, cutting evaluation time from 12 hours to under 25 minutes."
      ],
      technologies: ["Flask", "Python", "HTML/CSS", "Matplotlib", "Molecular Dynamics"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="card-gradient rounded-2xl p-8 shadow-medium hover:shadow-hard transition-all duration-300 animate-fade-up border border-primary/20 hover:border-primary/40"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Company and role info */}
                <div className="mb-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.company}</h3>
                      <p className="text-lg font-semibold text-primary mb-3">{exp.position}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-base text-muted-foreground leading-relaxed">{exp.description}</p>
                  )}
                </div>

                {/* What I accomplished */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools and technologies I used */}
                {exp.technologies.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;