import { Trophy, Award, Users, Code, Star, Calculator } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Congressional App Challenge Winner",
      organization: "U.S. House of Representatives (VA-10)",
      year: "2024",
      icon: <Trophy className="h-8 w-8" />,
      description: "Selected first place by U.S. Representative Jennifer Wexton for exceptional mobile app development project. Presented findings and demo'd app at Capitol Hill.",
      category: "Government Recognition"
    },
    {
      title: "IEEE Technical Excellence Award",
      organization: "Institute of Electrical and Electronics Engineers",
      year: "2024",
      icon: <Award className="h-8 w-8" />,
      description: "Recognized for exceptional technical contribution with EyeLS gaze-tracking web application for ALS patients, demonstrating innovation in assistive technology.",
      category: "Technical Achievement"
    },
    {
      title: "2x Meta Hacker Cup Round 2 Qualifier",
      organization: "Meta (Facebook)",
      year: "2024",
      icon: <Code className="h-8 w-8" />,
      description: "Achieved top 10% internationally and top 100 in the United States while competing against over 20,000 software developers worldwide.",
      category: "Competitive Programming"
    },
    {
      title: "Best Presentation Award",
      organization: "6th International Conference on Robotics and Computer Vision",
      year: "2024",
      icon: <Star className="h-8 w-8" />,
      description: "Received recognition for exceptional oral presentation of first-author research paper on LapseNet fall detection system at prestigious IEEE conference.",
      category: "Academic Excellence"
    },
    {
      title: "5x International Hackathons Winner",
      organization: "Devpost",
      year: "2022-2024",
      icon: <Users className="h-8 w-8" />,
      description: "Applied technical skills to solve real-world problems via software development projects at hackathons on Devpost.",
      category: "Innovation & Development"
    },
    {
      title: "3x AIME Qualifier",
      organization: "Mathematical Association of America",
      year: "2021-2023",
      icon: <Calculator className="h-8 w-8" />,
      description: "Qualified for the American Invitational Mathematics Examination three times (top 2.5% in the nation).",
      category: "Mathematical Excellence"
    }
  ];


  return (
    <section id="awards" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>


          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="relative card-gradient rounded-2xl p-8 shadow-medium hover:shadow-hard transition-all duration-300 group animate-fade-up hover:-translate-y-2 hover:scale-105 border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                {/* Award Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary group-hover:scale-110 transition-all duration-300 bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {award.title}
                    </h3>
                  </div>
                </div>

                {/* Award Content */}
                <div className="space-y-4">
                  <p className="text-primary font-semibold">
                    {award.organization}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Awards;