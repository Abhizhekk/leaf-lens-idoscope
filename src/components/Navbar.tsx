import { Leaf, Bug } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-leaf-primary" />
            <span className="font-bebas text-2xl text-leaf-dark">Leaflens</span>
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/identify"
              className="flex items-center space-x-2 text-leaf-primary hover:text-leaf-dark transition-colors"
            >
              <Leaf className="h-5 w-5" />
              <span className="font-bebas text-xl">Identify Plant</span>
            </Link>
            <Link
              to="/disease"
              className="flex items-center space-x-2 text-leaf-primary hover:text-leaf-dark transition-colors"
            >
              <Bug className="h-5 w-5" />
              <span className="font-bebas text-xl">Plant Disease</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};