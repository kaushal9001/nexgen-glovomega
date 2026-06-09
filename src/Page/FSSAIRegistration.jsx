import React from "react";
import Form from "../Component/Form";

const fssaiFeatures = [
  "Quick Registration",
  "Expert Assistance",
  "Documentation Support",
  "Food Safety Compliance",
];

const fssaiStats = [
  {
    number: "8K+",
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
const fssaiInfo = [
  {
    id: 1,
    title: "Mandatory Food Business Registration",
    desc: "FSSAI Registration is mandatory for all food businesses involved in manufacturing, processing, packaging, storing, distributing, or selling food products in India.",
  },
  {
    id: 2,
    title: "Legal Authorization",
    desc: "It provides legal authorization to operate a food-related business and ensures compliance with food safety regulations issued by the Government of India.",
  },
  {
    id: 3,
    title: "Food Safety Compliance",
    desc: "FSSAI ensures that food products meet quality, hygiene, and safety standards, protecting consumers from unsafe food practices.",
  },
  {
    id: 4,
    title: "Consumer Trust & Credibility",
    desc: "Displaying the FSSAI license number on food products and premises helps build customer confidence and improves business credibility.",
  },
  {
    id: 5,
    title: "Business Expansion Support",
    desc: "FSSAI registration is often required for selling products through supermarkets, online marketplaces, food delivery platforms, and retail chains.",
  },
  {
    id: 6,
    title: "Government Recognition",
    desc: "The registration provides official recognition from the Food Safety and Standards Authority of India (FSSAI), making your business compliant and trustworthy.",
  },
];

const whoNeedsFSSAI = [
  {
    id: 1,
    title: "Restaurants & Cafes",
    desc: "All restaurants, cafes, food courts, and fast-food outlets serving food to customers must obtain FSSAI Registration or License.",
  },
  {
    id: 2,
    title: "Cloud Kitchens",
    desc: "Cloud kitchens operating through online food delivery platforms such as Zomato and Swiggy require FSSAI registration.",
  },
  {
    id: 3,
    title: "Food Manufacturers",
    desc: "Businesses involved in manufacturing, processing, packaging, or producing food products must comply with FSSAI regulations.",
  },
  {
    id: 4,
    title: "Food Traders & Distributors",
    desc: "Wholesalers, distributors, suppliers, and traders dealing in food products are required to obtain FSSAI approval.",
  },
  {
    id: 5,
    title: "Retailers & Grocery Stores",
    desc: "Supermarkets, grocery stores, sweet shops, bakeries, and retail food businesses need FSSAI registration to operate legally.",
  },
  {
    id: 6,
    title: "Home-Based Food Businesses",
    desc: "Home bakers, homemade food sellers, tiffin service providers, and small food startups must register under FSSAI.",
  },
];
const fssaiDocuments = [
  "PAN Card",
  "Aadhaar Card",
  "Passport Size Photograph",
  "Business Address Proof",
  "Electricity Bill / Utility Bill",
  "Rent Agreement or Ownership Proof",
  "Food Business Details",
  "Mobile Number & Email ID",
];

const fssaiProcess = [
  {
    id: "01",
    title: "Submit Application",
    desc: "Share your food business details and registration requirements.",
  },
  {
    id: "02",
    title: "Document Verification",
    desc: "Our experts verify all documents and business information.",
  },
  {
    id: "03",
    title: "Application Filing",
    desc: "The FSSAI registration application is filed with the authority.",
  },
  {
    id: "04",
    title: "Authority Review",
    desc: "FSSAI reviews the submitted application and supporting documents.",
  },
  {
    id: "05",
    title: "Approval Process",
    desc: "The application is processed and approved after successful verification.",
  },
  {
    id: "06",
    title: "Certificate Issued",
    desc: "Your FSSAI Registration Certificate is generated and delivered.",
  },
];
const fssaiBenefits = [
  {
    title: "Legal Authorization",
    desc: "Operate your food business legally and comply with food safety regulations issued by the Government of India.",
  },
  {
    title: "Consumer Trust",
    desc: "Build customer confidence by displaying your FSSAI registration number and ensuring food safety standards.",
  },
  {
    title: "Business Credibility",
    desc: "Enhance your brand reputation and create a professional image in the market.",
  },
  {
    title: "Business Expansion",
    desc: "Sell products through supermarkets, food delivery platforms, and online marketplaces without restrictions.",
  },
  {
    title: "Food Safety Compliance",
    desc: "Maintain proper hygiene, quality standards, and food safety practices as required by law.",
  },
  {
    title: "Competitive Advantage",
    desc: "Stand out from unregistered food businesses and gain a stronger market position.",
  },
];
const fssaiPenalties = [
  {
    title: "Heavy Monetary Penalties",
    desc: "Food businesses operating without FSSAI registration may face substantial fines imposed by authorities.",
  },
  {
    title: "License Suspension",
    desc: "Non-compliance with food safety standards can lead to suspension or cancellation of the license.",
  },
  {
    title: "Legal Proceedings",
    desc: "Serious violations may result in legal action and prosecution under the Food Safety and Standards Act.",
  },
  {
    title: "Business Closure",
    desc: "Authorities may order temporary or permanent closure of food businesses found violating regulations.",
  },
];

const FSSAIRegistration = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                FSSAI Registration
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Get Your FSSAI Registration
                <span className="block text-green-600 mt-2">
                  Quickly & Hassle-Free
                </span>
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Start your food business legally with FSSAI Registration. We
                help restaurants, cloud kitchens, food manufacturers, retailers,
                traders, and food startups obtain their FSSAI license with
                complete documentation and expert assistance.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {fssaiFeatures.map((item, index) => (
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
                {fssaiStats.map((item, index) => (
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
            What is FSSAI Registration?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            FSSAI Registration is a government-issued registration or license
            provided by the Food Safety and Standards Authority of India (FSSAI)
            to ensure that food businesses follow food safety standards and
            maintain proper hygiene practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fssaiInfo.map((item) => (
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
            Why is FSSAI Registration Important?
          </h3>

          <p className="text-gray-700 leading-8">
            FSSAI Registration not only helps businesses comply with legal
            requirements but also strengthens customer trust, improves brand
            reputation, and enables smooth business growth. Whether you run a
            restaurant, cloud kitchen, bakery, food manufacturing unit, or
            online food business, obtaining FSSAI registration is essential for
            long-term success.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Who Needs FSSAI Registration?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Every food business operator involved in manufacturing, processing,
            storage, distribution, transportation, or sale of food products in
            India must obtain FSSAI Registration or License based on their
            turnover and business activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoNeedsFSSAI.map((item) => (
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
            FSSAI Registration is Mandatory for Most Food Businesses
          </h3>

          <p className="text-gray-700 leading-8">
            Whether you run a restaurant, cloud kitchen, bakery, grocery store,
            food manufacturing unit, catering service, or online food business,
            obtaining FSSAI Registration is essential for legal compliance,
            customer trust, and smooth business operations.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Documents Required & FSSAI Registration Process
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Keep the required documents ready and follow our simple registration
            process to obtain your FSSAI Registration quickly and smoothly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Documents */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Required Documents
            </h3>

            <div className="grid gap-4">
              {fssaiDocuments.map((item, index) => (
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

          {/* Process */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              FSSAI Registration Process
            </h3>

            <div className="space-y-4">
              {fssaiProcess.map((step) => (
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
            Benefits of FSSAI Registration
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            FSSAI Registration helps food businesses operate legally, gain
            customer trust, and expand their market presence while ensuring
            compliance with food safety standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fssaiBenefits.map((item, index) => (
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
            Penalties for Non-Compliance
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Failure to obtain FSSAI Registration or comply with food safety
            regulations can result in penalties, legal action, and operational
            restrictions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fssaiPenalties.map((item, index) => (
            <div
              key={index}
              className="border border-red-200 rounded-3xl p-6 hover:border-red-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 font-bold">
                !
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-red-200 bg-red-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Stay Compliant & Avoid Penalties
          </h3>

          <p className="text-gray-700 leading-8">
            Obtaining FSSAI Registration not only ensures legal compliance but
            also protects your business from fines, legal disputes, and
            reputational damage. Register your food business on time and
            maintain proper food safety standards.
          </p>
        </div>
      </section>
    </>
  );
};

export default FSSAIRegistration;
