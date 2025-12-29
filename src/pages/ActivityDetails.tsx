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
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 text-sm font-semibold text-gray-600 hover:text-black"
        >
          ← Back to Activities
        </button>

        {/* Header */}
        <div className="mb-12">
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold bg-gray-200">
            {activity.category}
          </span>
          <h1 className="text-4xl font-bold mb-4">{activity.title}</h1>
          <p className="text-gray-500">{activity.date}</p>
        </div>

        {/* Pinterest Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {activity.images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow hover:shadow-xl transition"
            >
              <img
                src={img}
                alt=""
                className="w-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>

        {/* Details */} 
        <div className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">
            About this activity
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {activity.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActivityDetails;
