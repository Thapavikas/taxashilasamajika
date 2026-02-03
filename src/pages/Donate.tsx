import Donateus from "../assets/Donteus.jpeg";
const Donate = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        style={{
          backgroundImage: `url(${Donateus})`,
        }}
        className="relative h-[360px] bg-[#1F2937] bg-cover flex items-center"
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-[48px] md:text-[56px] font-bold text-white mb-4">
            Donate Now
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Support our mission through <strong>Indian (Domestic)</strong> or
            <strong> Foreign (FCRA)</strong> donations to create lasting impact
            in health, education, and community development initiatives.
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
              Every contribution matters. Please choose the appropriate bank
              account based on whether your donation is{" "}
              <strong>foreign (FCRA)</strong>
              or <strong>Indian/domestic</strong>.
            </p>
          </div>

          {/* IMPORTANT NOTE */}
          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-[#1f2937]">
            <p className="font-medium">📌 Important Note:</p>
            <p className="mt-2 leading-relaxed">
              • For <strong>Foreign Contributions (FCRA)</strong>, donations
              <strong> must be made only</strong> to the
              <strong> State Bank of India (SBI) FCRA Account</strong>.
              <br />• For <strong>Indian/Domestic donations</strong>, payments
              should be made to the
              <strong> Karnataka Gramin Bank</strong> accounts.
            </p>
          </div>

          {/* PAN CARD NOTE */}
          <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5 text-[#1f2937]">
            <p className="font-medium">⚠️ Mandatory PAN Requirement:</p>
            <p className="mt-2 text-sm leading-relaxed">
              As per <strong>Income Tax Rules</strong>, accepting a donation of
              <strong> ₹2000/- or above without the donor’s PAN Card</strong> is
              a <strong>punishable offence</strong>.
              <br />
              Kindly ensure that donors provide a
              <strong> copy of their PAN Card</strong> for all donations of
              ₹2000 and above.
            </p>
          </div>

          {/* BANK DETAILS */}
          <div className="grid md:grid-cols-2 mt-14 gap-12">
            {/* BANK BOX 1 – FCRA ACCOUNT */}
            <div className="bg-white rounded-3xl p-10 shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold text-[#111827] mb-6">
                Bank Account – 1 (Foreign Transactions – FCRA)
              </h3>

              <ul className="space-y-4 text-[#374151]">
                <li>
                  <span className="font-medium">Account Name:</span> TSHMASK
                </li>
                <li>
                  <span className="font-medium">Account Number:</span>{" "}
                  40096371985 <strong>(FCRA Savings Account)</strong>
                </li>
                <li>
                  <span className="font-medium">Bank Name:</span> State Bank of
                  India (SBI)
                </li>
                <li>
                  <span className="font-medium">Branch:</span> New Delhi Main
                  Branch (FCRA Division)
                </li>
                <li>
                  <span className="font-medium">Branch Code:</span> 00691
                </li>
                <li>
                  <span className="font-medium">IFSC Code:</span> SBIN0000691
                </li>
                <li>
                  <span className="font-medium">SWIFT Code:</span> SBININBB104
                </li>
                <li>
                  <span className="font-medium">Account Open Date:</span>{" "}
                  24/03/2021
                </li>
                <li>
                  <span className="font-medium">Address:</span> FCRA Cell, 4th
                  Floor, State Bank of India, New Delhi Main Branch, 11 Sansad
                  Marg, New Delhi – 110001
                </li>
              </ul>
            </div>

            {/* BANK BOX 2 – INDIAN TRANSACTIONS */}
            <div className="bg-white rounded-3xl p-10 shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition">
              <h3 className="text-xl font-semibold text-[#111827] mb-6">
                Bank Account – 2 (Indian / Domestic Transactions)
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

          {/* FOOTER NOTE */}
          <div className="mt-20 text-center text-sm text-[#6B7280]">
            For donation receipts or compliance queries, please contact
            <span className="font-medium text-[#111827]">
              {" "}
                taxashila.sansthe@gmail.com
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
