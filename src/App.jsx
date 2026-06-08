import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import HomePage from "./Page/HomePage";
import Footer from "./Component/Footer";
import { ReactLenis, useLenis } from "lenis/react";
import TermsConditions from "./Page/TermsConditions";
import PrivacyPolicy from "./Page/PrivacyPolicy";
import Services from "./Page/Services";
import BlogPage from "./Page/BlogPage";
import ContactusPage from "./Page/ContectusPage";
import ScrollToTop from "./Component/ScrollToTop";
import AboutPage from "./Page/AboutPage";
import NotFound from "./Page/NotFound";
import ServicePage from "./Page/ServicePage";
import ServicePageDSC from "./Page/ServicePageDSC";
import GSTCalculatorPage from "./Page/GSTCalculatorPage";
import IncomeTaxCalculator from "./Page/IncomeTaxCalculator";
import MutualFunds from "./Page/MutualFunds";
import StockAdvisory from "./Page/StockAdvisory";
import IncomeTaxReturnFilling from "./Page/IncomeTaxReturnFilling";
import GSTRegistrationReturns from "./Page/GSTRegistrationReturns";
import TDSReturnPayment from "./Page/TDSReturnPayment";
import CompanyRegistration from "./Page/CompanyRegistration";
import ROCFiling from "./Page/ROCFiling";
import DirectorKYC from "./Page/DirectorKYC";
import ProfessionTax from "./Page/ProfessionTax";
import ProvidentFund from "./Page/ProvidentFund";
import ESIC from "./Page/ESIC";
import LabourWelfareFund from "./Page/LabourWelfareFund";
import AccountingServices from "./Page/AccountingServices";
import InternalAudit from "./Page/InternalAudit";
import StatutoryAudit from "./Page/StatutoryAudit";
import StockAudit from "./Page/StockAudit";
import GSTAudit from "./Page/GSTAudit";

import BusinessSetup from "./Page/BusinessSetup";
import CompanySetupUAE from "./Page/CompanySetupUAE";
import VisaAssistance from "./Page/VisaAssistance";
import GumastaLicense from "./Page/GumastaLicense";
import FSSAIRegistration from "./Page/FSSAIRegistration";
import MSMERegistration from "./Page/MSMERegistration";
import IECRegistration from "./Page/IECRegistration";
import PANRegistration from "./Page/PANRegistration";
import TANRegistration from "./Page/TANRegistration";
import ERPSetup from "./Page/ERPSetup";
import CustomizationStats from "./Page/customizationStats";
import FifteenCACBServices from "./Page/FifteenCACBServices";

const App = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  return (
    <>
      <ReactLenis root />
      <div className="bg-[#f8f8f8]">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/contact-us" element={<ContactusPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/service/:title" element={<ServicePage />} />
            <Route path="/serviceDSC/" element={<ServicePageDSC />} />
            <Route path="/GST Calculator/" element={<GSTCalculatorPage />} />
            <Route path="/Mutual Funds/" element={<MutualFunds />} />
            <Route path="/Stock Advisory/" element={<StockAdvisory />} />
            <Route
              path="/Income Tax Return Filling/"
              element={<IncomeTaxReturnFilling />}
            />
            <Route
              path="/GST Registration & Returns/"
              element={<GSTRegistrationReturns />}
            />
            <Route
              path="/TDS Return & Payment/"
              element={<TDSReturnPayment />}
            />
            <Route
              path="/Company Registration/"
              element={<CompanyRegistration />}
            />
            <Route path="/ROC Filing/" element={<ROCFiling />} />
            <Route path="/Director KYC/" element={<DirectorKYC />} />
            <Route path="/Profession Tax/" element={<ProfessionTax />} />
            <Route path="/Provident Fund/" element={<ProvidentFund />} />
            <Route path="/ESIC/" element={<ESIC />} />
            <Route
              path="/Labour Welfare Fund/"
              element={<LabourWelfareFund />}
            />
            <Route
              path="/Accounting Services/"
              element={<AccountingServices />}
            />
            <Route path="/Internal Audit/" element={<InternalAudit />} />
            <Route path="/Statutory Audit/" element={<StatutoryAudit />} />
            <Route path="/Stock Audit/" element={<StockAudit />} />
            <Route path="/GST Audit/" element={<GSTAudit />} />
            <Route
              path="/15 CA-CB Services/"
              element={<FifteenCACBServices />}
            />
            <Route path="/Business Setup/" element={<BusinessSetup />} />
            <Route path="/Company Setup UAE/" element={<CompanySetupUAE />} />
            <Route path="/Visa Assistance/" element={<VisaAssistance />} />
            <Route path="/Gumasta/" element={<GumastaLicense />} />
            <Route path="/FSSAI/" element={<FSSAIRegistration />} />
            <Route path="/MSME/Udyam/" element={<MSMERegistration />} />
            <Route path="/IEC/" element={<IECRegistration />} />
            <Route path="/PAN/" element={<PANRegistration />} />
            <Route path="/TAN/" element={<TANRegistration />} />
            <Route path="/ERP Setup/" element={<ERPSetup />} />
            <Route path="/Customization/" element={<CustomizationStats />} />
            <Route
              path="/Income Tax Calculator/"
              element={<IncomeTaxCalculator />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
