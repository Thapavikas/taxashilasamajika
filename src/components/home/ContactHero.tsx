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
              <div className="space-y-6">
                {/* Head Office */}
                <div className="flex items-start gap-4">
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#FFF4E0" }}
                  >
                    📍
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Head Office (Registered Office)
                    </p>
                    <p className="text-gray-700">
                      Malenara Math, Kurabar Oni, Ward No. 3, Village Karadi,{" "}
                      <br />
                      Post Karadi, Taluk Ilkal, District Bagalkot, <br />
                      Karnataka – 587125, India
                    </p>
                  </div>
                </div>

                {/* Branch Office */}
                <div className="flex items-start gap-4">
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "#E8F1FF" }}
                  >
                    📍
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Branch Office (Administrative Office)
                    </p>
                    <p className="text-gray-700">
                      196/A, 40 Ft. Road, 8th Cross, 2nd Phase, <br />
                      Manjunath Nagar, Rajaji Nagar, <br />
                      Bangalore – 560010, Karnataka, India
                    </p>
                  </div>
                </div>
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
                <span> 7760166943 / 9448224434 </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Maps */}
          <div className="flex flex-col gap-6">
            {/* Registered Office */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                Registered Office
              </h3>
              <div className=" rounded-3xl overflow-hidden bg-[#E5E7EB] shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                <iframe
                  title="Registered Office Location"
                  src="https://www.google.com/maps?q=16.0963483,76.2047767&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Administration Office */}
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-800">
                Administration Office
              </h3>
              <div className=" rounded-3xl overflow-hidden bg-[#E5E7EB] shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                <iframe
                  title="Admin Office Location"
                  src="https://www.google.com/maps?q=12.9959308,77.5483556&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
