import Image from "next/image";

const quickLinks = [
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Resources", href: "#resources" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f0f4ff] pb-0 pt-4 overflow-hidden">
      <div className="w-[90%] md:w-[68%] mx-auto">
        {/* Main footer card */}
        <div className="bg-white rounded-3xl border border-[#c9a84c]/40 shadow-sm px-8 md:px-12 pt-10 pb-6">
          {/* Top row: logo+social  |  quick links */}
          <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-8">
            {/* Left */}
            <div className="flex flex-col gap-6">
              {/* Logo */}
              <Image src="/logo.png" alt="Juristix" width={120} height={60} className="object-contain" />

              {/* Tagline */}
              <p className="text-[#1e2a5e] font-semibold text-base leading-snug max-w-45">
                Clear Guidance. Strong Advocacy.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                {/* Facebook */}
                <a href="#" aria-label="Facebook" className="text-[#1e2a5e] hover:text-[#575D90] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a href="#" aria-label="X" className="text-[#1e2a5e] hover:text-[#575D90] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" aria-label="Instagram" className="text-[#1e2a5e] hover:text-[#575D90] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Quick Links */}
            <div>
              <h3 className="text-lg font-extrabold text-[#1e2a5e] mb-4">Quick Link</h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#1e2a5e] font-semibold text-sm hover:text-[#575D90] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-5 flex justify-end gap-8">
            <a href="#" className="text-sm text-gray-500 underline underline-offset-2 hover:text-[#575D90] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 underline underline-offset-2 hover:text-[#575D90] transition-colors">
              Legal Disclaimer
            </a>
          </div>
        </div>

      </div>

      {/* Watermark — full width, outside constrained container */}
      <div className="text-center select-none pointer-events-none w-full">
        <span
          className="text-[clamp(3rem,18vw,10rem)] font-extrabold tracking-widest uppercase"
          style={{ color: "rgba(180,185,210,0.25)", lineHeight: 1.1 }}
        >
          JURISTIX
        </span>
      </div>
    </footer>
  );
}
