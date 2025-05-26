
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Globe } from "lucide-react";
import { useState } from "react";
import Curtain from "./Curtain";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [curtainVisible, setCurtainVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const navItems = [
    { href: "/techjays-overview", label: "Techjays Overview" },
    { href: "/investment-portfolio", label: "Investment Portfolio" },
    { href: "/media-mentions", label: "Media Mentions" },
    { href: "/hobbies", label: "Hobbies" },
    { href: "/contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    
    // Don't show curtain if already on the same page
    if (location.pathname === href) return;
    
    setCurrentSection(label);
    setCurtainVisible(true);
    
    // Navigate to new page at 2 seconds (middle of 4-second animation)
    setTimeout(() => {
      navigate(href);
    }, 2000);
  };

  const handleCurtainComplete = () => {
    setCurtainVisible(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors">
              <span className="text-lg font-semibold">Philip Samuelraj</span>
            </Link>
            
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.label)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    location.pathname === item.href
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-full text-sm">
                <Globe size={16} />
                <span>Located in Menlo Park, CA</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Curtain 
        isVisible={curtainVisible}
        sectionName={currentSection}
        onComplete={handleCurtainComplete}
      />
    </>
  );
};

export default Navigation;
