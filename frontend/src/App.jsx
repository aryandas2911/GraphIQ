import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Documents from "./pages/Documents.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <>
      <Routes>
        {/* Public layout (with navbar) */}
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<LandingPage />} />
          <Route path="/documents" element={<Documents />} />
        </Route>

        {/* Auth layout (no navbar) */}
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
};

export default App;
