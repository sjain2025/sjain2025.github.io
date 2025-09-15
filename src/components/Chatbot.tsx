import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Minimize2, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to answer questions about Soham Jain. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-show chatbot after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Knowledge base about Soham Jain
  const knowledgeBase = {
    personal: {
      name: "Soham Jain",
      title: "Computer Science Student at Carnegie Mellon University",
      email: "sohamj@andrew.cmu.edu",
      location: "Pittsburgh, PA",
      description: "Ambitious computer scientist with a passion for software development and artificial intelligence. Leveraging interpersonal skills and technical proficiency to innovate modern solutions to real-world problems."
    },
    education: {
      current: {
        institution: "Carnegie Mellon University",
        degree: "Bachelor of Science in Computer Science",
        location: "Pittsburgh, PA",
        period: "2024 - December 2027",
        expectedGraduation: "2028",
        school: "School of Computer Science",
        focus: "AI and Machine Learning"
      },
      highSchool: {
        institution: "Thomas Jefferson High School for Science and Technology",
        location: "Alexandria, VA",
        degree: "High School Diploma",
        gpa: "4.535 Weighted GPA, 4.0/4.0 Unweighted GPA",
        achievements: ["Captain of Congressional Debate", "Student Government Association Executive Committee", "Policy Specialist"]
      }
    },
    experience: [
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
    ],
    projects: [
      {
        title: "RoutineRemind",
        description: "Provisional patented, utility patent-pending scheduling application specifically designed for individuals with speech and cognitive disabilities. Currently being deployed on both Google Play Store and Apple App Store.",
        status: "Live on App Stores",
        period: "June 2022 - Present",
        technologies: ["React Native", "Node.js", "MongoDB", "Push Notifications", "Accessibility APIs"],
        achievements: [
          "Provisional patent granted with utility patent pending",
          "Deployed on both Google Play and Apple App Store",
          "Specialized accessibility features for cognitive disabilities",
          "Real-time scheduling and reminder system",
          "User-friendly interface designed for special needs"
        ]
      },
      {
        title: "EyeLS",
        description: "Revolutionary gaze-tracking web application designed to help ALS patients communicate nonverbally. Implements advanced Kalman Filtering and Monte Carlo algorithms for precise eye movement detection.",
        status: "IEEE Award Winner",
        period: "August 2023 - Present",
        technologies: ["JavaScript", "WebRTC", "Computer Vision", "Kalman Filters", "Monte Carlo Methods"],
        achievements: [
          "Recognized with IEEE Technical Excellence Award",
          "Implements cutting-edge gaze-tracking algorithms",
          "Helps ALS patients communicate through eye movements",
          "Real-time eye tracking with high accuracy",
          "Web-based solution for accessibility"
        ]
      },
      {
        title: "NeurOS (Vytal.AI)",
        description: "Smartphone AI application that quantifies brain health using novel gaze-tracking algorithms. Part of the successful $1.2M funding round at Vytal.AI with $12.5M company valuation.",
        status: "Funded Startup",
        period: "May 2022 - Present",
        technologies: ["AI/ML", "Mobile Development", "Computer Vision", "React Native", "Python"],
        achievements: [
          "Secured $1.2 million in seed investments",
          "Achieved $12.5 million company valuation",
          "Novel gaze-tracking algorithms for brain health",
          "AI-powered health assessment platform",
          "Commercial deployment and user acquisition"
        ]
      }
    ],
    research: [
      {
        title: "LapseNet: A Hybrid CNN-LSTM Approach for Accurate and Efficient Vision-Based Fall Detection",
        authors: "Soham Jain et al.",
        venue: "6th International Conference on Robotics and Computer Vision (IEEE)",
        year: "2024",
        type: "First Author",
        award: "Best Presentation Award",
        description: "Developed a novel hybrid deep learning approach combining CNNs and LSTMs for real-time fall detection systems, achieving state-of-the-art accuracy while maintaining computational efficiency.",
        keywords: ["Computer Vision", "Deep Learning", "CNN-LSTM", "Fall Detection", "Healthcare AI"]
      },
      {
        title: "RexDash: A Comprehensive Dashboard for Analyzing the Technical Performance of Replica Exchange Molecular Dynamics Simulations",
        authors: "Soham Jain, Dr. Christopher Lockhart",
        venue: "Journal of Student-Scientists' Research",
        year: "2024",
        type: "Lead Author",
        description: "Spearheaded research on machine learning applications in replica exchange molecular dynamics, developing comprehensive analysis tools for molecular simulation performance optimization.",
        keywords: ["Machine Learning", "Molecular Dynamics", "Data Visualization", "Scientific Computing"]
      },
      {
        title: "A Transformer-Based Approach to Diagnose Amyotrophic Lateral Sclerosis via EEG Analysis",
        authors: "Soham Jain",
        venue: "17th International Conference on Advanced Computer Theory and Engineering",
        year: "2024",
        type: "First Author",
        description: "Independent research developing a transformer-based neural network for rapid ALS diagnosis through EEG signal analysis, achieving diagnostic capability in under two minutes.",
        keywords: ["Transformers", "EEG Analysis", "Medical AI", "Neural Networks", "ALS Diagnosis"]
      },
      {
        title: "ConVox: A Robust Deep Learning Approach for Voice Disorder Detection w/ Multilingual Capabilities",
        authors: "Soham Jain et al.",
        venue: "5th International Conference on Big Data, Artificial Intelligence and Internet of Things Engineering",
        year: "2024",
        type: "First Author",
        description: "Constructed a robust deep learning model capable of detecting voice disorders across three languages, demonstrating multilingual AI capabilities in healthcare applications.",
        keywords: ["Voice Analysis", "Multilingual AI", "Healthcare", "Deep Learning", "Signal Processing"]
      }
    ],
    awards: [
      {
        title: "Congressional App Challenge Winner",
        organization: "U.S. House of Representatives (VA-10)",
        year: "2024",
        description: "Selected first place by U.S. Representative Jennifer Wexton for exceptional mobile app development project demonstrating innovation and technical excellence.",
        achievements: [
          "Featured on House.gov and national news outlets",
          "Invited to demo application at Capitol Hill",
          "Recognition from U.S. Representative Jennifer Wexton",
          "National-level competition winner"
        ]
      },
      {
        title: "IEEE Technical Excellence Award",
        organization: "Institute of Electrical and Electronics Engineers",
        year: "2024",
        description: "Recognized for exceptional technical contribution with EyeLS gaze-tracking web application for ALS patients, demonstrating innovation in assistive technology.",
        achievements: [
          "Technical excellence in gaze-tracking algorithms",
          "Innovation in assistive technology for ALS patients",
          "Implementation of advanced Kalman Filtering",
          "Monte Carlo algorithm optimization"
        ]
      },
      {
        title: "Best Presentation Award",
        organization: "6th IEEE International Conference on Robotics and Computer Vision",
        year: "2024",
        description: "Received recognition for exceptional oral presentation of first-author research paper on LapseNet fall detection system at prestigious IEEE conference.",
        achievements: [
          "Exceptional oral presentation skills demonstrated",
          "First-author IEEE publication recognition",
          "International conference presentation",
          "Peer-reviewed research contribution"
        ]
      },
      {
        title: "Meta Hacker Cup Round 2 Qualifier",
        organization: "Meta (Facebook)",
        year: "2024",
        description: "Achieved top 10% internationally and top 100 in the United States while competing against over 20,000 software developers worldwide.",
        achievements: [
          "Top 10% internationally (20,000+ participants)",
          "Top 100 ranking in the United States",
          "Advanced algorithmic problem-solving skills",
          "Competitive programming excellence"
        ]
      },
      {
        title: "5x Devpost Hackathon Winner",
        organization: "Various Hackathon Organizations",
        year: "2022-2024",
        description: "Consistently demonstrated innovation and technical prowess by winning five different hackathon competitions on the Devpost platform.",
        achievements: [
          "Five separate hackathon victories",
          "Consistent innovation and creativity",
          "Rapid prototyping and development skills",
          "Cross-functional team collaboration"
        ]
      }
    ],
    skills: {
      technical: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Machine Learning", level: 88 },
        { name: "React/Next.js", level: 85 },
        { name: "TensorFlow/PyTorch", level: 82 },
        { name: "SQL/NoSQL", level: 80 }
      ],
      soft: [
        { name: "Leadership", level: 95 },
        { name: "Communication", level: 92 },
        { name: "Problem Solving", level: 98 },
        { name: "Critical Thinking", level: 94 },
        { name: "Adaptability", level: 90 },
        { name: "Project Management", level: 85 }
      ],
      languages: [
        { name: "English", level: 100 },
        { name: "Hindi", level: 85 },
        { name: "Spanish", level: 65 }
      ]
    },
    social: {
      linkedin: "https://www.linkedin.com/in/soham-jain1/",
      github: "https://github.com/sjain2025",
      youtube: "https://www.youtube.com/@CodingWithSohamJain",
      website: "http://sohamjain.com/"
    }
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Personal information
    if (message.includes('who') && (message.includes('soham') || message.includes('you'))) {
      return `I'm Soham Jain, a Computer Science student at Carnegie Mellon University. I'm passionate about software development and artificial intelligence, with a focus on creating innovative solutions to real-world problems. I have experience in machine learning, mobile development, and research.`;
    }
    
    if (message.includes('about') || message.includes('tell me about')) {
      return `Soham Jain is an ambitious computer scientist currently pursuing a Bachelor of Science in Computer Science at Carnegie Mellon University (expected graduation 2028). He has a strong background in AI/ML, mobile development, and research, with multiple published papers and significant industry experience at Vytal.AI.`;
    }

    // Education
    if (message.includes('education') || message.includes('school') || message.includes('university')) {
      return `Soham is currently pursuing a Bachelor of Science in Computer Science at Carnegie Mellon University (2024-2027, expected graduation 2028) in the School of Computer Science with a focus on AI and Machine Learning. Previously, he attended Thomas Jefferson High School for Science and Technology in Alexandria, VA, where he achieved a 4.535 weighted GPA and 4.0/4.0 unweighted GPA, serving as Captain of Congressional Debate and on the Student Government Association Executive Committee.`;
    }

    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return `Soham has extensive work experience:\n\n1. **Vytal.AI** (May 2022 - June 2025): Machine Learning and Software Engineer, leading development of NeurOS AI application for brain health assessment. Secured $1.2M in seed investments and achieved $12.5M company valuation.\n\n2. **Virginia Tech** (April 2024 - June 2025): Computer Science and Quantum Computing Researcher, working with Dr. Atul Mantri on graph coloring with Grover's Algorithm.\n\n3. **Youth International Digambar Jain Organization** (Feb 2022 - Present): President and Co-Founder, raised over $25,000 for temple construction.`;
    }

    // Projects
    if (message.includes('project') || message.includes('app') || message.includes('application')) {
      return `Soham has worked on several notable projects:\n\n1. **RoutineRemind**: A provisional patented scheduling app for individuals with speech and cognitive disabilities, deployed on Google Play and Apple App Store.\n\n2. **EyeLS**: A gaze-tracking web application for ALS patients to communicate nonverbally, winner of IEEE Technical Excellence Award.\n\n3. **NeurOS**: A smartphone AI application that quantifies brain health using novel gaze-tracking algorithms, part of Vytal.AI's $1.2M funding round.`;
    }

    // Research
    if (message.includes('research') || message.includes('paper') || message.includes('publication')) {
      return `Soham has published 4 research papers, with 3 as first author:\n\n1. **LapseNet**: CNN-LSTM approach for fall detection (IEEE conference, Best Presentation Award)\n2. **RexDash**: Dashboard for molecular dynamics simulations (Journal publication)\n3. **ALS Diagnosis**: Transformer-based EEG analysis for 2-minute ALS diagnosis\n4. **ConVox**: Multilingual voice disorder detection system\n\nHis research focuses on AI/ML applications in healthcare, quantum computing, and assistive technology.`;
    }

    // Awards
    if (message.includes('award') || message.includes('recognition') || message.includes('achievement')) {
      return `Soham has received numerous awards and recognition:\n\n• **Congressional App Challenge Winner** (2024) - Selected by U.S. Representative Jennifer Wexton\n• **IEEE Technical Excellence Award** (2024) - For EyeLS gaze-tracking application\n• **Best Presentation Award** (2024) - IEEE conference for LapseNet research\n• **Meta Hacker Cup Round 2 Qualifier** (2024) - Top 10% internationally, top 100 in US\n• **5x Devpost Hackathon Winner** (2022-2024) - Consistent innovation across multiple competitions`;
    }

    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return `Soham's technical skills include:\n\n**Programming Languages**: Python (95%), JavaScript/TypeScript (90%), C++, Java, SQL, MATLAB, Q#\n**AI/ML**: TensorFlow, PyTorch, Keras, Pandas, Scikit-learn (88% proficiency)\n**Web/Mobile**: React, Next.js, React Native, HTML/CSS, Android Studio (85% proficiency)\n**Backend**: Node.js, MongoDB, Google Cloud, Firebase\n**Soft Skills**: Leadership (95%), Problem Solving (98%), Communication (92%), Critical Thinking (94%)`;
    }

    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return `You can contact Soham through:\n\n• **Email**: sohamj@andrew.cmu.edu\n• **LinkedIn**: https://www.linkedin.com/in/soham-jain1/\n• **GitHub**: https://github.com/sjain2025\n• **YouTube**: https://www.youtube.com/@CodingWithSohamJain\n• **Website**: http://sohamjain.com/\n\nHe's currently based in Pittsburgh, PA while studying at Carnegie Mellon University.`;
    }

    // Vytal.AI specific
    if (message.includes('vytal') || message.includes('neuros')) {
      return `Vytal.AI is a startup where Soham worked as a Machine Learning and Software Engineer from May 2022 to June 2025. He led the development of NeurOS, a smartphone AI application that quantifies brain health using novel gaze-tracking algorithms. The company successfully secured $1.2 million in seed investments and achieved a $12.5 million valuation. Soham's work involved implementing machine learning models for brain health assessment and leading cross-functional teams in product development.`;
    }

    // Quantum computing
    if (message.includes('quantum') || message.includes('grover')) {
      return `Soham conducted quantum computing research at Virginia Tech from April 2024 to June 2025, working with Dr. Atul Mantri on graph coloring applications using Grover's Algorithm. He led a team of undergraduate students, conducted literature reviews on quantum algorithms, and developed novel approaches to quantum graph coloring problems. His research focused on identifying gaps in contemporary quantum computing research.`;
    }

    // Default response
    return `I'd be happy to help you learn more about Soham Jain! You can ask me about his education, work experience, projects, research publications, awards, skills, or how to contact him. What specific aspect would you like to know more about?`;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full primary-gradient shadow-lg hover:scale-110 transition-all duration-300"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
      isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
    } ${
      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
    }`}>
      <div className="card-gradient rounded-xl shadow-hard border border-primary/20 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-primary/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full primary-gradient flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Ask about Soham</h3>
              <p className="text-xs text-muted-foreground">AI Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsMinimized(!isMinimized)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-primary/10"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-primary/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[350px]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? 'primary-gradient text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {!message.isUser && (
                        <Bot className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                      )}
                      {message.isUser && (
                        <User className="h-4 w-4 mt-0.5 text-white flex-shrink-0" />
                      )}
                      <div className="whitespace-pre-wrap text-sm">
                        {message.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-primary" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-primary/20">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Soham's experience, projects, research..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="primary-gradient hover:scale-105 transition-bounce"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
