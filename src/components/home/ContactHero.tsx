const ContactHero = () => {
  return (
    <section className="py-28 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p
            className="text-sm font-semibold tracking-widest mb-4"
            style={{ color: "#F2A31B" }}
          >
            CONTACT WITH US
          </p>

          <h2 className="font-heading text-[40px] font-bold text-[#111827] mb-5">
            Let’s Start a Conversation
          </h2>

          <p className="text-[#6B7280] leading-relaxed">
            We would love to hear from you. Whether you want to volunteer,
            collaborate, or simply know more about our work.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          
          {/* LEFT: Contact Info */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            <h3 className="text-[22px] font-semibold text-[#111827] mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-[#4B5563]">
              <div className="flex items-start gap-4">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FFF4E0" }}
                >
                  📍
                </span>
                <span>Ilkal – 587125, Karnataka</span>
              </div>

              <div className="flex items-start gap-4">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FFF4E0" }}
                >
                  📧
                </span>
                <span>taxashila.sansthe@gmail.com</span>
              </div>

              <div className="flex items-start gap-4">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#FFF4E0" }}
                >
                  📞
                </span>
                <span>  7760166943 / 9448224434 </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Map / Image */}
          <div className="h-full min-h-[260px] rounded-3xl bg-[#E5E7EB] flex items-center justify-center text-[#6B7280] shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
            Map / Office Image
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;
