import React from "react";
import Form from "../Component/Form";
const lwfFeatures = [
  "LWF Registration",
  "LWF Return Filing",
  "Employee Welfare Compliance",
  "Contribution Management",
];

const lwfStats = [
  {
    number: "3000+",
    label: "Businesses Assisted",
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

const lwfApplicable = [
  "Private Companies",
  "Factories",
  "Shops & Establishments",
  "LLPs",
];

const lwfDocuments = [
  "PAN Card",
  "Business Registration",
  "Address Proof",
  "Employee Details",
];

const lwfProcess = [
  {
    step: "01",
    title: "Registration",
  },
  {
    step: "02",
    title: "Verification",
  },
  {
    step: "03",
    title: "Enrollment",
  },
  {
    step: "04",
    title: "Contribution Setup",
  },
  {
    step: "05",
    title: "Compliance",
  },
];

const employeeBenefits = [
  "Medical Assistance",
  "Educational Support",
  "Housing Assistance",
  "Social Welfare Benefits",
];

const employerBenefits = [
  "Legal Compliance",
  "Employee Welfare",
  "Workforce Satisfaction",
  "Reduced Compliance Risk",
];

const lwfStats2 = [
  {
    number: "3000+",
    label: "Registrations",
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

const trustPoints = [
  "Expert Compliance Team",
  "Fast Registration",
  "Return Filing Support",
  "End-to-End Assistance",
];
const LabourWelfareFund = () => {
  return (
    <div>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Labour Welfare Fund Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Labour Welfare Fund Compliance Made Easy
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Ensure hassle-free Labour Welfare Fund registration,
                contribution management and compliance support. We help
                businesses meet statutory obligations while supporting employee
                welfare initiatives.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {lwfFeatures.map((item, index) => (
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
                {lwfStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Form */}

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
              Labour Welfare Fund Compliance & Benefits
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Complete assistance for Labour Welfare Fund registration,
              compliance management and employee welfare obligations.
            </p>
          </div>

          {/* Overview */}

          <div className="border border-green-200 rounded-[32px] p-8 mb-8">
            <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
              What is Labour Welfare Fund (LWF)?
            </h3>

            <p className="text-gray-600 leading-8">
              Labour Welfare Fund (LWF) is a statutory contribution made by
              employers and employees to support welfare initiatives such as
              education assistance, healthcare support and social welfare
              programs for workers.
            </p>
          </div>

          {/* Applicability + Documents */}

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="border border-gray-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Applicable For
              </h3>

              <div className="space-y-4">
                {lwfApplicable.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      ✓
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Required Documents
              </h3>

              <div className="space-y-4">
                {lwfDocuments.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-gray-100 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
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
            <h3 className="text-2xl font-bold text-center text-[#0F2A44] mb-8">
              Registration Process
            </h3>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
              {lwfProcess.map((item) => (
                <div
                  key={item.step}
                  className="border border-green-200 rounded-[28px] p-6 text-center"
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

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
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

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

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

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us */}

          <div className="border border-green-200 rounded-[32px] p-8">
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Why Choose Our LWF Service?
            </h3>

            <div className="grid md:grid-cols-3 gap-5 mb-10">
              <div className="border border-green-400 rounded-3xl p-6">
                <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  State-Wise Compliance
                </h4>

                <p className="text-gray-600 leading-7">
                  We help businesses comply with Labour Welfare Fund regulations
                  as per the specific requirements of each state.
                </p>
              </div>

              <div className="border border-green-400 rounded-3xl p-6">
                <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  Accurate Filing Support
                </h4>

                <p className="text-gray-600 leading-7">
                  Our experts ensure timely and accurate LWF calculations,
                  deductions, and return filing to avoid penalties.
                </p>
              </div>

              <div className="border border-green-400 rounded-3xl p-6">
                <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  End-to-End Assistance
                </h4>

                <p className="text-gray-600 leading-7">
                  From employee contribution calculations to submission and
                  compliance tracking, we manage the complete process.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {trustPoints.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-100 rounded-2xl p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    ✓
                  </div>

                  <span className="font-medium text-[#0F2A44]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LabourWelfareFund;
