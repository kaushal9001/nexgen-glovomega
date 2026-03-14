import { FaCheckCircle } from "react-icons/fa";

const TermsConditions = () => {
  const sections = [
    {
      title: "Introduction",
      content: [
        {
          bold: "Nexgentaxsolution",
          text: "is a registered corporate services and compliance provider. By availing our services or accessing our website, you agree to the following terms and conditions.",
          text2:
            "All fees are subject to Goods and Services Tax (GST). If you provide your GSTIN at the time of payment, a GST e-invoice will be issued, and you may claim Input Tax Credit where applicable.",
          text3:
            "Any additional government or regulatory fees associated with company registration, licenses, or trademark services will be clearly communicated upfront in the invoice.",
        },
      ],
    },
    {
      title: "Website Use",
      content: [
        {
          text: "This website is owned and operated by Nexgentaxsolution. By visiting our website or using our services, you agree to abide by these Terms & Conditions. We reserve the right to update or modify these terms at any time without prior notice.",
          text2:
            " Continued use of our services constitutes acceptance of the updated terms.",
        },
      ],
    },

    {
      title: "Responsible Use and Conduct",
      list: [
        "You may be required to provide accurate information during registration or while using our services.",
        "You are responsible for keeping your login credentials confidential.",
        "Accessing resources through automated or unethical means is strictly prohibited.",
        "Copying, reproducing, or reselling our content or services without permission is not allowed.",
      ],
    },
    {
      title: "Privacy",
      content: [
        {
          text: "Your privacy is important to us. Please refer to our Privacy Policy to understand how we collect, store, and manage your personal and business information.",
        },
      ],
    },
    {
      title: "Limitation of Liability",
      list: [
        "Any claim against Nexgentaxsolution is limited to the amount you paid for the services.",
        "We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        {
          text: "All content on this website, including text, graphics, logos, images, and code, is the intellectual property of Nexgentaxsolution and protected under applicable laws.",
        },
      ],
    },
    {
      title: "Termination of Use",
      content: [
        {
          text: "We may suspend or terminate access to our services without notice if you violate these Terms & Conditions or engage in unauthorized use of our resources.",
        },
      ],
    },
    {
      title: "Contact Information",
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
    <section className="py-16  ">
      <div className=" rounded-2xl mx-5 md:md:mx-10 px-5 md:px-10  py-10 shadow-md shadow-gray-400 border-t-3 border-green-600">
        {/* Title */}
        <h1 className="text-4xl font-semibold text-[#0F2A44] text-center mb-10">
          TERMS & CONDITIONS
        </h1>

        <div className="space-y-8  ">
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
                    <strong>{items.bold}</strong> {items.text}
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

export default TermsConditions;
