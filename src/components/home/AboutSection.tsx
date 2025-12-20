const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image cluster */}
        <div className="relative flex justify-center">
          <div className="relative w-[320px] h-[380px]">
            {/* Image 1 */}
            <img
              src="/src/assets/images/about-1.jpg"
              alt="about"
              className="absolute top-0 left-0 w-40 h-56 object-cover rounded-[80px]"
            />

            {/* Image 2 */}
            <img
              src="/src/assets/images/about-2.jpg"
              alt="about"
              className="absolute top-20 right-0 w-48 h-64 object-cover rounded-[90px]"
            />

            {/* Image 3 */}
            <img
              src="/src/assets/images/about-3.jpg"
              alt="about"
              className="absolute bottom-0 left-16 w-44 h-56 object-cover rounded-[85px]"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p
            className="font-semibold text-sm mb-3"
            style={{ color: "#F2A31B" }}
          >
            Welcome To Taxashila
          </p>

          <h2 className="font-heading text-4xl font-bold text-[#1F2937] mb-6">
            You’re the Hope of Others
          </h2>

          <p className="text-[#6B7280] leading-relaxed mb-5 max-w-lg">
            TAXASHILA SAMAJIKA HAGU MAHILA ABHIVRADDHI SANSTHE (TSHMAS) was
            established in 2009 to uplift vulnerable communities in Karnataka.
          </p>

          <p className="text-[#6B7280] leading-relaxed max-w-lg">
            The organization works in rural development, education, environment,
            and women empowerment across six blocks of Bagalkot district.
          </p>

          {/* CTA */}
          <button
            className="mt-8 px-8 py-3 rounded-full text-white text-sm font-semibold"
            style={{ backgroundColor: "#F2A31B" }}
          >
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
