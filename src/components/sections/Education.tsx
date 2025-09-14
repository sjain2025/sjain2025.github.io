import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      degree: "Bachelor of Science in Computer Science",
      period: "2024 - December 2027",
      description: "Pursuing comprehensive CS education at one of the world's top computer science programs",
      achievements: [
        "School of Computer Science",
        "Expected Graduation: 2028",
        "Focus on AI and Machine Learning"
      ]
    },
    {
      institution: "Thomas Jefferson High School for Science and Technology",
      location: "Alexandria, VA",
      degree: "High School Diploma",
      period: "",
      description: "Specialized STEM education with exceptional academic performance and leadership roles",
      achievements: [
        "4.535 Weighted GPA",
        "4.0/4.0 Unweighted GPA", 
        "Captain of Congressional Debate",
        "Student Government Association Executive Committee",
        "Policy Specialist"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            My <span className="text-gradient">Education</span>
          </h2>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="card-gradient rounded-xl p-8 shadow-medium hover:shadow-hard transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">{edu.institution}</h3>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.period && (
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.period}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-primary mb-3">{edu.degree}</h4>
                <p className="text-muted-foreground mb-6">{edu.description}</p>

                <div className="space-y-2">
                  <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;