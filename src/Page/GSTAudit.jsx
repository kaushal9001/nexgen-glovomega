import React from "react";
import Form from "../Component/Form";
const gstAuditFeatures = [
  "GST Compliance Review",
  "GST Reconciliation",
  "Input Tax Credit Verification",
  "GST Risk Assessment",
];

const gstAuditStats = [
  {
    number: "2500+",
    label: "GST Audits Completed",
  },
  {
    number: "99%",
    label: "Compliance Success",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
];

const gstApplicability = [
  "Manufacturers",
  "Service Providers",
  "E-Commerce Sellers",
  "Exporters",
  "Large Enterprises",
  "Registered Businesses",
];

const auditScope = [
  "GST Return Review",
  "ITC Verification",
  "Invoice Matching",
  "Tax Liability Review",
  "Compliance Review",
  "Risk Assessment",
];

const gstDocuments = [
  "GST Returns",
  "Sales Register",
  "Purchase Register",
  "Invoices",
  "E-Way Bills",
  "Bank Statements",
];

const gstWorkflow = [
  "Data Collection",
  "GST Reconciliation",
  "ITC Verification",
  "Compliance Review",
  "Audit Findings",
  "Final Report",
];

const gstBenefits = [
  {
    title: "Avoid GST Notices",
    desc: "Identify compliance gaps before they become issues.",
    large: true,
  },
  {
    title: "Accurate ITC Claims",
    desc: "Ensure eligible Input Tax Credit is correctly claimed.",
  },
  {
    title: "Reduce Tax Risks",
    desc: "Minimize penalties and compliance risks.",
  },
  {
    title: "Better Compliance",
    desc: "Maintain GST records accurately.",
    large: true,
  },
];
const GSTAudit = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                GST Audit Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Simplify GST Compliance With Expert Audit Services
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Ensure accurate GST reporting, proper Input Tax Credit claims
                and complete compliance with GST regulations through our
                professional GST Audit services.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {gstAuditFeatures.map((item, index) => (
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
                {gstAuditStats.map((item, index) => (
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

            <div className="bg-gray-50  p-8 md:p-10">
              <Form />
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-10">
        <div className="">
          {/* Header */}

          <div className="text-center mb-14">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              GST Audit Intelligence Center
            </span>

            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              GST Compliance & Reconciliation Framework
            </h2>
          </div>

          {/* Top Overview */}

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 border border-green-200 rounded-[32px] p-8">
              <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
                What is GST Audit?
              </h3>

              <p className="text-gray-600 leading-8">
                GST Audit is a detailed review of GST returns, invoices, Input
                Tax Credit claims and tax records to ensure accuracy, compliance
                and proper reconciliation of GST transactions.
              </p>

              <p className="text-gray-600 leading-8 mt-4">
                A GST Audit helps businesses identify mismatches, reduce tax
                risks, improve compliance and strengthen financial transparency.
              </p>
            </div>

            <div className="space-y-5">
              <div className="border border-gray-200 rounded-[28px] p-6">
                <h4 className="text-4xl font-bold text-green-600">2500+</h4>

                <p className="text-gray-600 mt-2">GST Audits Completed</p>
              </div>

              <div className="border border-gray-200 rounded-[28px] p-6">
                <h4 className="text-4xl font-bold text-green-600">99%</h4>

                <p className="text-gray-600 mt-2">Compliance Success</p>
              </div>

              <div className="border border-gray-200 rounded-[28px] p-6">
                <h4 className="text-4xl font-bold text-green-600">10+</h4>

                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Applicability */}

          <div className="mb-14">
            <h3 className="text-2xl font-bold text-center text-[#0F2A44] mb-8">
              Who Needs GST Audit?
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {gstApplicability.map((item, index) => (
                <div
                  key={index}
                  className="px-6 py-3 border border-green-200 rounded-full bg-gray-50"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* GST Command Center */}

          <div className="grid lg:grid-cols-3 gap-8 mb-14">
            {/* Audit Scope */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-xl font-bold text-[#0F2A44] mb-6">
                Audit Scope
              </h3>

              <div className="space-y-4">
                {auditScope.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-xl font-bold text-[#0F2A44] mb-6">
                Required Documents
              </h3>

              <div className="space-y-4">
                {gstDocuments.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Quick */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-xl font-bold text-[#0F2A44] mb-6">
                Audit Outcomes
              </h3>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-2xl p-4">
                  Compliance Accuracy
                </div>

                <div className="bg-green-50 rounded-2xl p-4">
                  ITC Optimization
                </div>

                <div className="bg-green-50 rounded-2xl p-4">
                  Risk Reduction
                </div>

                <div className="bg-green-50 rounded-2xl p-4">
                  Better Reporting
                </div>
              </div>
            </div>
          </div>

          {/* Workflow */}

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              GST Audit Workflow
            </h3>

            <div className="max-w-3xl mx-auto">
              {gstWorkflow.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                      {index + 1}
                    </div>

                    <div className="border border-gray-200 rounded-2xl px-6 py-5 flex-1">
                      {item}
                    </div>
                  </div>

                  {index !== gstWorkflow.length - 1 && (
                    <div className="h-10 w-[2px] bg-green-200 ml-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bento Benefits */}

          <div>
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Benefits of GST Audit
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {gstBenefits.map((item, index) => (
                <div
                  key={index}
                  className={`border border-green-200 rounded-[32px] p-8 ${
                    item.large ? "md:col-span-2" : ""
                  }`}
                >
                  <h4 className="text-2xl font-semibold text-[#0F2A44] mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GSTAudit;
