const boardMembers = [
  {
    name: "Sri. Devanna Mudakappa Attalatti",
    role: "Member",
    image: "/src/assets/images/members/board-1.jpg",
  },
  {
    name: "Sri. Maheshkumar Vishwanathswami Navalihiremath",
    role: "Founder & Secretary",
    image: "/src/assets/images/members/board-2.jpg",
  },
  {
    name: "Sri. Narayana Sheshappa Panchagavi",
    role: "Member",
    image: "/src/assets/images/members/board-3.jpg",
  },
  {
    name: "Sri. Somashekarayya Ghanalingayya Hiremath",
    role: "Vice President",
    image: "/src/assets/images/members/board-4.jpg",
  },
  {
    name: "Sri. Mutturaj Bhimanna Karadi",
    role: "Founder & President",
    image: "/src/assets/images/members/board-5.jpg",
  },
];

const teamMembers = [
  {
    name: "Rashmi B Hiremath",
    role: "Principal Investigator",
    image: "/src/assets/images/members/team-1.jpg",
  },
  {
    name: "Riyaz M. Malagavi",
    role: "Project Coordinator",
    image: "/src/assets/images/members/team-2.jpg",
  },
];

const Members = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="relative h-[360px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/src/assets/images/team-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <h1 className="font-heading text-[48px] font-bold text-white">
            Our Team
          </h1>
        </div>
      </section>

      {/* BOARD MEMBERS */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-[36px] font-bold text-[#1F2937] mb-14 text-center">
            Board Members
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {boardMembers.map((m) => (
              <div
                key={m.name}
                className="bg-[#F9FAFB] rounded-2xl p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-36 h-36 rounded-full mx-auto mb-6 object-cover"
                />

                <h3 className="font-semibold text-[18px] text-[#111827]">
                  {m.name}
                </h3>

                <p
                  className="text-sm mt-2"
                  style={{ color: "#F2A31B" }}
                >
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-[36px] font-bold text-[#1F2937] mb-14 text-center">
            Team Members
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-36 h-36 rounded-full mx-auto mb-6 object-cover"
                />

                <h3 className="font-semibold text-[18px] text-[#111827]">
                  {m.name}
                </h3>

                <p
                  className="text-sm mt-2"
                  style={{ color: "#F2A31B" }}
                >
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
