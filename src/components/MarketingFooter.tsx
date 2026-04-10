import Link from "next/link";

export function MarketingFooter() {
  return (
    <footer className="w-full py-12 mt-auto border-t border-[#3D3040] bg-[#080608]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md btn-studio flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5"
                fill="none"
                stroke="#080608"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              </svg>
            </div>
            <span className="site-logo text-sm font-bold uppercase tracking-tighter text-[#FFF8F0]">
              Edu<span className="text-[#FF4D6D]">Makeover</span> AI
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-[#A89BA8]/50">
            © 2024. The Hacker Editorial Studio.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-end items-center">
          <Link
            className="text-[10px] uppercase tracking-widest font-bold text-[#A89BA8] hover:text-[#FF4D6D] transition-colors"
            href="#"
          >
            Privacy
          </Link>
          <Link
            className="text-[10px] uppercase tracking-widest font-bold text-[#A89BA8] hover:text-[#00D4AA] transition-colors"
            href="#"
          >
            Terms
          </Link>
          <Link
            className="text-[10px] uppercase tracking-widest font-bold text-[#A89BA8] hover:text-[#F0C060] transition-colors"
            href="#"
          >
            Editorial
          </Link>
          <Link
            className="text-[10px] uppercase tracking-widest font-bold text-[#A89BA8] hover:text-[#FFF8F0] transition-colors"
            href="#"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

