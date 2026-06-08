import React, { useState, useEffect } from "react";

// Complete GST Calculator Page Placeholder
// Replace with your final logic if needed.

const gstRates = [
  { id: 1, rate: 3 },
  { id: 2, rate: 5 },
  { id: 3, rate: 12 },
  { id: 4, rate: 18 },
  { id: 5, rate: 28 },
];

const calculationTypes = [
  {
    id: 1,
    value: "exclusive",
    label: "GST Exclusive",
    desc: "Add GST on entered amount",
  },
  {
    id: 2,
    value: "inclusive",
    label: "GST Inclusive",
    desc: "Extract GST from total amount",
  },
];

const gstTableData = [
  {
    rate: "3%",
    category: "Gold, Silver & Jewellery",
  },
  {
    rate: "5%",
    category: "Packaged Food, Transport Services",
  },
  {
    rate: "12%",
    category: "Processed Food, Business Services",
  },
  {
    rate: "18%",
    category: "Electronics, IT Services, Software",
  },
  {
    rate: "28%",
    category: "Luxury Goods, Premium Cars",
  },
];

const formulas = [
  {
    title: "GST Exclusive Formula",
    formula: "GST Amount = (Amount × GST Rate) ÷ 100",
    example: "₹10,000 × 18 ÷ 100 = ₹1,800",
  },
  {
    title: "GST Inclusive Formula",
    formula: "Base Amount = Amount × 100 ÷ (100 + GST Rate)",
    example: "₹11,800 × 100 ÷ 118 = ₹10,000",
  },
];

