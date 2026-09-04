import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FaHome, 
  FaUser, 
  FaCogs,
  FaProjectDiagram, 
  FaGraduationCap, 
  FaEnvelope,
  FaImage,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", icon: <FaHome />, type: "home" },
    { label: "About", path: "#about", icon: <FaUser />, type: "hash" },
    { label: "Skills", path: "#skills", icon: <FaCogs />, type: "hash" },
    { label: "Projects", path: "#projects", icon: <FaProjectDiagram />, type: "hash" },
    { label: "Education", path: "#education", icon: <FaGraduationCap />, type: "hash" },
    { label: "Gallery", path: "/gallery", icon: <FaImage />, type: "page" },
    { label: "Contact", path: "#contact", icon: <FaEnvelope />, type: "hash" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (item) => {
    if (item.type === "hash") {
      // Scroll to section on home page
      if (location.pathname === "/") {
        const element = document.querySelector(item.path);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // Navigate to home page first, then scroll
        window.location.href = `/${item.path}`;
      }
    } else if (item.type === "page") {
      // For page navigation (Home, Gallery), use React Router
      // Navigation will be handled by Link component
    }
    setIsOpen(false);
  };

  // Check if item is active
  const isActive = (item) => {
    if (item.type === "hash") {
      // For hash links on home page
      if (location.pathname === "/") {
        return window.location.hash === item.path;
      }
      return false;
    }
    
    // For page links (Home, Gallery)
    if (item.path === "/" && location.pathname === "/") {
      return true;
    }
    if (item.path === "/gallery" && location.pathname === "/gallery") {
      return true;
    }
    
    return false;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-gray-900 to-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              if (item.type === "hash") {
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive(item)
                        ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              }
              
              // For Home and Gallery pages
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item)
                      ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-white text-xl" /> : <FaBars className="text-white text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 shadow-xl rounded-b-xl">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                if (item.type === "hash") {
                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        handleNavClick(item);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left ${
                        isActive(item)
                          ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="text-cyan-400">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                }
                
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left ${
                      isActive(item)
                        ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-cyan-400">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;