import AboutImg from "/Home/home8.jpeg"

const About = () => {
  return (
    <>
      <section
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${AboutImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <h1 className="font-heading text-[48px] md:text-[56px] font-bold text-white mb-4">
            About Us
          </h1>

          <div className="flex justify-center items-center gap-2 text-sm text-gray-300">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span>/</span>
            <span style={{ color: "#F2A31B" }}>About Us</span>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: "#F2A31B" }}
            >
              WHO WE ARE
            </p>

            <h2 className="font-heading text-[42px] font-bold text-[#1F2937] mb-6">
              Building Hope & Empowering Communities
            </h2>

            <p className="text-[#6B7280] leading-relaxed mb-6">
              TAXASHILA SAMAJIKA HAGU MAHILA ABHIVRADDHI SANSTHE (TSHMAS) is a
              non-profit organization established in 2009 with the mission of
              uplifting vulnerable and underserved communities across Karnataka.
            </p>

            <p className="text-[#6B7280] leading-relaxed mb-6">
              Our work focuses on sustainable rural development, access to
              education, environmental conservation, and empowering women
              through skill-building and leadership programs.
            </p>

            <p className="text-[#6B7280] leading-relaxed">
              Through grassroots initiatives and community participation, we
              strive to create lasting social impact and a more equitable future
              for all.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Image 1 */}
            <div className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/Home/home6.jpeg"
                alt="gallery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Image 2 */}
            <div className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/Home/home7.jpeg"
                alt="gallery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Image 3 (wide) */}
            <div className="relative h-56 col-span-2 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/Home/home8.jpeg"
                alt="gallery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES / MISSION */}
      <section className="py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-heading text-[36px] font-bold text-[#1F2937] mb-14">
            Our Mission & Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Our Mission",
                text: "To empower communities through education, equality, and sustainable development initiatives.",
              },
              {
                title: "Our Vision",
                text: "A society where every individual has access to opportunity, dignity, and growth.",
              },
              {
                title: "Our Values",
                text: "Integrity, inclusiveness, transparency, and community-driven action.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)]"
              >
                <h3
                  className="font-semibold text-[18px] mb-4"
                  style={{ color: "#F2A31B" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
