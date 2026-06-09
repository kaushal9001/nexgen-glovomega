import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DisclaimerPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: [
        {
          bold: "Nexgentaxsolution",
          text: "provides professional business registration, taxation, compliance, and advisory services. The information available on our website is for general informational purposes only and should not be considered legal, financial, or professional advice.",
        },
      ],
    },

    {
      title: "No Professional Advice",
      content: [
        {
          text: "The content published on this website is intended to provide general guidance only. Users should seek professional advice specific to their circumstances before making any business, legal, tax, or financial decisions.",
        },
      ],
    },

    {
      title: "Accuracy of Information",
      list: [
        "We strive to keep all information accurate and up to date.",
        "Laws, regulations, and government policies may change from time to time.",
        "We do not guarantee the completeness, reliability, or accuracy of information published on this website.",
        "Users should independently verify information before relying on it.",
      ],
    },

    {
      title: "Service Outcomes",
      content: [
        {
          text: "Approval of registrations, licenses, trademarks, tax filings, or any government-related applications depends entirely on the concerned authorities. Nexgentaxsolution cannot guarantee approval, registration, or acceptance of any application.",
        },
      ],
    },

    {
      title: "Third-Party Links",
      content: [
        {
          text: "Our website may contain links to third-party websites for informational purposes. We are not responsible for the content, accuracy, security, or privacy practices of external websites.",
        },
      ],
    },

    {
      title: "Limitation of Liability",
      list: [
        "Nexgentaxsolution shall not be liable for any direct, indirect, incidental, or consequential loss arising from the use of this website.",
        "We are not responsible for losses resulting from reliance on website content or third-party information.",
        "Users assume full responsibility for decisions made based on information available on our platform.",
      ],
    },

    {
      title: "No Warranties",
      content: [
        {
          text: "All information and services are provided on an 'as is' and 'as available' basis without warranties of any kind, whether express or implied.",
        },
      ],
    },

    {
      title: "Client Responsibility",
      list: [
        "Provide accurate and complete information when availing services.",
        "Review all submitted documents carefully before approval.",
        "Ensure compliance with applicable laws and regulations.",
        "Consult qualified professionals when necessary.",
      ],
    },

    {
      title: "Changes to Disclaimer",
      content: [
        {
          text: "Nexgentaxsolution reserves the right to modify, update, or revise this Disclaimer Policy at any time without prior notice. Continued use of the website constitutes acceptance of any changes.",
        },
      ],
    },

    {
      title: "Contact Information",
      content: [
        {
          bold: "Address:",
          text: "501/B, B3 Saileela CHS. Building, MP Mill Compound, Tardeo, Mumbai -400034, INDIA",
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
      <div className="rounded-2xl mx-5 md:mx-10 px-5 md:px-10 py-10 shadow-md shadow-gray-400 border-t-[3px] border-green-600">
        <h1 className="text-4xl font-semibold text-[#0F2A44] text-center mb-10">
          DISCLAIMER POLICY
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
                    <br />
                    {items.text2}
                    <br />
                    {items.text3}
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

export default DisclaimerPolicy;
