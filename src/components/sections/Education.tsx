import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const relevantCourses = [
    "Data Structures and Algorithms",
    "Artificial Intelligence",
    "Applied Machine Learning",
    "Discrete Mathematics",
    "Computational Linear Algebra",
    "Multivariable Calculus",
    "Computer Vision",
    "Mobile and Web Application Development",
    "Research Statistics",
    "Psychology",
    "Biology"
  ];

  const education = [
    {
      institution: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      degree: "Bachelor of Science in Computer Science",
      period: "May 2027",
      gpa: "",
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
      achievements: [
        "Captain of Congressional Debate",
        "Student Government Association Policy Specialist & Executive Committee Member",
      ]
    }
  ];

  return (
    <section id="education" className="py-20 hero-gradient relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Page title */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
          </div>

          {/* Relevant Courses Section */}
          <div 
            className="card-gradient rounded-2xl p-8 shadow-hard border border-primary/30 mb-12 animate-fade-up hover:shadow-2xl hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            style={{ animationDelay: '0.1s' }}
          >
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  Relevant Coursework
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {relevantCourses.map((course, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-muted to-muted/50 text-foreground border border-border hover:border-primary/50 hover:bg-primary/5 hover:scale-105 transition-all duration-200 cursor-default shadow-sm hover:shadow-md"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="card-gradient rounded-2xl p-8 shadow-hard hover:shadow-2xl transition-all duration-300 animate-fade-up border border-primary/30 hover:border-primary/50 group relative overflow-hidden"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Institution Header */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 shadow-md">
                          <GraduationCap className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {edu.institution}
                          </h3>
                          <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                            <div className="flex items-center gap-1.5 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span className="font-medium">{edu.location}</span>
                            </div>
                            {edu.period && (
                              <>
                                <span className="text-muted-foreground">•</span>
                                <div className="flex items-center gap-1.5 text-muted-foreground">
                                  <Calendar className="h-4 w-4" />
                                  <span className="font-medium">{edu.period}</span>
                                </div>
                              </>
                            )}
                            {edu.gpa && (
                              <>
                                <span className="text-muted-foreground">•</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                                  GPA: {edu.gpa}
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Degree */}
                    <div className="pl-[4.5rem]">
                      <h4 className="text-xl font-bold text-primary mb-3 inline-flex items-center gap-2">
                        {edu.degree}
                      </h4>
                      {edu.description && (
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="pl-[4.5rem] border-l-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <div className="pl-6">
                      <ul className="space-y-3">
                        {edu.achievements.map((achievement, i) => (
                          <li 
                            key={i} 
                            className="flex items-start gap-3 text-muted-foreground group/item hover:text-foreground transition-colors"
                          >
                            <div className="mt-1.5 w-1.5 h-1.5 bg-primary/60 rounded-full group-hover/item:scale-150 transition-transform"></div>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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

export default Education;