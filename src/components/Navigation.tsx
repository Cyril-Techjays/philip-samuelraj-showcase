import { Link, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/techjays-overview", label: "Techjays Overview" },
    { href: "/investment-portfolio", label: "Investment Portfolio" },
    { href: "/media-mentions", label: "Media Mentions" },
    { href: "/hobbies", label: "Hobbies" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors">
            <span className="text-lg font-semibold">Philip Samuelraj</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
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
  );
};

export default Navigation;
