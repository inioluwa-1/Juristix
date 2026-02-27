"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Free Case Review",
    desc: "Tell us what happened and how it happened",
  },
  {
    number: "2",
    title: "We Build Your Case",
    desc: "We investigate, file, and negotiate.",
  },
  {
    number: "3",
    title: "You Get Justice",
    desc: "We fight for maximum compensation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f0f4ff] py-16 md:py-24">
      <div className="w-[90%] md:w-[68%] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-center text-[#1e2a5e] mb-12"
        >
          How it Works
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.12 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
            >
              {/* Top — textured box with number */}
              <div className="relative flex items-center justify-center py-10 px-6 overflow-hidden">
                {/* Terrazzo/speckle background */}
                <div className="absolute inset-0" />
                {/* Speckle dots via SVG pattern */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <filter id="terrazzo">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.6  0 0 0 0 0.6  0 0 0 0 0.6  0 0 0 0.15 0" in="noise"/>
                  </filter>
                  <rect width="100%" height="100%" filter="url(#terrazzo)"/>
                </svg>

                {/* Light gold outer border inset */}
                <div className="absolute inset-2 rounded-xl border border-[#c9a84c] opacity-70 pointer-events-none" />

                {/* Gold horizontal lines left and right of badge */}
                <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                  <div className="flex-1 h-px bg-[#c9a84c]" />
                  {/* gap for the badge — 72px wide */}
                  <div className="w-20" />
                  <div className="flex-1 h-px bg-[#c9a84c]" />
                </div>

                {/* Gold rounded square outline around badge */}
                <div className="relative z-10 p-1.5 rounded-2xl border border-[#c9a84c]">
                  {/* Number badge */}
                  <div className="w-14 h-14 rounded-xl bg-[#575D90] flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl font-extrabold">{step.number}</span>
                  </div>
                </div>
              </div>

              {/* Bottom — text */}
              <div className="px-6 pb-8 pt-5 text-center flex-1">
                <h3 className="text-lg font-bold text-[#1e2a5e] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
