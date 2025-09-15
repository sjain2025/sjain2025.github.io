import { FileText, Award, Calendar, Users, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Research = () => {
  const publications = [
    {
      title: "LapseNet: A Hybrid CNN-LSTM Approach for Accurate and Efficient Vision-Based Fall Detection",
      authors: "Soham Jain et al.",
      venue: "6th International Conference on Robotics and Computer Vision (IEEE)",
      year: "2024",
      type: "First Author",
      award: "Best Presentation Award",
      description: "Developed a novel hybrid deep learning approach combining CNNs and LSTMs for real-time fall detection systems, achieving state-of-the-art accuracy while maintaining computational efficiency.",
      keywords: ["Computer Vision", "Deep Learning", "CNN-LSTM", "Fall Detection", "Healthcare AI"],
      impact: "Exceptional oral presentation recognition at IEEE conference"
    },
    {
      title: "RexDash: A Comprehensive Dashboard for Analyzing the Technical Performance of Replica Exchange Molecular Dynamics Simulations",
      authors: "Soham Jain, Dr. Christopher Lockhart",
      venue: "Journal of Student-Scientists' Research",
      year: "2024",
      type: "Lead Author",
      award: null,
      description: "Spearheaded research on machine learning applications in replica exchange molecular dynamics, developing comprehensive analysis tools for molecular simulation performance optimization.",
      keywords: ["Machine Learning", "Molecular Dynamics", "Data Visualization", "Scientific Computing"],
      impact: "Collaboration with Dr. Christopher Lockhart at George Mason University"
    },
    {
      title: "A Transformer-Based Approach to Diagnose Amyotrophic Lateral Sclerosis via EEG Analysis",
      authors: "Soham Jain",
      venue: "17th International Conference on Advanced Computer Theory and Engineering",
      year: "2024",
      type: "First Author",
      award: null,
      description: "Independent research developing a transformer-based neural network for rapid ALS diagnosis through EEG signal analysis, achieving diagnostic capability in under two minutes.",
      keywords: ["Transformers", "EEG Analysis", "Medical AI", "Neural Networks", "ALS Diagnosis"],
      impact: "Two-minute ALS diagnostic capability through AI"
    },
    {
      title: "ConVox: A Robust Deep Learning Approach for Voice Disorder Detection w/ Multilingual Capabilities",
      authors: "Soham Jain et al.",
      venue: "5th International Conference on Big Data, Artificial Intelligence and Internet of Things Engineering",
      year: "2024",
      type: "First Author",
      award: null,
      description: "Constructed a robust deep learning model capable of detecting voice disorders across three languages, demonstrating multilingual AI capabilities in healthcare applications.",
      keywords: ["Voice Analysis", "Multilingual AI", "Healthcare", "Deep Learning", "Signal Processing"],
      impact: "Multilingual voice disorder detection across three languages"
    }
  ];

  const researchAreas = [
    {
      area: "Artificial Intelligence & Machine Learning",
      focus: ["Deep Learning", "Neural Networks", "Computer Vision", "Medical AI"]
    },
    {
      area: "Quantum Computing",
      focus: ["Graph Coloring", "Grover's Algorithm", "Quantum Algorithms", "Theoretical CS"]
    },
    {
      area: "Healthcare Technology",
      focus: ["Medical Diagnostics", "Assistive Technology", "Brain Health", "Accessibility"]
    },
    {
      area: "Signal Processing",
      focus: ["EEG Analysis", "Voice Recognition", "Gaze Tracking", "Biomedical Signals"]
    }
  ];

  return (
    <section id="research" className="py-20 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Research & <span className="text-gradient">Publications</span>
          </h2>

          {/* Research Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {researchAreas.map((area, index) => (
              <div 
                key={index}
                className="card-gradient rounded-xl p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-foreground mb-4">{area.area}</h3>
                <div className="space-y-2">
                  {area.focus.map((item, i) => (
                    <span 
                      key={i}
                      className="inline-block px-2 py-1 bg-primary/20 text-primary rounded text-xs mr-2 mb-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Publications */}
          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div 
                key={index}
                className="card-gradient rounded-xl p-8 shadow-medium hover:shadow-hard transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Publication Icon & Type */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="h-6 w-6 text-primary" />
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                        {pub.type}
                      </span>
                    </div>
                    {pub.award && (
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="text-accent font-medium">{pub.award}</span>
                      </div>
                    )}
                  </div>

                  {/* Publication Details */}
                  <div className="flex-1">
                    <div className="flex justify-start mb-4">
                      <Button 
                        size="lg"
                        variant="outline"
                        className="hover:scale-105 transition-bounce px-6 py-3"
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        Read Paper
                      </Button>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{pub.title}</h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{pub.authors}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{pub.year}</span>
                      </div>
                    </div>

                    <p className="text-primary font-medium mb-3">{pub.venue}</p>
                    <p className="text-muted-foreground mb-4">{pub.description}</p>

                    {pub.impact && (
                      <p className="text-sm text-accent mb-4 font-medium">🎯 {pub.impact}</p>
                    )}

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.keywords.map((keyword, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-full text-xs"
                        >
                          {keyword}
                        </span>
                      ))}
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

export default Research;