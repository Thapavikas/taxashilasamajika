import { useNavigate } from "react-router-dom";
import { activities, type Category } from "../data/activities";

const categoryStyles: Record<
  Category,
  { badge: string; accent: string }
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
  const navigate = useNavigate();

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
          {activities.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/activities/${item.id}`)}
              className="cursor-pointer group bg-white rounded-[32px] overflow-hidden
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

                {/* Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    categoryStyles[item.category].accent
                  } via-black/10 to-transparent`}
                />

                {/* Date */}
                <span className="absolute top-5 left-5 bg-white/95 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold shadow">
                  {item.date}
                </span>

                {/* Category */}
                <span
                  className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-semibold
                  ${categoryStyles[item.category].badge}`}
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

                <span className="inline-block mt-4 text-sm font-semibold text-[#F2A31B]">
                  Read more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
