import heroImg from "/gallery/14.jpeg";
const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36">
        <div className="max-w-xl text-white">
          <p className="uppercase tracking-[0.3em] text-[11px] text-gray-300 mb-5">
            Give them a chance
          </p>

          <h1 className="font-heading text-[42px] md:text-[64px] font-bold leading-[1.1]">
            We are empowered <br /> to protect <br /> the nature
          </h1>

          <div className="mt-10 flex gap-5">
            {/* Primary CTA */}
            <button
              className="px-9 py-[14px] rounded-full font-semibold text-[13px] text-white transition"
              style={{ backgroundColor: "#F2A31B" }}
            >
              About Our NGO
            </button>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/917760166943"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-[14px] rounded-full text-[13px] border border-white/60 text-white hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
