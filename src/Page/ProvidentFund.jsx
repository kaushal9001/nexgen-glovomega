import React from "react";
import Form from "../Component/Form";
const pfFeatures = [
  "PF Registration",
  "EPF Compliance",
  "Monthly PF Returns",
  "Employee Enrollment",
];

const pfStats = [
  {
    number: "5000+",
    label: "PF Registrations",
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
const pfApplicable = [
  {
    title: "Private Companies",
    desc: "Businesses employing eligible employees under EPF regulations.",
  },
  {
    title: "Factories",
    desc: "Manufacturing units covered under Provident Fund laws.",
  },
  {
    title: "LLPs",
    desc: "Limited Liability Partnerships meeting EPF applicability criteria.",
  },
  {
    title: "Shops & Establishments",
    desc: "Registered commercial establishments with eligible workforce.",
  },
];

const pfDocuments = [
  "PAN Card",
  "Business Registration",
  "Address Proof",
  "Employee Details",
  "Bank Details",
  "Authorized Signatory",
];

const pfSteps = [
  {
    step: "01",
    title: "Apply",
    desc: "Submit PF registration application.",
  },
  {
    step: "02",
    title: "Verify",
    desc: "Document verification by EPFO.",
  },
  {
    step: "03",
    title: "PF Code",
    desc: "Generate employer PF code.",
  },
  {
    step: "04",
    title: "Enroll",
    desc: "Add employee details.",
  },
  {
    step: "05",
    title: "Returns",
    desc: "Setup monthly compliance.",
  },
  {
    step: "06",
    title: "Comply",
    desc: "Maintain ongoing compliance.",
  },
];

const pfBenefits = [
  {
    title: "Employee Security",
    desc: "Provides long-term financial security to employees.",
  },
  {
    title: "Retirement Savings",
    desc: "Builds a retirement corpus through regular contributions.",
  },
  {
    title: "Legal Compliance",
    desc: "Helps businesses meet EPFO requirements.",
  },
  {
    title: "Workforce Trust",
    desc: "Improves employee confidence and satisfaction.",
  },
];
const ProvidentFund = () => {
  return (
    <div>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 ">
            {/* Left Side */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100  text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                GST Calculation Tool
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Provident Fund Registration & Compliance Made Simple
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Get complete assistance for PF registration, employee
                enrollment, monthly returns and EPF compliance. Ensure smooth
                workforce management while meeting statutory obligations.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {pfFeatures.map((item, index) => (
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

              <div className="grid grid-cols-3 gap-5 mt-10">
                {pfStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Form */}

            <div className=" p-8 md:p-10 ">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Provident Fund Overview
            </h2>
          </div>

          {/* Top Card */}

          <div className="border border-green-200 rounded-[32px] p-10 mb-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
                What is Provident Fund (PF)?
              </h3>

              <p className="text-gray-600 leading-8">
                Provident Fund (PF) is a retirement savings scheme managed by
                EPFO where both employer and employee contribute towards
                long-term financial security and retirement benefits.
              </p>

              <p className="text-gray-600 leading-8 mt-4">
                PF registration helps businesses stay compliant while providing
                employees with social security benefits.
              </p>
            </div>
          </div>

          {/* Bottom Grid */}

          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#0F2A44]">
                Who Needs PF Registration?
              </h3>

              <span className="text-green-600 font-medium">
                Applicable Entities
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {pfApplicable.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-3xl p-6 hover:border-green-500 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-5xl font-bold text-green-100">
                      0{index + 1}
                    </span>

                    <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                  </div>

                  <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 leading-7">{item.desc}</p>
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
              PF Registration & Compliance Process
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents Side */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Required Documents
              </h3>

              <div className="space-y-4">
                {pfDocuments.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 border border-green-100 rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold">
                      0{index + 1}
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Side */}

            <div className=" border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Registration Process
              </h3>

              <div className="space-y-5">
                {pfSteps.map((item, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="min-w-[55px] h-[55px] bg-green-600 text-white rounded-2xl flex items-center justify-center font-bold">
                      {item.step}
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg text-[#0F2A44]">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Benefits of PF Compliance
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Provident Fund compliance not only fulfills legal obligations but
              also strengthens employee welfare and business credibility.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-center">
            {/* Left Benefits */}

            <div className="space-y-5">
              {pfBenefits.slice(0, 2).map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-3xl p-6"
                >
                  <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Center Highlight */}

            <div className="border border-green-200 rounded-[32px] p-10 text-center">
              <h3 className="text-6xl font-bold text-green-600">EPF</h3>

              <p className="text-xl font-semibold text-[#0F2A44] mt-4">
                Employee Welfare & Compliance
              </p>

              <p className="text-gray-600 mt-5 leading-7">
                A well-managed PF system helps businesses stay compliant while
                securing employees’ future.
              </p>
            </div>

            {/* Right Benefits */}

            <div className="space-y-5">
              {pfBenefits.slice(2, 4).map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-3xl p-6"
                >
                  <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProvidentFund;
