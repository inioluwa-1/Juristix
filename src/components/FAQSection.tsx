"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What does it cost to speak with a lawyer?",
    answer:
      "Your initial consultation is completely free. For injury-related cases, we work on a contingency basis, meaning you pay no legal fees unless we successfully recover compensation on your behalf.",
  },
  {
    id: 2,
    question: "How long will my case take?",
    answer:
      "Case timelines vary depending on complexity. Simple cases may resolve in a few months, while complex litigation can take a year or more. We'll give you a realistic timeline during your consultation.",
  },
  {
    id: 3,
    question: "Do I have a valid case?",
    answer:
      "If you've been injured due to someone else's negligence, you may have a valid claim. The best way to find out is through a free case review with one of our attorneys.",
  },
  {
    id: 4,
    question: "Will I have to go to court?",
    answer:
      "Most personal injury cases settle before trial. However, if a fair settlement cannot be reached, we are fully prepared to take your case to court and fight for you.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="bg-[#f0f4ff] py-16 md:py-24">
      <div className="w-[90%] md:w-[68%] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1e2a5e] mb-10">
          Frequently Asked Questions
        </h2>

        {/* FAQ grid */}
        <div className="bg-[#e8ecf7] rounded-3xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[#1e2a5e] font-bold text-base leading-snug">
                      {faq.question}
                    </span>
                    {/* Chevron button */}
                    <span
                      className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#b8960c] text-white"
                          : "bg-[#eef0f8] text-[#575D90]"
                      }`}
                    >
                      {isOpen ? (
                        // Up chevron
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        // Down chevron
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Answer — animated expand */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
