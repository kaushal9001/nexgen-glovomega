import React from "react";
import Form from "../Component/Form";

const gstFeatures = [
  "New GST Registration",
  "GST Return Filing",
  "GST Compliance Support",
  "GST Amendment Services",
];

const gstStats = [
  {
    number: "5000+",
    label: "GST Registrations",
  },
  {
    number: "10000+",
    label: "Returns Filed",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
];
const serviceRequiredOptions = [
  "GST Registration",
  "GST Return Filing",
  "GST Amendment",
  "GST Cancellation",
  "GST Notice Handling",
  "GST Consultation",
];

const businessTypes = [
  "Proprietorship",
  "Partnership",
  "Private Limited",
  "LLP",
  "One Person Company",
  "E-Commerce Business",
];

const gstImportance = [
  {
    id: 1,
    title: "Legal Compliance",
    desc: "Operate your business legally and comply with GST regulations.",
  },
  {
    id: 2,
    title: "Input Tax Credit",
    desc: "Claim GST paid on business purchases and reduce overall tax liability.",
  },
  {
    id: 3,
    title: "Business Credibility",
    desc: "A GST registered business appears more trustworthy to customers and partners.",
  },
  {
    id: 4,
    title: "Sell Across India",
    desc: "Expand your business nationwide without unnecessary tax restrictions.",
  },
  {
    id: 5,
    title: "Government Tenders",
    desc: "Many government contracts require GST registration eligibility.",
  },
  {
    id: 6,
    title: "Avoid Penalties",
    desc: "Prevent fines and legal issues caused by non-compliance with GST laws.",
  },
];

const gstServices = [
  {
    id: 1,
    title: "GST Registration",
    desc: "Complete GST registration support for new businesses and startups.",
    tag: "Registration",
  },
  {
    id: 2,
    title: "GST Return Filing",
    desc: "Accurate and timely filing of monthly, quarterly and annual GST returns.",
    tag: "Returns",
  },
  {
    id: 3,
    title: "GST Amendment",
    desc: "Update business details, address, bank information and other GST changes.",
    tag: "Amendment",
  },
  {
    id: 4,
    title: "GST Cancellation",
    desc: "Assistance with voluntary or mandatory GST registration cancellation.",
    tag: "Cancellation",
  },
  {
    id: 5,
    title: "GST Notice Handling",
    desc: "Professional support for GST notices, queries and compliance matters.",
    tag: "Compliance",
  },
  {
    id: 6,
    title: "GST Consultation",
    desc: "Expert GST guidance for taxation, compliance and business planning.",
    tag: "Advisory",
  },
];

const gstDocuments = [
  "PAN Card",
  "Aadhaar Card",
  "Business Address Proof",
  "Bank Account Details",
  "Passport Size Photograph",
  "Business Registration Proof",
];

const gstProcess = [
  {
    step: "01",
    title: "Submit Details",
    desc: "Share your business information and requirements.",
  },
  {
    step: "02",
    title: "Document Verification",
    desc: "Our experts verify all submitted documents.",
  },
  {
    step: "03",
    title: "Application Filing",
    desc: "GST registration application is prepared and submitted.",
  },
  {
    step: "04",
    title: "GST Approval",
    desc: "Application is processed by GST authorities.",
  },
  {
    step: "05",
    title: "Certificate Delivery",
    desc: "Receive your GST Registration Certificate.",
  },
];

const gstReturns = [
  {
    returnType: "GSTR-1",
    purpose: "Details of outward supplies (sales)",
    frequency: "Monthly / Quarterly",
  },
  {
    returnType: "GSTR-3B",
    purpose: "Summary return with tax payment",
    frequency: "Monthly",
  },
  {
    returnType: "GSTR-4",
    purpose: "Composition scheme taxpayers",
    frequency: "Annually",
  },
  {
    returnType: "CMP-08",
    purpose: "Tax payment for composition dealers",
    frequency: "Quarterly",
  },
  {
    returnType: "GSTR-9",
    purpose: "Annual GST return",
    frequency: "Annually",
  },
  {
    returnType: "GSTR-9C",
    purpose: "GST reconciliation statement",
    frequency: "Annually",
  },
];

const gstBenefits = [
  "Claim Input Tax Credit",
  "Improves Business Credibility",
  "Sell Across India",
  "Easy Business Expansion",
  "Government Tender Eligibility",
  "Avoid GST Penalties",
];

const gstStats2 = [
  {
    number: "18%",
    label: "Average Tax Savings",
  },
  {
    number: "5000+",
    label: "GST Registrations",
  },
  {
    number: "10000+",
    label: "Returns Filed",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
];
const GSTRegistrationReturns = () => {
  return (
    <div>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                GST Registration & Returns
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                GST Registration & Return Filing Services
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Get hassle-free GST registration, return filing and compliance
                support from experienced GST professionals. We ensure accurate
                filing and timely compliance for your business.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {gstFeatures.map((item, index) => (
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
              {/* <div className="grid grid-cols-3 gap-5 mt-10">
                {gstStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right Form */}
            <div>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Why GST Registration is Important?
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              GST registration is more than just a legal requirement. It helps
              businesses claim tax benefits, improve credibility and grow across
              India while staying fully compliant.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gstImportance.map((item) => (
              <div
                key={item.id}
                className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                    <span className="text-green-700 font-bold text-lg">
                      0{item.id}
                    </span>
                  </div>

                  <span className="bg-green-50 border border-green-200 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    Benefit
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Highlight */}
          <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
              Grow Your Business with GST Compliance
            </h3>

            <p className="text-gray-700 leading-8">
              GST registration helps businesses claim Input Tax Credit, expand
              operations across India, participate in government tenders and
              build stronger trust with customers and suppliers.
            </p>
          </div>
        </div>
      </section>

      <section className="md:px-10 mt-20">
        <div className="">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Documents Required & GST Registration Process
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Keep the necessary documents ready and follow our simple
              registration process to get your GST certificate quickly.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Documents */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Required Documents
              </h3>

              <div className="space-y-4">
                {gstDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border-b border-gray-100 pb-4"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                      ✓
                    </div>

                    <p className="font-medium text-[#0F2A44]">{doc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Timeline */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Registration Process
              </h3>

              <div className="space-y-8">
                {gstProcess.map((item, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        {item.step}
                      </div>

                      {index !== gstProcess.length - 1 && (
                        <div className="w-[2px] h-16 bg-green-200 mt-2"></div>
                      )}
                    </div>

                    <div className="pt-2">
                      <h4 className="text-lg font-semibold text-[#0F2A44]">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-10">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              GST Return Filing Types
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Different GST returns are applicable based on your business type,
              turnover and registration category.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-green-200 rounded-3xl">
            <table className="w-full">
              <thead>
                <tr className="bg-green-50">
                  <th className="px-6 py-5 text-left text-[#0F2A44] font-semibold">
                    Return Type
                  </th>

                  <th className="px-6 py-5 text-left text-[#0F2A44] font-semibold">
                    Purpose
                  </th>

                  <th className="px-6 py-5 text-left text-[#0F2A44] font-semibold">
                    Frequency
                  </th>
                </tr>
              </thead>

              <tbody>
                {gstReturns.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-green-100 hover:bg-green-50 transition"
                  >
                    <td className="px-6 py-5">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.returnType}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-gray-700">{item.purpose}</td>

                    <td className="px-6 py-5">
                      <span className="font-medium text-[#0F2A44]">
                        {item.frequency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Note */}

          <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="text-gray-700">
              <span className="font-semibold text-[#0F2A44]">Note:</span> Filing
              GST returns on time helps avoid penalties, interest charges and
              compliance issues with GST authorities.
            </p>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-10">
        <div className="">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Benefits of GST Registration
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              GST registration helps businesses grow, stay compliant and unlock
              valuable tax benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Benefits */}
            <div className="grid gap-4">
              {gstBenefits.map((item, index) => (
                <div
                  key={index}
                  className="group border border-green-200 rounded-3xl p-5 hover:border-green-500 hover:bg-green-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 font-bold">
                      ✓
                    </div>

                    <h3 className="text-lg font-semibold text-[#0F2A44]">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5">
              {gstStats2.map((item, index) => (
                <div
                  key={index}
                  className="border border-green-200 rounded-3xl p-8 text-center hover:border-green-500 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-5xl font-bold text-green-600 mb-3">
                    {item.number}
                  </h3>

                  <p className="text-gray-600 font-medium">{item.label}</p>
                </div>
              ))}

              {/* Extra Highlight Card */}
              <div className="col-span-2 bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-3">
                  Grow Your Business with GST
                </h3>

                <p className="text-green-50">
                  Claim Input Tax Credit, improve business credibility, expand
                  across India and stay fully compliant with GST laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 mt-20">
        <div className="">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              GST Services We Offer
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              End-to-end GST solutions designed to help businesses stay
              compliant and focus on growth.
            </p>
          </div>

          <div className="space-y-5">
            {gstServices.map((service) => (
              <div
                key={service.id}
                className="group border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:bg-green-50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-700 font-bold text-xl">
                      {service.id}
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-[#0F2A44] mb-2">
                        {service.title}
                      </h3>

                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>

                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                    GST Support
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GSTRegistrationReturns;
