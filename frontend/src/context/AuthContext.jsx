import { createContext, useContext, useEffect, useState } from "react";
import { Me } from "../api/userApi.js";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setisAuthenticated(false);
    navigate("/");
  };

  const fetchUser = async () => {
    try {
      const res = await Me();
      setUser(res);
      setisAuthenticated(true);
    } catch (error) {
      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setisAuthenticated(false);
      setUser(null);
      setLoading(false);
      return;
    }

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setisAuthenticated,
        isAuthenticated,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
