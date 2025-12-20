const MissionVision = () => {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Heading */}
          <h2 className="text-center font-heading text-[36px] font-bold text-[#111827] mb-16">
            Our Mission & Vision
          </h2>
  
          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Mission */}
            <div className="bg-[#F9FAFB] rounded-3xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition">
              <div
                className="w-16 h-16 mb-6 rounded-full flex items-center justify-center text-3xl"
                style={{ backgroundColor: "#FFF4E0" }}
              >
                🎯
              </div>
  
              <h3 className="text-[24px] font-semibold text-[#111827] mb-4">
                Our Mission
              </h3>
  
              <p className="text-[#4B5563] leading-relaxed">
                Our mission is to uplift vulnerable and marginalized communities
                through inclusive rural development, quality education, women
                empowerment, and environmental sustainability. We aim to build
                self-reliant communities by promoting awareness, capacity building,
                and equitable access to opportunities.
              </p>
            </div>
  
            {/* Vision */}
            <div className="bg-[#F9FAFB] rounded-3xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition">
              <div
                className="w-16 h-16 mb-6 rounded-full flex items-center justify-center text-3xl"
                style={{ backgroundColor: "#FFF4E0" }}
              >
                🌱
              </div>
  
              <h3 className="text-[24px] font-semibold text-[#111827] mb-4">
                Our Vision
              </h3>
  
              <p className="text-[#4B5563] leading-relaxed">
                We envision an equitable and empowered society where every individual
                has access to education, healthcare, sustainable livelihoods, and a
                safe environment. Our vision is a future where communities thrive
                with dignity, resilience, and social harmony.
              </p>
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionVision;
  