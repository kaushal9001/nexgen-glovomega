import React from "react";
import Form from "../Component/Form";
const tdsFeatures = [
  "TDS Return Filing",
  "TDS Payment Support",
  "TDS Correction Returns",
  "Compliance Assistance",
];

const tdsStats = [
  {
    number: "8000+",
    label: "TDS Returns Filed",
  },
  {
    number: "5000+",
    label: "Businesses Assisted",
  },
  {
    number: "99%",
    label: "Compliance Success",
  },
];

const tdsDeductors = [
  "Employers",
  "Private Limited Companies",
  "Partnership Firms",
  "LLPs",
  "Government Departments",
  "Specified Individuals & HUFs",
];

const tdsFacts = [
  {
    value: "24Q",
    label: "Salary TDS Return",
  },
  {
    value: "26Q",
    label: "Non-Salary Return",
  },
  {
    value: "Quarterly",
    label: "Return Filing",
  },
];

const tdsDocuments = [
  "PAN Card",
  "TAN Details",
  "Salary Records",
  "Payment Records",
  "Bank Statements",
  "Previous TDS Returns",
];

const tdsProcess = [
  {
    step: "01",
    title: "Collect Details",
  },
  {
    step: "02",
    title: "Verify Records",
  },
  {
    step: "03",
    title: "Prepare Return",
  },
  {
    step: "04",
    title: "File TDS Return",
  },
  {
    step: "05",
    title: "Deposit TDS",
  },
  {
    step: "06",
    title: "Acknowledgement",
  },
];

const tdsReturnTypes = [
  {
    form: "24Q",
    purpose: "TDS on Salary Payments",
    applicable: "Employers",
    frequency: "Quarterly",
  },
  {
    form: "26Q",
    purpose: "TDS on Non-Salary Payments",
    applicable: "Businesses & Firms",
    frequency: "Quarterly",
  },
  {
    form: "27Q",
    purpose: "Payments to Non-Residents",
    applicable: "Residents Paying Non-Residents",
    frequency: "Quarterly",
  },
  {
    form: "27EQ",
    purpose: "Tax Collected at Source (TCS)",
    applicable: "Specified Sellers",
    frequency: "Quarterly",
  },
];

const tdsBenefits = [
  {
    title: "Avoid Penalties",
    desc: "Timely filing helps avoid penalties and legal complications.",
  },
  {
    title: "Better Compliance",
    desc: "Stay compliant with Income Tax regulations and reporting requirements.",
  },
  {
    title: "Accurate Tax Records",
    desc: "Maintain proper financial records and tax documentation.",
  },
  {
    title: "Avoid Interest Charges",
    desc: "Prevent additional interest costs due to delayed filings.",
  },
];

