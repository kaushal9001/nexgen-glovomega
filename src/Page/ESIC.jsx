import React from "react";
import Form from "../Component/Form";
const esicFeatures = [
  "ESIC Registration",
  "Employee Enrollment",
  "Monthly Compliance",
  "ESIC Return Filing",
];

const esicStats = [
  {
    number: "5000+",
    label: "ESIC Registrations",
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

const esicApplicable = [
  "Private Companies",
  "Factories",
  "Shops & Establishments",
  "LLPs",
];

const esicDocuments = [
  "PAN Card",
  "Business Registration",
  "Address Proof",
  "Employee Details",
];

const esicProcess = [
  {
    step: "01",
    title: "Application",
  },
  {
    step: "02",
    title: "Verification",
  },
  {
    step: "03",
    title: "ESIC Code",
  },
  {
    step: "04",
    title: "Enrollment",
  },
  {
    step: "05",
    title: "Compliance",
  },
];

const employeeBenefits = [
  "Medical Benefits",
  "Sickness Benefits",
  "Maternity Benefits",
  "Disability Benefits",
];

const employerBenefits = [
  "Legal Compliance",
  "Workforce Welfare",
  "Employee Security",
  "Reduced Risk",
];
const ESIC = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Content Side */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                ESIC Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                ESIC Registration & Employee Benefits Compliance
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Simplify ESIC registration, employee enrollment and compliance
                management with expert guidance. Ensure employee welfare while
                meeting statutory requirements effortlessly.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {esicFeatures.map((item, index) => (
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
                {esicStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Side */}

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
              ESIC Registration & Benefits
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Simplify ESIC registration, employee enrollment and compliance
              while ensuring valuable social security benefits for employees.
            </p>
          </div>

          {/* What is ESIC */}

          <div className="border border-green-200 rounded-[32px] p-8 md:p-10 mb-8">
            <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
              What is ESIC?
            </h3>

            <p className="text-gray-600 leading-8">
              Employee State Insurance Corporation (ESIC) is a social security
              scheme that provides medical, sickness, maternity and disability
              benefits to eligible employees. It helps employers fulfill
              statutory obligations while protecting employee welfare.
            </p>
          </div>

          {/* Applicable + Documents */}

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Applicable */}

            <div className="border border-gray-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Who Needs ESIC?
              </h3>

              <div className="space-y-4">
                {esicApplicable.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-semibold">
                      ✓
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents */}

            <div className="border border-gray-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Required Documents
              </h3>

              <div className="space-y-4">
                {esicDocuments.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-semibold">
                      {index + 1}
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process */}

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] text-center mb-8">
              Registration & Compliance Process
            </h3>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
              {esicProcess.map((item) => (
                <div
                  key={item.step}
                  className="border border-gray-200 rounded-[28px] p-6 text-center"
                >
                  <div className="text-5xl font-bold text-green-100 mb-4">
                    {item.step}
                  </div>

                  <h4 className="font-semibold text-[#0F2A44]">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Employee */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Employee Benefits
              </h3>

              <div className="space-y-4">
                {employeeBenefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      ✓
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Employer */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Employer Benefits
              </h3>

              <div className="space-y-4">
                {employerBenefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      ✓
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

export default ESIC;
