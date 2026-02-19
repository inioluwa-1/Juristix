import Image from "next/image";
import Link from "next/link";

const avatars = [
  { src: "/avatar-1.jpg", alt: "Client 1" },
  { src: "/avatar-2.jpg", alt: "Client 2" },
  { src: "/avatar-3.jpg", alt: "Client 3" },
  { src: "/avatar-4.jpg", alt: "Client 4" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-[#f0f4ff] pt-16">
      {/* Subtle vertical stripe background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(180,200,255,0.18) 0px, rgba(180,200,255,0.18) 1px, transparent 1px, transparent 80px)",
        }}
      />

      {/* Soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-200 h-125 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(200,215,255,0.6) 0%, transparent 70%)",
        }}
      />

      {/* ───── Content ───── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-8 max-w-4xl mx-auto w-full">

        {/* Trusted badge */}
        <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm mb-8">
          {/* Overlapping avatars */}
          <div className="flex -space-x-2">
            {avatars.map((avatar, i) => (
              <div
                key={i}
                className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-sm font-medium text-gray-600">
            Trusted by <span className="text-[#2D3674] font-semibold">2k+</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#1e2a5e] mb-6">
          Protecting Your Rights,
          <br />
          Defending{" "}
          <span className="text-[#b8860b]">Your Future.</span>
        </h1>

        {/* Sub-text */}
        <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">
          Experienced legal counsel committed to fighting for
          <br className="hidden sm:block" /> the best outcome in your case.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href="#case-review"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#2D3674] text-white text-sm font-semibold hover:bg-[#232c5e] transition-colors duration-200 shadow-md"
          >
            Free Case Review
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-[#2D3674] text-[#2D3674] text-sm font-semibold hover:bg-[#2D3674] hover:text-white transition-colors duration-200"
          >
            Call Now
          </Link>
        </div>

        {/* Hero images */}
        <div className="grid grid-cols-2 gap-4 w-full mt-2">
          {/* Image 1 – Lawyers shaking hands — add your file to /public/hero-1.jpg */}
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero-1.jpg"
              alt="Lawyers shaking hands"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          {/* Image 2 – Gavel — add your file to /public/hero-2.jpg */}
          <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero-2.jpg"
              alt="Judge gavel on desk"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
