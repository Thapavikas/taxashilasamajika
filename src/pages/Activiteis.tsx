const activities = [
  {
    date: "18-May-2020",
    title: "Preparation of People’s Bio-Diversity Register (PBR)",
    description:
      "The main basic objectives are to survey and study the entire area that falls under biodiversity zones. The collection of data regarding flora, fauna and local resources.",
    image: "/src/assets/images/activity-1.jpg",
  },
  {
    date: "29-Feb-2020",
    title: "National AYUSH Mission on YOGA Training for School Teachers",
    description:
      "To protect health of children and care to avoid disease through yoga training given to teachers and students.",
    image: "/src/assets/images/activity-2.jpg",
  },
  {
    date: "07-Feb-2020",
    title: "Free Ayush Health Checkup and Therapeutics Camp",
    description:
      "Good medical checkup and treatment for all age groups with minimal low price. Providing free medicines to all beneficiaries.",
    image: "/src/assets/images/activity-3.jpg",
  },
];

const Activities = () => {
  return (
    <section className="py-28 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest text-[#F2A31B] mb-4">
            WHAT WE DO
          </p>
          <h2 className="font-heading text-[38px] font-bold text-[#111827]">
            Our Activities
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {activities.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-[32px] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                         hover:-translate-y-4 hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)]
                         transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Date */}
                <span className="absolute top-5 left-5 bg-white/95 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold text-[#111827] shadow">
                  {item.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-semibold text-[18px] text-[#111827] mb-4 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-4 mb-6">
                  {item.description}
                </p>

                {/* CTA */}
                <button className="text-sm font-semibold text-[#F2A31B] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
