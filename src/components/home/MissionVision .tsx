const MissionVision = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-center font-heading text-[36px] font-bold text-[#111827] mb-16">
          Vision , Mission , and Objectives
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Empowerment */}
          <div className="bg-[#F9FAFB] rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition">
            <h3 className="text-[22px] font-semibold mb-3 text-[#2563EB]">
              Empowerment
            </h3>
            <p className="text-[#4B5563] leading-relaxed text-sm">
              Our mission is to empower marginalized communities, especially
              women, through education, healthcare services, and sustainable
              development programs. We believe in fostering self-reliance and
              creating opportunities for all.
            </p>
          </div>

          {/* Biodiversity */}
          <div className="bg-[#F9FAFB] rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition">
            <h3 className="text-[22px] font-semibold mb-3 text-[#15803D]">
              Biodiversity Conservation
            </h3>
            <p className="text-[#4B5563] leading-relaxed text-sm">
              Ethnobotany and traditional medicine practice. Providing
              information to the next generation in a scientific manner.
            </p>
          </div>

          {/* Holistic Development */}
          <div className="bg-[#F9FAFB] rounded-3xl p-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition">
            <h3 className="text-[22px] font-semibold mb-3 text-[#0F766E]">
              Holistic Development
            </h3>
            <p className="text-[#4B5563] leading-relaxed text-sm">
              Building a progressive society with a foundation rooted in
              nature and scientific principles.
            </p>
          </div>

        </div>

        {/* Objectives */}
        <div className="bg-[#F9FAFB] rounded-3xl p-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <h3 className="text-[24px] font-semibold mb-4 text-[#1D4ED8]">
            Key Focus Areas
          </h3>
          <p className="text-[#4B5563] leading-relaxed text-sm">
            Our objectives are to promote healthcare services in rural areas,
            enhance educational opportunities for women, children, and individuals
            with specific learning or intellectual disabilities, conduct awareness
            programs on health, education, and the environment, facilitate
            sustainable development, and foster community participation and
            empowerment.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
