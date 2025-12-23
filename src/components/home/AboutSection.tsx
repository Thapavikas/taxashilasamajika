import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[420px] rounded-[32px] overflow-hidden shadow-xl">
          <img
            src="/Home/home6.jpeg"
            alt="About us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <p
            className="font-semibold text-sm mb-3"
            style={{ color: "#F2A31B" }}
          >
            Welcome To TSHMAS
          </p>

          <h2 className="font-heading text-4xl font-bold text-[#1F2937] mb-6">
            You’re the Hope of Others
          </h2>

          <p className="text-[#6B7280] leading-relaxed mb-5 max-w-lg">
            TAXASHILA SAMAJIKA HAGU MAHILA ABHIVRADDHI SANSTHE (TSHMAS) was
            established in 2009 to uplift vulnerable communities in Karnataka.
          </p>

          <p className="text-[#6B7280] leading-relaxed max-w-lg">
            The organization works in rural development, education, special education, environment,
            and women empowerment across six district in Karnataka State.
          </p>

          {/* CTA */}
          <Link to="/about" >
          <button
            className="mt-8 px-8 py-3 rounded-full text-white text-sm font-semibold"
            style={{ backgroundColor: "#F2A31B" }}
          >
            Discover More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
