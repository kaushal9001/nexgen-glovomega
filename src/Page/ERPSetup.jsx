import React from "react";
import { Link } from "react-router-dom";
const erpStats = [
  {
    number: "100+",
    label: "ERP Projects Delivered",
  },
  {
    number: "95%",
    label: "Client Satisfaction",
  },
  {
    number: "10+",
    label: "Industries Served",
  },
  {
    number: "24/7",
    label: "Support",
  },
];
const erpFeatures = [
  "Custom ERP Solutions",
  "Business Process Automation",
  "Data Migration Support",
  "Training & Ongoing Support",
];
const businessChallenges = [
  {
    title: "Manual Operations",
    desc: "Managing business processes through spreadsheets and manual work consumes valuable time and increases errors.",
  },
  {
    title: "Disconnected Departments",
    desc: "Sales, accounts, inventory, HR, and operations often work on separate systems without proper coordination.",
  },
  {
    title: "Lack of Real-Time Insights",
    desc: "Business owners struggle to access accurate reports and make data-driven decisions quickly.",
  },
  {
    title: "Inventory & Stock Issues",
    desc: "Poor inventory tracking can lead to stock shortages, overstocking, and revenue loss.",
  },
  {
    title: "Slow Approval Processes",
    desc: "Manual approvals and paperwork delay business operations and reduce productivity.",
  },
  {
    title: "Business Growth Challenges",
    desc: "As businesses grow, managing multiple processes without automation becomes increasingly difficult.",
  },
];
const erpInfo = [
  {
    title: "Centralized Management",
    desc: "ERP integrates multiple business functions into a single platform for better control and visibility.",
  },
  {
    title: "Process Automation",
    desc: "Automates repetitive tasks and workflows, reducing manual effort and operational errors.",
  },
  {
    title: "Real-Time Reporting",
    desc: "Provides instant access to business data, analytics, and performance reports.",
  },
  {
    title: "Department Integration",
    desc: "Connects sales, finance, inventory, HR, procurement, and operations seamlessly.",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Supports business growth by adapting to increasing operational requirements.",
  },
  {
    title: "Improved Decision Making",
    desc: "Enables management to make faster and smarter business decisions using accurate data.",
  },
];
const erpModules = [
  "Accounting & Finance",
  "Inventory Management",
  "Sales & CRM",
  "Human Resources",
  "Payroll Management",
  "Procurement",
  "Manufacturing",
  "Project Management",
  "Customer Support",
];

