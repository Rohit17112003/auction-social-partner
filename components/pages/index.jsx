"use client";
import React, { useState } from "react";
import SearchBar from "../molecules/Search";
const HomePage = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filterOptions = ["Uploaded", "Pending", "Rejected"];

  const filteredData = data.filter((item) => {
    return (
      item.month.toLowerCase().includes(search.toLowerCase()) &&
      (selectedFilter ? item.reportStatus.toLowerCase() === selectedFilter.toLowerCase() : true)
    );
  });

  return (
    <>
      <h1 className="text-2xl md:text-3xl text-dark tracking-wide font-bold mt-4">Dashboard</h1>
      <section className="mt-6 px-4 w-full rounded-xl bg-white shadow">
        <SearchBar
          placeholder="Search here..."
          value={search}
          onChange={setSearch}
          filterOptions={filterOptions}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <div className="overflow-x-auto">
          <table className="text-[#202224] w-full text-sm whitespace-nowrap min-w-[700px] md:min-w-full font-nunito md:text-lg">
            <thead className="bg-gray-100 md:text-[1rem] ">
              <tr>
                <th className="px-2 py-4 font-extrabold rounded-l-xl">Month</th>
                <th className="px-2 py-4 font-extrabold">Amount Received</th>
                <th className="px-2 py-4 font-extrabold">Beneficiaries</th>
                <th className="px-2 py-4 font-extrabold">IT Exemption Forms To Be Issued</th>
                <th className="px-2 py-4 font-extrabold">IT Exemption Forms Issued</th>
                <th className="px-2 py-4 font-extrabold rounded-r-xl">Report Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(
                (
                  { month, amountReceived, beneficiaries, formsToBeIssued, formsIssued, reportStatus },
                  index
                ) => (
                  <tr
                    key={index}
                    className={`${
                      index !== filteredData.length - 1 ? "border-b border-lightgray" : ""
                    } text-center text-[0.95rem] font-nunito font-bold`}
                  >
                    <td className="px-2 py-6 font-medium">{month}</td>
                    <td className="px-2 py-6 font-medium">{amountReceived}</td>
                    <td className="px-2 py-6 font-medium">{beneficiaries}</td>
                    <td className="px-2 py-6 font-medium">{formsToBeIssued}</td>
                    <td className="px-2 py-6 font-medium">{formsIssued}</td>
                    <td className="px-2 py-6">
                      <span
                        className={`inline-block w-[90%] rounded px-2 py-1 text-sm font-medium capitalize ${
                          reportStatus === "pending"
                            ? "bg-red-100 text-[#E7B010]"
                            : "bg-teal-100 text-[#00B69B]"
                        }`}
                      >
                        {reportStatus}
                      </span>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HomePage;

const data = [
  { month: "January", amountReceived: "50,00,000 INR", beneficiaries: 23456, formsToBeIssued: 20, formsIssued: 2, reportStatus: "Uploaded" },
  { month: "January", amountReceived: "50,00,000 INR", beneficiaries: 23456, formsToBeIssued: 20, formsIssued: 2, reportStatus: "pending" },
  { month: "January", amountReceived: "50,00,000 INR", beneficiaries: 23456, formsToBeIssued: 20, formsIssued: 2, reportStatus: "Uploaded" },
  { month: "January", amountReceived: "50,00,000 INR", beneficiaries: 23456, formsToBeIssued: 20, formsIssued: 2, reportStatus: "Uploaded" },
];
