import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ConfidentialityPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: [
        {
          bold: "Nexgentaxsolution",
          text: "is committed to maintaining the confidentiality, privacy, and security of all information shared by our clients. This Confidentiality Policy explains how we protect and handle sensitive personal and business information.",
        },
      ],
    },

    {
      title: "Information We Collect",
      list: [
        "Personal information such as name, email address, phone number, and identification documents.",
        "Business-related information required for registrations, compliance, taxation, and advisory services.",
        "Documents and records submitted for processing government filings and applications.",
        "Communication records exchanged through email, phone calls, or our website.",
      ],
    },

    {
      title: "Use of Confidential Information",
      list: [
        "To provide requested services and professional assistance.",
        "To process registrations, filings, licenses, and compliance requirements.",
        "To communicate service updates, notifications, and important information.",
        "To comply with legal and regulatory obligations where required.",
      ],
    },

    {
      title: "Protection of Information",
      list: [
        "We implement appropriate technical and organizational measures to protect confidential information.",
        "Access to client information is restricted to authorized personnel only.",
        "Documents and records are stored securely and protected against unauthorized access.",
        "We regularly review our security practices to maintain data protection standards.",
      ],
    },

    {
      title: "Non-Disclosure Commitment",
      content: [
        {
          text: "We do not sell, rent, trade, or disclose client information to third parties without prior consent, except where disclosure is required by law, government authorities, or regulatory agencies.",
        },
      ],
    },

    {
      title: "Third-Party Service Providers",
      content: [
        {
          text: "In certain cases, trusted third-party service providers may assist in delivering services. Such providers are required to maintain strict confidentiality and use the information only for authorized purposes.",
        },
      ],
    },

    {
      title: "Retention of Information",
      content: [
        {
          text: "Client information and records may be retained for as long as necessary to fulfill legal, regulatory, accounting, and operational requirements.",
        },
      ],
    },

    {
      title: "Client Responsibilities",
      list: [
        "Provide accurate and complete information when using our services.",
        "Protect your account credentials and confidential business information.",
        "Notify us immediately if you suspect unauthorized access or misuse of your information.",
      ],
    },

    {
      title: "Policy Updates",
      content: [
        {
          text: "Nexgentaxsolution reserves the right to modify this Confidentiality Policy at any time. Any updates will be posted on our website and become effective immediately upon publication.",
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
          CONFIDENTIALITY POLICY
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

export default ConfidentialityPolicy;
