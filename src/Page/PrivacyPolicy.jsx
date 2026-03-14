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
      content: [
        {
          bold: "We may collect the following types of information:",
        },
      ],
      list: [
        {
          bold2: "Personal Information: ",
          text: " Name, email address, phone number, and company details.",
        },
        {
          bold2: "Identification Documents:",
          text: "PAN, Aadhaar, or other KYC documents when required for regulatory compliance.",
        },
        {
          bold2: "Financial Information:",
          text: "Payment and transaction details.",
        },
        {
          bold2: "Technical Information: ",
          text: "IP address, browser type, device information, and website usage data.",
        },
        // "You may be required to provide accurate information during registration or while using our services.",
        // "You are responsible for keeping your login credentials confidential.",
        // "Accessing resources through automated or unethical means is strictly prohibited.",
        // "Copying, reproducing, or reselling our content or services without permission is not allowed.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          bold: "We use your information to:",
        },
      ],
      list: [
        {
          text: " Provide and manage our services efficiently.",
        },
        {
          text: "Verify your identity and complete registration processes.",
        },
        {
          text: "Improve our website, services, and overall customer experience.",
        },
        {
          text: "Communicate important updates, service notifications, and offers (with your consent).",
        },
      ],
    },
    {
      title: "Data Security",
      content: [
        {
          text: " We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, misuse, or loss. Sensitive data is securely stored, and access is restricted to authorized personnel only.",
        },
      ],
    },
    {
      title: "Sharing of Information",
      content: [
        {
          bold: "We do not sell or rent your personal information to third parties.Your data may be shared with:",
        },
      ],
      list: [
        {
          text: "Government authorities when required by law.",
        },
        {
          text: "Partners or service providers to deliver our services efficiently.",
        },
      ],
    },
    {
      title: "Cookies",
      content: [
        {
          text: " Our website may use cookies and similar technologies to enhance your browsing experience. Cookies help us analyze website traffic and improve functionality, ensuring a better user experience.",
        },
      ],
    },
    {
      title: "Your Rights",
      content: [
        {
          bold: "You have the right to:",
        },
      ],
      list: [
        {
          text: "Access and update your personal information.",
        },
        {
          text: "Request correction or deletion of your data where applicable.",
        },
        {
          text: "Opt-out of marketing communications at any time.",
        },
      ],
    },
    {
      title: "Contact Information",
      // content: [
      //   {
      //     bold: "You have the right to:",
      //   },
      // ],
    },
    {
      title: "Nexgentaxsolution",
      content: [
        {
          bold: "Address:",
          // text: "is a registered corporate services and compliance provider. By availing our services or accessing our website, you agree to the following terms and conditions.",
        },
        {
          bold: "Phone:",
          // text: "is a registered corporate services and compliance provider. By availing our services or accessing our website, you agree to the following terms and conditions.",
        },
        {
          bold: "Email:",
          // text: "is a registered corporate services and compliance provider. By availing our services or accessing our website, you agree to the following terms and conditions.",
        },
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
                    <strong>{items.bold}</strong> <br />
                    <strong>{items.bold2}</strong>
                    {items.text}
                    {items.text2} <br /> {items.text3}
                  </p>
                ))}

              {/* List */}
              {section.list &&
                section.list.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 mb-2">
                    <FaCheckCircle className="text-green-600 mt-1" />
                    <p className="text-gray-600 text-sm">
                      {item.bold2} {item.text}
                    </p>
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
