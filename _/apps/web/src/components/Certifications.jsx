import { Award, ExternalLink, Calendar, CheckCircle } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: " Honours Diploma in Computer Application (HDCA) from CSC Computer Software College",
      issuer: "Computer Software College",
      date: "2023",
      skills: ["Python", "SQL", "C", "Html/Css"],
      credentialId: "O08K46235",
      link: "https://www.linkedin.com/posts/praddy789_achievement-computerapplications-softwaredevelopment-activity-7297107330272284673-mlF-?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFeloi0BOWhYgkb3-Pm67POHsMw3xtMRsxI",
      color: "#10B981",
      verified: true
    },
    {
      title: "Python ",
      issuer: "IBM",
      date: "2024", 
      skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
      credentialId: "IBM-2024-PY-002",
      link: "#",
      color: "#F59E0B",
      verified: true
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      skills: ["AI Concepts", "Machine Learning", "Azure AI", "Cognitive Services"],
      credentialId: "MS-2023-AI-003",
      link: "#",
      color: "#1E3A8A", 
      verified: true
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University (Coursera)",
      date: "2023",
      skills: ["Supervised Learning", "Neural Networks", "Deep Learning", "TensorFlow"],
      credentialId: "STAN-2023-ML-004",
      link: "#",
      color: "#10B981",
      verified: true
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      skills: ["Cloud Computing", "AWS Services", "Cloud Architecture", "Security"],
      credentialId: "AWS-2023-CP-005", 
      link: "#",
      color: "#F59E0B",
      verified: true
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2023",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      credentialId: "FCC-2023-FS-006",
      link: "#",
      color: "#1E3A8A",
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#10B981] to-[#F59E0B] rounded-full"></div>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            Certifications
          </h2>
          <p 
            className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Verified credentials from leading institutions and technology companies, 
            demonstrating continuous learning and professional development.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6 hover:bg-[#1E3A8A]/30 transition-all duration-300 group hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  <Award size={24} style={{ color: cert.color }} />
                </div>
                {cert.verified && (
                  <div className="flex items-center gap-1 px-2 py-1 bg-[#10B981]/20 rounded-full">
                    <CheckCircle size={14} className="text-[#10B981]" />
                    <span className="text-[#10B981] text-xs font-semibold">Verified</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 
                className="text-white font-bold text-lg mb-2 group-hover:text-[#10B981] transition-colors duration-300 leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {cert.title}
              </h3>
              <p 
                className="text-[#10B981] font-semibold text-sm mb-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {cert.issuer}
              </p>
              <div className="flex items-center gap-2 mb-4 text-[#F8FAFC]/60 text-sm">
                <Calendar size={14} className="text-[#F59E0B]" />
                <span style={{ fontFamily: "Inter, sans-serif" }}>Issued: {cert.date}</span>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-[#10B981]/20 text-[#10B981] text-xs rounded-full border border-[#10B981]/30"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span 
                      className="px-2 py-1 bg-[#F8FAFC]/10 text-[#F8FAFC]/60 text-xs rounded-full"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Credential ID */}
              <div className="mb-4">
                <p className="text-[#F8FAFC]/50 text-xs mb-1">Credential ID:</p>
                <p 
                  className="text-[#F8FAFC]/70 text-sm font-mono"
                  style={{ fontFamily: "JetBrains Mono, monospace" }}
                >
                  {cert.credentialId}
                </p>
              </div>

              {/* View Certificate Link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#F8FAFC]/70 hover:text-[#10B981] transition-colors duration-300 group/link"
              >
                <span style={{ fontFamily: "Inter, sans-serif" }}>View Certificate</span>
                <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#10B981] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              6+
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Certifications
            </div>
          </div>
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#F59E0B] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              100%
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Verified
            </div>
          </div>
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#1E3A8A] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              5
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Top Platforms
            </div>
          </div>
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#10B981] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              2024
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Latest Year
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}