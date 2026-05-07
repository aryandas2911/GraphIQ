import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/userApi.js";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUser, setisAuthenticated } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const res = await login({
        email: email,
        password: password,
      });

      console.log("Login success", res);

      localStorage.setItem("token", res.token);

      setUser(res.user);
      setisAuthenticated(true);

      navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col pt-25">
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
        {/* Headline */}
        <div className="w-full text-center mb-8">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight pb-2">
            Welcome back
          </h1>
          <p className="text-(--text-muted) text-base font-normal leading-relaxed">
            Turn documents into connected knowledge
          </p>
        </div>

        {/* Central Sign Up Card */}
        <div className="w-full max-w-md bg-(--bg-card) border border-(--border-input) rounded-3xl p-8 shadow-2xl">
          <form className="space-y-5">
            {/* Email field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-sm font-medium leading-none px-1">
                Email
              </label>
              <input
                className="form-input flex w-full rounded-2xl text-white focus:outline-0 focus:ring-1 focus:ring-(--color-primary)/50 border-none bg-(--bg-input) h-12 placeholder:text-(--text-muted)/40 px-4 text-base font-normal transition-all"
                placeholder="name@email.com"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* Password field */}
            <div className="flex flex-col gap-1.5">
              <label className="text-white text-sm font-medium leading-none px-1">
                Password
              </label>
              <input
                className="form-input flex w-full rounded-2xl text-white focus:outline-0 focus:ring-1 focus:ring-(--color-primary)/50 border-none bg-(--bg-input) h-12 placeholder:text-(--text-muted)/40 px-4 text-base font-normal transition-all"
                placeholder="•••••••••••"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                className="cta-gradient w-full h-12 rounded-3xl text-(--bg-dark) font-bold text-base hover:opacity-90 transition-opacity active:scale-[0.98] transform cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Log In Link */}
          <div className="mt-8 pt-6 border-t border-(--border-input) text-center">
            <p className="text-(--text-muted) text-sm">
              Don't have an account?
              <Link
                className="text-(--color-primary) hover:text-(--color-primary)/80 font-medium ml-1 transition-colors"
                to="/signup"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center">
        <p className="text-(--text-muted)/40 text-xs">
          © 2026 GraphIQ. Built for Intellectual Clarity.
        </p>
      </footer>
    </div>
  );
};

export default Login;
