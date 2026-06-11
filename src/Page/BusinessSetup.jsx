import React from "react";
import Form from "../Component/Form";
const businessSetupFeatures = [
  "Business Registration",
  "Company Formation",
  "GST & Tax Setup",
  "Compliance Assistance",
];

const businessSetupStats = [
  {
    number: "5000+",
    label: "Businesses Registered",
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
const businessTypes = [
  "Startup",
  "LLP",
  "Private Limited",
  "Partnership",
  "MSME",
  "GST Registration",
];

const whoNeedsBusinessSetup = [
  "Entrepreneurs",
  "Startups",
  "Small Businesses",
  "Freelancers",
  "Growing Companies",
  "First-Time Founders",
];

const setupDocuments = [
  "PAN Card",
  "Aadhaar Card",
  "Address Proof",
  "Business Address Proof",
  "Photographs",
  "Bank Details",
];

const setupProcess = [
  "Business Consultation",
  "Structure Selection",
  "Document Collection",
  "Registration Filing",
  "Government Approval",
  "Business Launch",
];

const setupBenefits = [
  {
    title: "Legal Identity",
    desc: "Operate your business with legal recognition.",
  },
  {
    title: "Tax Benefits",
    desc: "Access government schemes and tax advantages.",
  },
  {
    title: "Business Credibility",
    desc: "Build trust with customers and investors.",
  },
  {
    title: "Easy Funding",
    desc: "Improve opportunities for loans and investments.",
  },
];
const BusinessSetup = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Business Setup Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Start Your Business With Complete Registration & Compliance
                Support
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                From choosing the right business structure to registration, tax
                setup and compliance, we provide end-to-end assistance to help
                entrepreneurs launch and grow their businesses confidently.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {businessSetupFeatures.map((item, index) => (
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
                {businessSetupStats.map((item, index) => (
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
              Business Setup Launchpad
            </span>

            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Turn Your Business Idea Into Reality
            </h2>
          </div>

          {/* Overview */}

          <div className="grid lg:grid-cols-2 gap-8 mb-14">
            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
                What is Business Setup?
              </h3>

              <p className="text-gray-600 leading-8">
                Business Setup is the process of establishing a legally
                recognized business entity, obtaining registrations, tax
                compliance and operational approvals required to start and run a
                business successfully.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {businessTypes.map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-200 rounded-2xl p-4 text-center font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-green-200 rounded-[32px] p-8">
              <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
                Who Needs It?
              </h3>

              <div className="grid gap-4">
                {whoNeedsBusinessSetup.map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-200 rounded-2xl p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Launch Roadmap */}

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Business Setup Process
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {setupProcess.map((item, index) => (
                <div
                  key={index}
                  className="relative border border-green-200 rounded-[28px] p-6"
                >
                  <div className="text-6xl font-bold text-green-100 mb-4">
                    0{index + 1}
                  </div>

                  <h4 className="text-xl font-semibold text-[#0F2A44]">
                    {item}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}

          <div className="border border-green-200 rounded-[32px] p-8 mb-16">
            <h3 className="text-3xl font-bold text-[#0F2A44] mb-8 text-center">
              Documents Required
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {setupDocuments.map((item, index) => (
                <div
                  key={index}
                  className=" border border-green-300 rounded-2xl p-5 text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}

          <div>
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Benefits of Professional Business Setup
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {setupBenefits.map((item, index) => (
                <div
                  key={index}
                  className="border border-green-200 rounded-[32px] p-8"
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

export default BusinessSetup;
