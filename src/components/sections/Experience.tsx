import { Building, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Vytal.AI",
      position: "Machine Learning and Software Engineer",
      location: "Remote",
      period: "May 2022 - June 2025",
      description: "Leading the development of NeurOS, a groundbreaking smartphone AI application that quantifies brain health using novel gaze-tracking algorithms.",
      achievements: [
        "Developed NeurOS AI application with novel gaze-tracking algorithms",
        "Secured $1.2 million in seed investments",
        "Achieved $12.5 million company valuation",
        "Led cross-functional team in product development",
        "Implemented machine learning models for brain health assessment"
      ],
      technologies: ["Python", "TensorFlow", "React Native", "Computer Vision", "Mobile Development"]
    },
    {
      company: "Virginia Tech",
      position: "Computer Science and Quantum Computing Researcher",
      location: "Blacksburg, VA",
      period: "April 2024 - June 2025",
      description: "Conducting cutting-edge research on graph coloring applications using Grover's Algorithm under the supervision of Dr. Atul Mantri.",
      achievements: [
        "Led team of undergraduate students in quantum computing research",
        "Collaborated with Dr. Atul Mantri on graph coloring with Grover's Algorithm",
        "Conducted comprehensive literature reviews on quantum algorithms",
        "Identified gaps in contemporary quantum computing research",
        "Developed novel approaches to quantum graph coloring problems"
      ],
      technologies: ["Quantum Computing", "Python", "Qiskit", "Graph Theory", "Research Methodologies"]
    },
    {
      company: "Youth International Digambar Jain Organization",
      position: "President and Co-Founder",
      location: "Virginia, USA",
      period: "February 2022 - Present",
      description: "Leading a non-profit organization focused on teaching Jain principles and community service, while managing organizational operations and fundraising.",
      achievements: [
        "Founded and established the organization from inception",
        "Raised over $25,000 for constructing a Jain temple in Virginia",
        "Developed educational programming on Jain principles",
        "Managed organizational website and digital presence",
        "Coordinated community outreach and educational events"
      ],
      technologies: ["Web Development", "Project Management", "Fundraising", "Community Outreach"]
    }
  ];

  return (
    <section id="experience" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="card-gradient rounded-xl p-8 shadow-medium hover:shadow-hard transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-4 gap-8">
                  {/* Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="h-6 w-6 text-primary" />
                      <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-medium text-primary">{exp.position}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-3">
                    <p className="text-muted-foreground mb-6">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;