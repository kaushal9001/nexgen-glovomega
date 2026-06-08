import React from "react";
import Form from "../Component/Form";

const tanFeatures = [
  "Quick TAN Application",
  "TDS Compliance",
  "Documentation Support",
  "Expert Assistance",
];

const tanStats = [
  {
    number: "8K+",
    label: "TAN Applications",
  },
  {
    number: "99%",
    label: "Success Rate",
  },
  {
    number: "24 Hr",
    label: "Support Available",
  },
];
const tanInfo = [
  {
    id: 1,
    title: "Tax Deduction Account Number",
    desc: "TAN (Tax Deduction and Collection Account Number) is a unique 10-digit alphanumeric number issued by the Income Tax Department of India.",
  },
  {
    id: 2,
    title: "Mandatory for TDS & TCS",
    desc: "Any person or entity responsible for deducting Tax Deducted at Source (TDS) or collecting Tax Collected at Source (TCS) must obtain TAN.",
  },
  {
    id: 3,
    title: "Income Tax Compliance",
    desc: "TAN helps businesses comply with Income Tax regulations related to tax deduction and collection activities.",
  },
  {
    id: 4,
    title: "Required for TDS Returns",
    desc: "It is mandatory while filing TDS returns, depositing TDS payments, and generating TDS certificates.",
  },
  {
    id: 5,
    title: "Business Identification",
    desc: "Acts as a unique identification number for all tax deduction and collection transactions.",
  },
  {
    id: 6,
    title: "Government Recognition",
    desc: "Provides official registration under the Income Tax Department for TDS and TCS compliance.",
  },
];
const whoNeedsTAN = [
  {
    id: 1,
    title: "Private Limited Companies",
    desc: "Companies deducting TDS from salaries, contractor payments, rent, and professional fees require TAN.",
  },
  {
    id: 2,
    title: "Partnership Firms",
    desc: "Partnership firms making TDS-applicable payments must obtain TAN registration.",
  },
  {
    id: 3,
    title: "LLPs",
    desc: "Limited Liability Partnerships involved in tax deduction activities need TAN.",
  },
  {
    id: 4,
    title: "Employers",
    desc: "Businesses and organizations deducting TDS from employee salaries require TAN.",
  },
  {
    id: 5,
    title: "Trusts & Societies",
    desc: "Trusts, NGOs, and societies responsible for TDS deductions must register for TAN.",
  },
  {
    id: 6,
    title: "Government Departments",
    desc: "Government offices and departments involved in tax deduction and collection activities require TAN.",
  },
];
const tanDocuments = [
  "PAN Card",
  "Business Registration Proof",
  "Address Proof",
  "Identity Proof of Applicant",
  "Passport Size Photograph",
  "Mobile Number",
  "Email ID",
];

