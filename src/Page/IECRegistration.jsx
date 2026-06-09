import React from "react";
import Form from "../Component/Form";

const iecFeatures = [
  "Quick Registration",
  "DGFT Approved Process",
  "Import & Export Eligibility",
  "Expert Assistance",
];

const iecStats = [
  {
    number: "5K+",
    label: "IEC Registrations",
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
const iecInfo = [
  {
    id: 1,
    title: "Import Export Code",
    desc: "IEC is a 10-digit registration number issued by the Directorate General of Foreign Trade (DGFT) for businesses involved in international trade.",
  },
  {
    id: 2,
    title: "Mandatory for Import & Export",
    desc: "Businesses must obtain an IEC to legally import goods into India or export products and services to international markets.",
  },
  {
    id: 3,
    title: "Government Recognition",
    desc: "IEC provides official recognition from the Government of India and serves as an identification number for foreign trade activities.",
  },
  {
    id: 4,
    title: "International Business Expansion",
    desc: "It enables businesses to explore global markets and build international trade opportunities.",
  },
  {
    id: 5,
    title: "Customs & Banking Requirement",
    desc: "IEC is required for customs clearance and international payment transactions through banks.",
  },
  {
    id: 6,
    title: "Lifetime Validity",
    desc: "IEC registration remains valid for the lifetime of the business and does not require renewal.",
  },
];
const whoNeedsIEC = [
  {
    id: 1,
    title: "Exporters",
    desc: "Businesses exporting goods or services to international customers require IEC registration.",
  },
  {
    id: 2,
    title: "Importers",
    desc: "Businesses importing products, machinery, equipment, or raw materials need an IEC.",
  },
  {
    id: 3,
    title: "Manufacturers",
    desc: "Manufacturing companies planning to sell products in overseas markets must obtain IEC.",
  },
  {
    id: 4,
    title: "E-Commerce Sellers",
    desc: "Online sellers exporting products through global marketplaces require IEC registration.",
  },
  {
    id: 5,
    title: "Startups & SMEs",
    desc: "Startups and small businesses entering international trade benefit from IEC registration.",
  },
  {
    id: 6,
    title: "Traders & Distributors",
    desc: "Wholesalers, distributors, and trading firms involved in cross-border trade need IEC.",
  },
];
const iecDocuments = [
  "PAN Card",
  "Aadhaar Card",
  "Passport Size Photograph",
  "Business Address Proof",
  "Cancelled Cheque",
  "Bank Account Details",
  "Mobile Number",
  "Email ID",
];

const iecProcess = [
  {
    id: "01",
    title: "Document Collection",
    desc: "Gather all required business and applicant documents for registration.",
  },
  {
    id: "02",
    title: "Application Preparation",
    desc: "Our experts prepare and verify all IEC registration details.",
  },
  {
    id: "03",
    title: "Application Filing",
    desc: "The IEC application is submitted through the DGFT portal.",
  },
  {
    id: "04",
    title: "Verification",
    desc: "DGFT verifies the submitted information and supporting documents.",
  },
  {
    id: "05",
    title: "Approval",
    desc: "The application is reviewed and approved by the authority.",
  },
  {
    id: "06",
    title: "IEC Certificate Issued",
    desc: "Your Import Export Code certificate is generated and issued.",
  },
];
const iecBenefits = [
  {
    title: "Global Market Access",
    desc: "Expand your business internationally and reach customers across different countries.",
  },
  {
    title: "Legal Import & Export Operations",
    desc: "IEC enables businesses to legally conduct import and export activities without restrictions.",
  },
  {
    title: "Government Export Benefits",
    desc: "Eligible businesses can avail various export promotion schemes and incentives offered by the government.",
  },
  {
    title: "Easy International Payments",
    desc: "Facilitates smooth foreign currency transactions and international banking operations.",
  },
  {
    title: "Business Growth Opportunities",
    desc: "Access new markets, suppliers, and customers to increase revenue and business expansion.",
  },
  {
    title: "Enhanced Business Credibility",
    desc: "Build trust among overseas buyers, suppliers, financial institutions, and government authorities.",
  },
];
const iecCompliance = [
  {
    title: "Import Restrictions",
    desc: "Businesses cannot legally import goods or raw materials without a valid IEC registration.",
  },
  {
    title: "Export Limitations",
    desc: "Export transactions and overseas business opportunities cannot be utilized without IEC.",
  },
  {
    title: "Banking Challenges",
    desc: "International payment transactions may face difficulties without an active IEC code.",
  },
  {
    title: "Missed Global Opportunities",
    desc: "Businesses may lose access to foreign markets, international buyers, and export incentives.",
  },
];
const IECRegistration = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 ">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                IEC Registration
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Get Your Import Export Code (IEC)
                <span className="block text-green-600 mt-2">
                  Registration Quickly & Easily
                </span>
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Start your import-export business with a valid IEC Registration
                issued by DGFT. We help businesses, manufacturers, exporters,
                importers, startups, and traders obtain their IEC certificate
                with complete documentation and expert guidance.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {iecFeatures.map((item, index) => (
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
                {iecStats.map((item, index) => (
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
            What is IEC Registration?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Import Export Code (IEC) is a mandatory registration issued by DGFT
            that allows businesses to legally engage in import and export
            activities. It acts as a unique identification number for
            international trade transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {iecInfo.map((item) => (
            <div
              key={item.id}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-green-700 font-bold text-lg">
                  0{item.id}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Why is IEC Registration Important?
          </h3>

          <p className="text-gray-700 leading-8">
            Without IEC Registration, businesses cannot legally import or export
            goods and services. It is one of the most important registrations
            for manufacturers, exporters, traders, startups, and e-commerce
            sellers looking to expand globally.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Who Needs IEC Registration?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Any individual, business, manufacturer, trader, startup, or
            organization planning to import or export goods and services must
            obtain an Import Export Code (IEC) before starting international
            trade activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoNeedsIEC.map((item) => (
            <div
              key={item.id}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-green-700 font-bold text-lg">
                  0{item.id}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Expand Your Business Globally
          </h3>

          <p className="text-gray-700 leading-8">
            IEC Registration is essential for businesses looking to enter
            international markets, receive foreign payments, clear customs, and
            build long-term global trade opportunities. It serves as the first
            step toward international business expansion.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Documents Required & IEC Registration Process
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Keep the required documents ready and follow our simple registration
            process to obtain your Import Export Code (IEC) quickly and
            smoothly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Documents Section */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Required Documents
            </h3>

            <div className="space-y-4">
              {iecDocuments.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border border-green-100 rounded-2xl p-4"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                    ✓
                  </div>

                  <p className="font-medium text-[#0F2A44]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              IEC Registration Process
            </h3>

            <div className="space-y-4">
              {iecProcess.map((step) => (
                <div
                  key={step.id}
                  className="flex gap-4 border border-green-100 rounded-2xl p-4"
                >
                  <div className="min-w-[50px] h-[50px] bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                    {step.id}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0F2A44] mb-1">
                      {step.title}
                    </h4>

                    <p className="text-gray-600">{step.desc}</p>
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
            Benefits of IEC Registration
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            IEC Registration opens the door to international trade
            opportunities, helping businesses expand globally while ensuring
            smooth import and export operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {iecBenefits.map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                ✓
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
            Why IEC Registration Matters
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            IEC Registration is essential for businesses planning to participate
            in international trade. Without IEC, import-export activities and
            foreign transactions cannot be carried out legally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {iecCompliance.map((item, index) => (
            <div
              key={index}
              className="border border-amber-200 rounded-3xl p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4 font-bold">
                !
              </div>

              <h3 className="text-lg font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Expand Your Business Globally with IEC
          </h3>

          <p className="text-gray-700 leading-8">
            IEC Registration is the first step toward international business
            expansion. It enables businesses to import products, export goods
            and services, receive foreign payments, and build long-term global
            trade opportunities with confidence.
          </p>
        </div>
      </section>
    </>
  );
};

export default IECRegistration;
