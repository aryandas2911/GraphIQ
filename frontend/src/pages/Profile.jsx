const Profile = () => {
  return (
    <>
      <main className="w-full max-w-105 mx-auto space-y-8 pt-25 px-4 md:px-0">
        {/* Header */}
        <header className="space-y-1 text-center md:text-left">
          <h1 className="text-[28px] font-semibold leading-tight">Profile</h1>
          <p className="text-[15px] text-(--text-muted)">
            Your account and controls
          </p>
        </header>

        {/* Profile card */}
        <section className="bg-(--bg-card) border border-(--border-input) rounded-lg p-5">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                alt="User avatar"
                className="w-12 h-12 rounded-full object-cover border border-(--border-input)"
                data-alt="Close up professional portrait of an engineer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHcffl_EnTU60TAzg6kuJvoQhxy-37jwnkCcz3UG16GEfzmcB4H_DBPfzeyafLOok6D5LBjfTIBhZI9u_kVb8hHnmcPIlPEyBkdlyEn3nUGbsMup8fNDf_w3cW16tjzM4QjcG2Dm5--nHFiQLaTVQZPvjVJb93c865NdWAZDJ2YDsidf9BgMmpHXuSZ_ObK2UP7iHp5kOm6bjmtheVflRP1UThWnjOZ4GXkko3gYL_2gGOrZDDhqgbLRMNSG5dWPv9G149zz994A"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-(--color-primary) rounded-full border-2 border-(--bg-card)"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-medium truncate">UserName</h2>
              <div className="flex flex-col space-y-0.5">
                <span className="text-[13px] text-(--text-dim) truncate">
                  user.name@gmail.com
                </span>
                <span className="text-[12px] text-(--text-dim)">
                  Joined February 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="space-y-3">
          <h3 className="text-[20px] font-medium">Preferences</h3>
          <div className="bg-(--bg-input) rounded-lg p-4 flex items-center justify-between group cursor-pointer hover:bg-(--bg-input)/80 transition-colors">
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-(--text-dim) text-xl">
                dark_mode
              </span>
              <span className="text-sm font-medium">Theme</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-(--color-primary)">Dark</span>
              <span className="material-symbols-outlined text-(--text-dim) text-sm">
                chevron_right
              </span>
            </div>
          </div>
        </section>

        {/* Your data */}
        <section className="space-y-3">
          <h3 className="text-[20px] font-medium">Your Data</h3>
          <div className="bg-(--bg-input) rounded-lg p-4 flex items-center justify-between group cursor-pointer hover:bg-(--bg-input)/80 transition-colors">
            <div className="flex items-center space-x-3">
              <span className="material-symbols-outlined text-(--text-dim) text-xl">
                description
              </span>
              <span className="text-sm font-medium">Documents</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-(--text-muted)">1,284 nodes</span>
              <span className="material-symbols-outlined text-(--text-dim) text-sm">
                chevron_right
              </span>
            </div>
          </div>
        </section>

        {/* Actions */}
        <section className="flex flex-col space-y-4 pt-4">
          {/* Primary Action Button */}
          <button className="cta-gradient w-full py-3 rounded-lg text-(--bg-dark) font-semibold text-sm shadow-lg shadow-(--color-primary)/10 hover:opacity-90 transition-opacity cursor-pointer">
            Change Password
          </button>

          {/* Secondary Text Action */}
          <div className="flex flex-col items-center space-y-6 pt-2">
            <button className="text-(--text-muted) text-[15px] hover:text-white transition-colors cursor-pointer">
              Log out
            </button>
            <div className="w-full h-px bg-(--border-input)/30"></div>
            <button className="text-(--color-danger) text-[14px] font-medium hover:underline decoration-red-500/30 underline-offset-4 cursor-pointer">
              Delete account
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center">
          <p className="text-(--text-muted)/40 text-xs">
            © 2026 GraphIQ. Built for Intellectual Clarity.
          </p>
        </footer>
      </main>
    </>
  );
};

export default Profile;
