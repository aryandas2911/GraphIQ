const Login = () => {
  return (
    <div className="flex min-h-screen flex-col pt-25">
      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
        {/* Headline */}
        <div class="w-full text-center mb-8">
          <h1 class="text-white tracking-tight text-[32px] font-bold leading-tight pb-2">
            Welcome back
          </h1>
          <p class="text-(--text-muted) text-base font-normal leading-relaxed">
            Turn documents into connected knowledge
          </p>
        </div>

        {/* Central Sign Up Card */}
        <div className="w-full max-w-md bg-(--bg-card) border border-(--border-input) rounded-3xl p-8 shadow-2xl">
          <form className="space-y-5">
            {/* Email field */}
            <div class="flex flex-col gap-1.5">
              <label class="text-white text-sm font-medium leading-none px-1">
                Email
              </label>
              <input
                class="form-input flex w-full rounded-2xl text-white focus:outline-0 focus:ring-1 focus:ring-(--color-primary)/50 border-none bg-(--bg-input) h-12 placeholder:text-(--text-muted)/40 px-4 text-base font-normal transition-all"
                placeholder="name@email.com"
                type="email"
              />
            </div>

            {/* Password field */}
            <div class="flex flex-col gap-1.5">
              <label class="text-white text-sm font-medium leading-none px-1">
                Password
              </label>
              <input
                class="form-input flex w-full rounded-2xl text-white focus:outline-0 focus:ring-1 focus:ring-(--color-primary)/50 border-none bg-(--bg-input) h-12 placeholder:text-(--text-muted)/40 px-4 text-base font-normal transition-all"
                placeholder="•••••••••••"
                type="password"
              />
            </div>

            {/* CTA Button */}
            <div class="pt-4">
              <button class="cta-gradient w-full h-12 rounded-3xl text-(--bg-dark) font-bold text-base hover:opacity-90 transition-opacity active:scale-[0.98] transform cursor-pointer">
                Sign In
              </button>
            </div>
          </form>

          {/* Log In Link */}
          <div class="mt-8 pt-6 border-t border-(--border-input) text-center">
            <p class="text-(--text-muted) text-sm">
              Don't have an account?
              <a
                class="text-(--color-primary) hover:text-(--color-primary)/80 font-medium ml-1 transition-colors"
                href="/"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Trust / Security Footer */}
        <div class="mt-10 flex items-center gap-6 opacity-40 grayscale pointer-events-none">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-white text-lg">
              encrypted
            </span>
            <span class="text-white text-xs font-medium uppercase tracking-widest">
              End-to-End Encrypted
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer class="py-10 text-center">
        <p class="text-(--text-muted)/40 text-xs">
          © 2026 GraphIQ. Built for Intellectual Clarity.
        </p>
      </footer>
    </div>
  );
};

export default Login;
