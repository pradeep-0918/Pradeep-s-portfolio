import { Code, Database, Brain, Layers, GitBranch, Server } from "lucide-react";
export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      color: "#10B981",
      skills: ["Python", "C", "Java", "JavaScript"],
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain size={24} />,
      color: "#F59E0B",
      skills: ["TensorFlow", "Keras", "Scikit-learn", "PyTorch", "OpenCV","langraph","Ai Agent","N8N"],
    },
    {
      title: "Web Development",
      icon: <Layers size={24} />,
      color: "#1E3A8A",
      skills: ["React", "Django", "Flask", "FastAPI", "Streamlit"],
    },
    {
      title: "Data Analysis",
      icon: <Database size={24} />,
      color: "#F59E0B",
      skills: ["SQL", "Power BI", "Excel", "Pandas", "NumPy"],
    },
    {
      title: "Tools & Platforms",
      icon: <Server size={24} />,
      color: "#10B981",
      skills: ["Git/GitHub", "Firebase","Google cloud", "Jupyter","google colab","pycharm"],
    },
    {
      title: "Version Control",
      icon: <GitBranch size={24} />,
      color: "#1E3A8A",
      skills: ["Git", "GitHub",],
    },
  ];
  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Project Management",
    "Creative Thinking",
    "Time Management",
    "Adaptability",
    "Innovation",
  ];
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#10B981] to-[#F59E0B] rounded-full"></div>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            Technical Skills
          </h2>
          <p
            className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A comprehensive toolkit for building intelligent solutions, from
            machine learning algorithms to full-stack applications.
          </p>
        </div>
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6 hover:bg-[#1E3A8A]/30 transition-all duration-300 hover:scale-105 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: `${category.color}20`,
                    color: category.color,
                  }}
                >
                  {category.icon}
                </div>
                <h3
                  className="text-white font-semibold text-lg"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {category.title}
                </h3>
              </div>
              {/* Skills List - Simple Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-2 bg-[#1E3A8A]/10 backdrop-blur-sm border border-[#1E3A8A]/20 rounded-lg text-[#F8FAFC]/90 font-medium hover:bg-[#1E3A8A]/20 transition-all duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Soft Skills Section */}
        <div className="text-center">
          <h3
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            Soft Skills & Mindset
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#10B981]/20 to-[#1E3A8A]/20 backdrop-blur-sm border border-[#10B981]/30 px-6 py-3 rounded-full hover:from-[#10B981]/30 hover:to-[#1E3A8A]/30 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <span
                  className="text-[#F8FAFC] font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Simplified Neural Network Visual */}
        <div className="mt-20 relative">
          <div className="flex justify-center">
            <div className="relative w-full max-w-4xl h-32">
              {/* Simple Connection Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 800 150"
              >
                <defs>
                  <linearGradient
                    id="connectionGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                {/* Simple neural network connections */}
                <path
                  d="M50,75 Q200,30 400,75 Q600,120 750,75"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </path>
                <path
                  d="M50,75 Q200,120 400,75 Q600,30 750,75"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-60"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    values="0,1000;1000,0"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
              {/* Skill Nodes */}
              <div className="absolute inset-0 flex justify-between items-center px-12">
                {["AI", "DS", "ML", "DP", "DB"].map((label, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#10B981] to-[#1E3A8A] flex items-center justify-center shadow-lg animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <span
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}