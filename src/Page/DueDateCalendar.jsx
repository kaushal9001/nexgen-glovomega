import React from "react";
import { Link } from "react-router-dom";

const gstReturns = [
  {
    returnType: "GSTR-1",
    frequency: "Monthly",
    dueDate: "11th of Next Month",
  },
  {
    returnType: "GSTR-3B",
    frequency: "Monthly",
    dueDate: "20th of Next Month",
  },
  {
    returnType: "GSTR-4",
    frequency: "Quarterly",
    dueDate: "18th of Month After Quarter",
  },
  {
    returnType: "GSTR-5",
    frequency: "Monthly",
    dueDate: "13th of Next Month",
  },
  {
    returnType: "GSTR-6",
    frequency: "Monthly",
    dueDate: "13th of Next Month",
  },
  {
    returnType: "GSTR-7",
    frequency: "Monthly",
    dueDate: "10th of Next Month",
  },
  {
    returnType: "GSTR-8",
    frequency: "Monthly",
    dueDate: "10th of Next Month",
  },
  {
    returnType: "GSTR-9",
    frequency: "Annual",
    dueDate: "31 December",
  },
];
const advanceTax = [
  { date: "15 June", tax: "15%" },
  { date: "15 September", tax: "45%" },
  { date: "15 December", tax: "75%" },
  { date: "15 March", tax: "100%" },
];

const tdsData = [
  {
    title: "TDS Payment",
    rows: [
      {
        period: "April - February",
        dueDate: "7th of Next Month",
      },
      {
        period: "March",
        dueDate: "30 April",
      },
    ],
  },
];

const tdsReturns = [
  {
    quarter: "Q1",
    period: "Apr - Jun",
    dueDate: "31 July",
  },
  {
    quarter: "Q2",
    period: "Jul - Sep",
    dueDate: "31 October",
  },
  {
    quarter: "Q3",
    period: "Oct - Dec",
    dueDate: "31 January",
  },
  {
    quarter: "Q4",
    period: "Jan - Mar",
    dueDate: "31 May",
  },
];
const incomeTaxData = [
  {
    compliance: "Individual ITR Filing",
    dueDate: "31 July",
  },
  {
    compliance: "Audit Cases",
    dueDate: "31 October",
  },
  {
    compliance: "Transfer Pricing Cases",
    dueDate: "30 November",
  },
  {
    compliance: "Belated Return",
    dueDate: "31 December",
  },
  {
    compliance: "Revised Return",
    dueDate: "31 December",
  },
];

