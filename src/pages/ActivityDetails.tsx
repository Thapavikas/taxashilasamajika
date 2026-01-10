import { useParams, useNavigate } from "react-router-dom";
import { activities } from "../data/activities";

const ActivityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const activity = activities.find((a) => a.id === id);

  if (!activity) {
    return <div className="p-10 text-center">Activity not found</div>;
  }

  return (
    <section className="bg-[#F9FAFB]">
      {/* HERO */}
      <div className="relative h-[60vh] md:h-[75vh]">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 z-10 text-sm text-white bg-black/40 px-4 py-2 rounded-full backdrop-blur hover:bg-black/60 transition"
        >
          ← Back
        </button>

        <div className="absolute bottom-8 left-6 md:left-20 max-w-3xl text-white">
          <span className="inline-block mb-3 px-4 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur">
            {activity.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {activity.title}
          </h1>

          <p className="mt-4 text-white/90 text-base md:text-lg">
            {activity.description}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* TEXT */}
        <div className="space-y-14">
          {activity.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>

              {section.paragraphs?.slice(0, 2).map((text, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {text}
                </p>
              ))}

              {section.points && (
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 bg-gray-400 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* IMAGES */}
        <div className="lg:sticky lg:top-24 space-y-6">
          {/* MOBILE – horizontal scroll */}

          <div className="relative lg:hidden">
            {/* Swipe Indicator */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-gray-500">
              <span>Swipe</span>
              <span className="animate-pulse">→</span>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {activity.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="h-64 w-80 flex-shrink-0 object-cover rounded-2xl snap-center"
                />
              ))}
            </div>
          </div>

          {/* DESKTOP – masonry */}
          <div className="hidden lg:block columns-2 gap-6 space-y-6">
            {activity.images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full object-cover hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityDetails;
