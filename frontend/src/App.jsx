import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup.jsx";

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
        </Route>

        {/* Auth layout (no navbar) */}
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
