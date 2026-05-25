import React from "react";
import {
  FiCheckCircle,
  FiPhoneCall,
} from "react-icons/fi";

const ForensicAuditService = () => {
  const auditPoints = [
    {
      id: 1,
      title: "Contract & Tender Review",
      redFlags: [
        "Single vendor selection without justification",
        "Repeated awards to same vendor",
        "Bid Evaluation Issues",
        "Negotiations and terms & conditions amendments",
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Cost & Payment Verification",
      redFlags: [
        "Over-invoicing",
        "Payments without milestone completion",
        "Same invoice billed multiple times",
        "Excess rates of extra/substituted items",
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Fund Flow Analysis",
      redFlags: [
        "Payments routed through multiple intermediaries",
        "Related-party transactions",
        "Diversion of funds to unrelated entities",
      ],
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Supply Chain Management",
      redFlags: [
        "Ghost vendors",
        "Procurement at above-market rates",
        "Collusion between employees & suppliers",
        "Materials quantity and quality issues",
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Project Execution Audit",
      redFlags: [
        "False progress reporting",
        "Use of substandard materials",
        "Idle equipment billed as active",
        "Improper/deficient site records",
      ],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Quantity & Measurement Verification",
      redFlags: ["Inflated quantities", "Duplicate measurements"],
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Time Overrun Analysis",
      redFlags: [
        "Artificial delays to justify escalation",
        "Weak contract enforcement",
      ],
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Regulatory & Compliance Check",
      redFlags: [
        "Staff not trained for compliances",
        "Conditions of approvals not implemented",
      ],
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Documentation Review",
      redFlags: ["Missing or forged documents", "Backdated approvals"],
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0c07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      title: "Employee & Stakeholder Investigation",
      redFlags: ["Conflict of interest", "Kickbacks / bribery evidence"],
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 11,
      title: "Comprehensive Report & Dashboard",
      redFlags: [
        "Kaizen dashboard",
        "Risk assessment",
        "Analysis of 3-M policy",
        "Mitigation plan",
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section className="bg-white">
      {/* 1. IMAGE WITH WHITE SPACE (No Heading) */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Forensic Audit Infrastructure Project"
            className="w-full h-auto object-cover"
            style={{ maxHeight: "600px" }}
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
              A Forensic Audit for Infrastructure Projects in India is a specialized audit aimed at detecting
              fraud, misappropriation, corruption, cost overruns, contractual violations, and inefficiencies in
              large capital-intensive projects like roads, railways, power plants, warehouses, and EPC works.
              Forensic Audit is highly relevant— especially for projects involving capex, vendors, logistics
              contracts, and public-private partnerships (PPP).
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl space-y-3 border-l-4 border-orange-500">
              <h3 className="font-bold text-gray-900 text-lg">Why a Client needs Forensic Audit Advisory Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Robust schedule management",
                  "Professional approach & technology",
                  "Maximising contractual benefits",
                  "Securing profit and saving costs",
                  "Reducing contractual risks",
                  "Avoiding unjustified claims",
                  "Evidence compilation",
                  "Solid groundwork for arbitration",
                  "Quantification of delay",
                  "Resolving disputes faster",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FiCheckCircle className="text-orange-500 text-sm flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed italic">
              A forensic audit goes beyond routine financial audit. It focuses on: Identifying frauds or leakages,
              Examining contract compliance, Tracing fund flow, Project Execution Audit, Supply chain assessment,
              Business risk assessment.
            </p>
          </div>

          {/* RIGHT: Image */}
          <div className="relative group sticky top-8">
            <div className="absolute -inset-4 bg-orange-50 rounded-2xl -z-10 group-hover:bg-orange-100 transition-colors duration-500"></div>
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Audit Risk Analysis Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. RED FLAGS LIST - Vertical Layout with Images on Right */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <span className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-2 block">
              Key Focus Areas
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase">
              Red Flags & <span className="text-orange-500">Risk Indicators</span>
            </h3>
            <div className="w-20 h-2 bg-orange-500 mt-4 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {auditPoints.map((point, index) => (
              <div
                key={point.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* LEFT: Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 font-black text-lg">{point.id}</span>
                      </div>
                      <h4 className="font-bold text-gray-800 text-xl uppercase tracking-wide">
                        {point.title}
                      </h4>
                    </div>
                    <div className="space-y-2 ml-14">
                      {point.redFlags.map((flag, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 leading-relaxed">{flag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT: Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={point.image}
                      alt={point.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
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
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 uppercase text-sm tracking-wider">
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