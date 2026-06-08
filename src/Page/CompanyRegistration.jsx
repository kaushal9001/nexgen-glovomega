import React from "react";
import Form from "../Component/Form";

const registrationFeatures = [
  "Private Limited Company",
  "LLP Registration",
  "OPC Registration",
  "Startup Registration",
];

const registrationStats = [
  {
    number: "5000+",
    label: "Companies Registered",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
];

const companyTypes = [
  {
    short: "PVT",
    title: "Private Limited Company",
  },
  {
    short: "LLP",
    title: "Limited Liability Partnership",
  },
  {
    short: "OPC",
    title: "One Person Company",
  },
  {
    short: "PLC",
    title: "Public Limited Company",
  },
];

const requiredDocuments = [
  "PAN Card of Directors",
  "Aadhaar Card",
  "Passport Size Photograph",
  "Address Proof",
  "Business Address Proof",
  "Email & Mobile Number",
];

const registrationProcess = [
  {
    step: "01",
    title: "Choose Company Type",
  },
  {
    step: "02",
    title: "Submit Documents",
  },
  {
    step: "03",
    title: "Name Approval",
  },
  {
    step: "04",
    title: "MCA Registration",
  },
  {
    step: "05",
    title: "Certificate Issued",
  },
];
const companyBenefits = [
  {
    title: "Separate Legal Identity",
    desc: "Your company gets its own legal existence apart from its owners.",
  },
  {
    title: "Limited Liability",
    desc: "Protect personal assets from business liabilities and debts.",
  },
  {
    title: "Business Credibility",
    desc: "Build trust among customers, investors and financial institutions.",
  },
  {
    title: "Easy Fund Raising",
    desc: "Attract investors and raise capital for business growth.",
  },
  {
    title: "Perpetual Succession",
    desc: "The company continues even if ownership changes.",
  },
  {
    title: "Tax Benefits",
    desc: "Avail eligible tax benefits and business deductions.",
  },
];

const registrationStats2 = [
  {
    number: "5000+",
    label: "Companies Registered",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
  {
    number: "24/7",
    label: "Expert Support",
  },
];

const trustPoints = [
  "Experienced Registration Experts",
  "Fast & Hassle-Free Process",
  "Affordable Pricing",
  "Complete Documentation Support",
  "Transparent Communication",
  "Post Registration Assistance",
];
const CompanyRegistration = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Company Registration
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Start Your Business with Hassle-Free Company Registration
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Register your company with expert guidance and complete
                compliance support. We help entrepreneurs and startups establish
                their business legally and efficiently.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {registrationFeatures.map((item, index) => (
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
                {registrationStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-gray-600 text-sm">{item.label}</p>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}

            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Company Formation
              </span>

              <h2 className="text-4xl font-bold text-[#0F2A44] mt-5">
                What is Company Registration?
              </h2>

              <p className="text-gray-600 mt-6 leading-8">
                Company registration is the legal process of establishing a
                business entity under the Companies Act. It provides your
                business with a separate legal identity, enhances credibility
                and ensures compliance with government regulations.
              </p>

              <p className="text-gray-600 mt-4 leading-8">
                Registering a company allows businesses to raise funds, protect
                owners through limited liability and build trust among
                customers, investors and partners.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                <span className="bg-green-50 border border-green-200 px-4 py-2 rounded-full text-sm">
                  Legal Identity
                </span>

                <span className="bg-green-50 border border-green-200 px-4 py-2 rounded-full text-sm">
                  Limited Liability
                </span>

                <span className="bg-green-50 border border-green-200 px-4 py-2 rounded-full text-sm">
                  Business Credibility
                </span>
              </div>
            </div>

            {/* Right Types Showcase */}

            <div>
              <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-[32px] p-8">
                <h3 className="text-3xl font-bold text-white mb-8">
                  Types of Company Registration
                </h3>

                <div className="grid grid-cols-2 gap-5">
                  {companyTypes.map((item, index) => (
                    <div key={index} className="bg-white rounded-3xl p-6">
                      <h4 className="text-4xl font-bold text-green-600">
                        {item.short}
                      </h4>

                      <p className="text-[#0F2A44] font-medium mt-3">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-20">
        <div className="">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Documents Required & Registration Process
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Keep your documents ready and follow our simple registration
              process to establish your company quickly and legally.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Documents */}

            <div className=" border border-green-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
                Required Documents
              </h3>

              <div className="space-y-4">
                {requiredDocuments.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border border-green-100 rounded-2xl p-4"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold">
                      ✓
                    </div>

                    <h4 className="font-medium text-[#0F2A44]">{item}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}

            <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-[32px] p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Registration Process</h3>

              <div className="space-y-5">
                {registrationProcess.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 bg-white/10 rounded-2xl p-4 backdrop-blur-sm"
                  >
                    <div className="min-w-[60px] h-[60px] bg-white text-green-600 rounded-2xl flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>

                    <div>
                      <h4 className="font-semibold text-lg">{item.title}</h4>
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
              Benefits of Company Registration
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Registering your company provides legal protection, business
              credibility and long-term growth opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Highlight */}

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-[32px] p-8 text-white h-full flex flex-col justify-center">
                <h3 className="text-6xl font-bold">100%</h3>

                <p className="text-xl mt-3">Legal Business Recognition</p>

                <div className="border-t border-white/20 my-8"></div>

                <h4 className="text-3xl font-bold">Grow With Confidence</h4>

                <p className="mt-4 text-green-50 leading-7">
                  Company registration helps businesses establish trust, secure
                  funding and operate professionally.
                </p>
              </div>
            </div>

            {/* Benefits Grid */}

            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-5">
                {companyBenefits.map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 font-bold mb-4">
                      ✓
                    </div>

                    <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-7">{item.desc}</p>
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
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Why Choose Our Registration Service?
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              We simplify the company registration process with expert guidance,
              accurate documentation and dedicated support at every stage.
            </p>
          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {registrationStats2.map((item, index) => (
              <div
                key={index}
                className=" border border-green-200 rounded-3xl p-8 text-center hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-5xl font-bold text-green-600">
                  {item.number}
                </h3>

                <p className="text-gray-600 mt-3">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Trust Section */}

          <div className=" border border-green-200 rounded-[32px] p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border border-green-100 rounded-2xl p-5"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 font-bold">
                    ✓
                  </div>

                  <h4 className="font-medium text-[#0F2A44]">{point}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyRegistration;
