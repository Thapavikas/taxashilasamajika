const stats = [
  { value: "6", label: "Blocks Covered", icon: "📍" },
  { value: "2009", label: "Founded", icon: "🏛️" },
  { value: "1000+", label: "Beneficiaries", icon: "🤝" },
  { value: "4", label: "Focus Areas", icon: "🌍" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            {/* Icon */}
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: "#FFF4E0" }}
            >
              {stat.icon}
            </div>

            {/* Number */}
            <h3
              className="text-[38px] font-bold mb-1"
              style={{ color: "#F2A31B" }}
            >
              {stat.value}
            </h3>

            {/* Label */}
            <p className="text-[#6B7280] text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
