const stats = [
  { value: "2k+", label: "Cases Done" },
  { value: "3k+", label: "Clients Helped" },
  { value: "24/7", label: "Availability" },
  { value: "10+", label: "Work Experience" },
];

export default function StatsSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => {
            // Mobile (2-col): right border on col 0 (i%2===0), bottom border on row 0 (i<2)
            // Desktop (4-col): right border on all except last
            const borderClasses = [
              i % 2 === 0 ? "border-r border-gray-200" : "",
              i < 2 ? "border-b border-gray-200 md:border-b-0" : "",
              i < 3 ? "md:border-r md:border-gray-200" : "md:border-r-0",
            ].join(" ");

            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-5 md:py-8 px-2 md:px-4 ${borderClasses}`}
              >
                <span className="text-2xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs md:text-sm text-gray-400 font-medium text-center">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