const tanProcess = [
  {
    id: "01",
    title: "Submit Application",
    desc: "Provide applicant and business details for TAN registration.",
  },
  {
    id: "02",
    title: "Document Verification",
    desc: "Required documents and information are verified by experts.",
  },
  {
    id: "03",
    title: "Application Filing",
    desc: "TAN application is submitted to the Income Tax Department.",
  },
  {
    id: "04",
    title: "Department Processing",
    desc: "The application is reviewed and processed by the department.",
  },
  {
    id: "05",
    title: "Approval",
    desc: "After successful verification, the application gets approved.",
  },
  {
    id: "06",
    title: "TAN Issued",
    desc: "Tax Deduction and Collection Account Number is allotted and communicated.",
  },
];
const tanBenefits = [
  {
    title: "TDS Compliance",
    desc: "Ensures compliance with Income Tax regulations related to Tax Deducted at Source (TDS) and Tax Collected at Source (TCS).",
  },
  {
    title: "Legal Requirement",
    desc: "TAN is mandatory for businesses and organizations responsible for deducting or collecting tax at source.",
  },
  {
    title: "Smooth TDS Filing",
    desc: "Required for filing TDS returns, generating TDS certificates, and depositing TDS payments.",
  },
  {
    title: "Avoid Penalties",
    desc: "Helps businesses avoid penalties, notices, and legal issues arising from non-compliance.",
  },
  {
    title: "Business Credibility",
    desc: "Demonstrates proper tax compliance and enhances trust among stakeholders and authorities.",
  },
  {
    title: "Government Recognition",
    desc: "Provides official registration under the Income Tax Department for tax deduction activities.",
  },
];
const tanImportance = [
  {
    title: "Mandatory for TDS",
    desc: "Businesses cannot legally deduct or collect tax at source without obtaining TAN.",
  },
  {
    title: "Avoid Tax Penalties",
    desc: "Failure to obtain TAN may result in penalties, notices, and compliance issues.",
  },
  {
    title: "Required for TDS Returns",
    desc: "TAN is mandatory while filing TDS returns and generating TDS certificates.",
  },
  {
    title: "Smooth Tax Operations",
    desc: "Ensures hassle-free tax deduction, payment, and reporting processes.",
  },
];
const TANRegistration = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 ">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                TAN Registration
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Apply for TAN Registration
                <span className="block text-green-600 mt-2">
                  Quickly & Easily
                </span>
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Obtain your Tax Deduction and Collection Account Number (TAN)
                with expert assistance. We help businesses, companies,
                partnership firms, LLPs, employers, trusts, and organizations
                comply with TDS and TCS regulations smoothly and efficiently.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {tanFeatures.map((item, index) => (
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
                {tanStats.map((item, index) => (
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
            What is TAN Registration?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            TAN Registration is the process of obtaining a Tax Deduction and
            Collection Account Number from the Income Tax Department. It is
            mandatory for entities responsible for deducting or collecting tax
            at source under the Income Tax Act.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tanInfo.map((item) => (
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
            Why is TAN Registration Important?
          </h3>

          <p className="text-gray-700 leading-8">
            TAN is essential for businesses and organizations that deduct or
            collect taxes. Without TAN, entities cannot legally deposit TDS,
            file TDS returns, or issue TDS certificates, leading to penalties
            and compliance issues.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Who Needs TAN Registration?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Any individual, company, firm, LLP, trust, society, or organization
            responsible for deducting or collecting tax at source must obtain
            TAN Registration before carrying out TDS or TCS related activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoNeedsTAN.map((item) => (
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
            Essential for TDS Compliance
          </h3>

          <p className="text-gray-700 leading-8">
            If your organization deducts tax from salaries, contractor payments,
            rent, commission, professional fees, or other specified payments,
            obtaining TAN is a legal requirement under the Income Tax Act.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Documents Required & TAN Application Process
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Keep the required documents ready and follow our simple application
            process to obtain your TAN Registration quickly and ensure smooth
            TDS compliance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Documents */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Required Documents
            </h3>

            <div className="space-y-4">
              {tanDocuments.map((item, index) => (
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
              TAN Application Process
            </h3>

            <div className="space-y-4">
              {tanProcess.map((step) => (
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
            Benefits of TAN Registration
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            TAN Registration helps businesses maintain proper tax compliance,
            streamline TDS operations, and fulfill legal obligations
            efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tanBenefits.map((item, index) => (
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
            Why TAN Registration is Important
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            TAN Registration is a legal requirement for entities responsible for
            deducting or collecting tax at source. It ensures proper compliance
            with Income Tax regulations and smooth TDS management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tanImportance.map((item, index) => (
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
            Stay Compliant with TAN Registration
          </h3>

          <p className="text-gray-700 leading-8">
            TAN Registration is essential for businesses, employers, firms,
            LLPs, trusts, and organizations involved in TDS activities. It helps
            ensure legal compliance, accurate tax reporting, and smooth
            interaction with the Income Tax Department.
          </p>
        </div>
      </section>
    </>
  );
};

export default TANRegistration;
