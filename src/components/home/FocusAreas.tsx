const areas = [
  { title: "Rural Development", icon: "🌾" },
  { title: "Education", icon: "📘" },
  { title: "Environment", icon: "🌱" },
  { title: "Women Empowerment", icon: "👩‍👧" },
];

const FocusAreas = () => {
  return (
    <section className="py-28 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p
            className="text-sm font-semibold mb-4 tracking-wide"
            style={{ color: "#F2A31B" }}
          >
            OUR WORK AREAS
          </p>

          <h2 className="font-heading text-[42px] font-bold text-[#1F2937] leading-tight mb-6">
            We Work For The <br /> Better Tomorrow
          </h2>

          <p className="text-[#6B7280] leading-relaxed max-w-md mb-6">
            We focus on creating long-lasting impact by empowering communities,
            promoting education, protecting the environment, and supporting
            women-led initiatives.
          </p>

          <p className="text-[#6B7280] leading-relaxed max-w-md">
            Our programs are designed to address grassroots challenges while
            building sustainable solutions for future generations.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-8">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white rounded-2xl px-8 py-10 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300"
            >
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl"
                style={{ backgroundColor: "#FFF4E0" }}
              >
                {area.icon}
              </div>

              <h3 className="font-semibold text-[18px] text-[#111827]">
                {area.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FocusAreas;
