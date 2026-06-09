import React from "react";
import Form from "../Component/Form";
const itrFeatures = [
  "CA Assisted Filing",
  "Maximum Tax Savings",
  "Secure Documentation",
  "Fast Processing",
];

const itrStats = [
  {
    number: "10K+",
    label: "ITR Filed",
  },
  {
    number: "98%",
    label: "Success Rate",
  },
  {
    number: "24 Hr",
    label: "Fast Support",
  },
];

const itrReasons = [
  {
    id: 1,
    title: "Legal Compliance",
    desc: "Stay compliant with Income Tax laws and avoid penalties.",
  },
  {
    id: 2,
    title: "Claim Tax Refund",
    desc: "Get refunds for excess tax deducted through TDS or advance tax.",
  },
  {
    id: 3,
    title: "Easy Loan Approval",
    desc: "ITR acts as proof of income when applying for loans and credit cards.",
  },
  {
    id: 4,
    title: "Visa Processing",
    desc: "Many countries require ITR records during visa applications.",
  },
  {
    id: 5,
    title: "Carry Forward Losses",
    desc: "Claim and carry forward capital or business losses in future years.",
  },
  {
    id: 6,
    title: "Financial Record",
    desc: "Maintain a strong financial profile for future opportunities.",
  },
];

const itrUsers = [
  {
    title: "Salaried Employees",
    form: "ITR-1",
    desc: "Individuals earning income from salary, pension and one house property.",
  },
  {
    title: "Investors",
    form: "ITR-2",
    desc: "Individuals having capital gains, multiple properties or foreign assets.",
  },
  {
    title: "Business Owners",
    form: "ITR-3",
    desc: "People earning income through business or professional activities.",
  },
  {
    title: "Freelancers",
    form: "ITR-3 / ITR-4",
    desc: "Independent professionals and consultants with business income.",
  },
  {
    title: "Small Businesses",
    form: "ITR-4",
    desc: "Eligible taxpayers opting for presumptive taxation schemes.",
  },
  {
    title: "Rental Income Earners",
    form: "ITR-2",
    desc: "Individuals earning income from multiple house properties.",
  },
];

const requiredDocuments = [
  "PAN Card",
  "Aadhaar Card",
  "Form 16",
  "Bank Statements",
  "Salary Slips",
  "Investment Proofs",
];

const filingProcess = [
  {
    id: "01",
    title: "Submit Details",
    desc: "Share your personal and income details through our secure form.",
  },
  {
    id: "02",
    title: "Upload Documents",
    desc: "Provide required tax documents for verification and review.",
  },
  {
    id: "03",
    title: "Tax Calculation",
    desc: "Our experts calculate your tax liability and eligible deductions.",
  },
  {
    id: "04",
    title: "ITR Preparation",
    desc: "Income Tax Return is prepared accurately as per tax regulations.",
  },
  {
    id: "05",
    title: "Return Filing",
    desc: "Your ITR is filed securely with the Income Tax Department.",
  },
  {
    id: "06",
    title: "Acknowledgement",
    desc: "Receive filing confirmation and acknowledgement receipt.",
  },
];

const itrBenefits = [
  {
    title: "Claim Tax Refund",
    desc: "Get refunds for excess tax deducted through TDS or advance tax payments.",
  },
  {
    title: "Easy Loan Approval",
    desc: "ITR serves as proof of income when applying for loans and credit cards.",
  },
  {
    title: "Visa Application Support",
    desc: "Many embassies require ITR records during visa processing.",
  },
  {
    title: "Carry Forward Losses",
    desc: "Carry forward eligible business and capital losses to future years.",
  },
  {
    title: "Financial Credibility",
    desc: "Build a strong financial profile for future opportunities.",
  },
  {
    title: "Avoid Penalties",
    desc: "Stay compliant with tax regulations and avoid unnecessary penalties.",
  },
];

