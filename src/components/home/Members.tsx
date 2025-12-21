import { Link } from "react-router-dom";
import { membersData } from "../../data/members";

const Members = () => {
  return (
    <section className="py-28 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center font-heading text-[36px] font-bold text-[#1F2937] mb-14">
          Our Team
        </h2>

        {/* Members grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {membersData.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition duration-300"
            >
              {/* Image */}
              <img
                src={m.image}
                alt={m.name}
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover"
              />

              {/* Name */}
              <h3 className="font-semibold text-[18px] text-[#111827]">
                {m.name}
              </h3>

              {/* Role */}
              <p
                className="text-sm mt-1"
                style={{ color: "#F2A31B" }}
              >
                {m.role}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/team">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
              See All Memebrs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Members;
