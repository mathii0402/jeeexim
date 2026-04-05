import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Leaf } from "lucide-react";
import { companyInfo } from "../mock/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-stone-900 to-stone-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_agri-commerce-14/artifacts/p95ku085_Gemini_Generated_Image_58gqwi58gqwi58gq%20%281%29.png" 
                alt="JEE Exports & Imports Logo" 
                className="h-10 w-auto"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(58%) sepia(85%) saturate(500%) hue-rotate(360deg) brightness(105%) contrast(95%)',
                  opacity: 0.95,
                  imageRendering: 'crisp-edges'
                }}
              />
              <h3 className="text-xl font-bold">{companyInfo.name}</h3>
            </div>
            <p className="text-stone-300 mb-4 text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
            <p className="text-stone-400 text-sm">
              Premium organic vetiver products for global markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-stone-300 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-stone-300 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-300 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-300 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <a href={`tel:${companyInfo.phone1}`} className="text-stone-300 hover:text-white transition-colors block">
                    {companyInfo.phone1}
                  </a>
                  <a href={`tel:${companyInfo.phone2}`} className="text-stone-300 hover:text-white transition-colors block">
                    {companyInfo.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-stone-300 hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="text-amber-400 mt-1 flex-shrink-0" />
                <span className="text-stone-300">Made in India | Export Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-stone-800 mt-8 pt-6 text-center">
          <p className="text-stone-400 text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
