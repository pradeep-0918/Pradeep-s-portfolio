import { Menu, X } from "lucide-react";
import { useState } from "react";
// using public /resume.pdf for static download link

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Internships", href: "#internships" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0E27]/95 backdrop-blur-sm border-b border-[#1E3A8A]/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#10B981] to-[#1E3A8A] flex items-center justify-center">
              <span 
                className="text-white font-bold text-lg"
                style={{ fontFamily: "Orbitron, monospace" }}
              >
                P
              </span>
            </div>
            <span 
              className="text-white font-bold text-xl"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              Pradeep
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-[#F8FAFC]/80 hover:text-[#10B981] transition-colors duration-300 font-medium"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Resume Download Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-[#10B981] to-[#1E3A8A] text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-[#10B981]/25 transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#10B981] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-[#1E3A8A]/30">
            <nav className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#F8FAFC]/80 hover:text-[#10B981] transition-colors duration-300 font-medium"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={resumePdf}
                download
                className="bg-gradient-to-r from-[#10B981] to-[#1E3A8A] text-white px-6 py-2 rounded-lg font-medium text-center mt-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}