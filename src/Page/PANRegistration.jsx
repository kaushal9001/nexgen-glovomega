import React from "react";
import Form from "../Component/Form";

const panFeatures = [
  "Quick PAN Application",
  "Expert Assistance",
  "Documentation Support",
  "Fast Processing",
];

const panStats = [
  {
    number: "15K+",
    label: "PAN Applications",
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

const panInfo = [
  {
    id: 1,
    title: "Unique Tax Identification",
    desc: "PAN (Permanent Account Number) is a unique 10-character alphanumeric number issued by the Income Tax Department of India.",
  },
  {
    id: 2,
    title: "Financial Identity",
    desc: "It serves as an important identity proof for financial and tax-related transactions across India.",
  },
  {
    id: 3,
    title: "Mandatory for Tax Compliance",
    desc: "PAN is required for filing Income Tax Returns and complying with various tax regulations.",
  },
  {
    id: 4,
    title: "Banking & Investments",
    desc: "Required for opening bank accounts, investing in mutual funds, shares, and other financial instruments.",
  },
  {
    id: 5,
    title: "Business & Professional Use",
    desc: "Businesses, professionals, freelancers, and entrepreneurs need PAN for legal and financial transactions.",
  },
  {
    id: 6,
    title: "Government Recognition",
    desc: "Acts as an officially recognized identity number for financial activities and taxation purposes.",
  },
];
const whoNeedsPAN = [
  {
    id: 1,
    title: "Salaried Individuals",
    desc: "Employees earning taxable income require PAN for salary taxation and income tax return filing.",
  },
  {
    id: 2,
    title: "Business Owners",
    desc: "Proprietors, entrepreneurs, and business owners need PAN for business operations and compliance.",
  },
  {
    id: 3,
    title: "Freelancers & Professionals",
    desc: "Consultants, doctors, lawyers, designers, and freelancers require PAN for taxation purposes.",
  },
  {
    id: 4,
    title: "Investors",
    desc: "Individuals investing in mutual funds, shares, bonds, and securities need PAN.",
  },
  {
    id: 5,
    title: "Students",
    desc: "Students may require PAN for banking, investments, scholarships, and financial activities.",
  },
  {
    id: 6,
    title: "Companies & LLPs",
    desc: "Companies, LLPs, and registered entities must obtain PAN for financial and legal compliance.",
  },
];
const panDocuments = [
  "Aadhaar Card",
  "Identity Proof",
  "Address Proof",
  "Date of Birth Proof",
  "Passport Size Photograph",
  "Mobile Number",
  "Email ID",
];

const panProcess = [
  {
    id: "01",
    title: "Submit Application",
    desc: "Provide personal details and PAN application information.",
  },
  {
    id: "02",
    title: "Document Verification",
    desc: "Required identity and address documents are verified.",
  },
  {
    id: "03",
    title: "Application Filing",
    desc: "PAN application is submitted through the official portal.",
  },
  {
    id: "04",
    title: "Department Processing",
    desc: "The Income Tax Department reviews the application.",
  },
  {
    id: "05",
    title: "Approval",
    desc: "Application is approved after successful verification.",
  },
  {
    id: "06",
    title: "PAN Issued",
    desc: "PAN number is generated and the PAN card is dispatched.",
  },
];
const panBenefits = [
  {
    title: "Income Tax Filing",
    desc: "PAN Card is essential for filing Income Tax Returns and complying with tax regulations in India.",
  },
  {
    title: "Bank Account Opening",
    desc: "Required for opening savings, current, and various other bank accounts.",
  },
  {
    title: "Investment Opportunities",
    desc: "Necessary for investing in mutual funds, stocks, bonds, and other financial instruments.",
  },
  {
    title: "Loan Applications",
    desc: "Banks and financial institutions require PAN while processing loan applications.",
  },
  {
    title: "High-Value Transactions",
    desc: "PAN is mandatory for various high-value financial transactions and purchases.",
  },
  {
    title: "Valid Identity Proof",
    desc: "Acts as a government-recognized identity document for financial and legal purposes.",
  },
];
const panImportance = [
  {
    title: "Tax Compliance",
    desc: "Ensures smooth filing of Income Tax Returns and compliance with tax regulations.",
  },
  {
    title: "Financial Accessibility",
    desc: "Required for banking, investments, loans, and other financial services.",
  },
  {
    title: "Unique Financial Identity",
    desc: "Provides a unique identity for tracking financial and tax-related transactions.",
  },
  {
    title: "Avoid Transaction Issues",
    desc: "Many banking and financial transactions cannot be completed without a PAN Card.",
  },
];

const PANRegistration = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 ">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                PAN Card Registration
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Apply for a New PAN Card
                <span className="block text-green-600 mt-2">
                  Quickly & Easily
                </span>
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Get your Permanent Account Number (PAN) with expert assistance.
                We help individuals, salaried employees, business owners,
                freelancers, professionals, students, and companies apply for a
                new PAN card quickly and hassle-free.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {panFeatures.map((item, index) => (
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
                {panStats.map((item, index) => (
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
            What is PAN Card?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            PAN (Permanent Account Number) is a unique identification number
            issued by the Income Tax Department of India. It helps track
            financial transactions, ensures tax compliance, and serves as an
            essential document for banking, investments, and business
            activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panInfo.map((item) => (
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
            Why is PAN Card Important?
          </h3>

          <p className="text-gray-700 leading-8">
            PAN Card is one of the most important financial documents in India.
            It is required for tax filing, banking transactions, investments,
            loan applications, and many high-value financial activities. Having
            a PAN ensures smooth financial operations and legal compliance.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Who Needs a PAN Card?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            PAN Card is required by individuals, businesses, professionals,
            investors, and organizations involved in financial transactions, tax
            compliance, and banking activities in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoNeedsPAN.map((item) => (
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
            PAN Card is Essential for Financial Activities
          </h3>

          <p className="text-gray-700 leading-8">
            Whether you are an employee, entrepreneur, investor, student, or
            business owner, PAN Card plays a crucial role in tax compliance,
            banking, investments, and financial transactions. It is one of the
            most widely used identification documents in India.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Documents Required & PAN Application Process
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Keep the required documents ready and follow our simple application
            process to obtain your PAN Card quickly and hassle-free.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Documents */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Required Documents
            </h3>

            <div className="space-y-4">
              {panDocuments.map((item, index) => (
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
              PAN Application Process
            </h3>

            <div className="space-y-4">
              {panProcess.map((step) => (
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
            Benefits of PAN Card
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            PAN Card provides several financial and legal benefits, making it
            one of the most important documents for individuals and businesses
            in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {panBenefits.map((item, index) => (
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
            Why PAN Card is Important
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            PAN Card plays a crucial role in financial management, tax
            compliance, and identity verification. It is one of the most
            important documents required for various personal and business
            transactions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {panImportance.map((item, index) => (
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
            Secure Your Financial Identity with PAN
          </h3>

          <p className="text-gray-700 leading-8">
            Whether you are a salaried individual, business owner, freelancer,
            investor, or student, a PAN Card is essential for managing financial
            activities, filing taxes, and accessing various banking and
            investment services. It serves as the foundation of your financial
            identity in India.
          </p>
        </div>
      </section>
    </>
  );
};

export default PANRegistration;
