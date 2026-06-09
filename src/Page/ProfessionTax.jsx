import React from "react";
import Form from "../Component/Form";
const professionTaxFeatures = [
  "PT Registration",
  "Tax Payment Support",
  "Return Filing",
  "Compliance Assistance",
];

const professionTaxStats = [
  {
    number: "5000+",
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

const applicableCategories = [
  {
    title: "Employers",
    desc: "Companies employing staff and deducting profession tax.",
  },
  {
    title: "Businesses",
    desc: "Registered businesses liable under state rules.",
  },
  {
    title: "Professionals",
    desc: "Doctors, CAs, Architects and other professionals.",
  },
  {
    title: "Freelancers",
    desc: "Self-employed individuals in applicable states.",
  },
];
const documents = [
  "PAN Card",
  "Aadhaar Card",
  "Business Registration Proof",
  "Address Proof",
  "GST Certificate (If Applicable)",
  "Bank Details",
];

const processSteps = [
  "Registration Application",
  "Document Verification",
  "PT Registration Number",
  "Tax Payment Setup",
  "Return Filing",
  "Compliance Complete",
];

const benefits = [
  "Avoid Late Payment Charges",
  "Stay Legally Compliant",
  "Smooth Business Operations",
  "Maintain Accurate Records",
];

const penalties = [
  "Interest on Late Payment",
  "Penalty Charges",
  "Compliance Notices",
  "Legal Issues",
];
const ProfessionTax = () => {
  return (
    <div>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 ">
            {/* Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Profession Tax Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Profession Tax Registration & Compliance Made Easy
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Get expert assistance with Profession Tax registration, tax
                payments and compliance filings. Stay compliant and avoid
                penalties with our end-to-end support.
              </p>

              {/* Features */}

              <div className="flex flex-wrap gap-3 mt-8">
                {professionTaxFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-full px-4 py-3"
                  >
                    <span className="font-medium text-[#0F2A44]">✓ {item}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              {/* 
              <div className="flex gap-8 mt-10">
                {professionTaxStats.map((item, index) => (
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

            <div className=" p-8 md:p-10  border-gray-200">
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
              What is Profession Tax?
            </h2>
          </div>

          {/* Main Content */}

          <div className="border border-green-200 rounded-[32px] p-8 md:p-10 mb-10">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-[#0F2A44] mb-5">
                  Understanding Profession Tax
                </h3>

                <p className="text-gray-600 leading-8">
                  Profession Tax is a state-level tax imposed on individuals,
                  employees, professionals and businesses earning income through
                  employment, trade or profession.
                </p>

                <p className="text-gray-600 leading-8 mt-4">
                  The rules, rates and applicability vary from state to state.
                  Employers are generally responsible for deducting and
                  depositing profession tax on behalf of employees.
                </p>
              </div>

              <div>
                <div className="border border-green-300 rounded-3xl p-6">
                  <h4 className="font-semibold text-[#0F2A44] mb-4">
                    Quick Facts
                  </h4>

                  <div className="space-y-4">
                    <div>
                      <p className="text-green-600 font-bold">State Tax</p>
                      <p className="text-sm text-gray-600">
                        Applicable in selected states
                      </p>
                    </div>

                    <div>
                      <p className="text-green-600 font-bold">Monthly</p>
                      <p className="text-sm text-gray-600">Payment frequency</p>
                    </div>

                    <div>
                      <p className="text-green-600 font-bold">Compliance</p>
                      <p className="text-sm text-gray-600">
                        Registration & returns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applicable Categories */}

          <div>
            <h3 className="text-2xl font-bold text-[#0F2A44] text-center mb-8">
              Who Needs Profession Tax?
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {applicableCategories.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-3xl p-6 hover:border-green-500 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                    ✓
                  </div>

                  <h4 className="font-semibold text-[#0F2A44] mb-3">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-600 leading-6">{item.desc}</p>
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
              Documents & Registration Process
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Keep the required documents ready and follow a simple process to
              obtain Profession Tax registration and stay compliant.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Documents */}

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Required Documents
              </h3>

              <div className="grid gap-4">
                {documents.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-green-100 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      ✓
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}

            <div className=" border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Registration Process
              </h3>

              <div className="space-y-5">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>

                    <div className="pt-2">
                      <h4 className="font-semibold text-[#0F2A44]">{step}</h4>

                      {index !== processSteps.length - 1 && (
                        <div className="w-[2px] h-8 bg-green-200 ml-1 mt-3"></div>
                      )}
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
              Timely Profession Tax compliance helps businesses avoid penalties
              and maintain smooth operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 border rounded-4xl p-8 border-green-200">
            {/* Benefits */}

            <div className=" border-green-500 bg-green-50 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Benefits of Timely Compliance
              </h3>

              <div className="space-y-5">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-600 font-bold shadow-sm">
                      ✓
                    </div>

                    <span className="font-medium text-[#0F2A44]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Penalties */}

            <div className=" border-red-500 bg-red-50 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Consequences of Non-Compliance
              </h3>

              <div className="space-y-5">
                {penalties.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-500 font-bold shadow-sm">
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
    </div>
  );
};

export default ProfessionTax;
