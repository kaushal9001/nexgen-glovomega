import React, { useState, useEffect } from "react";

const assessmentYears = ["2026-27", "2025-26", "2024-25"];

const taxpayerTypes = [
  "Individual",
  "HUF",
  "AOP/BOI",
  "Firm/LLP",
  "Domestic Company",
];

const ageCategories = [
  "Below 60 Years",
  "60 Years to Less Than 80 Years",
  "80 Years & Above",
];

const ResidentialStatus = ["Resident", "Non-Resident"];
const RegimeOptions = ["Yes", "No"];

const taxSlabs = [
  {
    income: "Up to ₹4,00,000",
    rate: "NIL",
    color: "text-green-600",
  },
  {
    income: "₹4,00,001 - ₹8,00,000",
    rate: "5%",
    color: "text-blue-600",
  },
  {
    income: "₹8,00,001 - ₹12,00,000",
    rate: "10%",
    color: "text-yellow-600",
  },
  {
    income: "₹12,00,001 - ₹16,00,000",
    rate: "15%",
    color: "text-orange-600",
  },
  {
    income: "₹16,00,001 - ₹20,00,000",
    rate: "20%",
    color: "text-red-500",
  },
  {
    income: "₹20,00,001 - ₹24,00,000",
    rate: "25%",
    color: "text-red-600",
  },
  {
    income: "Above ₹24,00,000",
    rate: "30%",
    color: "text-red-700",
  },
];

