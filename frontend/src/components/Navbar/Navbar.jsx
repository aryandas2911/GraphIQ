import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useLocation } from "react-router-dom";
import PillNav from "../PillNav/PillNav.jsx";

const Navbar = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return null;

  const items = isAuthenticated
    ? [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Documents", href: "/documents" },
        { label: "Profile", href: "/profile" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Sign In", href: "/login" },
        { label: "Get Started", href: "/signup" },
      ];

  return (
    <PillNav
      logoText="GraphIQ"
      items={items}
      activeHref={location.pathname}
      baseColor="#15171c"
      pillColor="#1fe0cd"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#15171c"
    />
  );
};

export default Navbar;
