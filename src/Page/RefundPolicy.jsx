import { FaCheckCircle } from "react-icons/fa";

const RefundPolicy = () => {
  const sections = [
    {
      title: "Refund Policy Overview",
      content: [
        {
          bold: "Nexgentaxsolution",
          text: "provides professional consultancy, registration, compliance, taxation, and business advisory services. By purchasing our services, you acknowledge and agree to the terms of this Refund Policy.",
          text2:
            "Our services involve consultation, document preparation, filing, and coordination with government authorities. Therefore, refunds are subject to the nature and stage of the service.",
        },
      ],
    },

    {
      title: "Eligibility for Refund",
      list: [
        "Refund requests will only be considered if the service has not been initiated.",
        "If incorrect payment has been made due to technical issues, the amount may be refunded after verification.",
        "Refund requests must be submitted within 7 days of payment.",
        "Refund approval is subject to review by our support team.",
      ],
    },

    {
      title: "Non-Refundable Services",
      list: [
        "Government fees, statutory charges, and third-party payments are non-refundable.",
        "Services already delivered, completed, or substantially processed are not eligible for refund.",
        "Consultation fees and advisory charges are non-refundable.",
        "Refunds will not be granted for delays caused by government authorities or incomplete documentation from the client.",
      ],
    },

    {
      title: "Cancellation Policy",
      content: [
        {
          text: "Clients may request cancellation before the commencement of service. Once work has started, cancellation requests may not be accepted or may be subject to partial deductions based on the work completed.",
        },
      ],
    },

    {
      title: "Refund Processing",
      content: [
        {
          text: "Approved refunds will be processed through the original payment method wherever possible.",
          text2:
            "Refunds are generally processed within 7–15 business days after approval.",
        },
      ],
    },

    {
      title: "Service Delays",
      content: [
        {
          text: "Nexgentaxsolution shall not be responsible for delays caused by government departments, regulatory authorities, technical issues, or circumstances beyond our control. Such delays do not qualify for refunds.",
        },
      ],
    },

    {
      title: "Modification of Services",
      content: [
        {
          text: "In certain cases, instead of a refund, we may offer an adjustment, credit, or alternative service of equivalent value depending on the circumstances.",
        },
      ],
    },

    {
      title: "Contact for Refund Requests",
      content: [
        {
          bold: "Address:",
          text: "501/B, B3 Saileela CHS. Building, MP Mill Compound, Tardeo, Mumbai - 400034, INDIA",
        },
        {
          bold: "Phone:",
          text: "+91 7021182227",
        },
        {
          bold: "Email:",
          text: "info@nexgentaxsolution.com",
        },
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="rounded-2xl mx-5 md:mx-10 px-5 md:px-10 py-10 shadow-md shadow-gray-400 border-t-3 border-green-600">
        <h1 className="text-4xl font-semibold text-[#0F2A44] text-center mb-10">
          REFUND POLICY
        </h1>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {section.title}
              </h2>

              {section.content &&
                section.content.map((items, i) => (
                  <p
                    key={i}
                    className="text-gray-600 text-sm mb-3 leading-relaxed"
                  >
                    <strong>{items.bold}</strong> {items.text}
                    <br /> {items.text2}
                    <br /> {items.text3}
                  </p>
                ))}

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

export default RefundPolicy;
