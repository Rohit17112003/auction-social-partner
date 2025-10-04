"use client";
import { useState } from "react";

export default function TaxExemption() {
  const [file, setFile] = useState(null);
  const [docs, setDocs] = useState([
    {
      name: "Form10BE_2023.pdf",
      year: "2023-24",
      date: "02-Oct-2025",
      status: "Approved",
    },
    {
      name: "Form10BE_2024.pdf",
      year: "2024-25",
      date: "04-Oct-2025",
      status: "Pending",
    },
  ]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const newDoc = {
        name: file.name,
        year: "2025-26",
        date: new Date().toLocaleDateString(),
        status: "Pending",
      };
      setDocs([...docs, newDoc]);
      setFile(null);
      alert("Form 10BE uploaded successfully, awaiting verification.");
    } else {
      alert("Please upload a file first.");
    }
  };

  return (
    <section className="p-6 space-y-6 bg-gray-50 min-h-screen font-plusjakarta text-text rounded-xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-dark font-urbanist">
          Tax Exemption Document – Form 10BE
        </h1>
        <p className="text-secondary mt-1 text-sm font-poppins">
          Upload your CA issued Form 10BE certificate for tax exemption. 
          Accepted formats: <span className="font-semibold">PDF, JPG, PNG</span> (Max 5MB).
        </p>
      </div>

      {/* Upload Form */}
      <form
        onSubmit={handleSubmit}
        className="container-bg rounded-md p-6 space-y-5"
      >
        {/* File Upload */}
        <div className="border-2 border-dashed border-secondary rounded-md p-6 text-center">
          <input
            type="file"
            id="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className="cursor-pointer text-secondary hover:text-primary font-nunito"
          >
            {file ? (
              <span className="font-medium">{file.name}</span>
            ) : (
              "Drag & drop file here or click to choose"
            )}
          </label>
        </div>

        {/* Form Fields */}
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-dark font-poppins">
              PAN Number
            </label>
            <input
              type="text"
              placeholder="Enter PAN Number"
              className="mt-1 w-full border border-secondary rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none font-plusjakarta"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark font-poppins">
              Financial Year
            </label>
            <select className="mt-1 w-full border border-secondary rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none font-plusjakarta">
              <option>2023-24</option>
              <option>2024-25</option>
              <option>2025-26</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-dark font-poppins">
              Validity Date
            </label>
            <input
              type="date"
              className="mt-1 w-full border border-secondary rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:outline-none font-plusjakarta"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary text-light px-6 py-2 rounded-md font-medium font-urbanist hover:bg-primary/90 transition"
        >
          Submit for Verification
        </button>
      </form>

      {/* Uploaded Documents Table */}
      <div className="container-bg rounded-md p-6">
        <h2 className="text-lg font-semibold text-dark mb-4 font-urbanist">
          Your Uploaded Documents
        </h2>
        <div className="overflow-x-auto scrollbar-hidden">
          <table className="w-full border border-secondary rounded-md text-sm">
            <thead className="bg-extralightgray text-dark font-poppins">
              <tr>
                <th className="py-2 px-3 text-left">File Name</th>
                <th className="py-2 px-3 text-left">Year</th>
                <th className="py-2 px-3 text-left">Date Uploaded</th>
                <th className="py-2 px-3 text-left">Status</th>
                <th className="py-2 px-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {docs.map((doc, index) => (
                <tr
                  key={index}
                  className="border-t border-extralightgray hover:bg-gray-100 transition"
                >
                  <td className="py-2 px-3 font-plusjakarta">{doc.name}</td>
                  <td className="py-2 px-3">{doc.year}</td>
                  <td className="py-2 px-3">{doc.date}</td>
                  <td
                    className={`py-2 px-3 font-medium ${
                      doc.status === "Approved"
                        ? "text-green"
                        : doc.status === "Pending"
                        ? "text-yellow"
                        : "text-red"
                    }`}
                  >
                    {doc.status}
                  </td>
                  <td className="py-2 px-3 space-x-3">
                    <button className="text-primary font-medium hover:underline">
                      View
                    </button>
                    <button className="text-red font-medium hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
