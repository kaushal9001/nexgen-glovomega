import React from "react";
import Form from "../Component/Form";

const msmeFeatures = [
  "Quick Registration",
  "Government Recognition",
  "Loan Benefits",
  "Expert Assistance",
];

const msmeStats = [
  {
    number: "10K+",
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
const msmeInfo = [
  {
    id: 1,
    title: "Government Recognition",
    desc: "MSME/Udyam Registration provides official recognition to Micro, Small, and Medium Enterprises under the Ministry of MSME, Government of India.",
  },
  {
    id: 2,
    title: "Business Identity",
    desc: "It establishes your business as a registered MSME and helps build trust among customers, suppliers, and financial institutions.",
  },
  {
    id: 3,
    title: "Access to Government Schemes",
    desc: "Registered MSMEs can avail various government schemes, incentives, subsidies, and support programs designed for business growth.",
  },
  {
    id: 4,
    title: "Easy Loan & Credit Facilities",
    desc: "Udyam Registration helps businesses obtain collateral-free loans and easier access to credit from banks and financial institutions.",
  },
  {
    id: 5,
    title: "Tender & Procurement Benefits",
    desc: "MSMEs receive special advantages and preferences while participating in government tenders and procurement opportunities.",
  },
  {
    id: 6,
    title: "Business Growth & Expansion",
    desc: "The registration supports long-term business development by improving financial access, credibility, and market opportunities.",
  },
];

const msmeDocuments = [
  "Aadhaar Card of Proprietor/Partner/Director",
  "PAN Card",
  "Business Address Details",
  "Mobile Number",
  "Email ID",
  "Bank Account Details",
  "Business Activity Information",
  "GST Details (if applicable)",
];

const msmeProcess = [
  {
    id: "01",
    title: "Submit Business Details",
    desc: "Provide basic business information and applicant details.",
  },
  {
    id: "02",
    title: "Document Verification",
    desc: "Our experts verify all required details and documents.",
  },
  {
    id: "03",
    title: "Application Filing",
    desc: "The Udyam Registration application is submitted online.",
  },
  {
    id: "04",
    title: "Government Verification",
    desc: "The portal validates Aadhaar, PAN, and business information.",
  },
  {
    id: "05",
    title: "Registration Approval",
    desc: "The application is successfully processed and approved.",
  },
  {
    id: "06",
    title: "Certificate Issued",
    desc: "Your Udyam Registration Certificate is generated instantly.",
  },
];
const msmeBenefits = [
  {
    title: "Government Recognition",
    desc: "Get official recognition as a Micro, Small, or Medium Enterprise under the Ministry of MSME.",
  },
  {
    title: "Collateral-Free Loans",
    desc: "Access business loans under government schemes without heavy collateral requirements.",
  },
  {
    title: "Government Subsidies",
    desc: "Avail subsidies and incentives on patents, certifications, technology upgrades, and business development.",
  },
  {
    title: "Tender Benefits",
    desc: "Receive preference and exemptions while participating in government tenders and procurement opportunities.",
  },
  {
    title: "Lower Interest Rates",
    desc: "Enjoy easier access to credit facilities and financial support from banks and NBFCs.",
  },
  {
    title: "Business Credibility",
    desc: "Increase trust among customers, suppliers, investors, and financial institutions.",
  },
];
const msmeCompliance = [
  {
    title: "Missed Government Benefits",
    desc: "Businesses may lose access to MSME schemes, subsidies, and financial incentives.",
  },
  {
    title: "Limited Loan Opportunities",
    desc: "Without Udyam Registration, businesses may face difficulties accessing MSME-specific loan schemes.",
  },
  {
    title: "Tender Restrictions",
    desc: "Businesses may miss out on special advantages available in government tenders and procurement.",
  },
  {
    title: "Reduced Growth Opportunities",
    desc: "Lack of MSME recognition can limit business expansion and support opportunities.",
  },
];
const MSMERegistration = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 ">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                MSME / Udyam Registration
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Get Your MSME / Udyam Registration
                <span className="block text-green-600 mt-2">
                  Quickly & Hassle-Free
                </span>
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Register your business under the Ministry of MSME and unlock
                access to government schemes, easier loans, subsidies, tender
                benefits, and growth opportunities. Our experts provide
                end-to-end assistance for smooth Udyam Registration.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {msmeFeatures.map((item, index) => (
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
                {msmeStats.map((item, index) => (
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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            What is MSME/Udyam Registration?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            MSME/Udyam Registration is an online registration process introduced
            by the Government of India to recognize and support Micro, Small,
            and Medium Enterprises (MSMEs). It enables businesses to access
            government benefits, financial assistance, and growth opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {msmeInfo.map((item) => (
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
            Why is Udyam Registration Important?
          </h3>

          <p className="text-gray-700 leading-8">
            Udyam Registration helps businesses gain official MSME recognition,
            access government subsidies, obtain collateral-free loans,
            participate in government tenders, and improve overall business
            credibility. It is one of the most important registrations for
            startups, small businesses, manufacturers, traders, and service
            providers looking to grow their business efficiently.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Documents Required & Udyam Registration Process
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Keep the required documents ready and follow our simple registration
            process to obtain your MSME/Udyam Registration quickly and smoothly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Documents */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Required Documents
            </h3>

            <div className="space-y-4">
              {msmeDocuments.map((item, index) => (
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
              Udyam Registration Process
            </h3>

            <div className="space-y-4">
              {msmeProcess.map((step) => (
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
            Benefits of MSME/Udyam Registration
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Udyam Registration helps businesses access government benefits,
            financial assistance, and growth opportunities while enhancing
            business credibility and competitiveness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {msmeBenefits.map((item, index) => (
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
            Why Udyam Registration Matters
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            While Udyam Registration is highly beneficial, businesses that
            remain unregistered may miss several opportunities and government
            support programs designed specifically for MSMEs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {msmeCompliance.map((item, index) => (
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
            Register Today & Unlock MSME Benefits
          </h3>

          <p className="text-gray-700 leading-8">
            MSME/Udyam Registration helps your business gain official
            recognition, access government schemes, secure easier financing, and
            build stronger credibility in the market. Register today to take
            advantage of these growth opportunities.
          </p>
        </div>
      </section>
    </>
  );
};

export default MSMERegistration;
