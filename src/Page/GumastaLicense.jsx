import React from "react";
import Form from "../Component/Form";

const gumastaFeatures = [
  "Quick Registration",
  "Expert Assistance",
  "Documentation Support",
  "Fast Approval Process",
];

const gumastaStats = [
  {
    number: "5K+",
    label: "Registrations Completed",
  },
  {
    number: "99%",
    label: "Approval Rate",
  },
  {
    number: "24 Hr",
    label: "Support Available",
  },
];
// =========================
// What is Gumasta License?
// =========================

const gumastaInfo = [
  {
    id: 1,
    title: "Legal Business Registration",
    desc: "Gumasta License acts as official proof that your business is legally registered and authorized to operate.",
  },
  {
    id: 2,
    title: "Municipal Authority Approval",
    desc: "Issued by the local municipal authority under the Shops and Establishments Act.",
  },
  {
    id: 3,
    title: "Business Identity",
    desc: "Provides legal identity to your shop, office, startup, or commercial establishment.",
  },
  {
    id: 4,
    title: "Compliance Requirement",
    desc: "Helps businesses comply with local regulations and labor laws.",
  },
  {
    id: 5,
    title: "Banking & Licenses",
    desc: "Useful while opening business bank accounts and obtaining other registrations.",
  },
  {
    id: 6,
    title: "Business Credibility",
    desc: "Builds trust among customers, suppliers, and government authorities.",
  },
];

// =========================
// Who Needs Gumasta License
// =========================

const whoNeedsGumasta = [
  {
    title: "Shop Owners",
    desc: "Retail stores, supermarkets, and local shops.",
  },
  {
    title: "Traders",
    desc: "Wholesale and trading businesses.",
  },
  {
    title: "Startups",
    desc: "Newly established companies and entrepreneurs.",
  },
  {
    title: "Freelancers",
    desc: "Independent professionals providing services.",
  },
  {
    title: "Agencies",
    desc: "Marketing, consulting, and IT service agencies.",
  },
  {
    title: "Commercial Establishments",
    desc: "Offices and service-based businesses.",
  },
];
// =========================
// Documents + Process
// =========================

const gumastaDocuments = [
  "Aadhaar Card",
  "PAN Card",
  "Passport Size Photo",
  "Business Address Proof",
  "Electricity Bill",
  "Rent Agreement / Ownership Proof",
];

const gumastaProcess = [
  {
    id: "01",
    title: "Application Submission",
    desc: "Submit your registration request and details.",
  },
  {
    id: "02",
    title: "Document Verification",
    desc: "Verification of business and applicant documents.",
  },
  {
    id: "03",
    title: "Application Filing",
    desc: "Registration application is filed with authority.",
  },
  {
    id: "04",
    title: "Authority Review",
    desc: "Government authority reviews the application.",
  },
  {
    id: "05",
    title: "License Approval",
    desc: "Application gets approved after successful review.",
  },
  {
    id: "06",
    title: "Certificate Issued",
    desc: "Gumasta License certificate is issued.",
  },
];
// =========================
// Benefits
// =========================

const gumastaBenefits = [
  "Legal Recognition",
  "Business Bank Account",
  "Easy Loan Approval",
  "Government Scheme Access",
  "Business Expansion",
  "Improved Credibility",
];
// =========================
// Penalties
// =========================

const penalties = [
  {
    title: "Legal Notices",
    desc: "Authorities may issue notices for non-registration.",
  },
  {
    title: "Financial Penalties",
    desc: "Businesses may face fines and penalties.",
  },
  {
    title: "Business Restrictions",
    desc: "Difficulty obtaining licenses and approvals.",
  },
  {
    title: "Compliance Issues",
    desc: "Failure to comply with local regulations.",
  },
];
const GumastaLicense = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 ">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Gumasta License Registration
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Get Your Gumasta License Registration
                <span className="block text-green-600 mt-2">
                  Quickly & Hassle-Free
                </span>
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Start your business legally with a Gumasta License. We help shop
                owners, traders, startups, freelancers, and service providers
                obtain their registration with complete documentation support
                and expert guidance.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {gumastaFeatures.map((item, index) => (
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
                {gumastaStats.map((item, index) => (
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
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            What is Gumasta License?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            A Gumasta License is a mandatory registration for shops, commercial
            establishments, startups, traders, and service providers operating
            within municipal limits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gumastaInfo.map((item) => (
            <div
              key={item.id}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-green-700 font-bold">0{item.id}</span>
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Who Needs a Gumasta License?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoNeedsGumasta.map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Required Documents
            </h3>

            <div className="space-y-4">
              {gumastaDocuments.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border border-green-100 rounded-2xl p-4"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    ✓
                  </div>

                  <p className="font-medium text-[#0F2A44]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Registration Process
            </h3>

            <div className="space-y-4">
              {gumastaProcess.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border border-green-100 rounded-2xl p-4"
                >
                  <div className="min-w-[50px] h-[50px] bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                    {item.id}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0F2A44]">
                      {item.title}
                    </h4>

                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Benefits of Gumasta License
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gumastaBenefits.map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-3xl p-6"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                ✓
              </div>

              <h3 className="text-lg font-semibold text-[#0F2A44]">{item}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Penalties for Non-Registration
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {penalties.map((item, index) => (
            <div
              key={index}
              className="border border-red-200 rounded-3xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GumastaLicense;
