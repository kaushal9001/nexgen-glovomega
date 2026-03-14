import { FaCheckCircle } from "react-icons/fa";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      content: [
        {
          text: "At Nexgentaxsolution, we value your privacy and are committed to protecting your personal and business information.",
          text2:
            " This Privacy Policy explains how we collect, use, store, and safeguard your data when you access our website or use our services. By using our platform, you agree to the practices described in this policy.",
        },
      ],
    },
    {
      title: "Information We Collect",
      list: [
        "We may collect the following types of information: Personal Information: Name, email address, phone number, and company details.",
        "Identification Documents: PAN, Aadhaar, or other KYC documents when required for regulatory compliance.",
        "Financial Information: Payment and transaction details.",
        "Technical Information: IP address, browser type, device information, and website usage data. How We Use Your Information",
      ],
    },
    {
      title: "We use your information to:",
      list: [
        "Provide and manage our services efficiently.",
        "Verify your identity and complete registration processes.",
        "Improve our website, services, and overall customer experience.",
        "Communicate important updates, service notifications, and offers (with your consent).",
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="rounded-2xl mx-5 md:mx-10 px-5 md:px-10 py-10 shadow-md shadow-gray-400 border-t-3 border-green-600">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-[#0F2A44] text-center mb-10">
          PRIVACY POLICY
        </h1>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {section.title}
              </h2>

              {/* Paragraphs */}
              {section.content &&
                section.content.map((items, i) => (
                  <p
                    key={i}
                    className="text-gray-600 text-sm mb-3 leading-relaxed"
                  >
                    {items.text}
                    <br /> {items.text2} <br /> {items.text3}
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

export default PrivacyPolicy;
