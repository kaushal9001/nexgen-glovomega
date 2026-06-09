import React from "react";
import { Link } from "react-router-dom";
const customizationStats1 = [
  {
    number: "200+",
    label: "Projects Customized",
  },
  {
    number: "95%",
    label: "Client Satisfaction",
  },
  {
    number: "10+",
    label: "Industry Solutions",
  },
  {
    number: "24/7",
    label: "Support",
  },
];
const customizationChallenges = [
  {
    title: "Generic Software Limitations",
    desc: "Off-the-shelf software often lacks the specific features and workflows required by your business.",
  },
  {
    title: "Manual Workarounds",
    desc: "Employees spend extra time using spreadsheets and manual processes to compensate for missing functionalities.",
  },
  {
    title: "Integration Challenges",
    desc: "Different business applications may not communicate effectively, resulting in data silos.",
  },
  {
    title: "Operational Inefficiencies",
    desc: "Standard software may create bottlenecks that slow down daily business operations.",
  },
  {
    title: "Scalability Issues",
    desc: "As businesses grow, existing software may struggle to support increasing operational demands.",
  },
  {
    title: "Poor User Experience",
    desc: "Complex interfaces and unnecessary features can reduce employee productivity and adoption.",
  },
];
const customizationInfo = [
  {
    title: "Workflow Optimization",
    desc: "Modify software workflows to match your unique business operations and processes.",
  },
  {
    title: "Feature Enhancement",
    desc: "Add custom features, modules, and functionality based on specific business requirements.",
  },
  {
    title: "System Integration",
    desc: "Connect multiple applications and systems for seamless data sharing and automation.",
  },
  {
    title: "UI/UX Improvements",
    desc: "Enhance user experience through customized interfaces and simplified workflows.",
  },
  {
    title: "Business Automation",
    desc: "Automate repetitive tasks and reduce manual effort through intelligent workflows.",
  },
  {
    title: "Scalable Solutions",
    desc: "Build flexible systems that can grow alongside your business requirements.",
  },
];
const customizationServices = [
  {
    title: "ERP Customization",
    desc: "Customize ERP modules, workflows, dashboards, and reports according to business requirements.",
  },
  {
    title: "CRM Customization",
    desc: "Enhance customer management processes with custom CRM features and automation.",
  },
  {
    title: "HRMS Customization",
    desc: "Modify HR, attendance, payroll, and employee management systems to fit your organization.",
  },
  {
    title: "Accounting Software Customization",
    desc: "Customize accounting workflows, reports, taxation modules, and financial dashboards.",
  },
  {
    title: "Inventory Management System",
    desc: "Build customized inventory tracking, stock management, and warehouse workflows.",
  },
  {
    title: "E-Commerce Customization",
    desc: "Enhance online stores with custom features, integrations, and customer experiences.",
  },
  {
    title: "Web Application Customization",
    desc: "Develop and customize web-based business applications tailored to your operations.",
  },
  {
    title: "Mobile App Customization",
    desc: "Modify mobile applications with custom features, workflows, and integrations.",
  },
];
const technologies = [
  "Odoo ERP",
  "Zoho",
  "Salesforce",
  "SAP",
  "Microsoft Dynamics",
  "React.js",
  "Node.js",
  "Laravel",
  "WordPress",
  "Shopify",
];

