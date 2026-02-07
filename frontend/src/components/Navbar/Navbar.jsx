import { useState } from "react";
import MobileMenu from "./MobileMenu.jsx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="glass-nav fixed top-0 w-full z-50">
        <div className="flex justify-between items-center h-16 px-6 md:px-10 mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white tracking-tight">
              GraphIQ
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button className="text-sm font-medium text-white hover:text-(--color-primary) transition-colors cursor-pointer">
              Sign In
            </button>
            <button className="cta-gradient text-white text-sm font-bold py-2 px-5 rounded-md hover:opacity-80 transition-opacity cursor-pointer">
              Get Started
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
};

export default Navbar;
