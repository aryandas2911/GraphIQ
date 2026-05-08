import { useContext, useState } from "react";
import MobileMenu from "./MobileMenu.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

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
          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-8">
              <Link to="/profile">
                <img
                  alt="User avatar"
                  className="w-10 h-10 rounded-full object-cover border border-(--border-input)"
                  data-alt="Close up professional portrait of an engineer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHcffl_EnTU60TAzg6kuJvoQhxy-37jwnkCcz3UG16GEfzmcB4H_DBPfzeyafLOok6D5LBjfTIBhZI9u_kVb8hHnmcPIlPEyBkdlyEn3nUGbsMup8fNDf_w3cW16tjzM4QjcG2Dm5--nHFiQLaTVQZPvjVJb93c865NdWAZDJ2YDsidf9BgMmpHXuSZ_ObK2UP7iHp5kOm6bjmtheVflRP1UThWnjOZ4GXkko3gYL_2gGOrZDDhqgbLRMNSG5dWPv9G149zz994A"
                />
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-8">
              <Link
                className="text-sm font-medium text-white hover:text-(--color-primary) transition-colors cursor-pointer"
                to="/login"
              >
                Sign In
              </Link>
              <Link
                className="cta-gradient text-white text-sm font-bold py-2 px-5 rounded-md hover:opacity-80 transition-opacity cursor-pointer"
                to="/signup"
              >
                Get Started
              </Link>
            </div>
          )}

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
