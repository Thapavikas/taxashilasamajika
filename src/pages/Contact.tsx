import ContactHero from "../components/home/ContactHero";

const Contact = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="relative h-[420px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('/src/assets/images/contact-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <h1 className="font-heading text-[48px] md:text-[56px] font-bold text-white mb-4">
            Contact Us
          </h1>

          <div className="flex justify-center items-center gap-2 text-sm text-gray-300">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span>/</span>
            <span style={{ color: "#F2A31B" }}>Contact Us</span>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* LOCATION */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: "#FFF4E0" }}
            >
              📍
            </div>

            <h3 className="font-semibold text-[18px] text-[#111827] mb-2">
              Our Location
            </h3>

            <p className="text-[#6B7280] text-sm">Ilkal – 587125, Karnataka</p>
          </div>

          {/* EMAIL */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: "#FFF4E0" }}
            >
              📧
            </div>

            <h3 className="font-semibold text-[18px] text-[#111827] mb-2">
              Email Address
            </h3>

            <a
              href="mailto:taxashila.sansthe@gmail.com"
              className="text-[#6B7280] text-sm hover:text-[#F2A31B] transition block"
            >
              taxashila.sansthe@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div className="bg-[#F9FAFB] rounded-2xl p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)]">
            <div
              className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: "#FFF4E0" }}
            >
              📞
            </div>

            <h3 className="font-semibold text-[18px] text-[#111827] mb-3">
              Phone Number
            </h3>

            <div className="space-y-1 text-sm">
              <a
                href="tel:+917760166943"
                className="block text-[#6B7280] hover:text-[#F2A31B] transition"
              >
                +91 77601 66943
              </a>
              <a
                href="tel:+919448224434"
                className="block text-[#6B7280] hover:text-[#F2A31B] transition"
              >
                +91 94482 24434
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM + IMAGE */}
      <section className="py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* FORM */}
          <div>
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: "#F2A31B" }}
            >
              SEND US A MESSAGE
            </p>

            <h2 className="font-heading text-[42px] font-bold text-[#1F2937] mb-8">
              We’d Love To Hear From You
            </h2>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#F2A31B]"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#F2A31B]"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#F2A31B]"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#F2A31B]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-xl border border-[#E5E7EB] focus:outline-none focus:border-[#F2A31B]"
              />

              <button
                type="submit"
                className="px-8 py-4 rounded-full text-white text-sm font-semibold"
                style={{ backgroundColor: "#F2A31B" }}
              >
                Send Message
              </button>
            </form>
          </div>

          {/* IMAGE PLACEHOLDER */}
          <div className="h-[480px] bg-[#E5E7EB] rounded-2xl flex items-center justify-center text-[#9CA3AF]">
            Image Placeholder
          </div>
        </div>
      </section>

      <ContactHero />
    </>
  );
};

export default Contact;
