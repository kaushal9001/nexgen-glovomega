import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  const sections = [
    {
      title: "Business Registration",
      content: [
        "Start your business in India with the right legal structure such as Private Limited Company, LLP or OPC.",
        "Our experts guide you through company incorporation, documentation and government approvals.",
      ],
      list: [
        "Private Limited Company Registration",
        "Limited Liability Partnership (LLP)",
        "One Person Company (OPC)",
        "Partnership Firm Registration",
      ],
    },

    {
      title: "GST Services",
      content: [
        "We help businesses stay GST compliant with easy registration and return filing services.",
      ],
      list: [
        "GST Registration",
        "GST Return Filing",
        "GST Compliance Support",
        "GST Notice Handling",
      ],
    },

    {
      title: "Income Tax Services",
      content: [
        "Our tax experts assist individuals and businesses with income tax filing and compliance.",
      ],
      list: [
        "Income Tax Return Filing",
        "Tax Planning & Consultation",
        "TDS Return Filing",
        "Tax Notice Resolution",
      ],
    },

    {
      title: "Trademark & Intellectual Property",
      content: [
        "Protect your brand identity with our trademark and intellectual property services.",
      ],
      list: [
        "Trademark Registration",
        "Trademark Renewal",
        "Trademark Objection Handling",
        "Copyright Registration",
      ],
    },

    {
      title: "Accounting & Compliance",
      content: [
        "Ensure smooth business operations with professional accounting and compliance services.",
      ],
      list: [
        "Bookkeeping & Accounting",
        "Payroll Management",
        "ROC Compliance",
        "Annual Filing Services",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="rounded-2xl mx-5 md:mx-10 px-5 md:px-10 py-10 shadow-md shadow-gray-400 border-t-3 border-green-600">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-[#0F2A44] text-center mb-10">
          OUR SERVICES
        </h1>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-[#0F2A44] mb-3">
                {section.title}
              </h2>

              {/* Paragraphs */}
              {section.content &&
                section.content.map((text, i) => (
                  <p
                    key={i}
                    className="text-gray-600 text-sm mb-3 leading-relaxed"
                  >
                    {text}
                  </p>
                ))}

              {/* List */}
              {section.list &&
                section.list.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 mb-2">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    <p className="text-gray-600 text-sm">{item}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
