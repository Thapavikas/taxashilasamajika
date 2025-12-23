import { governingBody } from "../../data/members";

const GoverningBody = () => {
  return (
    <section className="py-28 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center font-heading text-[38px] font-bold text-[#1F2937] mb-16">
          Governing Body
        </h2>

        {/* Wooden Frame */}
        <div
          className="relative max-w-6xl mx-auto p-6 rounded-[32px]
          bg-gradient-to-br from-[#B7793C] via-[#8B4E24] to-[#6B3A18]
          shadow-[0_30px_70px_rgba(0,0,0,0.4)]"
        >
          {/* Inner Cork Board */}
          <div
            className="relative rounded-[24px] p-14
            bg-[radial-gradient(circle_at_top_left,#F1D8A8,#E1BE82)]
            shadow-inner"
          >
            {/* Board Header */}
            <div className="text-center mb-14">
              <div
                className="inline-block bg-[#FFF7E6] px-10 py-3 rounded-full
                font-semibold text-[#92400E] shadow-md rotate-[-1deg]"
              >
                📌 Governing Body Members
              </div>
            </div>

            {/* Notes */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {governingBody.map((m, index) => (
                <div
                  key={m.name}
                  className={`
                    relative bg-[#FFFEFA] p-7 rounded-xl
                    shadow-[0_14px_32px_rgba(0,0,0,0.22)]
                    ${index % 2 === 0 ? "rotate-[-1.2deg]" : "rotate-[1.2deg]"}
                    hover:rotate-0 hover:scale-[1.02]
                    transition-all duration-300
                  `}
                >
                  {/* Push Pin */}
                  <span
                    className="absolute -top-4 left-1/2 -translate-x-1/2
                    w-5 h-5 rounded-full bg-red-500
                    border-2 border-white shadow-md"
                  />

                  {/* Cute Tape */}
                  <span
                    className="absolute -top-2 left-1/2 -translate-x-1/2
                    w-16 h-5 bg-[#FDE68A] opacity-70 rotate-[-6deg]
                    rounded-sm"
                  />

                  {/* Paper Bottom Tear */}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-2
                    bg-[linear-gradient(135deg,transparent_25%,#E5E7EB_25%,#E5E7EB_50%,transparent_50%,transparent_75%,#E5E7EB_75%,#E5E7EB)]
                    opacity-40"
                  />

                  {/* Content */}
                  <p className="font-semibold text-[#111827] mb-1">
                    {index + 1}. {m.name}
                  </p>

                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {m.address}
                  </p>

                  <p className="text-sm text-[#6B7280] mt-2">
                    <strong>Occupation:</strong> {m.occupation}
                  </p>

                  <span
                    className="inline-block mt-4 text-xs font-semibold
                    px-3 py-1 rounded-full bg-[#FFF4E0] text-[#92400E]"
                  >
                    {m.post}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GoverningBody;