const taxDeductions = [
  {
    section: "80C",
    benefit: "PPF, ELSS, LIC, EPF Investments",
  },
  {
    section: "80D",
    benefit: "Health Insurance Premium",
  },
  {
    section: "80CCD(1B)",
    benefit: "NPS Additional Deduction",
  },
  {
    section: "24(b)",
    benefit: "Home Loan Interest",
  },
  {
    section: "80E",
    benefit: "Education Loan Interest",
  },
  {
    section: "HRA",
    benefit: "House Rent Allowance Exemption",
  },
];
const IncomeTaxReturnFilling = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Income Tax Return Filing
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                File Your Income Tax Return Quickly & Accurately
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Get expert assistance for hassle-free Income Tax Return filing.
                Maximize deductions, claim refunds and stay compliant with tax
                regulations.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {itrFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border border-green-200 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-5 mt-10">
                {itrStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right Form */}
            <div>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Why File Income Tax Return?
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Filing your Income Tax Return is not just a legal requirement. It
              also provides several financial and tax-related benefits that can
              help secure your future.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itrReasons.map((item) => (
              <div
                key={item.id}
                className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-green-700 font-bold text-lg">
                    0{item.id}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
              Filing ITR Helps Build Financial Credibility
            </h3>

            <p className="text-gray-700 leading-8">
              Whether you're a salaried employee, freelancer, business owner, or
              investor, filing your Income Tax Return regularly helps maintain a
              clean financial record, simplifies loan approvals, and ensures
              compliance with tax regulations.
            </p>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Who Should File ITR & Which Form to Choose?
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Different taxpayers need different ITR forms based on their income
              sources. Find the right category and applicable return form.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itrUsers.map((item, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-5">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                    <span className="text-green-700 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.form}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick ITR Form Guide */}
          <div className="mt-12 border border-green-200 rounded-3xl overflow-hidden">
            <div className="bg-green-50 px-6 py-4 border-b border-green-200">
              <h3 className="text-2xl font-bold text-[#0F2A44]">
                Quick ITR Form Guide
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left">ITR Form</th>
                    <th className="p-4 text-left">Applicable For</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    {
                      form: "ITR-1",
                      type: "Salary, Pension, One House Property",
                    },
                    {
                      form: "ITR-2",
                      type: "Capital Gains, Multiple Properties",
                    },
                    {
                      form: "ITR-3",
                      type: "Business & Professional Income",
                    },
                    {
                      form: "ITR-4",
                      type: "Presumptive Taxation Scheme",
                    },
                  ].map((item, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="p-4 font-semibold text-green-600">
                        {item.form}
                      </td>

                      <td className="p-4 text-gray-600">{item.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Documents Required & ITR Filing Process
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Keep the required documents ready and follow our simple
              step-by-step process for hassle-free Income Tax Return filing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Required Documents
              </h3>

              <div className="grid gap-4">
                {requiredDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-green-100 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                      ✓
                    </div>

                    <p className="font-medium text-[#0F2A44]">{doc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                ITR Filing Process
              </h3>

              <div className="space-y-4">
                {filingProcess.map((step) => (
                  <div
                    key={step.id}
                    className="flex gap-4 border border-green-100 rounded-2xl p-4"
                  >
                    <div className="min-w-[50px] h-[50px] bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                      {step.id}
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#0F2A44] mb-1">
                        {step.title}
                      </h4>

                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Benefits of Filing ITR & Tax Deductions
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Filing your Income Tax Return offers multiple financial benefits
              while helping you take advantage of available tax deductions and
              exemptions.
            </p>
          </div>

          <div className=" flex  flex-col gap-8">
            {/* Benefits */}
            <div className="border  border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Benefits of Filing ITR
              </h3>

              <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {itrBenefits.map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-100 rounded-2xl p-3"
                  >
                    <div className="flex items-start gap-4">
                      <div className="">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                          ✓
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#0F2A44] mb-2">
                          {item.title}
                        </h4>

                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tax Deductions */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Popular Tax Deductions & Exemptions
              </h3>

              <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {taxDeductions.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border border-green-100 rounded-2xl p-5"
                  >
                    <div>
                      <h4 className="font-semibold text-[#0F2A44]">
                        Section {item.section}
                      </h4>

                      <p className="text-gray-600 mt-1">{item.benefit}</p>
                    </div>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Tax Benefit
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncomeTaxReturnFilling;
