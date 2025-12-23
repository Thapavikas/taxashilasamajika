type Category = "Environment" | "Health" | "Education";

const activities: {
  date: string;
  title: string;
  description: string;
  image: string;
  category: Category;
}[] = [
  {
    date: "18-May-2020",
    title: "Preparation of People’s Bio-Diversity Register (PBR)",
    description:
      "Survey and documentation of biodiversity zones including flora, fauna, and local natural resources with community participation.",
    image: "/src/assets/images/activities/activity-1.jpg",
    category: "Environment",
  },
  {
    date: "29-Feb-2020",
    title: "National AYUSH Mission – Yoga Training for School Teachers",
    description:
      "Yoga training programs for teachers and students to promote physical and mental well-being in schools.",
    image: "/src/assets/images/activities/activity-2.jpg",
    category: "Health",
  },
  {
    date: "07-Feb-2020",
    title: "Free AYUSH Health Checkup & Therapeutics Camp",
    description:
      "Health checkups and free medicines provided to people of all age groups through AYUSH medical practices.",
    image: "/src/assets/images/activities/activity-3.jpg",
    category: "Health",
  },
  {
    date: "01-Apr-2024",
    title: "Diversity, Cultural Values & Conservation of Wild Orchids",
    description:
      "Documentation of wild orchid diversity in Kodagu, their cultural significance, threats, and conservation strategies.",
    image: "/src/assets/images/activities/activity-orchids.jpg",
    category: "Environment",
  },
  {
    date: "23-Jan-2022",
    title: "AYUSH Seva Gram – Gadag District",
    description:
      "Implementation of AYUSH Seva Gram scheme across multiple taluks focusing on community healthcare.",
    image: "/src/assets/images/activities/activity-ayush-gadag.jpg",
    category: "Health",
  },
  {
    date: "26-Dec-2022",
    title: "AYUSH Seva Gram – Bagalkot District",
    description:
      "Healthcare outreach under AYUSH Seva Gram program covering villages across Bagalkot district.",
    image: "/src/assets/images/activities/activity-ayush-bagalkot.jpg",
    category: "Health",
  },
  {
    date: "08-Mar-2023",
    title: "Dyslexia Awareness Program",
    description:
      "Awareness program on Dyslexia covering identification, support strategies, and government schemes.",
    image: "/src/assets/images/activities/activity-dyslexia.jpg",
    category: "Education",
  },
];


const categoryStyles: Record<
  Category,
  {
    badge: string;
    accent: string;
  }
> = {
  Environment: {
    badge: "bg-green-100 text-green-700",
    accent: "from-green-500/30",
  },
  Health: {
    badge: "bg-amber-100 text-amber-700",
    accent: "from-amber-500/30",
  },
  Education: {
    badge: "bg-blue-100 text-blue-700",
    accent: "from-blue-500/30",
  },
};

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
              className="group bg-white rounded-[32px] overflow-hidden
            shadow-[0_20px_45px_rgba(0,0,0,0.08)]
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

                {/* Meaning-based gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    categoryStyles[item.category]?.accent
                  } via-black/10 to-transparent`}
                />

                {/* Date */}
                <span className="absolute top-5 left-5 bg-white/95 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold text-[#111827] shadow">
                  {item.date}
                </span>

                {/* Category Badge */}
                <span
                  className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold
     ${categoryStyles[item.category]?.badge}`}
                >
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-semibold text-[18px] text-[#111827] mb-4 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
