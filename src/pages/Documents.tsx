const Documents = () => {
  const documents = [
    "Registration Copy",
    "Renewal Copy",
    "Bylaw",
    "Audit Report",
    "IT Returns",
    "10BB",
    "10BD",
    "12A",
    "80G",
    "CSR-1",
    "FCRA",
    "PAN",
    "TAN",
    "GST",
    "ESI",
    "PF",
    "Form No C",
    "PT",
    "Governing Body",
    "Darpan",
    "Experience Letters",
    "Bank A/C",
  ];

  const uploadedDocs = [
    {
      name: "ANNUAL REPORT 2022-2023",
      file: "images/docs/ANNUAL_REPORT_2022-2023_compressed.pdf",
    },
    {
      name: "Annual Report 2025",
      file: "images/docs/Annual_Report_2025_(2).pdf",
    },
    {
      name: "ANNUAL REPORT 2023-2024",
      file: "images/docs/ANNUAL-REPORT-2023-2024_F_compressed.pdf",
    },
  ];

  return (
    <div className="min-h-screen p-4 pb-24 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border p-4 font-semibold text-gray-700 hover:shadow-md transition"
          >
            {doc}
          </div>
        ))}
      </div>

      {/* Uploaded Documents */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Available Documents
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uploadedDocs.map((doc, index) => (
            <a
              key={index}
              href={doc.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between mb-4">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-md">
                  PDF
                </div>

                <span className="text-xs font-medium text-gray-400">
                  Document
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 text-lg leading-snug mb-2 group-hover:text-indigo-600 transition">
                {doc.name}
              </h3>

              {/* Sub text */}
              <p className="text-sm text-gray-500 mb-5">
                Click below to open this document
              </p>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">PDF File</span>

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 group-hover:underline">
                  View Document →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
