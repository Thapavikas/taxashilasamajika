import AboutImg from "/Home/home8.jpeg";

const About = () => {
  return (
    <>
      {/* HERO */}
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

      {/* WHO WE ARE */}
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
              <strong className="text-[#1F2937] font-semibold">
                Taxashila Samajika Hagu Mahila Abhivraddhi Sansthe (R), Karadi
                Village, Ilkal Taluk, Bagalkot District
              </strong>
              , registered under No.{" "}
              <strong className="font-semibold">DRBGK/146/2009-10</strong>, has
              been actively engaged in{" "}
              <strong className="font-semibold">
                organized social development work for over 16 years across
                Karnataka India.
              </strong>
              . The organization has a proven track record in{" "}
              <strong className="font-semibold">
                planning and implementing community-based programs
              </strong>{" "}
              in health, education, environment, women empowerment, and
              livelihood development.
            </p>

            <p className="text-[#6B7280] leading-relaxed mb-6">
              In coordination with{" "}
              <strong className="font-semibold">
                departments such as AYUSH, KMPB, KBB Department, BBMP, MSME, and
                Women & Child Welfare
              </strong>
              , the Sansthe has implemented initiatives including{" "}
              <strong className="font-semibold">
                AYUSH Sevagram programs, herbal garden development in schools,
                ethnobotany programs and taxonomy projects
              </strong>{" "}
              to document traditional knowledge,{" "}
              <strong className="font-semibold">
                dyslexia awareness programs
              </strong>
              , and initiatives focused on{" "}
              <strong className="font-semibold">
                social inclusion and rehabilitation
              </strong>
              .
            </p>

            <p className="text-[#6B7280] leading-relaxed">
              Our work also includes{" "}
              <strong className="font-semibold">
                cultural promotion, school renovation, plastic reuse awareness,
                butterfly conservation projects
              </strong>
              ,{" "}
              <strong className="font-semibold">
                tailoring training for rural women
              </strong>
              , facilitation of{" "}
              <strong className="font-semibold">
                ZED Certification for MSMEs
              </strong>
              , and publication of a{" "}
              <strong className="font-semibold">
                book on traditional livestock medicine
              </strong>{" "}
              to preserve indigenous knowledge.
            </p>
          </div>

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/Home/home6.jpeg"
                alt="gallery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>

            <div className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src="/Home/home7.jpeg"
                alt="gallery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
            </div>

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

      {/* MISSION & VISION */}
      <section className="py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-heading text-[36px] font-bold text-[#1F2937] mb-14">
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
              <h3
                className="font-semibold text-[20px] mb-4"
                style={{ color: "#2563EB" }}
              >
                Our Mission
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                To empower marginalized communities, especially women, through
                education, healthcare services, biodiversity conservation,
                ethnobotany, and sustainable development programs, fostering
                self-reliance and inclusive growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
              <h3
                className="font-semibold text-[20px] mb-4"
                style={{ color: "#15803D" }}
              >
                Our Vision
              </h3>
              <p className="text-[#6B7280] leading-relaxed">
                To build a progressive and equitable society grounded in
                scientific knowledge, respect for nature, and active community
                participation, where every individual lives with dignity and
                opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* LEADERSHIP MESSAGE */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-heading text-[36px] font-bold text-[#1F2937] mb-14">
            Leadership Message
          </h2>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* President's Message */}
            <div className="relative bg-[#F9FAFB] p-8 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
              {/* Accent Bar */}
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#2563EB]" />

              {/* Quote Icon */}
              <span className="text-[28px] text-[#2563EB] opacity-30 block mb-3">
                “
              </span>

              <h3 className="font-semibold text-[20px] mb-4 text-[#2563EB]">
                President’s Message
              </h3>

              <p className="text-[#6B7280] leading-relaxed text-sm">
                As the President of{" "}
                <strong className="font-semibold text-[#1F2937]">
                  Taxashila Samajika Hagu Mahila Abhivraddhi Sansthe (R)
                </strong>
                , I am proud to lead our organization in its mission to uplift
                communities through{" "}
                <strong className="font-semibold">
                  biodiversity conservation, ethnobotany, and traditional
                  medicine
                </strong>
                . We are committed to fostering a{" "}
                <strong className="font-semibold">
                  progressive society grounded in scientific knowledge
                </strong>{" "}
                and respect for nature.
              </p>

              {/* Optional Name */}
              {/* <p className="mt-4 text-sm font-semibold text-[#1F2937]">
          — President Name
        </p> */}
            </div>

            {/* Secretary's Message */}
            <div className="relative bg-[#F9FAFB] p-8 rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
              {/* Accent Bar */}
              <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[#BE185D]" />

              {/* Quote Icon */}
              <span className="text-[28px] text-[#BE185D] opacity-30 block mb-3">
                “
              </span>

              <h3 className="font-semibold text-[20px] mb-4 text-[#BE185D]">
                Secretary’s Message
              </h3>

              <p className="text-[#6B7280] leading-relaxed text-sm">
                As the Secretary of{" "}
                <strong className="font-semibold text-[#1F2937]">
                  Taxashila Samajika Hagu Mahila Abhivraddhi Sansthe (R)
                </strong>
                , I am dedicated to working alongside our President to{" "}
                <strong className="font-semibold">empower communities</strong>,
                particularly{" "}
                <strong className="font-semibold">
                  women, children, and individuals with specific learning
                  disabilities
                </strong>
                . Our commitment to positive change drives us to deliver{" "}
                <strong className="font-semibold">
                  healthcare, education, awareness programs, and sustainable
                  development initiatives
                </strong>
                .
              </p>

              {/* Optional Name */}
              {/* <p className="mt-4 text-sm font-semibold text-[#1F2937]">
          — Secretary Name
        </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
