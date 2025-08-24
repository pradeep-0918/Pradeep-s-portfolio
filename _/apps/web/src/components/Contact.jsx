import { Mail, Github, Linkedin, MapPin, Phone, Send, User, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "pradeeplavrp09@gmail.com",
      link: "mailto:pradeeplavrp09@gmail.com",
      color: "#10B981"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/praddy789",
      link: "https://www.linkedin.com/in/praddy789/",
      color: "#1E3A8A"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/pradeep",
      link: "https://github.com/pradeep-0918", 
      color: "#F59E0B"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Tamil Nadu, India",
      link: null,
      color: "#10B981"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-[#0A0E27] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <pattern id="contact-grid" patternUnits="userSpaceOnUse" width="10" height="10">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#10B981" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-[#10B981] to-[#F59E0B] rounded-full"></div>
          </div>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Orbitron, monospace" }}
          >
            Let's Connect
          </h2>
          <p 
            className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to collaborate on innovative AI and ML projects? Let's discuss how we can create 
            something amazing together. I'm always open to new opportunities and connections.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/20 flex items-center justify-center">
                <MessageSquare size={24} className="text-[#10B981]" />
              </div>
              <h3 
                className="text-white font-bold text-2xl"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Send Message
              </h3>
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-[#10B981]/20 border border-[#10B981]/30 rounded-lg">
                <p className="text-[#10B981] font-medium">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#F8FAFC]/70 text-sm mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    Your Name
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F8FAFC]/40" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#1E3A8A]/30 border border-[#1E3A8A]/40 rounded-lg text-white placeholder-[#F8FAFC]/40 focus:border-[#10B981] focus:outline-none transition-colors"
                      placeholder="Enter your name"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#F8FAFC]/70 text-sm mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F8FAFC]/40" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-[#1E3A8A]/30 border border-[#1E3A8A]/40 rounded-lg text-white placeholder-[#F8FAFC]/40 focus:border-[#10B981] focus:outline-none transition-colors"
                      placeholder="Enter your email"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-[#F8FAFC]/70 text-sm mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-[#1E3A8A]/30 border border-[#1E3A8A]/40 rounded-lg text-white placeholder-[#F8FAFC]/40 focus:border-[#10B981] focus:outline-none transition-colors"
                  placeholder="What would you like to discuss?"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
              
              <div>
                <label className="block text-[#F8FAFC]/70 text-sm mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1E3A8A]/30 border border-[#1E3A8A]/40 rounded-lg text-white placeholder-[#F8FAFC]/40 focus:border-[#10B981] focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#10B981] to-[#1E3A8A] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#10B981]/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-8">
              <h3 
                className="text-white font-bold text-2xl mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Get in Touch
              </h3>
              <p 
                className="text-[#F8FAFC]/70 leading-relaxed mb-8"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <div style={{ color: item.color }}>
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <p 
                        className="text-[#F8FAFC]/60 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith("http") ? "_blank" : "_self"}
                          rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                          className="text-white hover:text-[#10B981] transition-colors duration-300 font-medium"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p 
                          className="text-white font-medium"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-[#1E3A8A]/20 backdrop-blur-sm border border-[#1E3A8A]/30 rounded-2xl p-8">
              <h3 
                className="text-white font-bold text-xl mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Quick Connect
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:pradeeplavrp@gmail.com"
                  className="flex items-center gap-2 bg-[#10B981]/20 hover:bg-[#10B981]/30 text-[#10B981] px-4 py-2 rounded-lg transition-all duration-300 border border-[#10B981]/30"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Mail size={16} />
                  Email Me
                </a>
                <a
                  href="https://linkedin.com/in/praddy789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1E3A8A]/20 hover:bg-[#1E3A8A]/30 text-[#1E3A8A] px-4 py-2 rounded-lg transition-all duration-300 border border-[#1E3A8A]/30"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 bg-[#F59E0B]/20 hover:bg-[#F59E0B]/30 text-[#F59E0B] px-4 py-2 rounded-lg transition-all duration-300 border border-[#F59E0B]/30"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <User size={16} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}