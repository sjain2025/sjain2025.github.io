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
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Tell me about Soham",
    "What are Soham's work experiences?",
    "What research has Soham published?",
    "What awards has Soham received?",
    "How can I contact Soham?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
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
        expectedGraduation: "December 2027",
        school: "School of Computer Science",
        activities: ["Software Developer at ScottyLabs on the CMUEats team", "Association of Computing Machinery Tech Developer", "Spikeball and Pickleball Club"],
        coursework: ["Data Structures and Algorithms", "Artificial Intelligence", "Applied Machine Learning", "Discrete Mathematics", "Computational Linear Algebra", "Multivariable Calculus", "Computer Vision", "Mobile and Web Application Development"]
      },
      highSchool: {
        institution: "Thomas Jefferson High School for Science and Technology",
        location: "Alexandria, VA",
        degree: "High School Diploma",
        gpa: "4.535 Weighted GPA, 4.0/4.0 Unweighted GPA",
        achievements: ["Captain of Congressional Debate", "Student Government Association Policy Specialist & Executive Committee Member"]
      }
    },
    experience: [
      {
        company: "Vytal.AI",
        position: "Software and Machine Learning Engineer",
        period: "May 2022 - December 2024",
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
        location: "Blacksburg, Virginia",
        period: "April 2024 - May 2025",
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
        technologies: ["Leadership", "Program Development", "Fundraising", "Community Engagement"]
      }
    ],
    projects: [
      {
        title: "RoutineRemind",
        description: "Provisional patented, utility patent-pending scheduling application specifically designed for individuals with speech and cognitive disabilities. Currently being deployed on both Google Play Store and Apple App Store.",
        status: "Patent-Pending Mobile App",
        period: "June 2022 - Present",
        technologies: ["React", "JavaScript", "TypeScript", "Python", "HTML/CSS", "Firebase", "Rasa"],
        achievements: [
          "Presented app at Capitol Hill",
          "Featured on House.gov, FFXnow, LoudounNow, Fairfax Times, & more",
          "Developed accessibility features for children with autism",
          "User-friendly interface designed for individuals with special needs",
          "Real-time scheduling and reminder system",
          "Fully functional login authentication system"
        ]
      },
      {
        title: "EyeLS",
        description: "Gaze-tracking web application designed to enable ALS patients to communicate nonverbally. Implements Kalman Filtering and Monte Carlo algorithms for precise eye movement detection.",
        status: "IEEE Award Winner",
        period: "August 2023 - Present",
        technologies: ["JavaScript", "HTML/CSS", "Computer Vision", "Kalman Filtering", "Monte Carlo"],
        achievements: [
          "Recognized with IEEE Technical Excellence Award",
          "Implements novel gaze-tracking algorithms",
          "Cost-effective, accessible alternative to modern eye-tracking devices",
          "Real-time eye tracking with high accuracy"
        ]
      },
      {
        title: "CMUEats",
        description: "Comprehensive dining locations website for Carnegie Mellon University, providing real-time information about campus dining options, hours, and menus. Developed as part of ScottyLabs student organization.",
        period: "August 2025 - Present",
        technologies: ["Vite", "React", "TypeScript", "HTML", "Vanilla CSS", "Elysia"],
        achievements: [
          "Most used student-made website on campus",
          "Implemented sort by location feature",
          "Real-time dining information and hours",
          "Interactive campus dining map",
          "Mobile and web responsive design"
        ]
      },
      {
        title: "Memory Lane",
        description: "Mobile application designed to provide people with Alzheimer's and other memory loss-related conditions with a platform to replay memories from their past.",
        period: "March 2023 - June 2024",
        technologies: ["React Native", "JavaScript", "Firebase", "TypeScript", "HTML/CSS"],
        achievements: [
          "Designed for Alzheimer's and memory loss patients",
          "Interactive Q&A feature built with NLPs",
          "Email-based authentication system",
          "User-friendly interface for elderly users"
        ]
      },
      {
        title: "NeurOS",
        description: "Smartphone AI application that quantifies brain health using gaze-tracking algorithms. Developed during time at Vytal.AI.",
        status: "Funded Startup",
        period: "May 2022 - Present",
        technologies: ["React Native", "Python", "AI/ML", "Mobile Development", "Computer Vision"],
        achievements: [
          "Novel gaze-tracking algorithms for brain health",
          "AI-powered health assessment platform",
          "Commercial deployment and user acquisition"
        ]
      }
    ],
    research: [
      {
        title: "LapseNet: A Hybrid CNN-LSTM Approach for Accurate and Efficient Vision-Based Fall Detection",
        authors: "Soham Jain, Shaurya Jain, Anmol Karan",
        venue: "6th International Conference on Robotics and Computer Vision (ICRCV)",
        year: "2024",
        type: "First Author",
        award: "Best Presentation Award",
        description: "Developed LapseNet, a hybrid CNN-LSTM model for fall detection in indoor settings, achieving 99.43% training accuracy and 100% testing and validation accuracy across 250 videos from four publicly available sources.",
        keywords: ["Computer Vision", "Deep Learning", "CNN-LSTM", "Fall Detection", "Healthcare AI"],
        impact: "Indoor fall detection using hybrid CNN and LSTM model"
      },
      {
        title: "A Transformer-Based Approach to Diagnose Amyotrophic Lateral Sclerosis via EEG Analysis",
        authors: "Soham Jain",
        venue: "17th International Conference on Advanced Computer Theory and Engineering (ICACTE)",
        year: "2024",
        type: "First Author",
        description: "Introduced a Transformer-based approach to diagnose ALS using the EEGET-ALS dataset with 1,989 recordings, achieving 98.49% training accuracy, 99.33% validation and testing accuracy, with an AUC of 0.9963, precision of 100%, and recall of 96.36%.",
        keywords: ["Transformers", "EEG Analysis", "Medical AI", "Neural Networks", "ALS Diagnosis"],
        impact: "Two-minute ALS diagnosis with Transformer-based EEG analysis"
      },
      {
        title: "ConVox: A Robust Deep Learning Approach for Voice Disorder Detection with Multilingual Capabilities",
        authors: "Soham Jain, Jason Hao, Shaurya Jain, Anmol Karan",
        venue: "5th International Conference on Big Data, Artificial Intelligence and Internet of Things Engineering (ICBAIE)",
        year: "2024",
        type: "First Author",
        description: "Presented ConVox, a 1D CNN model for voice disorder detection using 22,883 audio samples across four datasets, achieving 99.89% training, 99.91% validation, and 99.74% testing accuracy with multilingual capabilities.",
        keywords: ["Voice Analysis", "Multilingual AI", "Healthcare", "Deep Learning", "Signal Processing"],
        impact: "Multilingual voice disorder detection using neural network audio classification"
      },
      {
        title: "RexDash: A Comprehensive Dashboard for Analyzing the Technical Performance of Replica Exchange Molecular Dynamics Simulations",
        authors: "Soham Jain, Christopher Lockhart",
        venue: "Journal of Student-Scientists' Research",
        year: "2024",
        type: "First Author",
        description: "Developed RexDash, a Flask-based dashboard featuring Python and Plotly to analyze REMD simulations, providing metrics for exchange rates, replica mixing, trajectories, and potential energy distributions to standardize REMD performance assessment.",
        keywords: ["Machine Learning", "Molecular Dynamics", "Data Visualization", "Scientific Computing"],
        impact: "Flask dashboard for standardizing assessment of REMD simulations"
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
        title: "2x Meta Hacker Cup Round 2 Qualifier",
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
        title: "5x International Hackathons Winner",
        organization: "Devpost",
        year: "2022-2024",
        description: "Applied technical skills to solve real-world problems via software development projects at hackathons on Devpost.",
        achievements: [
          "Five separate hackathon victories",
          "Consistent innovation and creativity",
          "Rapid prototyping and development skills",
          "Cross-functional team collaboration"
        ]
      },
      {
        title: "3x AIME Qualifier",
        organization: "Mathematical Association of America",
        year: "2021-2023",
        description: "Qualified for the American Invitational Mathematics Examination three times (top 2.5% in the nation).",
        achievements: [
          "Top 2.5% in the nation",
          "Exceptional mathematical problem-solving abilities",
          "Advanced mathematical reasoning",
          "Multiple qualification years"
        ]
      }
    ],
    skills: {
      programmingLanguages: ["Python", "Java", "C++", "C", "C0", "TypeScript", "JavaScript", "HTML", "CSS", "SQL", "MATLAB"],
      developerTools: ["Git", "Vim", "Visual Studio Code", "AWS EC2", "MongoDB", "Google Cloud", "Firebase", "Jupyter Notebook", "Android Studio", "Expo", "Figma"],
      frameworks: ["React", "Vite", "Node.js", "Next.js", "Flask", "NumPy", "Pandas", "TensorFlow", "PyTorch", "Keras", "PostgreSQL", "OpenCV", "Tailwind CSS", "Express.js", "Scikit-learn"],
      aiml: ["TensorFlow", "PyTorch", "Keras", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Computer Vision", "Deep Learning", "Neural Networks"],
      webMobile: ["React", "React Native", "Next.js", "Vite", "Node.js", "Express.js", "Tailwind CSS", "HTML", "CSS", "TypeScript", "JavaScript"]
    },
    social: {
      linkedin: "https://www.linkedin.com/in/soham-jain1/",
      github: "https://github.com/sjain2025",
      youtube: "https://www.youtube.com/@CodingWithSohamJain",
      website: "http://sjain2025.github.io/"
    }
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Personal information
    if (message.includes('who') && (message.includes('soham') || message.includes('you'))) {
      return `I'm Soham Jain, a Computer Science student at Carnegie Mellon University. I'm passionate about software development and artificial intelligence, with a focus on creating innovative solutions to real-world problems. I have experience in machine learning, mobile development, and research.`;
    }
    
    if (message.includes('about') || message.includes('tell me about')) {
      return `Soham Jain is an ambitious computer scientist currently pursuing a Bachelor of Science in Computer Science at Carnegie Mellon University. He has a strong background in AI/ML, software development, and research, with multiple published papers and industry experience.`;
    }

    // Education
    if (message.includes('education') || message.includes('school') || message.includes('university') || message.includes('cmu') || message.includes('carnegie')) {
      return `Soham is currently pursuing a Bachelor of Science in Computer Science at Carnegie Mellon University (expected graduation December 2027). He is a Software Developer at ScottyLabs working on the CMUEats team, a Tech Developer for the Association of Computing Machinery, and member of Spikeball and Pickleball Club. His relevant coursework includes Data Structures and Algorithms, Artificial Intelligence, Applied Machine Learning, Computer Vision, and more.\n\nPreviously, he attended Thomas Jefferson High School for Science and Technology in Alexandria, VA, where he achieved a 4.535 weighted GPA and 4.0 unweighted GPA. He served as Captain of Congressional Debate and as Student Government Association Policy Specialist & Executive Committee Member.`;
    }

    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return `Soham has extensive professional experience:\n\n1. <strong>Vytal.AI</strong> (May 2022 - December 2024): Software and Machine Learning Engineer. Built smartphone AI application using OpenCV and React Native to quantify brain health via 30-second eye-tracking evaluations. Optimized Python-based biometric processing pipelines and deployed ML models on AWS EC2, scaling to 300+ clinical beta testers. Engineered head-gaze detection algorithm with YOLOv8 delivering 15% higher accuracy.\n\n2. <strong>Virginia Tech</strong> (April 2024 - May 2025): Computer Science and Quantum Computing Researcher. Led research initiative applying Grover's algorithm to boolean satisfiability problems using Qiskit and Q#. Designed quantum-classical hybrid algorithm for graph coloring problem for all 50 U.S. states, achieving 65% reduction in computational cost.\n\n3. <strong>Youth International Digambar Jain Organization</strong> (Feb 2022 - Present): President and Co-Founder. Directs educational programming teaching Jain principles to 150+ students. Oversees fundraising initiatives securing $25,000+ for temple construction in Northern Virginia.`;
    }

    // Projects
    if (message.includes('project') || message.includes('app') || message.includes('application') || message.includes('cmueats')) {
      return `Soham has worked on several notable projects:\n\n1. <strong>RoutineRemind</strong>: Provisional patented scheduling app for individuals with speech and cognitive disabilities. Presented at Capitol Hill and featured on House.gov. Deployed on Google Play and Apple App Store.\n\n2. <strong>EyeLS</strong>: IEEE Award-winning gaze-tracking web application enabling ALS patients to communicate nonverbally using Kalman Filtering and Monte Carlo algorithms.\n\n3. <strong>CMUEats</strong>: Most used student-made website on CMU campus, providing real-time dining information. Developed as part of ScottyLabs.\n\n4. <strong>Memory Lane</strong>: Mobile app designed for Alzheimer's and memory loss patients to replay memories, featuring interactive Q&A with NLP.\n\n5. <strong>NeurOS</strong>: Smartphone AI application for brain health assessment using gaze-tracking algorithms, developed at Vytal.AI.`;
    }

    // Research
    if (message.includes('research') || message.includes('paper') || message.includes('publication')) {
      return `Soham has published 4 first-author research publications:\n\n1. <strong>LapseNet</strong> (IEEE ICRCV 2024): Hybrid CNN-LSTM approach for fall detection - Best Presentation Award\n2. <strong>ALS Diagnosis</strong> (IEEE ICACTE 2024): Transformer-based EEG analysis for 2-minute ALS diagnosis\n3. <strong>ConVox</strong> (IEEE ICBAIE 2024): Multilingual voice disorder detection system\n4. <strong>RexDash</strong> (Journal publication): Dashboard for molecular dynamics simulations\n\nHis research focuses on AI/ML applications in healthcare, assistive technology, and quantum computing.`;
    }

    // Awards
    if (message.includes('award') || message.includes('recognition') || message.includes('achievement')) {
      return `Soham has received numerous awards and recognition:\n\n• <strong>Congressional App Challenge Winner</strong> (2024) - Selected by U.S. Representative Jennifer Wexton, presented at Capitol Hill\n• <strong>IEEE Technical Excellence Award</strong> (2024) - For EyeLS gaze-tracking application for ALS patients\n• <strong>2x Meta Hacker Cup Round 2 Qualifier</strong> (2024) - Top 10% internationally, top 100 in US among 20,000+ participants\n• <strong>Best Presentation Award</strong> (2024) - IEEE conference for LapseNet research presentation\n• <strong>5x International Hackathons Winner</strong> (2022-2024) - Consistent innovation across multiple competitions on Devpost\n• <strong>3x AIME Qualifier</strong> (2021-2023) - Top 2.5% in the nation for American Invitational Mathematics Examination`;
    }

    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('programming') || message.includes('tech stack')) {
      return `Soham's technical skills include:\n\n<strong>Programming Languages</strong>: Python, Java, C++, C, C0, TypeScript, JavaScript, HTML, CSS, SQL, MATLAB\n\n<strong>Developer Tools</strong>: Git, Vim, Visual Studio Code, AWS EC2, MongoDB, Google Cloud, Firebase, Jupyter Notebook, Android Studio, Expo, Figma\n\n<strong>Libraries & Frameworks</strong>: React, Vite, Node.js, Next.js, Flask, NumPy, Pandas, TensorFlow, PyTorch, Keras, PostgreSQL, OpenCV, Tailwind CSS, Express.js, Scikit-learn\n\n<strong>AI/ML</strong>: TensorFlow, PyTorch, Keras, OpenCV, Scikit-learn, Computer Vision, Deep Learning, Neural Networks\n\n<strong>Web/Mobile Development</strong>: React, React Native, Next.js, Vite, Node.js, Express.js, Tailwind CSS`;
    }

    // Contact
    if (message.includes('contact') || message.includes('email') || message.includes('reach')) {
      return `You can contact Soham through:\n\n• <strong>Email</strong>: sohamj@andrew.cmu.edu\n• <strong>LinkedIn</strong>: linkedin.com/in/soham-jain1\n• <strong>GitHub</strong>: github.com/sjain2025\n• <strong>YouTube</strong>: @CodingWithSohamJain\n• <strong>Website</strong>: sjain2025.github.io\n\nHe's currently based in Pittsburgh, PA while studying at Carnegie Mellon University.`;
    }

    // Vytal.AI specific
    if (message.includes('vytal') || message.includes('neuros')) {
      return `Vytal.AI was a startup where Soham worked as a Software and Machine Learning Engineer from May 2022 to December 2024. He built a smartphone AI application using OpenCV and React Native to quantify brain health via 30-second eye-tracking evaluations. He optimized Python-based biometric processing pipelines and deployed machine learning models on AWS EC2, scaling the platform to support 300+ clinical beta testers. Soham engineered a head-gaze detection algorithm with YOLOv8 that delivered 15% higher accuracy compared to previous implementations.`;
    }

    // Quantum computing
    if (message.includes('quantum') || message.includes('grover')) {
      return `Soham conducted quantum computing research at Virginia Tech from April 2024 to May 2025, working with Dr. Atul Mantri on advanced quantum algorithms. He led a research initiative applying Grover's algorithm to boolean satisfiability problems using Qiskit and Q# frameworks. He designed a quantum-classical hybrid algorithm to solve the graph coloring problem for a map of all 50 U.S. states using MATLAB and Python, achieving a 65% reduction in computational cost compared to traditional classical recursive approaches.`;
    }

    // Default response
    return `I'd be happy to help you learn more about Soham Jain! You can ask me about his education, work experience, projects, research publications, awards, skills, or how to contact him. What specific aspect would you like to know more about?`;
  };

  const handleSendMessage = async (messageText?: string) => {
    const messageToSend = messageText || inputValue;
    if (!messageToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageToSend,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowSuggestions(false); // Hide suggestions while processing
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(messageToSend),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      setShowSuggestions(true); // Show suggestions after bot responds
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
                      <div 
                        className="whitespace-pre-wrap text-sm"
                        dangerouslySetInnerHTML={{ __html: message.text }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Suggestion Buttons */}
              {showSuggestions && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-full transition-colors duration-200 hover:scale-105"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
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
                  onClick={() => handleSendMessage()}
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
