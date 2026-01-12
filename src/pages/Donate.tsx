const Donate = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="relative h-[360px] bg-[#1F2937] flex items-center">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-[48px] md:text-[56px] font-bold text-white mb-4">
            Donate Now
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your contribution helps us create meaningful impact in communities
            through health, education, and environmental initiatives.
          </p>
        </div>
      </section>

 

      {/* DONATION CONTENT */}
      <section className="py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Intro */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm font-semibold tracking-widest text-[#F2A31B] mb-4">
              SUPPORT OUR CAUSE
            </p>
            <h2 className="font-heading text-[38px] font-bold text-[#111827] mb-6">
              Help Us Make a Difference
            </h2>
            <p className="text-[#4B5563] leading-relaxed">
              Every donation, big or small, supports our programs and helps us
              reach more people in need. You can contribute using the bank
              details below.
            </p>
          </div>

                         {/* NOTE */}
          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-[#1f2937]">
            <p className="font-medium">📌 Important Note:</p>
            <p className="mt-2">
              • For <strong>FCRA (foreign contribution)</strong> transactions,
              please use the
              <strong> State Bank of India (SBI) FCRA account</strong> only.
              <br />• For <strong>all Indian/domestic transactions</strong>,
              payments can be made to
              <strong> either SBI or Karnataka Gramin Bank accounts</strong>.
            </p>
          </div>
          {/* BANK DETAILS */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* BANK BOX 1 */}
            <div className="bg-white rounded-3xl p-10 shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold text-[#111827] mb-6">
                Bank Account – 1 (FCRA Account)
              </h3>

              <ul className="space-y-4 text-[#374151]">
                <li>
                  <span className="font-medium">Account Name:</span> TSHMASK
                </li>
                <li>
                  <span className="font-medium">Account Number:</span>{" "}
                  00000040096371985
                </li>
                <li>
                  <span className="font-medium">Bank Name:</span> State Bank of
                  India (SBI)
                </li>
                <li>
                  <span className="font-medium">Branch:</span> Bagalkot,
                  Karnataka – 587125
                </li>
                <li>
                  <span className="font-medium">Account Description:</span>{" "}
                  Designated FCRA SB A/C (Non-Individual)
                </li>
                <li>
                  <span className="font-medium">IFSC Code:</span> SBIN0000691
                </li>
                <li>
                  <span className="font-medium">MICR Code:</span> 110002087
                </li>
                <li>
                  <span className="font-medium">CIF No:</span> 90748586673
                </li>
              </ul>
            </div>

            {/* BANK BOX 2 */}
            <div className="bg-white rounded-3xl p-10 shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold text-[#111827] mb-6">
                Bank Account – 2 (Indian Transactions)
              </h3>

              <ul className="space-y-4 text-[#374151]">
                <li>
                  <span className="font-medium">Account Name:</span> TAXASHILA
                  SAMAJIKA HAGU MAHILA ABHIVRUDDHI SANSTHE (R) KARADI
                </li>
                <li>
                  <span className="font-medium">Account Number:</span>{" "}
                  89078093336
                </li>
                <li>
                  <span className="font-medium">Bank Name:</span> Karnataka
                  Gramin Bank
                </li>
                <li>
                  <span className="font-medium">Branch:</span> Ilkal Branch
                </li>
                <li>
                  <span className="font-medium">IFSC Code:</span> PKGB0013433
                </li>
                <li>
                  <span className="font-medium">Address:</span> Ilkal, Hungund
                  Taluk, Bagalkote District – 587125
                </li>
              </ul>
            </div>
          </div>



          {/* NOTE */}
          <div className="mt-20 text-center text-sm text-[#6B7280]">
            For donation receipts or queries, please contact us at
            <span className="font-medium text-[#111827]">
              {" "}
              support@yourngo.org
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
