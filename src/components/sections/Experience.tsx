import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  location?: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Vytal.AI",
      position: "Software and Machine Learning Engineer",
      period: "May 2022 - Dec 2024",
      location: "Alexandria, Virginia",
      description: "Developed an AI-powered mobile application for rapid brain health assessment through state-of-the-art eye-tracking technology at a venture capital-backed startup.",
      achievements: [
        "Built smartphone AI application using OpenCV and React Native to quantify brain health via 30-second eye-tracking evaluations",
        "Optimized Python-based biometric processing pipelines and deployed machine learning models on AWS EC2, scaling the platform to support 300+ clinical beta testers",
        "Engineered head-gaze detection algorithm with YOLOv8 that delivered 15% higher accuracy compared to previous implementations"
      ],
      technologies: ["Python", "OpenCV", "React Native", "AWS EC2", "YOLOv8", "Machine Learning"]
    },
    {
      company: "Virginia Tech",
      position: "Computer Science and Quantum Computing Researcher",
      period: "April 2024 - May 2025",
      location: "Blacksburg, Virginia",
      description: "Conducted advanced research on quantum algorithms and their applications to computational problems under the guidance of Dr. Atul Mantri.",
      achievements: [
        "Led research initiative applying Grover's algorithm to boolean satisfiability problems using Qiskit and Q# frameworks",
        "Designed quantum-classical hybrid algorithm to solve the graph coloring problem for a map of all 50 U.S. states using MATLAB and Python",
        "Achieved 65% reduction in computational cost compared to traditional classical recursive approaches"
      ],
      technologies: ["Python", "MATLAB", "Qiskit", "Q#", "Quantum Computing", "Algorithm Design"]
    },
    {
      company: "Youth International Digambar Jain Organization",
      position: "President and Co-Founder",
      period: "February 2022 - Present",
      description: "Lead non-profit organization dedicated to education and community building centered on Jain philosophy and cultural values.",
      achievements: [
        "Direct educational programming that teaches Jain principles including ahimsa (non-violence) and peace to over 150 students",
        "Oversee fundraising initiatives that have secured more than $25,000 for the construction of a temple serving as a center for worship and cultural events in Northern Virginia"
      ],
      technologies: []
    }
  ];

  return (
    <section id="experience" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="card-gradient rounded-2xl p-8 shadow-medium hover:shadow-hard hover:scale-105 transition-all duration-300 animate-fade-up border border-primary/20 hover:border-primary/40"
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
                  <p className="text-base text-muted-foreground leading-relaxed">{exp.description}</p>
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