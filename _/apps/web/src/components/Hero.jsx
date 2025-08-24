import { ChevronDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import pradeepPng from "../img/Stylish Portrait with Floral Accents (1).png";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = [
    "Machine Learning Engineer",
    "Data Scientist", 
    "AI Enthusiast",
    "Full Stack Developer",
    "Innovation Creator"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[textIndex].length) {
          setText(texts[textIndex].substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setText(texts[textIndex].substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
              <span 
                className="text-[#10B981] font-medium text-lg"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none"
              style={{ fontFamily: "Orbitron, monospace" }}
            >
              Pradeep L
            </h1>

            {/* Animated Role */}
            <div className="h-16 flex items-center">
              <span 
                className="text-2xl md:text-3xl text-[#F59E0B] font-semibold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {text}
                <span className="animate-pulse text-[#10B981]">|</span>
              </span>
            </div>

            {/* Description */}
            <p 
              className="text-[#F8FAFC]/80 text-lg leading-relaxed max-w-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              A passionate 19-year-old Computer Science Engineering student at Maharishi Vidya Mandir, 
              specializing in AI, Machine Learning, and Data Science. I love building innovative solutions 
              that make a difference in the world.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div 
                  className="text-3xl font-bold text-[#10B981]"
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  84.5%
                </div>
                <div 
                  className="text-[#F8FAFC]/60 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  12th Grade Score
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl font-bold text-[#F59E0B]"
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  10+
                </div>
                <div 
                  className="text-[#F8FAFC]/60 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Projects Built
                </div>
              </div>
              <div className="text-center">
                <div 
                  className="text-3xl font-bold text-[#1E3A8A]"
                  style={{ fontFamily: "Orbitron, monospace" }}
                >
                  5+
                </div>
                <div 
                  className="text-[#F8FAFC]/60 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Internships
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-[#F8FAFC]/70">
              <MapPin size={18} className="text-[#10B981]" />
              <span style={{ fontFamily: "Inter, sans-serif" }}>Tamil Nadu, India</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#10B981] to-[#1E3A8A] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#10B981]/25 transition-all duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Let's Connect
              </a>
              <a
                href="#projects"
                className="border-2 border-[#10B981] text-[#10B981] px-8 py-3 rounded-lg font-semibold hover:bg-[#10B981] hover:text-[#0A0E27] transition-all duration-300"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="mailto:pradeeplavrp09@example.com"
                className="w-12 h-12 rounded-lg bg-[#1E3A8A]/20 flex items-center justify-center text-[#F8FAFC]/70 hover:text-[#10B981] hover:bg-[#10B981]/20 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/praddy789/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-[#1E3A8A]/20 flex items-center justify-center text-[#F8FAFC]/70 hover:text-[#10B981] hover:bg-[#10B981]/20 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/pradeep-0918"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-[#1E3A8A]/20 flex items-center justify-center text-[#F8FAFC]/70 hover:text-[#10B981] hover:bg-[#10B981]/20 transition-all duration-300"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Hero Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/20 to-[#1E3A8A]/20 rounded-full blur-3xl"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 mx-auto">
                <img
                  src={pradeepPng}
                  alt="Pradeep - AI & ML Engineer"
                  className="w-full h-full object-cover rounded-full border-4 border-[#10B981]/30"
                />
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1E3A8A] rounded-lg flex items-center justify-center animate-bounce">
                  <span 
                    className="text-[#10B981] font-bold text-lg"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    AI
                  </span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center animate-pulse">
                  <span 
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    ML
                  </span>
                </div>
                <div className="absolute top-1/2 -left-6 w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center animate-ping">
                  <span 
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    DS
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#10B981] rounded-full opacity-40 animate-pulse"
                  style={{
                    top: `${20 + (i * 15)}%`,
                    left: `${10 + (i * 12)}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-[#F8FAFC]/60 hover:text-[#10B981] transition-colors duration-300"
          >
            <span 
              className="text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Scroll to explore
            </span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}