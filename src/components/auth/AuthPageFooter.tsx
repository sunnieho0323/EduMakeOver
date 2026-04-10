import Link from "next/link";

const LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "AI Ethics" },
  { href: "#", label: "Contact Support" },
] as const;

export function AuthPageFooter() {
  return (
    <footer className="w-full py-12 mt-auto border-t border-[color:rgba(74,71,72,0.15)] bg-[#100e0f] flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-center sm:text-left">
        <span className="font-black text-white">EduMakeover AI</span>
        <span className="hidden sm:inline w-1 h-1 bg-[#fd9b64] rounded-full shrink-0" aria-hidden />
        <p className="text-sm text-[#afaaab] tracking-wide">
          © 2024 EduMakeover AI. Rigorous Design for Maximum Chaos.
        </p>
      </div>
      <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {LINKS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm text-[#afaaab] hover:text-[#fd9b64] transition-colors opacity-80 hover:opacity-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
