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

const Activiteis = () => {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center font-heading text-[36px] font-bold text-[#111827] mb-16">
          Our Activities
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {activities.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl border-2 border-[#7EE6C7] bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden hover:-translate-y-3 transition duration-300"
            >
              {/* Date badge */}
              <div className="absolute top-4 left-4 bg-white px-4 py-1 rounded-full text-sm font-semibold text-[#111827] shadow">
                {item.date}
              </div>

              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 max-h-[220px] overflow-y-auto custom-scroll">
                <h3 className="font-semibold text-[18px] text-[#111827] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots (UI only) */}
        <div className="flex justify-center gap-3 mt-14">
          <span className="w-2 h-2 rounded-full bg-[#9CA3AF]" />
          <span className="w-2 h-2 rounded-full bg-[#111827]" />
          <span className="w-2 h-2 rounded-full bg-[#9CA3AF]" />
        </div>
      </div>
    </section>
  );
};

export default Activiteis;
