import { ExternalLink, Github, Star, Eye } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered CubeSat Swarm",
      description: "An intelligent swarm of CubeSats designed for autonomous space debris detection and removal in Low Earth Orbit. Powered by advanced AI algorithms, real-time coordination, and onboard edge processing for enhanced efficiency in space exploration and sustainability.",
      status: "OnGoing",
      tech: ["Python","TensorFlow","Keras","CubeSat Architecture","Satellite Communication","Sensor Fusion","Swarm Intelligence","ROS","Reinforcement Learning","Computer Vision"],
      github: "https://github.com/pradeep-0918/Ai_CubeSat-Swarm.git",
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      title: "Cat vs. Dog Image Classifier Using SVM Model",
      description: "Deep learning model for accurate classification of cats and dogs with 95%+ accuracy using CNN architecture.",
      status: "Completed",
      tech: ["Python", "SVM","EDA", "ML","Data Tranformation","Data Visualization","Data Cleaning","Data Preprocessing"],
      github: "https://github.com/pradeep-0918/SCT_-ML_03.git",
      color: "#10B981",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      title: "Restaurant Recommendation System",
      description: "ML-powered recommendation engine that suggests restaurants based on user preferences and location data.",
      status: "Completed",
      tech: ["Python", "Scikit-learn","EDA", "ML","Data Tranformation","Data Visualization","Data Cleaning","Data Preprocessing"],
      github: "https://github.com/pradeep-0918/Restaurant_Restaurant_Recommendation_Based_on_Content_Filtering_Method.git",
      color: "#1E3A8A",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&auto=format&q=80"
    },
    {
      title: "Hand Gestures Recognition System",
      description: "A Hand Gesture Recognition System is a computer vision and AI-based application that can detect, track, and interpret human hand gestures. Instead of using traditional input devices like a mouse or keyboard, users can interact with systems using simple hand movements. This technology has applications in various fields, including gaming, virtual reality, sign language interpretation, and touchless interfaces.",
      status: "Completed",
      tech: ["Python", "Pandas", "Streamlit", "Recommendation", "EDA", "ML", "Data Tranformation", "Data Visualization", "Data Cleaning", "Data Preprocessing"],
      github: "https://github.com/pradeep-0918/SCT_ML_04.git",
      color: "#F59E0B",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop&auto=format&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27]">
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
            Featured Projects
          </h2>
          <p 
            className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Innovative solutions that showcase my expertise in AI, machine learning, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl overflow-hidden hover:bg-[#1E3A8A]/30 transition-all duration-300 group hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27]/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: `${project.color}20`,
                      color: project.color,
                      border: `1px solid ${project.color}30`
                    }}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-white font-bold text-xl mb-3 group-hover:text-[#10B981] transition-colors duration-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-[#F8FAFC]/70 leading-relaxed mb-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-[#10B981]/20 text-[#10B981] text-xs rounded-full border border-[#10B981]/30"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#F8FAFC]/70 hover:text-[#10B981] transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span style={{ fontFamily: "Inter, sans-serif" }}>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#F8FAFC]/70 hover:text-[#10B981] transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span style={{ fontFamily: "Inter, sans-serif" }}>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}