const industries = [
  "Manufacturing",
  "Retail",
  "Healthcare",
  "Education",
  "Logistics",
  "Real Estate",
  "Construction",
  "E-Commerce",
];
const erpProcess = [
  {
    id: "01",
    title: "Business Analysis",
    desc: "We study your existing workflows, challenges, and business requirements to identify the right ERP solution.",
  },
  {
    id: "02",
    title: "ERP Planning",
    desc: "Our experts define modules, implementation scope, timelines, and deployment strategy.",
  },
  {
    id: "03",
    title: "System Configuration",
    desc: "The ERP platform is customized according to your business processes and operational needs.",
  },
  {
    id: "04",
    title: "Data Migration",
    desc: "Existing business data is securely transferred into the new ERP system with accuracy.",
  },
  {
    id: "05",
    title: "Training & Testing",
    desc: "Employees are trained and the ERP system is thoroughly tested before deployment.",
  },
  {
    id: "06",
    title: "Go Live & Support",
    desc: "The ERP system goes live with continuous monitoring and post-implementation support.",
  },
];
const erpBenefits = [
  {
    number: "40%",
    title: "Higher Productivity",
    desc: "Automated workflows help teams work faster and more efficiently.",
  },
  {
    number: "60%",
    title: "Faster Reporting",
    desc: "Generate real-time reports and insights instantly.",
  },
  {
    number: "30%",
    title: "Cost Reduction",
    desc: "Reduce operational costs through process automation and optimization.",
  },
  {
    number: "100%",
    title: "Data Visibility",
    desc: "Access business information from one centralized platform.",
  },
];
const ERPSetup = () => {
  return (
    <div>
      <section className="md:px-10 px-5 mt-10">
        <div className="border border-green-200 rounded-4xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left Side */}
            <div className="p-8 md:p-12">
              <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                ERP Implementation Services
              </span>

              <h1 className="text-4xl md:text-6xl font-bold text-[#0F2A44] mt-6 leading-tight">
                Transform Your Business
                <span className="block text-green-600">
                  With Smart ERP Solutions
                </span>
              </h1>

              <p className="text-gray-600 text-lg leading-8 mt-6">
                Streamline operations, automate workflows, improve team
                productivity, and gain real-time business visibility through a
                powerful ERP solution tailored to your business needs.
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
            <div className="     p-8 md:p-12 h-full">
              <div className="grid grid-cols-1 gap-5">
                <div className="border border-green-200 rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-[#0F2A44] mb-3">
                    Centralized Business Management
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Manage accounting, inventory, sales, HR, payroll, and
                    operations from a single integrated platform.
                  </p>
                </div>

                <div className="border border-green-200 rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-[#0F2A44] mb-3">
                    Real-Time Business Insights
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Access live reports and dashboards to make faster and more
                    informed business decisions.
                  </p>
                </div>

                <div className="border border-green-200 rounded-3xl p-6">
                  <h3 className="text-xl font-bold text-[#0F2A44] mb-3">
                    Improved Productivity
                  </h3>

                  <p className="text-gray-600 leading-7">
                    Automate repetitive tasks, reduce manual errors, and improve
                    overall operational efficiency.
                  </p>
                </div>
              </div>

              <div className="mt-6   border border-green-200 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-[#0F2A44] mb-3">
                  Complete ERP Solutions
                </h3>

                <p className="text-gray-600 leading-7">
                  Accounting, Inventory, CRM, HR, Payroll, Procurement,
                  Manufacturing, Reporting and much more — all integrated into
                  one powerful system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            What is ERP Setup?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            ERP (Enterprise Resource Planning) is a business management system
            that integrates various departments and processes into a single
            platform, helping organizations improve efficiency, productivity,
            and decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {erpInfo.map((item, index) => (
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
            One System. Complete Business Control.
          </h3>

          <p className="text-gray-700 leading-8">
            ERP software eliminates data silos and brings all business
            operations together under one platform. From inventory and
            accounting to HR, CRM, sales, procurement, and reporting, everything
            is managed in a centralized system for maximum efficiency.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Is Your Business Facing These Challenges?
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Many growing businesses struggle with operational inefficiencies,
            disconnected systems, and lack of visibility. ERP helps solve these
            challenges through centralized management and automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessChallenges.map((item, index) => (
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
            ERP Modules & Industries We Serve
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            We implement industry-specific ERP solutions designed to streamline
            operations, improve productivity, and support business growth across
            multiple sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ERP Modules */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              ERP Modules We Implement
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {erpModules.map((module, index) => (
                <div
                  key={index}
                  className="border border-green-100 rounded-2xl p-4 flex items-center gap-3 hover:bg-green-50 transition"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                    ✓
                  </div>

                  <span className="font-medium text-[#0F2A44]">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="border border-green-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
              Industries We Serve
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="border border-green-100 rounded-2xl p-4 flex items-center gap-3 hover:bg-green-50 transition"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                    ✓
                  </div>

                  <span className="font-medium text-[#0F2A44]">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Customized ERP Solutions for Every Industry
          </h3>

          <p className="text-gray-700 leading-8">
            Every business has unique operational requirements. Our ERP
            solutions are customized according to your industry, workflow, and
            growth goals, ensuring maximum efficiency, automation, and business
            visibility.
          </p>
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            ERP Implementation Process
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Our structured ERP implementation methodology ensures smooth
            deployment, minimal disruption, and maximum business value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {erpProcess.map((step) => (
            <div
              key={step.id}
              className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-5">
                <span className="text-green-700 font-bold text-lg">
                  {step.id}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#0F2A44] mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="md:px-10 px-5 mt-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F2A44]">
            Business Impact & Benefits
          </h2>

          <div className="w-20 h-[3px] bg-linear-to-r from-[#f2fff7] via-green-600 to-[#f2fff7] mx-auto mt-3 rounded"></div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            ERP implementation delivers measurable business improvements by
            increasing efficiency, improving visibility, and supporting growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
              Increased Efficiency
            </h4>

            <p className="text-gray-600 leading-7">
              Automate routine tasks and streamline workflows to improve
              productivity across departments.
            </p>
          </div>

          <div className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
              Better Decision Making
            </h4>

            <p className="text-gray-600 leading-7">
              Access real-time reports and business insights to make faster and
              more informed decisions.
            </p>
          </div>

          <div className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
              Improved Collaboration
            </h4>

            <p className="text-gray-600 leading-7">
              Connect teams and departments through a centralized system that
              improves communication and coordination.
            </p>
          </div>

          <div className="border border-green-200 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300">
            <h4 className="text-xl font-semibold text-[#0F2A44] mb-3">
              Scalable Growth
            </h4>

            <p className="text-gray-600 leading-7">
              Support business expansion with flexible ERP solutions that grow
              along with your organization.
            </p>
          </div>
        </div>

        <div className="mt-10 border border-green-200 bg-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-[#0F2A44] mb-4">
            Drive Growth with the Right ERP Solution
          </h3>

          <p className="text-gray-700 leading-8">
            A well-implemented ERP system improves operational efficiency,
            enhances decision-making, eliminates data silos, and provides the
            foundation needed for sustainable business growth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ERPSetup;
