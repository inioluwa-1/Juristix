"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

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
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-14 pb-10 max-w-2xl mx-auto w-full">

        {/* Trusted badge */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm mb-7">
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
            Trusted by <span className="text-[#575D90] font-semibold">2k+</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.15)} className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-[#1e2a5e] mb-5">
          Protecting Your Rights,
          <br />
          Defending{" "}
          <span className="text-[#b8860b]">Your Future.</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p {...fadeUp(0.28)} className="text-base text-gray-500 max-w-md mb-8 leading-relaxed">
          Experienced legal counsel committed to fighting for
          <br className="hidden sm:block" /> the best outcome in your case.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.4)} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Link
            href="#case-review"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#575D90] text-white text-sm font-semibold hover:bg-[#454870] transition-colors duration-200 shadow-md"
          >
            Free Case Review
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full border-2 border-[#575D90] text-[#575D90] text-sm font-semibold hover:bg-[#575D90] hover:text-white transition-colors duration-200"
          >
            Call Now
          </Link>
        </motion.div>
      </div>

      {/* Hero images — 80% width centered */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
        className="relative z-10 w-[90%] md:w-[68%] mx-auto pb-10"
      >
        <div className="grid grid-cols-2 gap-3">
          {/* Image 1 – Lawyers shaking hands */}
          <div className="relative w-full h-40 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero-1.jpg"
              alt="Lawyers shaking hands"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>

          {/* Image 2 – Gavel */}
          <div className="relative w-full h-40 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/hero-2.jpg"
              alt="Judge gavel on desk"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
