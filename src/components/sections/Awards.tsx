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
      year: "2023-2024",
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Honors & <span className="text-gradient">Awards</span>
          </h2>

          {/* Awards in a nice grid layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="card-gradient rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 group animate-fade-up relative overflow-hidden border-2 border-primary/20 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Award icon and title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-primary group-hover:scale-105 transition-all duration-300 p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-md">
                    <div className="scale-125">
                      {award.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {award.title}
                    </h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary/30 to-primary/20 text-primary rounded-full text-xs font-bold border border-primary/40">
                      {award.year}
                    </span>
                  </div>
                </div>

                {/* Award details and description */}
                <div className="space-y-3">
                  <p className="text-primary/90 font-semibold text-base">
                    {award.organization}
                  </p>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {award.description}
                  </p>
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