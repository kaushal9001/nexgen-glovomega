import React from "react";
import Form from "../Component/Form";
const auditFeatures = [
  "Risk Assessment",
  "Compliance Review",
  "Process Evaluation",
  "Internal Control Testing",
];

const auditStats = [
  {
    number: "1000+",
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
const whoNeedsAudit = [
  "Private Limited Companies",
  "LLPs",
  "Manufacturing Units",
  "Startups",
  "Growing Businesses",
  "Multi-Location Businesses",
];

const auditAreas = [
  "Financial Controls",
  "Risk Management",
  "Compliance Review",
  "Fraud Detection",
  "Inventory Management",
  "Operational Efficiency",
];

const auditProcess = [
  "Planning",
  "Risk Assessment",
  "Audit Execution",
  "Findings Report",
  "Recommendations",
  "Follow-Up Review",
];

const auditBenefits = [
  {
    title: "Risk Reduction",
    desc: "Identify and mitigate operational and financial risks.",
  },
  {
    title: "Compliance Improvement",
    desc: "Ensure adherence to regulations and policies.",
  },
  {
    title: "Fraud Prevention",
    desc: "Detect irregularities and strengthen controls.",
  },
  {
    title: "Better Decisions",
    desc: "Provide management with actionable insights.",
  },
  {
    title: "Operational Efficiency",
    desc: "Improve workflows and resource utilization.",
  },
];
const InternalAudit = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Internal Audit Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Strengthen Internal Controls & Reduce Business Risks
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Our Internal Audit services help businesses identify risks,
                improve operational efficiency, strengthen internal controls and
                ensure regulatory compliance through a systematic review of
                business processes.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {auditFeatures.map((item, index) => (
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

              <div className="flex flex-wrap gap-10 mt-10">
                {auditStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
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
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Strengthening Controls & Reducing Risks
            </h2>
          </div>

          {/* Internal Audit Hub */}

          <div className="border border-green-200 rounded-[32px] p-8 md:p-10 mb-14">
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-3">
              What is Internal Audit?
            </h3>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 text-center max-w-4xl mx-auto leading-8">
              Internal Audit is an independent and systematic evaluation of
              business operations, financial records and internal controls. It
              helps organizations identify risks, improve efficiency and
              strengthen governance while ensuring regulatory compliance.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              {/* Who Needs */}

              <div className="border border-gray-200 rounded-[28px] p-6">
                <h4 className="text-2xl font-semibold text-[#0F2A44] mb-6">
                  Who Needs Internal Audit?
                </h4>

                <div className="space-y-4">
                  {whoNeedsAudit.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-100 rounded-2xl p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Audit Areas */}

              <div className="border border-gray-200 rounded-[28px] p-6">
                <h4 className="text-2xl font-semibold text-[#0F2A44] mb-6">
                  Audit Areas
                </h4>

                <div className="space-y-4">
                  {auditAreas.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-100 rounded-2xl p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Internal Audit Process */}

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Internal Audit Process
            </h3>

            <div className="overflow-x-auto">
              <div className="min-w-[1000px] flex items-center justify-between">
                {auditProcess.map((item, index) => (
                  <div key={index} className="flex items-center  flex-1">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                        {index + 1}
                      </div>

                      <h4 className="font-semibold text-[#0F2A44] max-w-[120px]">
                        {item}
                      </h4>
                    </div>

                    {index !== auditProcess.length - 1 && (
                      <div className="flex-1 h-[2px] bg-green-200 mx-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}

          <div>
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Benefits of Internal Audit
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {auditBenefits.map((item, index) => (
                <div
                  key={index}
                  className={`border border-green-200 rounded-[28px] p-8 ${
                    index === 4 ? "md:col-span-2" : ""
                  }`}
                >
                  <h4 className="text-2xl font-semibold text-[#0F2A44] mb-4">
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

export default InternalAudit;
