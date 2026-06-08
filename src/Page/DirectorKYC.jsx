import React from "react";
import Form from "../Component/Form";
const directorKycFeatures = [
  "DIR-3 KYC Filing",
  "DIN Reactivation Support",
  "Annual KYC Compliance",
  "MCA Filing Assistance",
];

const directorKycStats = [
  {
    number: "3000+",
    label: "KYC Filings",
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
const kycHighlights = [
  {
    title: "DIR-3 KYC",
    desc: "Annual KYC filing for directors.",
  },
  {
    title: "DIN Status",
    desc: "Keep DIN active and compliant.",
  },
  {
    title: "MCA Compliance",
    desc: "Mandatory under MCA regulations.",
  },
  {
    title: "Annual Filing",
    desc: "Required every financial year.",
  },
];
const documents = [
  "PAN Card",
  "Aadhaar Card",
  "DIN Number",
  "Mobile Number",
  "Email Address",
  "Digital Signature (DSC)",
];

const requirements = [
  {
    title: "DIN Verification",
    value: "Mandatory",
  },
  {
    title: "DIR-3 KYC",
    value: "Annual Filing",
  },
  {
    title: "Mobile Number",
    value: "OTP Verification",
  },
  {
    title: "Email Address",
    value: "Required",
  },
];
const kycProcess = [
  {
    step: "01",
    title: "Collect Documents",
    desc: "Gather PAN, Aadhaar, DIN, mobile number and email address.",
  },
  {
    step: "02",
    title: "Verify Information",
    desc: "Verify director details and ensure records match MCA data.",
  },
  {
    step: "03",
    title: "Prepare DIR-3 KYC",
    desc: "Complete the DIR-3 KYC form with required information.",
  },
  {
    step: "04",
    title: "OTP Authentication",
    desc: "Verify email and mobile number through OTP validation.",
  },
  {
    step: "05",
    title: "Submit Filing",
    desc: "Submit the KYC form through the MCA portal.",
  },
  {
    step: "06",
    title: "Confirmation",
    desc: "Receive acknowledgement and maintain active DIN status.",
  },
];
const benefits = [
  {
    title: "Active DIN Status",
    desc: "Keep your Director Identification Number active.",
  },
  {
    title: "MCA Compliance",
    desc: "Stay compliant with annual MCA requirements.",
  },
  {
    title: "No Additional Penalties",
    desc: "Avoid unnecessary fees and penalties.",
  },
  {
    title: "Updated Records",
    desc: "Maintain accurate director information.",
  },
];

const consequences = [
  {
    title: "DIN Deactivation",
    desc: "Failure to file may deactivate your DIN.",
  },
  {
    title: "Penalty Charges",
    desc: "Additional fees may be imposed by MCA.",
  },
  {
    title: "Compliance Issues",
    desc: "Non-compliance can affect company operations.",
  },
  {
    title: "Filing Restrictions",
    desc: "Restricted access to MCA filings and approvals.",
  },
];
const DirectorKYC = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Director KYC Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Complete Your Director KYC Before the Due Date
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Stay compliant with MCA regulations through timely DIR-3 KYC
                filing. Our experts help directors maintain active DIN status
                and avoid penalties or deactivation issues.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {directorKycFeatures.map((item, index) => (
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

              <div className="grid grid-cols-3 gap-4 mt-10">
                {directorKycStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Side */}

            <div className="p-8 md:p-10  border-gray-200">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20 ">
        <div className="">
          {/* Heading */}

          <div className="text-center mb-4">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Director KYC Overview
            </h2>
          </div>
          <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          {/* Main Content */}

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 leading-8 text-lg">
              Director KYC is a mandatory annual compliance requirement for
              directors holding a Director Identification Number (DIN). It helps
              the Ministry of Corporate Affairs (MCA) maintain updated records
              and ensures the director's DIN remains active.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              Failure to file DIR-3 KYC within the due date may result in DIN
              deactivation and additional penalties.
            </p>
          </div>

          {/* Floating Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {kycHighlights.map((item, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-3xl p-6 text-center hover:border-green-500 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>

                <h4 className="font-semibold text-[#0F2A44] mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 leading-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20 ">
        <div className="">
          {/* Heading */}

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              KYC Requirements Hub
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Keep the required documents ready and ensure all details are
              verified before filing DIR-3 KYC.
            </p>
          </div>

          {/* Documents */}

          <div className="border border-green-200 rounded-[32px] p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-8">
              Required Documents
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="border border-green-200 rounded-2xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    ✓
                  </div>

                  <span className="font-medium text-[#0F2A44]">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements Dashboard */}

          <div className="grid md:grid-cols-2 gap-5">
            {requirements.map((item, index) => (
              <div
                key={index}
                className=" border border-green-300 rounded-3xl p-6"
              >
                <p className="text-gray-500 text-sm mb-3">{item.title}</p>

                <h3 className="text-2xl font-bold text-[#0F2A44]">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20 ">
        <div className="">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Director KYC Filing Process
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Follow our simple step-by-step process to complete your DIR-3 KYC
              filing accurately and on time.
            </p>
          </div>

          <div className="relative">
            {kycProcess.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                {/* Step Number */}

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>

                  {index !== kycProcess.length - 1 && (
                    <div className="w-[3px] h-20 bg-green-200"></div>
                  )}
                </div>

                {/* Content */}

                <div className="flex-1  border border-green-200 rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-[#0F2A44] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20 ">
        <div className="">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Benefits & Consequences
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Timely Director KYC filing helps maintain compliance, while
              delayed filing can result in DIN-related issues.
            </p>
          </div>

          <div className=" border border-gray-200 rounded-[32px] p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Benefits */}

              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-8">
                  Benefits of Timely Filing
                </h3>

                <div className="space-y-4">
                  {benefits.map((item, index) => (
                    <div
                      key={index}
                      className="border border-green-200 rounded-2xl p-5"
                    >
                      <h4 className="font-semibold text-[#0F2A44] mb-2">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 text-sm leading-6">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consequences */}

              <div className=" ">
                <h3 className="text-2xl font-bold text-red-500 mb-8">
                  Consequences of Missing Deadline
                </h3>

                <div className="space-y-4">
                  {consequences.map((item, index) => (
                    <div
                      key={index}
                      className="border border-red-200 rounded-2xl p-5"
                    >
                      <h4 className="font-semibold text-[#0F2A44] mb-2">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 text-sm leading-6">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DirectorKYC;