const tdsServices = [
  {
    id: "01",
    title: "TDS Return Filing",
    desc: "Quarterly filing of TDS returns.",
  },
  {
    id: "02",
    title: "TDS Payment",
    desc: "Accurate TDS deposit assistance.",
  },
  {
    id: "03",
    title: "Correction Returns",
    desc: "Rectification of filing errors.",
  },
  {
    id: "04",
    title: "TAN Registration",
    desc: "Apply and manage TAN registration.",
  },
  {
    id: "05",
    title: "Notice Handling",
    desc: "Expert support for TDS notices.",
  },
  {
    id: "06",
    title: "Compliance Advisory",
    desc: "Complete TDS compliance guidance.",
  },
];
const TDSReturnPayment = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl p-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                TDS Return & Payment
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-5 leading-tight">
                Simplify Your TDS Return Filing & Payment Process
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                Stay compliant with Income Tax regulations through timely TDS
                return filing, TDS payments and expert compliance support. Our
                specialists help businesses avoid penalties and ensure accurate
                filings.
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {tdsFeatures.map((item, index) => (
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
                {tdsStats.map((item, index) => (
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
        <div className="">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              What is TDS & Who Needs to Deduct It?
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Understand the basics of Tax Deducted at Source (TDS) and identify
              who is responsible for deducting and depositing it.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* What is TDS */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
                What is TDS?
              </h3>

              <p className="text-gray-600 leading-8 mb-5">
                Tax Deducted at Source (TDS) is a tax collection mechanism where
                tax is deducted before making specified payments such as salary,
                rent, commission, professional fees and contractor payments.
              </p>

              <p className="text-gray-600 leading-8">
                The deducted amount is deposited with the Income Tax Department
                on behalf of the recipient, ensuring regular tax collection and
                compliance.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-8">
                {tdsFacts.map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center"
                  >
                    <h4 className="text-2xl font-bold text-green-600">
                      {item.value}
                    </h4>

                    <p className="text-sm text-gray-600 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-[#0F2A44] mb-8">
                Who Needs to Deduct TDS?
              </h3>

              <div className="space-y-5">
                {tdsDeductors.map((item, index) => (
                  <div key={index} className="flex items-center gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>

                      {index !== tdsDeductors.length - 1 && (
                        <div className="w-[2px] h-10 bg-green-200"></div>
                      )}
                    </div>

                    <div className="flex-1 border border-green-100 rounded-2xl p-4">
                      <h4 className="font-semibold text-[#0F2A44]">{item}</h4>
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
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Documents Required & Filing Process
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Keep the required documents ready and follow our simple process
              for hassle-free TDS return filing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Documents Side */}
            <div>
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Required Documents
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {tdsDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className=" border border-green-200 rounded-2xl p-5 hover:border-green-500 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      ✓
                    </div>

                    <h4 className="font-semibold text-[#0F2A44]">{doc}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Side */}
            <div>
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                TDS Filing Process
              </h3>

              <div className="space-y-4">
                {tdsProcess.map((item) => (
                  <div
                    key={item.step}
                    className=" border border-green-200 rounded-2xl p-5 flex items-center gap-5 hover:border-green-500 transition-all duration-300"
                  >
                    <div className="min-w-[60px] h-[60px] bg-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>

                    <h4 className="text-lg font-semibold text-[#0F2A44]">
                      {item.title}
                    </h4>
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
              TDS Return Types
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Different TDS returns are applicable based on the nature of
              payments and taxpayer category.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-green-200 rounded-3xl">
            <table className="w-full">
              <thead>
                <tr className="bg-green-50">
                  <th className="px-6 py-5 text-left font-semibold text-[#0F2A44]">
                    Form
                  </th>

                  <th className="px-6 py-5 text-left font-semibold text-[#0F2A44]">
                    Purpose
                  </th>

                  <th className="px-6 py-5 text-left font-semibold text-[#0F2A44]">
                    Applicable To
                  </th>

                  <th className="px-6 py-5 text-left font-semibold text-[#0F2A44]">
                    Filing Frequency
                  </th>
                </tr>
              </thead>

              <tbody>
                {tdsReturnTypes.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-green-100 hover:bg-green-50 transition"
                  >
                    <td className="px-6 py-5">
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                        {item.form}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-gray-700">{item.purpose}</td>

                    <td className="px-6 py-5 text-gray-700">
                      {item.applicable}
                    </td>

                    <td className="px-6 py-5">
                      <span className="text-[#0F2A44] font-medium">
                        {item.frequency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Note */}

          <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="font-semibold text-[#0F2A44] mb-2">
              Important Note
            </h3>

            <p className="text-gray-600">
              Filing TDS returns within the due date helps avoid penalties,
              interest charges and compliance issues with the Income Tax
              Department.
            </p>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Benefits of Timely TDS Filing
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Timely TDS filing protects your business from penalties, improves
              compliance and keeps your financial records accurate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 ">
            {/* Showcase Card */}
            <div className="bg-gradient-to-br from-green-600 to-green-500 rounded-[32px] p-10 text-white">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                Compliance Benefits
              </span>

              <h3 className="text-5xl font-bold mt-6">Stay Compliant</h3>

              <p className="mt-5 text-lg leading-8 text-green-50">
                Filing TDS returns on time helps businesses maintain tax
                compliance, avoid notices and build a trustworthy financial
                profile with tax authorities.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-10">
                <div>
                  <h4 className="text-4xl font-bold">99%</h4>

                  <p className="mt-2 text-green-50">Compliance Accuracy</p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold">24/7</h4>

                  <p className="mt-2 text-green-50">Expert Support</p>
                </div>
              </div>
            </div>

            {/* Feature Blocks */}
            <div className="space-y-5">
              {tdsBenefits.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white border border-green-200 rounded-3xl p-6 hover:border-green-500 transition-all duration-300 
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 font-bold">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-7">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Our TDS Services
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              End-to-end TDS solutions designed to help businesses stay
              compliant and avoid penalties.
            </p>
          </div>

          {/* Horizontal List */}

          <div className="space-y-4">
            {tdsServices.map((service) => (
              <div
                key={service.id}
                className="group border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:bg-green-50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-12 gap-5 items-center">
                  {/* Number */}
                  <div className="md:col-span-2">
                    <h3 className="text-5xl font-bold text-green-600 opacity-80">
                      {service.id}
                    </h3>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h4 className="text-2xl font-semibold text-[#0F2A44]">
                      {service.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <p className="text-gray-600">{service.desc}</p>
                  </div>

                  {/* Arrow */}
                  <div className="md:col-span-1 text-right">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-auto"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TDSReturnPayment;
