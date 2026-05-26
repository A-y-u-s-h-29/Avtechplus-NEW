import React from "react";
import {
  FiCheckCircle,
  FiPhoneCall,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom"
const ForensicAuditService = () => {

  const navigate = useNavigate();
  const auditPoints = [
    {
      id: 1,
      title: "1. Contract & Tender Review",
      details: [
        "Tendering process transparency",
        "Bid evaluation fairness",
        "L1 vs final award justification",
        "Contract amendments & scope"
      ],
      redFlags: [
        "Single vendor selection without justification",
        "Repeated awards to same vendor",
        "Bid Evaluation Issues",
        "Negotiations and terms and conditions amendments",
      ],
      image: "/images/contract.png"
    },
    {
      id: 2,
      title: "2. Cost & Payment Verification",
      details: [
        "Comparison of budget vs actual cost",
        "Verification of RA bills (Running Account Bills)",
        "Duplicate or inflated billing",
        "Unsupported cost escalations Manpower and machinery"
      ],
      redFlags: [
        "Over-invoicing",
        "Payments without milestone completion",
        "Same invoice billed multiple times",
        "Excess rates of extra/substituted items",
      ],
      image: "/images/payment-method.png"
    },
    {
      id: 3,
      title: "3. Fund Flow Analysis",
      subtitle: "AVtech/Forensic Audit/Page 3 of 6",
      details: [
        "End-to-end trail of funds",
        "Diversion of funds to unrelated entities",
        "Layering through shell Companies"
      ],
      redFlags: [
        "Payments routed through multiple intermediaries",
        "Related-party transactions",
      ],
      image: "/images/bank.png"
    },
    {
      id: 4,
      title: "4. Supply Chain Management",
      details: [
        "Vendor selection process",
        "Price benchmarking",
        "Quality compliance of materials",
        "Related-party vendors",
        "Warehouse management",
        "Materials quantity and quality Reconciliation"
      ],
      redFlags: [
        "Ghost vendors",
        "Procurement at above-market rates",
        "Collusion between employees & suppliers",
        "Materials quantity and quality issues",
      ],
      image: "/images/box.png"
    },
    {
      id: 5,
      title: "5. Project Execution Audit",
      details: [
        "Physical progress vs reported progress",
        "Site verification (quantity & quality)",
        "Delays and penalty clauses enforcement"
      ],
      redFlags: [
        "False progress reporting",
        "Actual work different than GFCs",
        "AVtech/Forensic Audit/Page 4 of 6",
        "Use of substandard materials",
        "Idle equipment billed as active",
        "Improper/deficient site records",
      ],
      image: "/images/construction.png"
    },
    {
      id: 6,
      title: "6. Quantity & Measurement Verification",
      details: [
        "BOQ (Bill of Quantities) correctness",
        "Measurement books validation",
        "Third-party certification Accuracy"
      ],
      redFlags: ["Inflated quantities", "Duplicate measurements"],
      image: "/images/benchmark.png"
    },
    {
      id: 7,
      title: "7. Time Overrun Analysis",
      details: [
        "Reasons for delays (genuine vs manipulated)",
        "Claims for extension of time (EOT)",
        "Liquidated damages Application"
      ],
      redFlags: [
        "Artificial delays to justify escalation",
        "Weak contract enforcement",
      ],
      image: "/images/calendar.png"
    },
    {
      id: 8,
      title: "8. Regulatory & Compliance Check",
      details: [
        "Environmental approvals",
        "Land acquisition compliance",
        "GST, tax compliance",
        "Labour laws adherence"
      ],
      redFlags: [
        "Staff not trained for compliances",
        "Conditions of approvals not implemented",
        "AVtech/Forensic Audit/Page 5 of 6",
        "Weak contract enforcement"
      ],
      image: "/images/approved.png"
    },
    {
      id: 9,
      title: "9. Documentation Review",
      details: [
        "Agreement copies",
        "Invoices and work orders",
        "Site records, inspection"
      ],
      redFlags: ["Missing or forged documents", "Backdated approvals"],
      image: "/images/documents.png"
    },
    {
      id: 10,
      title: "10. Employee & Stakeholder Investigation",
      details: [
        "Conflict of interest",
        "Kickbacks / bribery evidence",
        "Internal control weaknesses",
        "Backdated approvals",
        "Stakeholders interview"
      ],
      redFlags: ["Conflict of interest", "Kickbacks / bribery evidence"],
      image: "/images/two-people.png"
    },
    {
      id: 11,
      title: "11. Comprehensive report",
      details: [
        "Kaizen dashboard",
        "Risk assessment",
        "Analysis of 3-M (Manpower, Material and Machinery) policy",
        "Mitigation plan for upcoming"
      ],
      redFlags: [],
      image: "/images/audit (2).jpeg"
    },
  ];

  return (
    <section className="bg-white">
      {/* 1. IMAGE WITH WHITE SPACE (No Heading) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-30 md:py-30">
        <div className="rounded-3xl overflow-hidden ">
          <img
            src="/images/MAIN.png"
            alt="Forensic Audit Infrastructure Project"
            className="w-full h-auto object-contain"
            style={{ 
              maxHeight: "90vh",
              objectFit: "contain"
            }}
            loading="eager"
          />
        </div>
      </div>

      {/* 2. TEXT LEFT / IMAGE RIGHT SECTION */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Detailed Text */}
          <div className="space-y-6">
            <div>
              <span className="bg-orange-500 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest inline-block mb-4">
                AVtech Risk Advisory
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase leading-tight">
                Forensic Audit for <span className="text-orange-500">Infrastructure Projects</span>
              </h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              A Forensic Audit for Infrastructure Projects in India is a specialized audit aimed at detecting fraud, misappropriation, corruption, cost overruns, contractual violations, and inefficiencies in large capital-intensive projects like roads, railways, power plants, warehouses, and EPC works. <br />Forensic Audit is highly relevant— especially for projects involving capex, vendors, logistics contracts, and publicprivate partnerships (PPP).
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl space-y-3 border-l-4 border-orange-500">
              <h3 className="font-bold text-gray-900 text-lg">Why a Client needs Forensic Audit Advisory Services.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "For robust schedule management through global best practices",
                  "For a professional approach and use of technology to continually plan, schedule and monitor the project",
                  "For maximising contractual benefits and safeguarding the interest of the project",
                  "For securing profit and saving on costs",
                  "For reducing risks related to contractual obligations",
                  "For avoiding unjustified claims and threat of litigation",
                  "For an integrated document covering all potential claims",
                  "For evidence compilation in an organised manner",
                  "For solid ground work for negotiation, arbitration and litigation",
                  "For quantification and apportionment of delay to extend the time claim",
                  "For quantification and apportionment of cost for prolongation, disruption, acceleration and variation cost claims",
                  "For resolving disputes in reduced time and saving money",
                  "For successful resolution of negotiations",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <FiCheckCircle className="text-orange-500 text-sm flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-gray-700 leading-relaxed space-y-2">
              <h4 className="font-bold text-gray-900 text-lg uppercase tracking-wide">Forensic Audit</h4>
              <p className="italic font-medium">A forensic audit goes beyond routine financial audit. It focuses on:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Identifying frauds or leakages</li>
                <li>Examining contract compliance</li>
                <li>Tracing fund flow</li>
              </ul>
              <p className="text-xs text-gray-400 pt-1">AVtech/Forensic Audit/Page 2 of 6</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Project Execution Audit</li>
                <li>Supply chain assessment</li>
                <li>Business risk assessment</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative group sticky top-8 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-white 
                            w-48 h-48 
                            xs:w-56 xs:h-56 
                            sm:w-64 sm:h-64 
                            md:w-72 md:h-72 
                            lg:w-80 lg:h-80 
                            xl:w-96 xl:h-96">
              <img
                src="/images/audit (1).jpeg"
                alt="Audit Risk Analysis Dashboard"
                className="w-full h-full object-cover"
                width="512"
                height="512"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. RED FLAGS LIST - Vertically aligned text centered with Image on Right */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-2 block">
              Key Focus Areas
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">
              Red Flags & <span className="text-orange-500">Risk Indicators</span>
            </h3>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-4 italic">
              Following Paras bring out Key areas of Forensic Audit. However, the Client may add some concerns or may opt out of certain areas of Forensic Audit.
            </p>
            <div className="w-20 h-2 bg-orange-500 mt-4 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {auditPoints.map((point, index) => (
              <div
                key={point.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Main container layout split 50/50 on large screens, aligned horizontally */}
                <div className="flex flex-col lg:flex-row items-center w-full">
                  
                  {/* LEFT half: Fully centered vertical content wrapper */}
                  <div className="flex-1 w-full flex flex-col justify-center items-center text-center p-8 md:p-12">
                    <div className="flex flex-col items-center max-w-xl w-full">
                      
                      {/* Vertically stacked header items */}
                      <div className="flex flex-col items-center mb-4">
                        <h4 className="font-bold text-gray-800 text-2xl md:text-3xl uppercase tracking-wide">
                          {point.title}
                        </h4>
                        {point.subtitle && (
                          <span className="text-xs text-gray-400 mt-1 block">{point.subtitle}</span>
                        )}
                      </div>

                      {/* General details listed vertically */}
                      {point.details && point.details.length > 0 && (
                        <div className="space-y-2 w-full text-center mb-4 border-b border-gray-100 pb-4">
                          {point.details.map((detail, idx) => (
                            <div key={idx} className="text-sm md:text-base text-gray-600">
                              • {detail}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Vertically stacked red flag text lists centered inside the block */}
                      {point.redFlags && point.redFlags.length > 0 && (
                        <div className="space-y-3 w-full text-center">
                          <span className="text-xs font-bold uppercase tracking-wider text-red-500 block">
                            Some Red Flags:
                          </span>
                          {point.redFlags.map((flag, idx) => (
                            <div key={idx} className="flex items-start justify-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                              <span className="text-base md:text-lg text-gray-700 leading-relaxed text-left">
                                {flag}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                  {/* RIGHT half: Keeps image positioned on the right half side */}
<div className="flex-1 w-full flex justify-center items-center p-6 lg:p-12 bg-gray-50/50 lg:bg-transparent">
  <div 
    className={`w-full overflow-hidden rounded-lg ${
      point.id === 11 
        ? "max-w-[320px] md:max-w-[380px] lg:max-w-[450px]" 
        : "max-w-[180px] md:max-w-[200px] lg:max-w-[220px]"
    }`}
  >
    <img
      src={point.image}
      alt={point.title}
      className="w-full h-auto object-cover"
    />
  </div>
</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. HAPPY TO SERVE YOU BANNER */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="bg-[#232F72] rounded-lg p-8 md:p-12 text-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
                <FiPhoneCall className="text-white text-2xl" />
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide">
                HAPPY TO SERVE YOU
              </h3>
              <p className="text-gray-300 max-w-xl text-sm">
                Contact AVtech Plus LLP for a comprehensive Forensic Audit tailored to protect your infrastructure
                investment.
              </p>
             <button 
  onClick={() => navigate("/contact")}
  className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 uppercase text-sm tracking-wider"
>
  Request a Consultation
</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForensicAuditService;