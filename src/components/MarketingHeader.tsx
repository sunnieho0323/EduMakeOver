import Link from "next/link";

export function MarketingHeader() {
  return (
    <header className="site-chrome fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-4">
        <Link className="flex items-center gap-3 shrink-0 min-w-0" href="/">
          <div className="w-8 h-8 rounded-lg btn-studio flex items-center justify-center shrink-0">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="#080608"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className="site-logo text-sm font-bold text-[#FFF8F0] truncate">
            Edu<span className="text-[#FF4D6D]">Makeover</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            className="text-[10px] font-bold uppercase tracking-widest text-[#A89BA8] hover:text-[#FFF8F0] transition-colors"
            href="/"
          >
            Demo
          </Link>
          <Link
            className="text-[10px] font-bold uppercase tracking-widest text-[#A89BA8] hover:text-[#FFF8F0] transition-colors"
            href="/studio/generate"
          >
            Studio
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            className="hidden sm:inline text-[10px] font-bold uppercase tracking-widest text-[#A89BA8] hover:text-[#FF4D6D] transition-colors"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="btn-studio px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"
            href="/signup"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

