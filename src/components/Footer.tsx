import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-leaf-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bebas text-2xl mb-4">About Leaflens</h3>
            <p className="text-gray-300">
              Your trusted companion for plant identification and disease detection. Making plant care easier through technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-2xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/identify" className="text-gray-300 hover:text-leaf-accent transition-colors">
                  Plant Identification
                </Link>
              </li>
              <li>
                <Link to="/disease" className="text-gray-300 hover:text-leaf-accent transition-colors">
                  Disease Detection
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-leaf-accent transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bebas text-2xl mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                support@leaflens.com
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                123 Plant Street, Garden City
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bebas text-2xl mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-leaf-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-leaf-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-leaf-accent transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Leaflens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};