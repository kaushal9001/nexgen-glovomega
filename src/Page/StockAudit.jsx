import React from "react";
import Form from "../Component/Form";
const stockAuditFeatures = [
  "Inventory Verification",
  "Physical Stock Check",
  "Stock Valuation Review",
  "Inventory Control Assessment",
];

const stockAuditStats = [
  {
    number: "1500+",
    label: "Stock Audits",
  },
  {
    number: "99%",
    label: "Accuracy Rate",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
];
const stockEntities = [
  "Manufacturing Units",
  "Retail Stores",
  "Warehouses",
  "Distributors",
  "E-Commerce Businesses",
  "Trading Companies",
];

const stockAreas = [
  "Inventory Verification",
  "Stock Valuation",
  "Inventory Records",
  "Damaged Stock Review",
  "Slow Moving Stock",
  "Inventory Controls",
];

const stockBenefits = [
  "Reduce Inventory Losses",
  "Improve Stock Accuracy",
  "Detect Fraud & Leakage",
  "Better Inventory Planning",
  "Improve Cash Flow",
  "Strengthen Controls",
];

const stockProcess = [
  {
    step: "01",
    title: "Physical Verification",
  },
  {
    step: "02",
    title: "Stock Counting",
  },
  {
    step: "03",
    title: "Record Matching",
  },
  {
    step: "04",
    title: "Variance Analysis",
  },
  {
    step: "05",
    title: "Audit Reporting",
  },
  {
    step: "06",
    title: "Recommendations",
  },
];
const StockAudit = () => {
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}

            <div className="p-8 md:p-12">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Stock Audit Services
              </span>

              <h1 className="text-3xl md:text-5xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Ensure Accurate Inventory & Strong Stock Controls
              </h1>

              <p className="text-gray-600 mt-6 text-lg leading-8">
                Our Stock Audit services help businesses verify inventory,
                identify stock discrepancies, improve inventory controls and
                maintain accurate records for better operational efficiency and
                financial reporting.
              </p>

              {/* Feature Cards */}

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {stockAuditFeatures.map((item, index) => (
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
                {stockAuditStats.map((item, index) => (
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

            <div className="bg-gray-50  p-8 md:p-10">
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="">
          {/* Header */}

          <div className="text-center mb-14">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Stock Audit Control Center
            </span>

            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Inventory Verification & Stock Control
            </h2>
          </div>

          {/* Overview Card */}

          <div className="border border-green-200 rounded-[32px] p-10 mb-10">
            <h3 className="text-3xl font-bold text-[#0F2A44] mb-5">
              What is Stock Audit?
            </h3>

            <p className="text-gray-600 leading-8">
              Stock Audit is a systematic verification of inventory records,
              physical stock and stock valuation to ensure inventory accuracy,
              prevent losses and strengthen inventory management controls.
            </p>
          </div>

          {/* Triple Dashboard */}

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Who Needs */}

            <div className="border border-green-200 rounded-[28px] p-6">
              <h3 className="text-xl font-bold text-[#0F2A44] mb-5">
                Who Needs It?
              </h3>

              <div className="space-y-3">
                {stockEntities.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Areas */}

            <div className="border border-green-200 rounded-[28px] p-6">
              <h3 className="text-xl font-bold text-[#0F2A44] mb-5">
                Verification Areas
              </h3>

              <div className="space-y-3">
                {stockAreas.map((item, index) => (
                  <div key={index} className="bg-green-50 rounded-xl px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}

            <div className="border border-green-200 rounded-[28px] p-6">
              <h3 className="text-xl font-bold text-[#0F2A44] mb-5">
                Key Benefits
              </h3>

              <div className="space-y-3">
                {stockBenefits.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Journey */}

          <div>
            <h3 className="text-3xl font-bold text-center text-[#0F2A44] mb-10">
              Stock Verification Journey
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stockProcess.map((item) => (
                <div
                  key={item.step}
                  className="relative border border-gray-200 rounded-[28px] p-6"
                >
                  <div className="text-6xl font-bold text-green-100 mb-4">
                    {item.step}
                  </div>

                  <h4 className="text-xl font-semibold text-[#0F2A44]">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StockAudit;
