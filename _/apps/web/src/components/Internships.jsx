import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";

export default function Internships() {
  const internships = [
    {
      title: "1M1B Green Internship",
      company: "One Million for One Billion from AICTE partership with SaleForce and Semi",
      period: "Augest-september 2025",
      status: "Ongoing",
      type: "Remote",
      description: "Leading sustainability initiatives and green technology projects focused on environmental impact and climate solutions.",
      skills: ["Environmental Science", "Data Analysis", "Project Management", "Sustainability"],
      certificate: "https://www.linkedin.com/posts/praddy789_1m1b-greeninternship-climateaction-activity-7353790163866554373-QNaY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFeloi0BOWhYgkb3-Pm67POHsMw3xtMRsxI",
      color: "#10B981"
    },
    {
      title: "Advanced Machine Learning Intern",
      company: "Cognifz Technologies Pvt. Ltd.",
      period: "May-June 2025",
      status: "Completed",
      type: "Remote",
      description: "Developed advanced ML models for real-world applications, focusing on deep learning and neural network optimization.",
      skills: ["Deep Learning", "TensorFlow", "PyTorch", "Model Optimization"],
      certificate: "https://www.linkedin.com/posts/praddy789_internship-machinelearning-datascience-activity-7353430323730227201-yhWD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFeloi0BOWhYgkb3-Pm67POHsMw3xtMRsxI",
      color: "#F59E0B"
    },
    {
      title: "Machine Learning Intern",
      company: "SkillCraft Technologies Pvt. Ltd.",
      period: "March -April 2025",
      status: "Completed",
      type: "Remote", 
      description: "Built predictive models and implemented machine learning algorithms for business intelligence applications.",
      skills: ["Scikit-learn", "Feature Engineering", "Model Deployment", "Python"],
      certificate: "https://www.linkedin.com/posts/praddy789_mlinternship-recommendationletter-aijourney-activity-7352038186291798018-BC7X?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFeloi0BOWhYgkb3-Pm67POHsMw3xtMRsxI",
      color: "#1E3A8A"
    },
    {
      title: "Data Science Intern",
      company: "Rinex Technologies",
      period: "March  - May 2024",
      status: "Completed",
      type: "Remote",
      description: "Analyzed large datasets, created visualizations, and developed insights for business decision-making processes.",
      skills: ["Pandas", "NumPy", "Data Visualization", "SQL", "Power BI"],
      certificate: "https://www.linkedin.com/posts/praddy789_datascience-internship-machinelearning-activity-7298595507717722112-1m_P?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFeloi0BOWhYgkb3-Pm67POHsMw3xtMRsxI",
      color: "#10B981"
    },
    {
      title: "Python Development Intern",
      company: "DevSkillHub From AICTE",
      period: "October - December 2023", 
      status: "Completed",
      type: "Remote",
      description: "Developed Python applications and web services, gaining hands-on experience in software development lifecycle.",
      skills: ["Python","File Handling","OOPs"],
      certificate: "https://www.linkedin.com/posts/praddy789_python-internship-devskillhub-activity-7298596052994019330-Fb_B?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFeloi0BOWhYgkb3-Pm67POHsMw3xtMRsxI",
      color: "#F59E0B"
    }
  ];

  return (
    <section id="internships" className="py-20 px-6 bg-[#0A0E27]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#10B981] to-[#F59E0B] rounded-full"></div>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            Internships & Experience
          </h2>
          <p 
            className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Professional experience gained through diverse internships, building expertise in AI, ML, data science, and development.
          </p>
        </div>

        {/* Internships List */}
        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div 
              key={index}
              className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6 hover:bg-[#1E3A8A]/30 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left Column - Info */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: internship.color }}
                    ></div>
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: internship.status === "Ongoing" ? "#F59E0B20" : "#10B98120",
                        color: internship.status === "Ongoing" ? "#F59E0B" : "#10B981",
                        border: `1px solid ${internship.status === "Ongoing" ? "#F59E0B" : "#10B981"}30`
                      }}
                    >
                      {internship.status}
                    </span>
                  </div>
                  <h3 
                    className="text-white font-bold text-xl mb-2 group-hover:text-[#10B981] transition-colors duration-300"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {internship.title}
                  </h3>
                  <p 
                    className="text-[#10B981] font-semibold mb-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {internship.company}
                  </p>
                  <div className="space-y-2 text-sm text-[#F8FAFC]/60">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#F59E0B]" />
                      <span style={{ fontFamily: "Inter, sans-serif" }}>{internship.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#F59E0B]" />
                      <span style={{ fontFamily: "Inter, sans-serif" }}>{internship.type}</span>
                    </div>
                  </div>
                </div>

                {/* Middle Column - Description */}
                <div>
                  <p 
                    className="text-[#F8FAFC]/70 leading-relaxed mb-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {internship.description}
                  </p>
                </div>

                {/* Right Column - Skills & Certificate */}
                <div>
                  <div className="mb-6">
                    <h4 
                      className="text-white font-semibold text-sm mb-3"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      Key Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-[#10B981]/20 text-[#10B981] text-xs rounded-full border border-[#10B981]/30"
                          style={{ fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={internship.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#F8FAFC]/70 hover:text-[#10B981] transition-colors duration-300"
                  >
                    <Award size={16} />
                    <span style={{ fontFamily: "Inter, sans-serif" }}>View Certificate</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#10B981] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              5+
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Internships
            </div>
          </div>
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#F59E0B] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              2+
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Years Experience
            </div>
          </div>
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-6">
            <div 
              className="text-3xl font-bold text-[#1E3A8A] mb-2"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              20+
            </div>
            <div 
              className="text-[#F8FAFC]/70 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Skills Gained
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
              Remote Work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}