const IncomeTaxCalculator = () => {
  const [assessmentYear, setAssessmentYear] = useState("2026-27");
  const [taxpayer, setTaxpayer] = useState("Individual");
  const [category, setCategory] = useState("Below 60 Years");
  const [residentialStatus, setResidentialStatus] = useState("Resident");
  const [newRegime, setNewRegime] = useState("Yes");
  const [taxableIncome, setTaxableIncome] = useState("");
  const [income, setIncome] = useState("");
  const [ageGroup, setAgeGroup] = useState("below60");
  const [regime, setRegime] = useState("new");
  const [taxpayerType, setTaxpayerType] = useState("Individual");
  const [deduction, setDeduction] = useState("");
  const [deduction80C, setDeduction80C] = useState("");
  const [deduction80D, setDeduction80D] = useState("");
  const [homeLoan, setHomeLoan] = useState("");
  const [otherDeduction, setOtherDeduction] = useState("");

  const [result, setResult] = useState({
    tax: 0,
    surcharge: 0,
    cess: 0,
    totalTax: 0,
  });

  const resultCards = [
    {
      title: "Income Tax",
      value: result.tax,
    },
    {
      title: "Surcharge",
      value: result.surcharge,
    },
    {
      title: "Health & Education Cess",
      value: result.cess,
    },
    {
      title: "Total Tax Liability",
      value: result.totalTax,
    },
  ];
  const resetCalculator = () => {
    setIncome("");
    setAgeGroup("below60");
    setRegime("new");
    setDeduction80C("");
    setDeduction80D("");
    setHomeLoan("");
    setOtherDeduction("");

    setResult({
      income: 0,
      totalDeductions: 0,
      taxableIncome: 0,
      tax: 0,
      netIncome: 0,
      regime: "New Regime",
    });
  };

  const totalDeductions =
    Number(deduction80C || 0) +
    Number(deduction80D || 0) +
    Number(homeLoan || 0) +
    Number(otherDeduction || 0);

  useEffect(() => {
    const annualIncome = Number(income || 0);

    const deductions =
      Number(deduction80C || 0) +
      Number(deduction80D || 0) +
      Number(homeLoan || 0) +
      Number(otherDeduction || 0);

    const taxableIncome = Math.max(annualIncome - deductions, 0);

    let tax = 0;

    if (regime === "new") {
      if (taxableIncome > 1200000) {
        tax = taxableIncome * 0.15;
      } else if (taxableIncome > 800000) {
        tax = taxableIncome * 0.1;
      } else if (taxableIncome > 400000) {
        tax = taxableIncome * 0.05;
      }
    } else {
      // Old Regime
      if (taxableIncome > 1000000) {
        tax = taxableIncome * 0.2;
      } else if (taxableIncome > 500000) {
        tax = taxableIncome * 0.1;
      } else if (taxableIncome > 250000) {
        tax = taxableIncome * 0.05;
      }
    }

    setResult({
      income: annualIncome,
      totalDeductions: deductions,
      taxableIncome,
      tax,
      netIncome: annualIncome - tax,
      regime: regime === "old" ? "Old Regime" : "New Regime",
    });

    console.log("Current Regime:", regime);
  }, [income, deduction80C, deduction80D, homeLoan, otherDeduction, regime]);

  const calculateTax = () => {
    const income = Number(taxableIncome || 0);

    const tax = income * 0.1;

    const surcharge = tax > 500000 ? tax * 0.1 : 0;

    const cess = (tax + surcharge) * 0.04;

    const totalTax = tax + surcharge + cess;

    setResult({
      tax,
      surcharge,
      cess,
      totalTax,
    });
  };
  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="grid lg:grid-cols-4 gap-6 border border-green-200 rounded-3xl shadow-xl px-8 py-5">
          {/* Left Side Form */}
          <div className="lg:col-span-3   ">
            <div className="flex mb-2">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Income Tax Calculation Tool
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl mb-10 font-bold text-[#0F2A44] ">
              Free Income Tax Calculator
            </h1>

            <div className="space-y-6">
              {/* Assessment Year */}
              <div className="grid md:grid-cols-2 gap-5 items-center">
                <label className="font-medium text-[#0F2A44]">
                  Assessment Year *
                </label>
                <select
                  value={assessmentYear}
                  onChange={(e) => setAssessmentYear(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                >
                  {assessmentYears.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>

              {/* Tax Payer */}
              <div className="grid md:grid-cols-2 gap-5 items-center">
                <label className="font-medium text-[#0F2A44]">
                  Tax Payer *
                </label>

                <select
                  value={taxpayer}
                  onChange={(e) => setTaxpayer(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                >
                  {taxpayerTypes.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div className="grid md:grid-cols-2 gap-5 items-center">
                <label className="font-medium text-[#0F2A44]">
                  Category (Age) *
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                >
                  {ageCategories.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>

              {/* Residential Status */}
              <div className="grid md:grid-cols-2 gap-5 items-center">
                <label className="font-medium text-[#0F2A44]">
                  Residential Status *
                </label>

                <select
                  value={residentialStatus}
                  onChange={(e) => setResidentialStatus(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                >
                  {ResidentialStatus.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>

              {/* New Regime */}
              <div className="grid md:grid-cols-2 gap-5 items-center">
                <label className="font-medium text-[#0F2A44]">
                  Opting New Tax Regime *
                </label>

                <select
                  value={newRegime}
                  onChange={(e) => setNewRegime(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                >
                  {RegimeOptions.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>

              {/* Net Taxable Income */}
              <div className="grid md:grid-cols-2 gap-5 items-center">
                <label className="font-medium text-[#0F2A44]">
                  Net Taxable Income *
                </label>

                <input
                  type="number"
                  value={taxableIncome}
                  onChange={(e) => setTaxableIncome(e.target.value)}
                  placeholder="Enter Taxable Income"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8 border-t border-green-600 pt-6">
              <button
                onClick={calculateTax}
                className="
  bg-green-600
  hover:bg-green-700
  text-white
  px-8
  py-3
  rounded-xl
  font-medium
  transition
  "
              >
                Calculate
              </button>

              <button
                type="button"
                onClick={resetCalculator}
                className="px-4 py-3 rounded-xl border border-red-500 text-red-600 hover:bg-red-50 transition"
              >
                Reset Calculator
              </button>
            </div>
          </div>

          {/* Right Side Result */}
          <div
            className="
border border-green-200
rounded-2xl
p-5
bg-green-50/50
hover:border-green-500
transition-all
"
          >
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">Results</h3>

            <div className="space-y-4">
              {[
                {
                  title: "Income Tax",
                  value: result.tax,
                },
                {
                  title: "Surcharge",
                  value: result.surcharge,
                },
                {
                  title: "Health & Education Cess",
                  value: result.cess,
                },
                {
                  title: "Total Tax Liability",
                  value: result.totalTax,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-green-200 rounded-xl p-5"
                >
                  <p className="text-sm text-gray-500 mb-2">{item.title}</p>

                  <p className="text-2xl font-bold text-[#0F2A44]">
                    ₹ {Number(item.value || 0).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 mt-20">
        <div className=" ">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Income Tax Slab Rates
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Check the latest income tax slab rates and understand how your tax
              liability is calculated.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-hidden border border-green-200 rounded-3xl shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-2 bg-green-600 text-white font-semibold">
              <div className="p-5 border-r border-white/10">
                Annual Taxable Income
              </div>

              <div className="p-5">Tax Rate</div>
            </div>

            {/* Rows */}
            {taxSlabs.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 ${
                  index % 2 === 0 ? "bg-white" : "bg-green-50"
                } border-t border-green-100`}
              >
                <div className="p-5 font-medium text-[#0F2A44]">
                  {item.income}
                </div>

                <div className={`p-5 font-bold ${item.color}`}>{item.rate}</div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-[#0F2A44]">Note:</span> Tax
              slabs may change based on the financial year and tax regime
              selected. Always verify with the latest government guidelines
              before filing taxes.
            </p>
          </div>
        </div>
      </section>

      <section className="md:px-10 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Income Tax Calculation Formula
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Understand the formulas used to calculate taxable income and total
              tax liability.
            </p>
          </div>

          {/* Formula Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Taxable Income",
                formula: "Gross Income − Total Deductions",
                desc: "Taxable income is calculated after subtracting all eligible deductions from your gross income.",
              },
              {
                title: "Income Tax",
                formula: "Taxable Income × Applicable Tax Rate",
                desc: "Income tax is calculated according to the selected tax slab and tax regime.",
              },
              {
                title: "Health & Education Cess",
                formula: "(Income Tax + Surcharge) × 4%",
                desc: "A 4% cess is charged on the total tax and surcharge amount.",
              },
              {
                title: "Total Tax Liability",
                formula: "Income Tax + Surcharge + Cess",
                desc: "The final amount payable to the government as income tax.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-3xl p-6 hover:border-green-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#0F2A44]">
                    {item.title}
                  </h3>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    Formula
                  </span>
                </div>

                <div className="bg-green-50 border border-green-100 rounded-2xl p-4 mb-4">
                  <p className="text-lg font-bold text-green-700">
                    {item.formula}
                  </p>
                </div>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Example */}
          <div className="mt-10 border border-green-200 rounded-3xl p-6 bg-green-50">
            <h3 className="text-xl font-semibold text-[#0F2A44] mb-4">
              Example Calculation
            </h3>

            <div className="space-y-2 text-gray-700">
              <p>Gross Income = ₹12,00,000</p>
              <p>Total Deductions = ₹2,00,000</p>
              <p>Taxable Income = ₹10,00,000</p>
              <p>Income Tax = ₹50,000</p>
              <p>Health & Education Cess (4%) = ₹2,000</p>

              <p className="font-bold text-green-700 text-lg pt-2">
                Total Tax Liability = ₹52,000
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 mt-20">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              How Income Tax is Calculated
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Follow these simple steps to understand how your income tax
              liability is calculated.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Enter Annual Income",
                desc: "Provide your total annual income from salary, business, investments and other sources.",
              },
              {
                step: "02",
                title: "Subtract Deductions",
                desc: "Deduct eligible deductions such as 80C, 80D, Home Loan and other exemptions.",
              },
              {
                step: "03",
                title: "Apply Tax Slabs",
                desc: "The applicable tax slab rate is applied based on your taxable income and regime.",
              },
              {
                step: "04",
                title: "Calculate Final Tax",
                desc: "Add surcharge and health & education cess to get the total tax liability.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                  <span className="text-green-700 font-bold text-lg">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Example Flow */}
          <div className="mt-12 border border-green-200 rounded-3xl p-8 bg-green-50">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Example Tax Calculation Flow
            </h3>

            <div className="grid md:grid-cols-4 gap-4">
              {[
                "Annual Income ₹12,00,000",
                "Deductions ₹2,00,000",
                "Taxable Income ₹10,00,000",
                "Final Tax ₹52,000",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-green-200 rounded-2xl p-4 text-center"
                >
                  <p className="font-semibold text-[#0F2A44]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IncomeTaxCalculator;
