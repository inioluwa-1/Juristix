"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f0f4ff] py-10 md:py-16">
      <div className="w-[90%] md:w-[68%] mx-auto">
        <div className="bg-[#575D90] rounded-3xl px-6 py-12 md:px-10 md:py-14 flex flex-col md:flex-row items-center gap-12">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
              Advocates You Can Trust
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-5">
              We are a client-focused law firm committed to clear guidance,
              strong advocacy, and real results. Our team combines deep legal
              expertise with a practical approach, ensuring clients feel informed
              and supported at every stage.
            </p>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-10">
              We believe in accountability, transparency, and fighting for those
              who have been wronged. From consultation to resolution, our focus
              is protecting your rights and pursuing the justice you deserve.
            </p>
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#b8860b] text-white text-sm font-semibold hover:bg-[#9a6f09] transition-colors duration-200"
            >
              Free Consultation
            </Link>
          </motion.div>

          {/* Right — Hexagon image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">

              {/* SVG: gold rounded-hexagon outline + clipPath definition */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <clipPath id="roundedHexClip" clipPathUnits="userSpaceOnUse">
                    {/* Slightly inset rounded hexagon for the image clip */}
                    <path d="
                      M 144.4 25
                      Q 160 16 175.6 25
                      L 269.1 79
                      Q 284.7 88 284.7 106
                      L 284.7 214
                      Q 284.7 232 269.1 241
                      L 175.6 295
                      Q 160 304 144.4 295
                      L 50.9 241
                      Q 35.3 232 35.3 214
                      L 35.3 106
                      Q 35.3 88 50.9 79
                      Z
                    " />
                  </clipPath>
                </defs>

                {/* Gold rounded-hexagon outline */}
                <path
                  d="
                    M 142.7 20
                    Q 160 10 177.3 20
                    L 272.7 75
                    Q 290 85 290 105
                    L 290 215
                    Q 290 235 272.7 245
                    L 177.3 300
                    Q 160 310 142.7 300
                    L 47.3 245
                    Q 30 235 30 215
                    L 30 105
                    Q 30 85 47.3 75
                    Z
                  "
                  stroke="#b8860b"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Corner accent dots */}
                <circle cx="30" cy="215" r="6" fill="#b8860b" />
                <circle cx="290" cy="105" r="6" fill="#b8860b" />
                <circle cx="160" cy="310" r="6" fill="#b8860b" />

                {/* Image rendered inside SVG using foreignObject for clip */}
              </svg>

              {/* Hexagon clipped image using the SVG clipPath */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: "url(#roundedHexClip)",
                }}
              >
                <Image
                  src="/about.jpg"
                  alt="Juristix lawyer"
                  fill
                  className="object-cover object-top"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
