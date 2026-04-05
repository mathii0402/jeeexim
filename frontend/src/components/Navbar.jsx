import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { companyInfo } from "../mock/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-stone-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href={`tel:${companyInfo.phone1}`} className="flex items-center gap-1 hover:text-amber-300 transition-colors">
              <Phone size={14} />
              <span>{companyInfo.phone1}</span>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1 hover:text-amber-300 transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">{companyInfo.email}</span>
            </a>
          </div>
          <div className="text-amber-300">Export Worldwide | Made in India</div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_agri-commerce-14/artifacts/xf7fmxjf_image.png" 
                alt="JEE Exports & Imports Logo" 
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-stone-800">{companyInfo.name}</span>
                <span className="text-xs text-amber-800 font-medium">Organic Vetiver Manufacturer</span>
              </div>
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors relative ${
                    isActive(link.path)
                      ? "text-stone-800"
                      : "text-gray-700 hover:text-stone-700"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-stone-800"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-stone-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-stone-800"
                      : "text-gray-700 hover:text-stone-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
