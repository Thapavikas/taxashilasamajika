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
    ]
  
    return (
      <div className="h-screen p-6 bg-gray-50">
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
      </div>
    )
  }
  
  export default Documents
  