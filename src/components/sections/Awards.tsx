import { Trophy, Award, Users, Code, Star, Medal } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Congressional App Challenge Winner",
      organization: "U.S. House of Representatives (VA-10)",
      year: "2024",
      icon: <Trophy className="h-8 w-8" />,
      description: "Selected first place by U.S. Representative Jennifer Wexton for exceptional mobile app development project demonstrating innovation and technical excellence.",
      achievements: [
        "Featured on House.gov and national news outlets",
        "Invited to demo application at Capitol Hill",
        "Recognition from U.S. Representative Jennifer Wexton",
        "National-level competition winner"
      ],
      category: "Government Recognition"
    },
    {
      title: "IEEE Technical Excellence Award",
      organization: "Institute of Electrical and Electronics Engineers",
      year: "2024",
      icon: <Award className="h-8 w-8" />,
      description: "Recognized for exceptional technical contribution with EyeLS gaze-tracking web application for ALS patients, demonstrating innovation in assistive technology.",
      achievements: [
        "Technical excellence in gaze-tracking algorithms",
        "Innovation in assistive technology for ALS patients",
        "Implementation of advanced Kalman Filtering",
        "Monte Carlo algorithm optimization"
      ],
      category: "Technical Achievement"
    },
    {
      title: "Best Presentation Award",
      organization: "6th IEEE International Conference on Robotics and Computer Vision",
      year: "2024",
      icon: <Star className="h-8 w-8" />,
      description: "Received recognition for exceptional oral presentation of first-author research paper on LapseNet fall detection system at prestigious IEEE conference.",
      achievements: [
        "Exceptional oral presentation skills demonstrated",
        "First-author IEEE publication recognition",
        "International conference presentation",
        "Peer-reviewed research contribution"
      ],
      category: "Academic Excellence"
    },
    {
      title: "Meta Hacker Cup Round 2 Qualifier",
      organization: "Meta (Facebook)",
      year: "2024",
      icon: <Code className="h-8 w-8" />,
      description: "Achieved top 10% internationally and top 100 in the United States while competing against over 20,000 software developers worldwide.",
      achievements: [
        "Top 10% internationally (20,000+ participants)",
        "Top 100 ranking in the United States",
        "Advanced algorithmic problem-solving skills",
        "Competitive programming excellence"
      ],
      category: "Competitive Programming"
    },
    {
      title: "5x Devpost Hackathon Winner",
      organization: "Various Hackathon Organizations",
      year: "2022-2024",
      icon: <Users className="h-8 w-8" />,
      description: "Consistently demonstrated innovation and technical prowess by winning five different hackathon competitions on the Devpost platform.",
      achievements: [
        "Five separate hackathon victories",
        "Consistent innovation and creativity",
        "Rapid prototyping and development skills",
        "Cross-functional team collaboration"
      ],
      category: "Innovation & Development"
    }
  ];


  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>


          {/* Awards List */}
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="card-gradient rounded-xl p-8 shadow-medium hover:shadow-hard transition-smooth group animate-fade-up"
                style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Award Icon & Category */}
                  <div className="flex-shrink-0 lg:w-48">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-primary group-hover:scale-110 transition-bounce">
                        {award.icon}
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                          {award.category}
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">{award.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{award.title}</h3>
                    <p className="text-primary font-semibold mb-4">{award.organization}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{award.description}</p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Key Highlights:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {award.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <Medal className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
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

export default Awards;