import React from "react";
import Form from "../Component/Form";
const accountingFeatures = [
  "Bookkeeping Services",
  "Financial Reporting",
  "Payroll Management",
  "GST & Tax Support",
];

const accountingStats = [
  {
    number: "5000+",
    label: "Businesses Managed",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
];

const accountingUsers = [
  "Startups",
  "SMEs",
  "Private Limited Companies",
  "LLPs",
  "E-Commerce Businesses",
  "Professionals",
];

const accountingServices = [
  "Bookkeeping",
  "Financial Reporting",
  "Payroll Management",
  "Bank Reconciliation",
  "GST Accounting",
  "MIS Reporting",
];

const accountingWorkflow = [
  {
    title: "Collect Financial Data",
    number: "01",
  },
  {
    title: "Record Transactions",
    number: "02",
  },
  {
    title: "Reconcile Accounts",
    number: "03",
  },
  {
    title: "Generate Reports",
    number: "04",
  },
  {
    title: "Compliance Review",
    number: "05",
  },
  {
    title: "Monthly Support",
    number: "06",
  },
];

const accountingBenefits = [
  "Accurate Financial Records",
  "Better Cash Flow Management",
  "Tax Compliance",
  "Business Insights",
  "Time Savings",
  "Improved Decision Making",
];
const AccountingServices = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Accounting Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Professional Accounting Services For Growing Businesses
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Streamline your financial operations with expert accounting,
                bookkeeping, payroll and reporting services. We help businesses
                maintain accurate records, stay compliant and make informed
                financial decisions.
              </p>

              {/* Features */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {accountingFeatures.map((item, index) => (
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

              {/* <div className="flex flex-wrap gap-10 mt-10">
                {accountingStats.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-3xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">{item.label}</p>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Right Form */}

            <div className="bg-gray-50 p-8 md:p-10">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-10">
        <div className="max-w-7xl mx-auto px-5">
          {/* Heading */}

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Accounting Services & Business Support
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Manage your finances efficiently with professional accounting,
              reporting, payroll and compliance support.
            </p>
          </div>

          {/* Overview */}

          <div className="border border-green-200 rounded-[32px] p-8 mb-8">
            <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
              What Are Accounting Services?
            </h3>

            <p className="text-gray-600 leading-8">
              Accounting services help businesses maintain accurate financial
              records, track income and expenses, manage payroll, prepare
              reports and ensure regulatory compliance. Professional accounting
              enables better financial planning and informed business decisions.
            </p>
          </div>

          {/* Who Needs + Services */}

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="border border-gray-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Who Needs Accounting Services?
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {accountingUsers.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-[32px] p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Our Accounting Services
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {accountingServices.map((item, index) => (
                  <div
                    key={index}
                    className="bg-green-50 border border-green-100 rounded-2xl p-4 text-center font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Workflow */}

          <div className="border border-gray-200 rounded-[32px] p-8 mb-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-8 text-center">
              Accounting Workflow
            </h3>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">
              {accountingWorkflow.map((item) => (
                <div key={item.number} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center text-green-700 font-bold text-xl mb-4">
                    {item.number}
                  </div>

                  <h4 className="font-semibold text-[#0F2A44]">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}

          <div className="border border-green-200 rounded-[32px] p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-8 text-center">
              Benefits of Professional Accounting
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {accountingBenefits.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    ✓
                  </div>

                  <span className="font-medium text-[#0F2A44]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountingServices;
