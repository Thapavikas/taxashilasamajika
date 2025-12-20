const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/images/hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36">
        <div className="max-w-xl text-white">
          <p className="uppercase tracking-[0.3em] text-[11px] text-gray-300 mb-5">
            Give them a chance
          </p>

          <h1 className="font-heading text-[42px] md:text-[64px] font-bold leading-[1.1]">
            Give The Child <br />
            The Gift <br />
            Of Education.
          </h1>

          <p className="mt-7 text-gray-300 text-[15px] leading-relaxed max-w-md">
            An integrated approach to build an equitable and empowered society.
          </p>

          <div className="mt-10 flex gap-5">
            {/* Primary CTA */}
            <button
              className="px-9 py-[14px] rounded-full font-semibold text-[13px] text-white transition"
              style={{ backgroundColor: "#F2A31B" }}
            >
              About Our NGO
            </button>

            {/* Secondary CTA */}
            <button className="px-9 py-[14px] rounded-full text-[13px] border border-white/60 text-white hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
