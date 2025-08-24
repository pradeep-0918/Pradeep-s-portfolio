import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:pradeep@example.com",
      label: "Email",
      color: "#10B981"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/pradeep",
      label: "LinkedIn", 
      color: "#1E3A8A"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/pradeep",
      label: "GitHub",
      color: "#F59E0B"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Projects", href: "#projects" },
    { name: "Internships", href: "#internships" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-t from-[#0A0E27] to-[#1A1F3A] border-t border-[#1E3A8A]/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Branding */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10B981] to-[#1E3A8A] flex items-center justify-center">
                <span 
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  P
                </span>
              </div>
              <div>
                <h3 
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  Pradeep
                </h3>
                <p 
                  className="text-[#10B981] text-sm font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  AI & ML Engineer
                </p>
              </div>
            </div>
            <p 
              className="text-[#F8FAFC]/70 leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Passionate about creating intelligent solutions that make a difference. 
              Always learning, always innovating, always ready for the next challenge.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                  className="w-10 h-10 rounded-lg bg-[#1E3A8A]/20 flex items-center justify-center text-[#F8FAFC]/70 hover:bg-[#10B981]/20 hover:text-[#10B981] transition-all duration-300 group"
                  aria-label={link.label}
                  style={{ borderColor: `${link.color}30` }}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h4 
              className="text-white font-bold text-lg mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-[#F8FAFC]/70 hover:text-[#10B981] transition-colors duration-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h4 
              className="text-white font-bold text-lg mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Let's Connect
            </h4>
            <div className="space-y-4">
              <div>
                <p 
                  className="text-[#F8FAFC]/50 text-sm mb-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Email
                </p>
                <a
                  href="mailto:pradeep@example.com"
                  className="text-[#F8FAFC]/70 hover:text-[#10B981] transition-colors duration-300"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  pradeep@example.com
                </a>
              </div>
              <div>
                <p 
                  className="text-[#F8FAFC]/50 text-sm mb-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Location
                </p>
                <p 
                  className="text-[#F8FAFC]/70"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Tamil Nadu, India
                </p>
              </div>
              <div>
                <p 
                  className="text-[#F8FAFC]/50 text-sm mb-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                  <p 
                    className="text-[#10B981] text-sm font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Available for opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1E3A8A]/30 to-transparent mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-[#F8FAFC]/60 text-sm">
            <span style={{ fontFamily: "Inter, sans-serif" }}>
              © 2024 Pradeep. Made with
            </span>
            <Heart size={16} className="text-[#10B981] animate-pulse" />
            <span style={{ fontFamily: "Inter, sans-serif" }}>
              and lots of ☕
            </span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#1E3A8A]/20 hover:bg-[#10B981]/20 text-[#F8FAFC]/70 hover:text-[#10B981] rounded-lg transition-all duration-300 border border-[#1E3A8A]/30 hover:border-[#10B981]/30 group"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-10 left-10 w-2 h-2 bg-[#10B981]/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-[#F59E0B]/30 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-[#1E3A8A]/30 rounded-full animate-pulse"></div>
        </div>
      </div>
    </footer>
  );
}