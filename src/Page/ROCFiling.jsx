import React from "react";
import Form from "../Component/Form";
const rocFeatures = [
  "Annual ROC Filing",
  "AOC-4 Filing",
  "MGT-7 Filing",
  "Compliance Support",
];

const rocStats = [
  {
    number: "5000+",
    label: "ROC Filings Completed",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "99%",
    label: "Compliance Success",
  },
];

const rocApplicable = [
  "Private Limited Company",
  "Limited Liability Partnership (LLP)",
  "One Person Company (OPC)",
  "Public Limited Company",
  "Section 8 Company",
  "Dormant Company",
];

const rocServices = [
  "Annual ROC Filing",
  "AOC-4 Filing",
  "MGT-7 Filing",
  "DIR-3 KYC Filing",
  "Compliance Advisory",
  "ROC Notice Support",
];

const rocForms = [
  {
    form: "AOC-4",
    purpose: "Financial Statements",
  },
  {
    form: "MGT-7",
    purpose: "Annual Return",
  },
  {
    form: "DIR-3 KYC",
    purpose: "Director KYC",
  },
  {
    form: "ADT-1",
    purpose: "Auditor Appointment",
  },
];
const applicableEntities = [
  {
    title: "Private Limited Company",
    desc: "Mandatory annual ROC filing and MCA compliance.",
  },
  {
    title: "LLP",
    desc: "Annual return and statement of accounts filing.",
  },
  {
    title: "One Person Company",
    desc: "Required to submit annual compliance forms.",
  },
  {
    title: "Public Limited Company",
    desc: "Regular ROC filing and statutory reporting.",
  },
];

const rocDocuments = [
  "PAN Card",
  "Certificate of Incorporation",
  "Financial Statements",
  "Director Details",
  "Shareholder Information",
  "Previous ROC Records",
];

const rocProcess = [
  {
    step: "01",
    title: "Collect Documents",
  },
  {
    step: "02",
    title: "Verify Information",
  },
  {
    step: "03",
    title: "Prepare ROC Forms",
  },
  {
    step: "04",
    title: "Submit to MCA",
  },
  {
    step: "05",
    title: "Compliance Completed",
  },
];

const benefits = [
  "Maintain MCA Compliance",
  "Avoid Late Filing Fees",
  "Improve Business Credibility",
  "Accurate Corporate Records",
  "Smooth Business Operations",
];

const penalties = [
  "Heavy Late Fees",
  "MCA Notices",
  "Director Disqualification",
  "Compliance Issues",
  "Legal Consequences",
];
const ROCFiling = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}

            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                ROC Filing Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Stay Compliant with Professional ROC Filing Services
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Ensure timely ROC filing and maintain full MCA compliance. Our
                experts handle annual returns, financial statement filing and
                statutory compliance so your business remains penalty-free.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {rocFeatures.map((item, index) => (
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

              <div className="grid grid-cols-3 gap-5 mt-10">
                {rocStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-gray-600 text-sm mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
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
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              ROC Filing Overview
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Understand ROC filing requirements and identify which business
              entities must comply with MCA regulations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Content */}

            <div className="bg-gray-50 border border-green-200 rounded-[32px] p-8">
              <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
                What is ROC Filing?
              </h3>

              <p className="text-gray-600 leading-8 mb-4">
                ROC (Registrar of Companies) filing is the process of submitting
                annual returns, financial statements and statutory documents to
                the Ministry of Corporate Affairs (MCA).
              </p>

              <p className="text-gray-600 leading-8 mb-6">
                Every registered company and LLP is required to file specific
                forms within prescribed due dates to maintain legal compliance
                and avoid penalties.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className=" border border-green-300 rounded-2xl p-5">
                  <h4 className="text-3xl font-bold text-green-600">AOC-4</h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Financial Statements
                  </p>
                </div>

                <div className=" border border-green-300 rounded-2xl p-5">
                  <h4 className="text-3xl font-bold text-green-600">MGT-7</h4>
                  <p className="text-sm text-gray-600 mt-2">Annual Return</p>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-[32px] p-8 text-white">
              <h3 className="text-3xl font-bold mb-8">Who Needs ROC Filing?</h3>

              <div className="space-y-4">
                {rocApplicable.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-white text-green-600 rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>

                    <h4 className="font-medium">{item}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-20">
        <div className="">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              What is ROC Filing?
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              ROC filing is a mandatory compliance requirement for registered
              companies and LLPs under the Ministry of Corporate Affairs (MCA).
            </p>
          </div>

          {/* Main Content Card */}

          <div className="border border-green-200 rounded-[32px] p-8 md:p-10 mb-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
                  Maintain MCA Compliance
                </h3>

                <p className="text-gray-600 leading-8">
                  ROC Filing refers to submitting annual returns, financial
                  statements and statutory documents with the Registrar of
                  Companies (ROC).
                </p>

                <p className="text-gray-600 leading-8 mt-4">
                  Timely filing helps companies avoid penalties, maintain legal
                  status and ensure smooth business operations.
                </p>
              </div>

              <div>
                <div className="bg-gray-50 border border-green-300 rounded-3xl p-6">
                  <h4 className="text-[#0F2A44] font-semibold mb-4">
                    Key ROC Forms
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>AOC-4</span>
                      <span className="text-green-600">Statements</span>
                    </div>

                    <div className="flex justify-between">
                      <span>MGT-7</span>
                      <span className="text-green-600">Returns</span>
                    </div>

                    <div className="flex justify-between">
                      <span>DIR-3 KYC</span>
                      <span className="text-green-600">KYC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applicable For */}

          <div>
            <h3 className="text-2xl font-bold text-[#0F2A44] text-center mb-8">
              Who Needs ROC Filing?
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {applicableEntities.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-3xl p-6 hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                    ✓
                  </div>

                  <h4 className="font-semibold text-[#0F2A44] mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-20">
        <div className="">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Documents & Process Journey
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Prepare the required documents and follow a simple ROC filing
              process to stay compliant.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents */}

            <div className=" border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Required Documents
              </h3>

              <div className="space-y-4">
                {rocDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-green-200 rounded-2xl p-4"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      ✓
                    </div>

                    <span className="font-medium text-[#0F2A44]">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}

            <div className=" border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                ROC Filing Process
              </h3>

              <div className="space-y-5">
                {rocProcess.map((item, index) => (
                  <div key={index} className="flex items-start gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>

                      {index !== rocProcess.length - 1 && (
                        <div className="w-[2px] h-12 bg-green-200"></div>
                      )}
                    </div>

                    <div className="pt-3">
                      <h4 className="font-semibold text-lg text-[#0F2A44]">
                        {item.title}
                      </h4>
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
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Benefits & Penalties
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Timely ROC filing helps companies stay compliant while delayed
              filing can lead to penalties and legal issues.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Benefits */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                  ✓
                </div>

                <h3 className="text-3xl font-bold text-[#0F2A44]">Benefits</h3>
              </div>

              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      ✓
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Penalties */}

            <div className="border border-red-200 rounded-[32px] p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                  ⚠
                </div>

                <h3 className="text-3xl font-bold text-[#0F2A44]">Penalties</h3>
              </div>

              <div className="space-y-4">
                {penalties.map((item, index) => (
                  <div
                    key={index}
                    className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      !
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
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

export default ROCFiling;
