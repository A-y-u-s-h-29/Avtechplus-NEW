import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Fixed scroll detection logic
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // If scrolling down AND not at the very top
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setScrollingDown(true);
          setIsVisible(false);
        } 
        // If scrolling up
        else if (currentScrollY < lastScrollY) {
          setScrollingDown(false);
          setIsVisible(true);
        }
        // If at the top
        else if (currentScrollY < 50) {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    { id: 1, title: "Home", path: "/" },
    { 
      id: 2, 
      title: "About us", 
      path: "/about",
      hasDropdown: true,
      subItems: [
        { title: "About AVtech", path: "/about-avtech" },
        { title: "Our Promises", path: "/our-promises" },
        { title: "Our Core Team", path: "/our-core-team" },
        { title: "Associations", path: "/associations" },
      ]
    },
    { id: 3, title: "Services", path: "/services" },
    { id: 4, title: "Projects", path: "/projects" },
    { id: 5, title: "Turnkey Services", path: "/turnkey-services" },
    { id: 6, title: "Gallery", path: "/gallery" },
    { id: 7, title: "Contact", path: "/contact" },
  ];

  // Different text colors based on page and scroll state
  const getTextColor = () => {
    if (isHomePage && !scrollingDown && window.scrollY < 50) {
      return "text-black";
    }
    return "text-gray-900";
  };

  const textColor = getTextColor();
  const hoverColor = "hover:text-amber-700";

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isHomePage && !scrollingDown && window.scrollY < 50
          ? "bg-transparent absolute top-0 left-0 right-0"
          : "bg-white shadow-md border-b border-gray-200 fixed top-0 left-0 right-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-1 sm:py-2">
        {/* Left side - Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <img
            src="/images/logofi.png"
            className="h-[8vh] sm:h-[10vh] lg:h-[12vh] object-contain"
            alt="AVtech Plus LLP Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <ul className="flex gap-6 lg:gap-8 items-center">
            {navItems.map((item) => (
              <li 
                key={item.id} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`${textColor} ${hoverColor} font-bold text-sm lg:text-[15px] transition-all duration-300 tracking-wide flex items-center gap-1 py-5`}
                >
                  {item.title}
                  {item.hasDropdown && (
                    <FiChevronDown 
                      className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute top-full left-0 w-60 bg-white shadow-2xl rounded-b-md border-t-4 border-amber-600 transition-all duration-300 transform ${
                      dropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <div className="py-1">
                      {item.subItems.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.path}
                          className="block px-6 py-4 text-[14px] font-bold text-gray-900 hover:bg-orange-50 hover:text-amber-600 transition-colors duration-200 border-b border-gray-100 last:border-0"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${textColor} text-3xl transition-colors duration-300 z-50`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX className="text-gray-900" /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white z-[45] animate-in fade-in duration-300">
          <div className="flex flex-col pt-24 px-6 h-full overflow-y-auto">
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id} className="border-b border-gray-100 last:border-0">
                  {!item.hasDropdown ? (
                    <Link
                      to={item.path}
                      className="text-gray-900 font-black text-xl py-4 block uppercase tracking-wider"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div className="flex flex-col py-4">
                      <div className="text-amber-600 text-xs font-black uppercase mb-4 tracking-[0.2em]">
                        {item.title}
                      </div>
                      <div className="flex flex-col gap-4 pl-4 border-l-2 border-orange-100">
                        {item.subItems.map((sub, idx) => (
                          <Link
                            key={idx}
                            to={sub.path}
                            className="text-gray-800 font-bold text-lg"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;