const customizationProcess = [
  {
    id: "01",
    title: "Requirement Analysis",
    desc: "We understand your business processes, challenges, and customization needs.",
  },
  {
    id: "02",
    title: "Solution Planning",
    desc: "Our experts design a customization strategy tailored to your workflow.",
  },
  {
    id: "03",
    title: "Development & Integration",
    desc: "Custom features, modules, and integrations are developed and implemented.",
  },
  {
    id: "04",
    title: "Testing & Quality Check",
    desc: "The customized solution is thoroughly tested for performance and reliability.",
  },
  {
    id: "05",
    title: "Deployment",
    desc: "The solution is deployed smoothly with minimal disruption to operations.",
  },
  {
    id: "06",
    title: "Support & Optimization",
    desc: "Ongoing maintenance, support, and future enhancements are provided.",
  },
];
const customizationBenefits = [
  {
    title: "Improved Productivity",
    desc: "Customized workflows help employees complete tasks faster and more efficiently.",
  },
  {
    title: "Business Process Automation",
    desc: "Reduce manual work and automate repetitive tasks for better operational efficiency.",
  },
  {
    title: "Better User Experience",
    desc: "Software is tailored to user needs, making it easier to use and adopt.",
  },
  {
    title: "Scalable Solutions",
    desc: "Customized systems can grow and adapt as your business expands.",
  },
  {
    title: "Competitive Advantage",
    desc: "Gain unique features and capabilities that differentiate your business from competitors.",
  },
  {
    title: "Higher Return on Investment",
    desc: "Maximize the value of your software investment with features that directly support business goals.",
  },
];
const CustomizationStats = () => {
  return (
    <div>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-4xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Software Customization Services
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Customize Your Software
                <span className="block text-green-600">
                  According to Your Business Needs
                </span>
              </h1>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                Every business has unique workflows and requirements. We help
                customize ERP, CRM, HRMS, Accounting Systems, Websites, and
                Business Applications to perfectly align with your operations,
                processes, and growth objectives.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to={"/contact-us"}
                  className="relative cursor-pointer overflow-hidden border   border-green-600 text-green-600 px-4 py-3 rounded-2xl text-sm font-medium group "
                >
                  <span className="absolute inset-0 bg-green-600 w-0 group-hover:w-full transition-all duration-500"></span>

                  <span className="relative z-10 w-40 flex items-center gap-2 justify-center group-hover:text-white transition">
                    Schedule Consultation
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className=" p-8 md:p-12 h-full">
              <div className="grid grid-cols-2 gap-5">
                {customizationStats1.map((item, index) => (
                  <div
                    key={index}
                    className=" border border-green-200 rounded-3xl p-6"
                  >
                    <h3 className="text-4xl font-bold text-green-600">
                      {item.number}
                    </h3>

                    <p className="text-gray-600 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6  border border-green-200 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-[#0F2A44] mb-3">
                  What We Customize
                </h3>

                <p className="text-gray-600 leading-7">
                  ERP, CRM, HRMS, Accounting Software, Inventory Systems,
                  E-Commerce Platforms, Web Applications, Mobile Apps, and
                  Business Automation Solutions tailored to your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            What is Software Customization?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Software customization is the process of modifying existing software
            applications to meet specific business requirements, improve
            workflows, and enhance overall operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customizationInfo.map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-green-700 font-bold text-lg">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Tailored Solutions for Better Performance
          </h3>

          <p className="text-gray-700 leading-8">
            Customization ensures that your software works the way your business
            operates, rather than forcing your team to adapt to standard
            software limitations. The result is better productivity, improved
            user adoption, and long-term business growth.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Why Businesses Need Customization?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Every business operates differently. Customization helps
            organizations overcome software limitations, improve efficiency, and
            create systems that align perfectly with their business processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customizationChallenges.map((item, index) => (
            <div
              key={index}
              className="border border-red-200 rounded-3xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 font-bold">
                !
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Customization Services We Offer
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide end-to-end software customization services that help
            businesses optimize workflows, improve productivity, and achieve
            better operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customizationServices.map((service, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-green-700 font-bold text-lg">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#0F2A44] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Customized Solutions for Every Business
          </h3>

          <p className="text-gray-700 leading-8">
            Whether you need ERP enhancements, CRM automation, HRMS
            improvements, accounting software modifications, or complete
            business application customization, our team delivers solutions
            tailored specifically to your business goals and operational
            requirements.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Platforms, Technologies & Our Process
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We work with leading ERP, CRM, web, and business technologies while
            following a structured customization process that ensures quality,
            scalability, and business success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technologies */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Platforms & Technologies
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="border border-green-100 rounded-2xl p-4 flex items-center gap-3 hover:bg-green-50 transition"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                    ✓
                  </div>

                  <span className="font-medium text-[#0F2A44]">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Our Customization Process
            </h3>

            <div className="space-y-4">
              {customizationProcess.map((step) => (
                <div
                  key={step.id}
                  className="flex gap-4 border border-green-100 rounded-2xl p-4"
                >
                  <div className="min-w-[50px] h-[50px] bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                    {step.id}
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0F2A44] mb-1">
                      {step.title}
                    </h4>

                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Built Around Your Business Requirements
          </h3>

          <p className="text-gray-700 leading-8">
            From ERP and CRM platforms to custom web and mobile applications, we
            leverage modern technologies and proven implementation methods to
            deliver solutions that improve efficiency, productivity, and
            long-term business growth.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Benefits of Customization
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Software customization helps businesses work smarter, improve
            efficiency, and create systems that perfectly align with their
            operational needs and growth goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customizationBenefits.map((item, index) => (
            <div
              key={index}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                ✓
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Transform Software Into a Business Growth Engine
          </h3>

          <p className="text-gray-700 leading-8">
            Instead of changing your business processes to fit standard
            software, customization allows software to adapt to your business.
            This leads to higher efficiency, better team productivity, improved
            customer experience, and long-term business growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CustomizationStats;
