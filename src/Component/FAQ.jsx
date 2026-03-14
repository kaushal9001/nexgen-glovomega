import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What services does Nexgentaxsolution provide?",
      answer:
        "Nexgentaxsolution offers a wide range of business and tax-related services including company registration, GST registration and filing, income tax return filing, ROC compliance, and other regulatory support for businesses and individuals.",
    },
    {
      question:
        "Which business structures can I register through Nexgentaxsolution?",
      answer:
        "You can register different types of business entities such as *Private Limited Company, LLP (Limited Liability Partnership), OPC (One Person Company), Partnership Firm, and Sole Proprietorship* with our expert guidance.",
    },
    {
      question: "How long does it take to register a company in India?",
      answer:
        "The time required for company registration typically ranges from *7 to 15 working days*, depending on document verification and government approvals.",
    },
    {
      question: " Do you provide GST filing services?",
      answer:
        "Yes, Nexgentaxsolution provides *GST registration, monthly and quarterly GST return filing, and GST compliance support* to help businesses stay compliant with tax regulations.",
    },
    {
      question: "Can you help with Income Tax Return (ITR) filing?",
      answer:
        "Absolutely. Our experts assist individuals, professionals, and businesses with *accurate and timely Income Tax Return filing* while ensuring compliance with current tax laws.",
    },
    {
      question: "Why should I choose Nexgentaxsolution?",
      answer:
        "Nexgentaxsolution focuses on *reliable service, expert guidance, transparent processes, and timely compliance support* to make business and tax management simple and stress-free for our clients.",
    },
  ];

  return (
    <section className="px-5 md:px-10">
      <div className="flex flex-col gap-5">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border bg-white/50 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1  transition duration-500 cursor-pointer"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <div className="flex items-center gap-3 cursor-pointer">
              <FaQuestionCircle className="text-green-600 text-5xl md:text-lg" />

              <h3 className="text-[#0F2A44] font-medium">{item.question}</h3>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                open === index ? "max-h-50 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
