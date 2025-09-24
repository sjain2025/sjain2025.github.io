import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      degree: "Bachelor of Science in Computer Science",
      period: "December 2027",
      gpa: "4.0",
      achievements: [
        "Software Developer at Scotty Labs on the CMUEats team",
        "Association of Computing Machinery Tech Developer",
        "Spikeball and Pickleball Club"
      ]
    },
    {
      institution: "Thomas Jefferson High School for Science and Technology",
      location: "Alexandria, VA",
      degree: "High School Diploma",
      period: "",
      description: "",
      gpa: "4.535 (weighted) | 4.0 (unweighted)",
      courses: [
        "Machine Learning",
        "Artificial Intelligence", 
        "Computer Vision",
        "Mobile & Web App Development",
        "Multivariable Calculus",
        "Linear Algebra",
        "AP Calculus BC",
        "AP Computer Science A",
        "AP Physics C M&EM",
        "AP Statistics",
        "AP Biology",
        "AP Psychology",
        "AP US History",
        "AP Government",
        "AP English Lang & Comp"
      ],
      achievements: [
        "Captain of Congressional Debate",
        "Student Government Association Policy Specialist & Executive Committee Member",
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
                className="card-gradient rounded-2xl p-8 shadow-medium hover:shadow-hard hover:scale-105 transition-all duration-300 animate-fade-up border border-primary/20 hover:border-primary/40"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-primary">GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-primary mb-3">{edu.degree}</h4>
                <p className="text-muted-foreground mb-6">{edu.description}</p>

                {edu.courses && (
                  <div className="space-y-2 mb-6">
                    <h5 className="font-semibold text-foreground mb-3">Relevant Courses:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span 
                          key={i} 
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground border"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

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