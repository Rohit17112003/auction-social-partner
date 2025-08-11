"use client";
import SearchBar from "@/components/molecules/Search";

const HomePage = () => {
  const data = [
    {
      month: "January",
      amountReceived: 50000,
      beneficiaries: 120,
      formsToBeIssued: 30,
      formsIssued: 25,
      reportStatus: "completed",
    },
    {
      month: "February",
      amountReceived: 60000,
      beneficiaries: 140,
      formsToBeIssued: 20,
      formsIssued: 20,
      reportStatus: "pending",
    },
    {
      month: "March",
      amountReceived: 55000,
      beneficiaries: 130,
      formsToBeIssued: 25,
      formsIssued: 22,
      reportStatus: "completed",
    },
    {
      month: "April",
      amountReceived: 58000,
      beneficiaries: 125,
      formsToBeIssued: 28,
      formsIssued: 27,
      reportStatus: "completed",
    },
    {
      month: "May",
      amountReceived: 62000,
      beneficiaries: 150,
      formsToBeIssued: 18,
      formsIssued: 17,
      reportStatus: "pending",
    },
  ];

  return (
    <>
      <h1 className="text-2xl md:text-3xl text-dark tracking-wide font-bold mt-4">Dashboard</h1>
      <section className="mt-6 w-full rounded-xl bg-white shadow">
        <SearchBar placeholder="Search here..." />
        <div className="overflow-x-auto">
          <table className="text-text w-full text-sm whitespace-nowrap min-w-[700px] md:min-w-full">
            <thead className="bg-gray-100 text-center font-semibold text-xs md:text-sm">
              <tr>
                <th className="px-4 py-4">Month</th>
                <th className="px-4 py-4">Amount Received</th>
                <th className="px-4 py-4">Beneficiaries</th>
                <th className="px-4 py-4">IT Exemption Forms To Be Issued</th>
                <th className="px-4 py-4">IT Exemption Forms Issued</th>
                <th className="px-4 py-4">Report Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map(
                (
                  {
                    month,
                    amountReceived,
                    beneficiaries,
                    formsToBeIssued,
                    formsIssued,
                    reportStatus,
                  },
                  index,
                ) => (
                  <tr
                    key={index}
                    className={`${index !== data.length - 1 ? "border-b border-lightgray" : ""} text-center`}
                  >
                    <td className="px-4 py-6 font-medium">{month}</td>
                    <td className="px-4 py-6 font-medium">₹{amountReceived.toLocaleString()}</td>
                    <td className="px-4 py-6 font-medium">{beneficiaries}</td>
                    <td className="px-4 py-6 font-medium">{formsToBeIssued}</td>
                    <td className="px-4 py-6 font-medium">{formsIssued}</td>
                    <td className="px-4 py-6">
                      <span
                        className={`inline-block w-[90%] rounded px-2 py-1 text-sm font-medium capitalize ${
                          reportStatus === "pending"
                            ? "bg-red-100 text-red-600"
                            : "bg-teal-100 text-teal-600"
                        }`}
                      >
                        {reportStatus}
                      </span>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HomePage;
