"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#f0f4ff] pb-16 md:pb-24">
      <div className="w-[90%] md:w-[68%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-[#575D90] px-8 py-16 md:py-20 text-center"
        >
          {/* Decorative swirl circles */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute -top-8 -left-8 w-48 h-48 rounded-full border border-white/10" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border border-white/10" />
          <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-72 h-72 rounded-full border border-white/[0.07]" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-72 h-72 rounded-full border border-white/[0.07]" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Get the Legal Support You Deserve
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-10 max-w-md mx-auto leading-relaxed">
              Speak with an experienced attorney today and get clear guidance on
              your legal options.
            </p>
            <button className="bg-[#b8960c] hover:bg-[#9e7e0a] text-white font-semibold px-10 py-4 rounded-full transition-colors duration-200 text-base shadow-lg">
              Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
