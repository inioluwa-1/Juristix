"use client";
import { motion } from "framer-motion";

const practices = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z" />
      </svg>
    ),
    title: "Personal Injury",
    desc: "We represent individuals injured due to negligence and fight to recover full compensation.",
    featured: false,
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Premises Liability",
    desc: "Legal support for victims injured on unsafe or poorly maintained properties.",
    featured: true,
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5a1 1 0 011-1h4a1 1 0 011 1v5H9z" />
      </svg>
    ),
    title: "Workplace Accidents",
    desc: "Helping employees pursue claims after injuries sustained on the job.",
    featured: false,
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Medical Negligence",
    desc: "Holding healthcare providers accountable for preventable medical errors.",
    featured: false,
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Wrongful Death",
    desc: "Compassionate legal representation for families seeking justice after a tragic loss.",
    featured: true,
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Criminal Defense",
    desc: "Strong, strategic defense for individuals facing criminal charges.",
    featured: false,
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-[#f0f4ff] py-16 md:py-24">
      <div className="w-[90%] md:w-[68%] mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-extrabold text-center text-[#1e2a5e] mb-12"
        >
          Our Practice Areas
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {practices.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-7 flex flex-col items-center text-center shadow-sm overflow-hidden ${
                item.featured
                  ? "bg-[#787DA6] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {/* Subtle grid pattern for non-featured */}
              {!item.featured && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(87,93,144,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(87,93,144,0.08) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
              )}

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  item.featured ? "bg-white/20" : "bg-[#575D90]"
                }`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className={`relative z-10 text-lg font-bold mb-3 ${
                  item.featured ? "text-white" : "text-[#1e2a5e]"
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`relative z-10 text-sm leading-relaxed ${
                  item.featured ? "text-white/80" : "text-gray-500"
                }`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
