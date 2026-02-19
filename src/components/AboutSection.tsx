import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f0f4ff] py-10 md:py-16">
      <div className="w-[90%] md:w-[68%] mx-auto">
        <div className="bg-[#575D90] rounded-3xl px-6 py-12 md:px-10 md:py-14 flex flex-col md:flex-row items-center gap-12">

          {/* Left — Text */}
          <div className="flex-1 text-white">
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
          </div>

          {/* Right — Hexagon image */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Gold hexagon outline decoration */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 320 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="160,10 300,87.5 300,232.5 160,310 20,232.5 20,87.5"
                  stroke="#b8860b"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinejoin="round"
                />
                {/* Corner dots */}
                <circle cx="20" cy="232.5" r="6" fill="#b8860b" />
                <circle cx="300" cy="87.5" r="6" fill="#b8860b" />
                <circle cx="160" cy="310" r="6" fill="#b8860b" />
              </svg>

              {/* Hexagon clipped image */}
              <div
                className="absolute inset-4 overflow-hidden"
                style={{
                  clipPath:
                    "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
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
          </div>

        </div>
      </div>
    </section>
  );
}
