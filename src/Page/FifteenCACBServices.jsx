import React from "react";
import Form from "../Component/Form";
const form15Features = [
  "Form 15CA Filing",
  "Form 15CB Certification",
  "Foreign Remittance Compliance",
  "Income Tax Compliance",
];

const form15Stats = [
  {
    number: "3000+",
    label: "Forms Filed",
  },
  {
    number: "99%",
    label: "Success Rate",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
];
const whoNeedsIt = [
  "Importers",
  "Exporters",
  "Foreign Vendor Payments",
  "NRI Transactions",
  "Software Purchases",
  "Overseas Consultancy Fees",
];

const remittanceCases = [
  "Royalty Payments",
  "Foreign Vendor Payments",
  "Commission Payments",
  "Technical Service Fees",
  "Software Licensing",
  "Overseas Consultancy",
];

const documents = [
  "PAN Card",
  "Invoice Copy",
  "Remittance Details",
  "Agreement / Contract",
  "Bank Details",
  "Tax Residency Certificate",
];

const filingSteps = [
  "Document Review",
  "Taxability Assessment",
  "CA Verification",
  "15CB Certification",
  "15CA Filing",
  "Fund Transfer",
];

const benefits = [
  "Smooth Foreign Remittance",
  "Income Tax Compliance",
  "Avoid Tax Notices",
  "Faster Bank Processing",
  "Accurate Tax Deduction",
  "Reduced Compliance Risk",
];
const FifteenCACBServices = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                15CA / 15CB Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Simplify Foreign Remittance Compliance With Expert 15CA / 15CB
                Filing
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Get professional assistance for Form 15CA filing and Form 15CB
                certification to ensure smooth international payments while
                staying compliant with Income Tax regulations.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {form15Features.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        ✓
                      </div>

                      <span className="font-medium text-[#0F2A44]">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}

              {/* <div className="flex flex-wrap gap-10 mt-10">
                {form15Stats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right Form */}

            <div className="bg-gray-50 p-8 md:p-10">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="">
          {/* Heading */}

          <div className="text-center mb-16">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Foreign Remittance Compliance Hub
            </span>

            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Form 15CA & 15CB Filing Process
            </h2>
          </div>

          {/* Top Section */}

          <div className="grid lg:grid-cols-3 gap-8 mb-14">
            {/* About */}

            <div className="lg:col-span-2 border border-green-200 rounded-[32px] p-8">
              <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
                What is Form 15CA & 15CB?
              </h3>

              <p className="text-gray-600 leading-8">
                Form 15CA is a declaration filed with the Income Tax Department
                before making certain foreign remittances, while Form 15CB is a
                certificate issued by a Chartered Accountant certifying the
                taxability of the transaction.
              </p>

              <p className="text-gray-600 leading-8 mt-4">
                Together, these forms ensure that foreign payments comply with
                Indian tax regulations and banking requirements.
              </p>

              {/* Highlights */}

              <div className="grid md:grid-cols-3 gap-5 mt-8">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <h4 className="font-semibold text-[#0F2A44] mb-2">
                    Tax Compliance
                  </h4>

                  <p className="text-sm text-gray-600">
                    Ensures foreign remittances comply with Income Tax
                    provisions.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <h4 className="font-semibold text-[#0F2A44] mb-2">
                    CA Certification
                  </h4>

                  <p className="text-sm text-gray-600">
                    Form 15CB certifies taxability before overseas payments.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <h4 className="font-semibold text-[#0F2A44] mb-2">
                    Bank Requirement
                  </h4>

                  <p className="text-sm text-gray-600">
                    Required by banks for processing many international
                    transfers.
                  </p>
                </div>
              </div>
            </div>

            {/* Who Needs It */}

            <div className="border border-gray-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-5">
                Who Needs It?
              </h3>

              <div className="space-y-3">
                {whoNeedsIt.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* When Required */}

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              When Is 15CA / 15CB Required?
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {remittanceCases.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 border border-green-300 rounded-full"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Filing Journey */}

          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            {/* Process */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Filing Journey
              </h3>

              <div className="space-y-4">
                {filingSteps.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center font-semibold text-green-700">
                        {index + 1}
                      </div>

                      <div className="flex-1 border border-gray-200 rounded-2xl px-5 py-4">
                        {item}
                      </div>
                    </div>

                    {index !== filingSteps.length - 1 && (
                      <div className="h-6 w-[2px] bg-green-200 ml-6 mt-1"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Required Documents
              </h3>

              <div className="grid gap-4">
                {documents.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      {index + 1}
                    </div>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}

          <div>
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Benefits of Proper Filing
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="border border-green-200 rounded-[28px] p-6 text-center"
                >
                  <h4 className="font-semibold text-[#0F2A44]">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FifteenCACBServices;
