import React, { useState } from "react";

const mutualFundFeatures = [
  "SIP Calculator",
  "Lump Sum Calculator",
  "Live Return Calculation",
  "Wealth Projection",
];

const investmentTypes = [
  {
    id: 1,
    label: "SIP",
    value: "sip",
    desc: "Invest monthly and build wealth gradually.",
  },
  {
    id: 2,
    label: "Lump Sum",
    value: "lumpsum",
    desc: "Invest a one-time amount for long-term growth.",
  },
];

const MutualFunds = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [returnRate, setReturnRate] = useState(12);
  const [duration, setDuration] = useState(10);
  const [investmentType, setInvestmentType] = useState("sip");

  const amount = Number(investmentAmount || 0);
  const annualRate = Number(returnRate || 0);
  const years = Number(duration || 0);

  let totalInvestment = 0;
  let maturityValue = 0;
  let estimatedReturns = 0;

  if (investmentType === "sip") {
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    totalInvestment = amount * months;

    maturityValue =
      amount *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));

    estimatedReturns = maturityValue - totalInvestment;
  } else {
    totalInvestment = amount;

    maturityValue = amount * Math.pow(1 + annualRate / 100, years);

    estimatedReturns = maturityValue - totalInvestment;
  }

  const resultCards = [
    {
      title: "Total Investment",
      value: totalInvestment,
      color: "text-[#0F2A44]",
    },
    {
      title: "Estimated Returns",
      value: estimatedReturns,
      color: "text-green-600",
    },
    {
      title: "Maturity Value",
      value: maturityValue,
      color: "text-[#0F2A44]",
    },
  ];

  return (
    <>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-3xl shadow-xl px-8 py-6">
          {/* Heading */}
          <div className="flex mb-2">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Mutual Fund Calculator
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-[#0F2A44] mb-2">
            Plan Your Mutual Fund Investments
          </h1>

          <p className="text-gray-600 max-w-2xl text-lg">
            Calculate SIP and Lump Sum returns instantly and estimate your
            future wealth with our Mutual Fund Calculator.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 mt-3 mb-8">
            {mutualFundFeatures.map((item, index) => (
              <span
                key={index}
                className="bg-green-50 border border-green-200 px-4 py-2 rounded-full text-sm"
              >
                ✓ {item}
              </span>
            ))}
          </div>

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-[#0F2A44] font-medium mb-3">
                Investment Amount
              </label>

              <input
                type="number"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(e.target.value)}
                placeholder="Enter Amount"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div>
              <label className="block text-[#0F2A44] font-medium mb-3">
                Expected Return (%)
              </label>

              <input
                type="number"
                value={returnRate}
                onChange={(e) => setReturnRate(e.target.value)}
                placeholder="12"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div>
              <label className="block text-[#0F2A44] font-medium mb-3">
                Investment Duration (Years)
              </label>

              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="10"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div>
              <label className="block text-[#0F2A44] font-medium mb-3">
                Investment Type
              </label>

              <div className="grid grid-cols-2 gap-4">
                {investmentTypes.map((item) => (
                  <label
                    key={item.id}
                    className={`border rounded-2xl p-4 cursor-pointer transition ${
                      investmentType === item.value
                        ? "border-green-600 bg-green-50"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={investmentType === item.value}
                        onChange={() => setInvestmentType(item.value)}
                      />

                      <span className="font-medium">{item.label}</span>
                    </div>

                    <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {resultCards.map((item, index) => (
              <div
                key={index}
                className="border border-green-500 rounded-2xl p-6"
              >
                <h3 className="text-gray-500 text-sm">{item.title}</h3>

                <p className={`text-3xl font-bold mt-3 ${item.color}`}>
                  ₹ {Number(item.value || 0).toLocaleString("en-IN")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-15">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-5">
              What is Mutual Fund & Types of Mutual Funds
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Mutual funds pool money from multiple investors and invest it in
              stocks, bonds and other securities. They are professionally
              managed and help investors achieve their financial goals.
            </p>
          </div>

          <div className="  rounded-3xl p-5 ">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
              What is a Mutual Fund?
            </h3>

            <p className="text-gray-700 leading-8">
              A Mutual Fund collects money from multiple investors and invests
              it across various financial assets. Professional fund managers
              manage these investments and aim to generate returns based on the
              fund's objective.
            </p>
          </div>
          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Pooled Investment",
                desc: "Money from multiple investors is combined into a single fund.",
              },
              {
                title: "Professional Management",
                desc: "Experienced fund managers make investment decisions on your behalf.",
              },
              {
                title: "Diversification",
                desc: "Investments are spread across multiple assets to reduce risk.",
              },
              {
                title: "Wealth Creation",
                desc: "Mutual funds help investors achieve long-term financial goals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-green-700 font-bold">0{index + 1}</span>
                </div>

                <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Example */}
          <div className="mt-12 border border-green-200 rounded-3xl p-8 bg-green-50">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
              Simple Example
            </h3>

            <p className="text-gray-700 leading-8">
              Suppose 1,000 investors contribute money to a mutual fund. The
              fund manager pools this money and invests it across different
              companies and assets. As these investments grow, investors earn
              returns based on the number of units they hold.
            </p>
          </div>

          <div className="border-t border-green-600 p-5 mt-10 ">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
              Types of Mutual Funds
            </h3>

            <p className="text-gray-700 leading-8">
              Different mutual funds are designed for different investment
              goals, risk levels and time horizons. Choose the one that best
              matches your financial objectives.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Equity Funds",
                risk: "High Risk",
                desc: "Invest primarily in stocks and aim for long-term wealth creation.",
              },
              {
                title: "Debt Funds",
                risk: "Low Risk",
                desc: "Invest in fixed-income securities like bonds and government securities.",
              },
              {
                title: "Hybrid Funds",
                risk: "Moderate Risk",
                desc: "A mix of equity and debt investments for balanced growth and stability.",
              },
              {
                title: "Index Funds",
                risk: "Moderate Risk",
                desc: "Track a market index such as Nifty 50 or Sensex with lower costs.",
              },
              {
                title: "ELSS Funds",
                risk: "High Risk",
                desc: "Tax-saving mutual funds that offer deductions under Section 80C.",
              },
              {
                title: "Liquid Funds",
                risk: "Low Risk",
                desc: "Suitable for short-term investments and emergency funds.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    Fund Type
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.risk === "High Risk"
                        ? "bg-red-100 text-red-600"
                        : item.risk === "Moderate Risk"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-600"
                    }`}
                  >
                    {item.risk}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
              Which Mutual Fund is Right for You?
            </h3>

            <p className="text-gray-700 leading-8">
              Investors seeking long-term growth often prefer Equity Funds,
              while conservative investors may choose Debt or Liquid Funds.
              Hybrid Funds offer a balanced approach, whereas ELSS Funds provide
              tax-saving benefits along with wealth creation opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-15">
        <div className="">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Mutual Fund Return Formula
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Mutual fund returns are calculated differently for SIP and Lump
              Sum investments. Understanding these formulas helps you estimate
              future wealth accurately.
            </p>
          </div>

          {/* Formula Cards */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* SIP Formula */}
            <div className="border border-green-200 rounded-3xl p-8">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                SIP Formula
              </span>

              <h3 className="text-2xl font-bold text-[#0F2A44] mt-4 mb-4">
                Systematic Investment Plan (SIP)
              </h3>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-5 mb-5">
                <p className="text-xl font-bold text-green-700">
                  FV = P × [((1 + r)ⁿ − 1) / r] × (1 + r)
                </p>
              </div>

              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>FV</strong> = Future Value
                </p>
                <p>
                  <strong>P</strong> = Monthly SIP Amount
                </p>
                <p>
                  <strong>r</strong> = Monthly Return Rate
                </p>
                <p>
                  <strong>n</strong> = Total Number of Months
                </p>
              </div>
            </div>

            {/* Lump Sum Formula */}
            <div className="border border-green-200 rounded-3xl p-8">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                Lump Sum Formula
              </span>

              <h3 className="text-2xl font-bold text-[#0F2A44] mt-4 mb-4">
                One-Time Investment
              </h3>

              <div className="bg-green-50 border border-green-100 rounded-2xl p-5 mb-5">
                <p className="text-xl font-bold text-green-700">
                  A = P × (1 + r)ⁿ
                </p>
              </div>

              <div className="space-y-3 text-gray-600">
                <p>
                  <strong>A</strong> = Maturity Value
                </p>
                <p>
                  <strong>P</strong> = Initial Investment
                </p>
                <p>
                  <strong>r</strong> = Annual Return Rate
                </p>
                <p>
                  <strong>n</strong> = Investment Duration
                </p>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="mt-10 border border-green-200 bg-green-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-5">
              Example Calculation
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className=" rounded-2xl p-5 border border-green-200">
                <h4 className="font-semibold text-[#0F2A44] mb-3">
                  SIP Example
                </h4>

                <p>Monthly SIP: ₹5,000</p>
                <p>Expected Return: 12%</p>
                <p>Duration: 10 Years</p>

                <p className="mt-3 font-bold text-green-600">
                  Estimated Value: ₹11.6 Lakhs
                </p>
              </div>

              <div className=" rounded-2xl p-5 border border-green-200">
                <h4 className="font-semibold text-[#0F2A44] mb-3">
                  Lump Sum Example
                </h4>

                <p>Investment: ₹6,00,000</p>
                <p>Expected Return: 12%</p>
                <p>Duration: 10 Years</p>

                <p className="mt-3 font-bold text-green-600">
                  Estimated Value: ₹18.6 Lakhs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-10 px-5 mt-15">
        <div className="    ">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F2A44] mt-4">
              Benefits of Mutual Funds & Risk Levels
            </h2>
            <div className="w-20 h-[3px]  bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Mutual funds offer wealth creation opportunities while balancing
              different levels of investment risk. Understanding both helps
              investors make smarter financial decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Benefits of Mutual Funds
              </h3>

              <div className="grid gap-4">
                {[
                  "Professional Fund Management",
                  "Diversification of Investments",
                  "Long-Term Wealth Creation",
                  "Tax Saving Opportunities",
                  "High Liquidity",
                  "Affordable Investment Options",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 border border-green-100 rounded-2xl p-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                      ✓
                    </div>

                    <p className="font-medium text-[#0F2A44]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Levels */}
            <div className="border border-green-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Risk Levels Explained
              </h3>

              <div className="space-y-5">
                {[
                  {
                    title: "Low Risk",
                    color: "bg-green-100 text-green-700",
                    desc: "Debt Funds and Liquid Funds are suitable for conservative investors.",
                  },
                  {
                    title: "Moderate Risk",
                    color: "bg-yellow-100 text-yellow-700",
                    desc: "Hybrid Funds and Index Funds offer balanced growth with moderate risk.",
                  },
                  {
                    title: "High Risk",
                    color: "bg-red-100 text-red-600",
                    desc: "Equity Funds and Sector Funds have higher growth potential with higher volatility.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-green-100 rounded-2xl p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-[#0F2A44]">
                        {item.title}
                      </h4>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MutualFunds;
