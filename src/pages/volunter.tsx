const volunteerRoles = [
  {
    title: "Community Outreach",
    desc: "Engage directly with communities and support grassroots initiatives.",
    icon: "🤝",
  },
  {
    title: "Teaching & Education",
    desc: "Support children through education and mentoring programs.",
    icon: "📚",
  },
  {
    title: "Environmental Action",
    desc: "Participate in environmental protection and sustainability drives.",
    icon: "🌱",
  },
  {
    title: "Women Empowerment",
    desc: "Assist skill development and leadership programs for women.",
    icon: "👩‍👧",
  },
];

const Volunter = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/src/assets/images/volunteer-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <h1 className="font-heading text-[48px] md:text-[56px] font-bold text-white mb-4">
            Become a Volunteer
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Join hands with us to create lasting change and make a real impact
            in people’s lives.
          </p>
        </div>
      </section>

      {/* VOLUNTEERS GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-sm font-semibold text-center mb-4"
            style={{ color: "#F2A31B" }}
          >
            OUR VOLUNTEERS
          </p>

          <h2 className="font-heading text-[38px] font-bold text-[#1F2937] text-center mb-6">
            People Making a Difference
          </h2>

          <p className="text-[#6B7280] text-center max-w-2xl mx-auto mb-16">
            Our volunteers are the heart of our mission. Their dedication and
            compassion help us create real change in communities.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-[260px] bg-[#E5E7EB] rounded-2xl flex items-center justify-center text-[#9CA3AF]"
              >
                Volunteer Image
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VOLUNTEER */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: "#F2A31B" }}
            >
              WHY VOLUNTEER WITH US
            </p>

            <h2 className="font-heading text-[42px] font-bold text-[#1F2937] mb-6">
              Make a Difference Today
            </h2>

            <p className="text-[#6B7280] leading-relaxed mb-6">
              Volunteering with our organization allows you to contribute your
              time and skills toward meaningful causes that uplift communities
              and empower individuals.
            </p>

            <p className="text-[#6B7280] leading-relaxed">
              Whether you’re passionate about education, social development, or
              environmental protection, there’s a place for you here.
            </p>
          </div>

          <div className="h-[420px] bg-[#E5E7EB] rounded-2xl flex items-center justify-center text-[#9CA3AF]">
            Image Placeholder
          </div>
        </div>
      </section>

      {/* VOLUNTEER ROLES */}
      <section className="py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-[36px] font-bold text-[#1F2937] text-center mb-16">
            Volunteer Opportunities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {volunteerRoles.map((role) => (
              <div
                key={role.title}
                className="bg-white rounded-2xl p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition"
              >
                <div
                  className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl"
                  style={{ backgroundColor: "#FFF4E0" }}
                >
                  {role.icon}
                </div>

                <h3 className="font-semibold text-[18px] text-[#111827] mb-3">
                  {role.title}
                </h3>

                <p className="text-[#6B7280] text-sm leading-relaxed">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER FORM */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: "#F2A31B" }}
            >
              JOIN US
            </p>

            <h2 className="font-heading text-[42px] font-bold text-[#1F2937] mb-8">
              Volunteer Registration
            </h2>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#F2A31B]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#F2A31B]"
                />
              </div>

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#F2A31B]"
              />

              {/* IMAGE UPLOAD */}
              <div>
                <label className="block text-sm font-medium text-[#374151] mb-2">
                  Upload Your Photo
                </label>

                <div className="relative border-2 border-dashed border-[#E5E7EB] rounded-xl p-6 text-center hover:border-[#F2A31B] transition">
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#FFF4E0] flex items-center justify-center text-xl">
                      📤
                    </div>

                    <p className="text-sm text-[#374151] font-medium">
                      Click to upload or drag & drop
                    </p>

                    <p className="text-xs text-[#9CA3AF]">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                <p className="text-xs text-[#9CA3AF] mt-2">
                  This photo will be used only for volunteer identification.
                </p>
              </div>

              <textarea
                rows={5}
                placeholder="Why do you want to volunteer?"
                className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#F2A31B]"
              />

              <button
                type="submit"
                className="px-8 py-4 rounded-full text-white text-sm font-semibold hover:opacity-90 transition"
                style={{ backgroundColor: "#F2A31B" }}
              >
                Submit Application
              </button>
            </form>
          </div>

          <div className="h-[480px] bg-[#E5E7EB] rounded-2xl flex items-center justify-center text-[#9CA3AF]">
            Image Placeholder
          </div>
        </div>
      </section>
    </>
  );
};

export default Volunter;
