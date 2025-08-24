import { MapPin, Calendar, Trophy, Building, Users, Code } from "lucide-react";

export default function Journey() {
  const journeyItems = [
    {
      year: "2022-2023",
      title: "Studyed 12TH standard at Maharishi Vidya Mandir,Hosur",
      description: "Completed 12th standard in my Maharishi Vidya Mandir with 84.5% , building strong foundations in technology and innovation.",
      type: "Education",
      icon: <Calendar size={20} />,
      status: "ongoing",
      color: "#10B981"
    },
    {
      year: "2023",
      title: "Cultural Heritage Journey - Thanjavur Temple",
      description: "Visited the magnificent Thanjavur Temple, drawing inspiration from ancient Indian engineering and architectural marvels.",
      type: "Tourism",
      icon: <MapPin size={20} />,
      status: "completed",
      color: "#1E3A8A"
    },
    {
      year: "2024",
      title: "Smart India Hackathon Participant",
      description: "Participated in the prestigious Smart India Hackathon, collaborating with national teams on innovative solutions.",
      type: "competition",
      icon: <Users size={20} />,
      status: "completed", 
      color: "#1E3A8A"
    },
    {
      year: "2024",
      title: "Industrial Visit - Elysium Technologies", 
      description: "Explored cutting-edge software development practices and agile methodologies in a leading tech company.",
      type: "learning",
      icon: <Building size={20} />,
      status: "completed",
      color: "#10B981"
    },
    {
      year: "2024",
      title: "Code Crafters Club Website",
      description: "Developed and launched the official website for Code Crafters Club, showcasing technical skills and community building.",
      type: "project",
      icon: <Code size={20} />,
      status: "completed",
      color: "#F59E0B"
    },
    {
      year: "2025", 
      title: "24-Hour Hackathon Finalist in Sindhanni AI hackathon",
      description: "Secured finalist position in a competitive 24-hour hackathon, developing Dynamic AI-Driven Bus Scheduling System",
      type: "Achievement",
      icon: <Trophy size={20} />,
      status: "completed",
      color: "#10B981"
    },
    {
      year: "2025",
      title: "Industrial Visit - UPS Technology",
      description: "Gained insights into industrial automation and IoT systems at UPS Technology, understanding real-world applications.",
      type: "learning",
      icon: <Building size={20} />,
      status: "completed",
      color: "#10B981"
    },
    {
      year: "2025",
      title: "AI-Powered CubeSat Swarm Project",
      description: "Leading an innovative project developing autonomous satellite swarms for space exploration using advanced AI algorithms.",
      type: "project",
      icon: <Code size={20} />,
      status: "ongoing",
      color: "#F59E0B"
    }

  ];

  const getStatusBadge = (status) => {
    if (status === "ongoing") {
      return (
        <span className="px-3 py-1 bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-semibold rounded-full border border-[#F59E0B]/30">
          Ongoing
        </span>
      );
    }
    return (
      <span className="px-3 py-1 bg-[#10B981]/20 text-[#10B981] text-xs font-semibold rounded-full border border-[#10B981]/30">
        Completed
      </span>
    );
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "project": return "🚀";
      case "achievement": return "🏆";
      case "competition": return "⚡";
      case "learning": return "🎓";
      case "Tourism": return "🌍";
      case "education": return "📚";
      default: return "✨";
    }
  };

  return (
    <section id="journey" className="py-20 px-6 bg-[#0A0E27] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="60" height="60" viewBox="0 0 60 60" className="w-full h-full">
          <pattern id="journey-pattern" patternUnits="userSpaceOnUse" width="60" height="60">
            <circle cx="30" cy="30" r="2" fill="#10B981" />
            <circle cx="10" cy="10" r="1" fill="#F59E0B" />
            <circle cx="50" cy="10" r="1" fill="#1E3A8A" />
            <circle cx="10" cy="50" r="1" fill="#F59E0B" />
            <circle cx="50" cy="50" r="1" fill="#1E3A8A" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#journey-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#10B981] to-[#F59E0B] rounded-full"></div>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            My Journey
          </h2>
          <p 
            className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            From cultural inspiration to cutting-edge technology, every step of my journey 
            has shaped me into the innovator I am today. Here are the key milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#10B981] via-[#F59E0B] to-[#1E3A8A] opacity-50"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#0A0E27] border-4 z-10"
                     style={{ borderColor: item.color }}>
                  <div 
                    className="absolute inset-1 rounded-full animate-pulse"
                    style={{ backgroundColor: item.color }}
                  ></div>
                </div>

                {/* Content Card */}
                <div 
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6 hover:bg-[#1E3A8A]/30 transition-all duration-300 group">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl"
                          style={{ backgroundColor: `${item.color}20` }}
                        >
                          {getTypeIcon(item.type)}
                        </div>
                        <div>
                          <div 
                            className="text-[#F8FAFC]/60 text-sm font-mono"
                            style={{ fontFamily: "JetBrains Mono, monospace" }}
                          >
                            {item.year}
                          </div>
                          <h3 
                            className="text-white font-bold text-lg group-hover:text-[#10B981] transition-colors duration-300"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      {getStatusBadge(item.status)}
                    </div>

                    {/* Description */}
                    <p 
                      className="text-[#F8FAFC]/70 leading-relaxed mb-4"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-2">
                      <div 
                        className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ 
                          backgroundColor: `${item.color}20`,
                          color: item.color
                        }}
                      >
                        {item.icon}
                        <span style={{ fontFamily: "Inter, sans-serif" }}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#10B981] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              8+
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Major Milestones
            </div>
          </div>
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#F59E0B] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              3
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Active Projects
            </div>
          </div>
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#1E3A8A] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              2
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Industry Visits
            </div>
          </div>
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#10B981] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              100%
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Passion Level
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}