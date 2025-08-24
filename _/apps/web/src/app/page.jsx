import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Internships from "../components/Internships";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Neural Network Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full opacity-10"
          viewBox="0 0 1920 1080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <animate id="pulse" attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
          </defs>
          
          {/* Neural Network Nodes */}
          <circle cx="200" cy="200" r="4" fill="#10B981" opacity="0.6">
            <use xlinkHref="#pulse" />
          </circle>
          <circle cx="400" cy="150" r="3" fill="#1E3A8A" opacity="0.5">
            <use xlinkHref="#pulse" />
          </circle>
          <circle cx="600" cy="300" r="5" fill="#F59E0B" opacity="0.4">
            <use xlinkHref="#pulse" />
          </circle>
          <circle cx="800" cy="250" r="3" fill="#10B981" opacity="0.7">
            <use xlinkHref="#pulse" />
          </circle>
          <circle cx="1000" cy="180" r="4" fill="#1E3A8A" opacity="0.5">
            <use xlinkHref="#pulse" />
          </circle>
          <circle cx="1200" cy="320" r="3" fill="#F59E0B" opacity="0.6">
            <use xlinkHref="#pulse" />
          </circle>
          
          {/* Neural Network Connections */}
          <path d="M200,200 L400,150 L600,300 L800,250 L1000,180 L1200,320" 
                stroke="#1E3A8A" 
                strokeWidth="1" 
                fill="none" 
                opacity="0.3">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M400,150 L800,250" 
                stroke="#10B981" 
                strokeWidth="1" 
                fill="none" 
                opacity="0.3">
            <animate attributeName="stroke-dasharray" values="0,500;500,0" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M600,300 L1000,180" 
                stroke="#F59E0B" 
                strokeWidth="1" 
                fill="none" 
                opacity="0.3">
            <animate attributeName="stroke-dasharray" values="0,600;600,0" dur="3.5s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Journey />
        <Projects />
        <Internships />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}