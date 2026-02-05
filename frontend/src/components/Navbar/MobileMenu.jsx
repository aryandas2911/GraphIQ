const MobileMenu = ({ open, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black/80 backdrop-blur-xl z-50 transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-6 px-6 mt-8">
          <button className="text-white text-base font-medium text-left">
            Sign In
          </button>
          <button className="cta-gradient text-white font-bold py-3 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
