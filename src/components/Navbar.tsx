import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Juristix Logo"
            width={130}
            height={36}
            priority
            className="object-contain"
          />
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#575D90] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="#consultation"
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#575D90] text-white text-sm font-semibold hover:bg-[#454870] transition-colors duration-200 shadow-sm"
        >
          Free Consultation
        </Link>

        {/* Mobile menu icon */}
        <button className="md:hidden flex flex-col gap-1.5 p-2">
          <span className="block w-6 h-0.5 bg-gray-700 rounded" />
          <span className="block w-6 h-0.5 bg-gray-700 rounded" />
          <span className="block w-6 h-0.5 bg-gray-700 rounded" />
        </button>
      </div>
    </nav>
  );
}
