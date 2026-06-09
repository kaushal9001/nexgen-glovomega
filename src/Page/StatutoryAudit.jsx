import React from "react";
import Form from "../Component/Form";
const statutoryAuditFeatures = [
  "Financial Statement Audit",
  "Regulatory Compliance",
  "Independent Audit Review",
  "Audit Reporting",
];

const statutoryAuditStats = [
  {
    number: "2000+",
    label: "Audits Completed",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
];

const statutoryEntities = [
  "Private Limited Companies",
  "Public Companies",
  "LLPs",
  "Large Businesses",
  "Regulated Organizations",
  "Corporate Entities",
];

const auditAreas = [
  "Financial Statements",
  "Accounting Records",
  "Tax Compliance",
  "Internal Controls",
  "Corporate Governance",
  "Regulatory Compliance",
];

const auditDocuments = [
  "Financial Statements",
  "Bank Statements",
  "GST Records",
  "Income Tax Returns",
  "Invoices & Vouchers",
  "Company Documents",
];

const auditProcess = [
  {
    step: "01",
    title: "Audit Planning",
    desc: "Understanding business operations and scope.",
  },
  {
    step: "02",
    title: "Document Collection",
    desc: "Gathering records and supporting documents.",
  },
  {
    step: "03",
    title: "Audit Examination",
    desc: "Reviewing financial and compliance records.",
  },
  {
    step: "04",
    title: "Verification",
    desc: "Testing controls and validating information.",
  },
  {
    step: "05",
    title: "Audit Report",
    desc: "Preparing findings and observations.",
  },
  {
    step: "06",
    title: "Final Submission",
    desc: "Issuing the final audit report.",
  },
];

const benefits = [
  "Regulatory Compliance",
  "Financial Transparency",
  "Investor Confidence",
  "Improved Credibility",
  "Risk Identification",
  "Better Governance",
];
const StatutoryAudit = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Statutory Audit Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Ensure Compliance With Professional Statutory Audit Services
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Our Statutory Audit services help businesses comply with legal
                requirements, improve financial transparency and build trust
                among stakeholders through independent audit reviews.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {statutoryAuditFeatures.map((item, index) => (
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
                {statutoryAuditStats.map((item, index) => (
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

            <div className="bg-gray-50 p-8 md:p-10 ">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-20">
        <div className="">
          {/* Heading */}

          <div className="text-center mb-14">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Statutory Audit Framework
            </span>

            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Statutory Audit Compliance & Reporting
            </h2>
          </div>

          {/* Overview */}

          <div className="border border-green-200 rounded-[32px] p-10 mb-10">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
                  What is Statutory Audit?
                </h3>

                <p className="text-gray-600 leading-8">
                  Statutory Audit is a legally required examination of financial
                  statements and records conducted by an independent auditor to
                  ensure compliance, accuracy and transparency.
                </p>

                <p className="text-gray-600 leading-8 mt-4">
                  It helps stakeholders, investors and regulatory authorities
                  verify that a company's financial statements present a true
                  and fair view of its financial position while complying with
                  applicable laws and accounting standards.
                </p>

                {/* Highlights */}

                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  <div className="border border-green-200 rounded-2xl p-4">
                    <h4 className="font-semibold text-[#0F2A44] mb-2">
                      Compliance
                    </h4>

                    <p className="text-sm text-gray-600">
                      Meets statutory and regulatory requirements.
                    </p>
                  </div>

                  <div className="border border-green-200 rounded-2xl p-4">
                    <h4 className="font-semibold text-[#0F2A44] mb-2">
                      Transparency
                    </h4>

                    <p className="text-sm text-gray-600">
                      Improves trust in financial reporting.
                    </p>
                  </div>

                  <div className="border border-green-200 rounded-2xl p-4">
                    <h4 className="font-semibold text-[#0F2A44] mb-2">
                      Credibility
                    </h4>

                    <p className="text-sm text-gray-600">
                      Builds confidence among stakeholders.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-[24px] p-6">
                <h4 className="font-semibold text-[#0F2A44] mb-4">
                  Who Needs It?
                </h4>

                <div className="space-y-3">
                  {statutoryEntities.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl px-4 py-3"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Hub */}

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div className="border border-gray-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Audit Areas
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {auditAreas.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-4 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Required Documents
              </h3>

              <div className="space-y-4">
                {auditDocuments.map((item, index) => (
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

          {/* Audit Process */}

          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Statutory Audit Process
            </h3>

            <div className="relative">
              <div className="absolute left-7 top-0 bottom-0 w-[2px] bg-green-200"></div>

              <div className="space-y-8">
                {auditProcess.map((item) => (
                  <div key={item.step} className="flex gap-6 relative">
                    <div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                      {item.step}
                    </div>

                    <div className="border border-gray-200 rounded-[24px] p-6 flex-1">
                      <h4 className="text-xl font-semibold text-[#0F2A44] mb-2">
                        {item.title}
                      </h4>

                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}

          <div>
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Benefits of Statutory Audit
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="border border-green-200 rounded-[28px] p-6 text-center hover:border-green-500 transition"
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

export default StatutoryAudit;