const benefits = [
  {
    title: "Instant Calculation",
    desc: "Get GST calculations instantly without manual formulas.",
  },
  {
    title: "100% Accurate Results",
    desc: "Accurate GST, CGST, SGST and IGST calculations.",
  },
  {
    title: "Live Updates",
    desc: "Results update automatically as you change values.",
  },
  {
    title: "GST Breakdown",
    desc: "View detailed CGST, SGST and IGST distribution.",
  },
  {
    title: "Free To Use",
    desc: "No registration or subscription required.",
  },
  {
    title: "Mobile Friendly",
    desc: "Works perfectly on mobile, tablet and desktop.",
  },
];
const GSTCalculatorPage = () => {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState(18);
  const [type, setType] = useState("exclusive");
  const [result, setResult] = useState({
    baseAmount: 0,
    gstAmount: 0,
    totalAmount: 0,
    cgst: 0,
    sgst: 0,
  });

  useEffect(() => {
    const amt = Number(amount);

    if (!amt) {
      setResult({
        baseAmount: 0,
        gstAmount: 0,
        totalAmount: 0,
        cgst: 0,
        sgst: 0,
      });
      return;
    }

    let gstAmount = 0;
    let totalAmount = 0;
    let baseAmount = 0;

    if (type === "exclusive") {
      gstAmount = (amt * gstRate) / 100;
      totalAmount = amt + gstAmount;
      baseAmount = amt;
    } else {
      baseAmount = (amt * 100) / (100 + gstRate);
      gstAmount = amt - baseAmount;
      totalAmount = amt;
    }

    setResult({
      baseAmount,
      gstAmount,
      totalAmount,
      cgst: gstAmount / 2,
      sgst: gstAmount / 2,
    });
  }, [amount, gstRate, type]);

  const resetCalculator = () => {
    setAmount("");

    setResult({
      baseAmount: 0,
      gstAmount: 0,
      totalAmount: 0,
      cgst: 0,
      sgst: 0,
    });
  };

  const breakdownData = [
    {
      title: "CGST",
      value: result.cgst,
      rate: gstRate / 2,
    },
    {
      title: "SGST",
      value: result.sgst,
      rate: gstRate / 2,
    },
    {
      title: "IGST",
      value: result.gstAmount,
      rate: gstRate,
    },
  ];
  return (
    <>
      {/* <section className="py-10 border border-green-200 rounded-2xl shadow-xl shadow-green-300/10 px-5 mx-5 md:mx-10 mt-10 ">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
                Free GST Calculation Tool
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold text-[#0F2A44] leading-tight">
                GST Calculator
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Instantly calculate GST amounts, CGST, SGST, and IGST with our
                easy-to-use GST Calculator. Get accurate tax calculations for
                inclusive and exclusive GST values within seconds.
              </p>

              
              <div className="flex flex-wrap gap-6 mt-8">
                <div>
                  <h3 className="text-2xl font-bold text-green-600">1M+</h3>
                  <p className="text-gray-600 text-sm">Calculations</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-600">100%</h3>
                  <p className="text-gray-600 text-sm">Accurate Results</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-green-600">24/7</h3>
                  <p className="text-gray-600 text-sm">Available</p>
                </div>
              </div>

             
              <div className="flex flex-wrap gap-4 mt-10">
                <button className="bg-green-600 text-white px-7 py-3 rounded-xl hover:bg-green-700 transition">
                  Calculate GST
                </button>

                <button className="border border-green-600 text-green-600 px-7 py-3 rounded-xl hover:bg-green-50 transition">
                  Talk To Expert
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white border border-green-200 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold text-[#0F2A44] mb-6">
                  GST Calculator Highlights
                </h3>

                <div className="space-y-5">
                  {[
                    "GST Inclusive & Exclusive Calculation",
                    "CGST / SGST / IGST Breakdown",
                    "Instant & Accurate Results",
                    "Mobile Friendly Calculator",
                    "Completely Free to Use",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>

                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-green-50 border border-green-200">
                  <h4 className="font-semibold text-[#0F2A44]">
                    Popular GST Rate
                  </h4>

                  <div className="flex gap-3 mt-3 flex-wrap">
                    {[3, 5, 12, 18, 28].map((rate) => (
                      <span
                        key={rate}
                        className="px-4 py-2 bg-white rounded-lg border border-green-200 text-green-700 font-medium"
                      >
                        {rate}%
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="md:px-10 px-5 mt-10">
        <div className=" ">
          {/* Calculator Area */}

          <div className=" border border-green-200 rounded-3xl shadow-xl px-8 py-3">
            <div className="flex mb-2">
              <span className="bg-green-100  text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                GST Calculation Tool
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-[#0F2A44] mb-2">
              Free GST Calculator
            </h1>
            <p className="text-gray-600  max-w-2xl  text-lg">
              Calculate GST amount, total invoice value, CGST, SGST and IGST
              instantly with live calculations.
            </p>
            <div className="flex flex-wrap gap-3 mt-3 mb-8">
              <span className="bg-green-50 border border-green-200 px-4 py-2 rounded-full text-sm">
                ✓ Live Calculation
              </span>

              <span className="bg-green-50 border border-green-200 px-4 py-2 rounded-full text-sm">
                ✓ CGST / SGST Breakdown
              </span>

              <span className="bg-green-50 border border-green-200 px-4 py-2 rounded-full text-sm">
                ✓ Instant Results
              </span>
            </div>
            {/* Amount */}
            {/* GST Rates */}
            <div className="flex  sm:flex-row mb-5 gap-5 flex-col justify-between  items-center">
              {/* Amount */}
              <div className=" w-full sm:w-[50%]  ">
                <label className="block text-[#0F2A44] font-medium mb-3">
                  Enter Amount
                </label>

                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
                />
              </div>

              {/* GST Rates */}
              <div className="w-full sm:w-[50%]  ">
                {" "}
                <div className="flex items-center gap-1 mb-3 ">
                  <label className="block text-[#0F2A44]  font-medium">
                    GST Rate -
                  </label>

                  <span className="text-sm text-green-600 font-medium">
                    Selected: {gstRate}%
                  </span>
                </div>
                <div className="flex flex-wrap gap-3 ">
                  {gstRates.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setGstRate(item.rate)}
                      className={`px-6 py-3 rounded-xl border font-medium transition-all duration-300 ${
                        gstRate === item.rate
                          ? "bg-green-600 text-white border-green-600 scale-105"
                          : "border-gray-300 hover:border-green-600 hover:text-green-600"
                      }`}
                    >
                      {item.rate}%
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {/* GST Type */}
            <div className="mb-8">
              <label className="block text-[#0F2A44] font-medium mb-3">
                Calculation Type
              </label>

              <div className="grid md:grid-cols-2 gap-4">
                {calculationTypes.map((item) => (
                  <label
                    key={item.id}
                    className={`border rounded-2xl p-5 cursor-pointer transition ${
                      type === item.value
                        ? "border-green-600 bg-green-50"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        checked={type === item.value}
                        onChange={() => setType(item.value)}
                      />

                      <span className="font-medium">{item.label}</span>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
                  </label>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-5 mt-10">
                {[
                  {
                    title: "Actual Amount",
                    value: result.baseAmount,
                    color: "text-[#0F2A44]",
                  },
                  {
                    title: "GST Amount",
                    value: result.gstAmount,
                    color: "text-green-600",
                    rate: gstRate,
                  },
                  {
                    title: "Total Amount",
                    value: result.totalAmount,
                    color: "text-[#0F2A44]",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-500 rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-500 text-sm">{item.title}</h3>

                      {item.rate && (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                          {item.rate}%
                        </span>
                      )}
                    </div>

                    <p className={`text-3xl font-bold mt-3 ${item.color}`}>
                      ₹ {item.value.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <div className="grid md:grid-cols-3 gap-5">
                {breakdownData.map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-500 rounded-2xl mb-5  p-6"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-gray-500 text-sm">
                        {item.title} Amount
                      </h3>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {item.rate}%
                      </span>
                    </div>

                    <p className="text-3xl font-bold text-green-600">
                      ₹ {item.value.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={resetCalculator}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-xl hover:bg-green-50 transition"
              >
                Reset Calculator
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" md:px-10 mt-20">
        <div className=" ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              GST Rate Table
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore the most common GST slabs and their applicable categories.
            </p>
          </div>
          <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <div className="overflow-hidden border border-green-200 rounded-3xl shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-2 bg-green-600 text-white font-semibold">
              <div className="p-5">GST Rate</div>
              <div className="p-5">Products / Services</div>
            </div>

            {/* Rows */}
            {gstTableData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 border-t border-green-100 transition ${
                  Number(item.rate.replace("%", "")) === gstRate
                    ? "bg-gray-100   border-gray-500"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="p-5 flex items-center">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.rate}
                  </span>
                </div>

                <div className="p-5 text-gray-700">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-20">
        <div className=" ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              GST Calculation Formulas
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Understand how GST is calculated for both Inclusive and Exclusive
              methods.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {formulas.map((item, index) => (
              <div
                key={index}
                className=" border border-green-600 rounded-3xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#0F2A44] mb-4">
                  {item.title}
                </h3>

                <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                  <p className="font-medium text-green-700">{item.formula}</p>
                </div>

                <div className="mt-4">
                  <span className="text-sm text-gray-500">Example</span>

                  <p className="mt-2 text-[#0F2A44] font-medium">
                    {item.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className=" md:px-10 px-5  mt-20 ">
        <div className="  ">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Why Use Our GST Calculator?
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Fast, accurate and easy-to-use GST calculator for businesses,
              professionals and individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <div
                key={index}
                className=" border border-green-500 rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold">{index + 1}</span>
                </div>

                <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GSTCalculatorPage;