const advanceTaxData = [
  {
    installment: "1st Installment",
    dueDate: "15 June",
    tax: "15%",
  },
  {
    installment: "2nd Installment",
    dueDate: "15 September",
    tax: "45%",
  },
  {
    installment: "3rd Installment",
    dueDate: "15 December",
    tax: "75%",
  },
  {
    installment: "4th Installment",
    dueDate: "15 March",
    tax: "100%",
  },
];
const DueDateCalendar = () => {
  return (
    <div>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-4xl p-10">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
            Compliance Calendar
          </span>

          <h1 className="text-5xl font-bold text-[#0F2A44] mt-5">
            Due Date Calendar
          </h1>

          <p className="text-gray-600 mt-5 max-w-3xl">
            Stay updated with GST, Income Tax, and TDS due dates to avoid
            penalties and maintain compliance.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="border border-green-200 px-4 py-2 rounded-full">
              ✓ GST Returns
            </span>
            <span className="border border-green-200 px-4 py-2 rounded-full">
              ✓ Income Tax
            </span>
            <span className="border border-green-200 px-4 py-2 rounded-full">
              ✓ TDS Compliance
            </span>
            <span className="border border-green-200 px-4 py-2 rounded-full">
              ✓ Advance Tax
            </span>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to={"https://www.incometaxindia.gov.in/tax-calendar"}
              className="relative cursor-pointer overflow-hidden border   border-green-600 text-green-600 px-4 py-3 rounded-2xl text-sm font-medium group "
            >
              <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

              <span className="relative z-10 w-40 flex items-center gap-2 justify-center group-hover:text-white transition">
                Income Tax Calendar
              </span>
            </Link>
            <Link
              to={"https://www.incometaxindia.gov.in/tax-calendar"}
              className="relative cursor-pointer overflow-hidden border   border-green-600 text-green-600 px-4 py-3 rounded-2xl text-sm font-medium group "
            >
              <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

              <span className="relative z-10 w-40 flex items-center gap-2 justify-center group-hover:text-white transition">
                TDS Calendar
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <h2 className="text-4xl font-bold text-[#0F2A44] mb-10">
          GST Due Date Calendar
        </h2>

        <div className="overflow-x-auto border border-green-200 rounded-3xl">
          <table className="w-full">
            <thead className="bg-green-50">
              <tr>
                <th className="p-4 text-left">Return Type</th>
                <th className="p-4 text-left">Frequency</th>
                <th className="p-4 text-left">Due Date</th>
              </tr>
            </thead>

            <tbody>
              {gstReturns.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{item.returnType}</td>
                  <td className="p-4">{item.frequency}</td>
                  <td className="p-4">{item.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            TDS Due Date Calendar
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Stay compliant with TDS payment and return filing deadlines to avoid
            penalties and interest.
          </p>
        </div>

        {/* TDS Payment */}
        <div className="border border-green-200 rounded-3xl overflow-hidden mb-10">
          <div className="bg-green-50 px-6 py-4 border-b border-green-200">
            <h3 className="text-2xl font-semibold text-[#0F2A44]">
              TDS Payment Due Dates
            </h3>
          </div>

          <table className="w-full">
            <thead className="bg-green-100">
              <tr>
                <th className="p-4 text-left">Period</th>
                <th className="p-4 text-left">Due Date</th>
              </tr>
            </thead>

            <tbody>
              {tdsData[0].rows.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{item.period}</td>
                  <td className="p-4">{item.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TDS Returns */}
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="bg-green-50 px-6 py-4 border-b border-green-200">
            <h3 className="text-2xl font-semibold text-[#0F2A44]">
              Quarterly TDS Return Filing
            </h3>
          </div>

          <table className="w-full">
            <thead className="bg-green-100">
              <tr>
                <th className="p-4 text-left">Quarter</th>
                <th className="p-4 text-left">Period</th>
                <th className="p-4 text-left">Due Date</th>
              </tr>
            </thead>

            <tbody>
              {tdsReturns.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4 font-medium">{item.quarter}</td>
                  <td className="p-4">{item.period}</td>
                  <td className="p-4">{item.dueDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Income Tax Due Date Calendar
          </h2>

          <div className="w-20 h-[3px] bg-gradient-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Important Income Tax return filing dates, advance tax deadlines, and
            compliance schedules for taxpayers and businesses.
          </p>
        </div>

        {/* Advance Tax */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#0F2A44] mb-6">
            Advance Tax Schedule
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advanceTaxData.map((item, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-green-700 font-bold">{index + 1}</span>
                </div>

                <h4 className="text-lg font-semibold text-[#0F2A44] mb-2">
                  {item.installment}
                </h4>

                <p className="text-gray-600">{item.dueDate}</p>

                <span className="inline-block mt-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {item.tax} Tax Payable
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ITR Due Dates */}
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="bg-green-50 px-6 py-4 border-b border-green-200">
            <h3 className="text-2xl font-semibold text-[#0F2A44]">
              Income Tax Return Filing Due Dates
            </h3>
          </div>

          <table className="w-full">
            <thead className="bg-green-100">
              <tr>
                <th className="p-4 text-left">Compliance</th>
                <th className="p-4 text-left">Due Date</th>
              </tr>
            </thead>

            <tbody>
              {incomeTaxData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4">{item.compliance}</td>
                  <td className="p-4 font-medium text-[#0F2A44]">
                    {item.dueDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="border border-green-200 rounded-3xl p-6">
            <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
              ITR Filing
            </h4>

            <p className="text-gray-600">
              File your Income Tax Return before the due date to avoid penalties
              and maintain compliance.
            </p>
          </div>

          <div className="border border-green-200 rounded-3xl p-6">
            <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
              Advance Tax
            </h4>

            <p className="text-gray-600">
              Pay advance tax in installments during the financial year to avoid
              interest liabilities.
            </p>
          </div>

          <div className="border border-green-200 rounded-3xl p-6">
            <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
              Revised Return
            </h4>

            <p className="text-gray-600">
              Correct mistakes in filed returns by submitting a revised return
              before the prescribed deadline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DueDateCalendar;
