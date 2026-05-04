import React, { useState, useEffect, useRef } from 'react';

const InnovationMethodology = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for staggered card animation
  useEffect(() => {
    const observers = cardRefs.current.map((ref, idx) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => [...new Set([...prev, idx])]);
            }, idx * 100);
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  const methodologySteps = [
    {
      phase: "PLANNING",
      number: "01",
      title: "PROJECT PLANNING & SURVEY",
      description:
        "Detailed project planning including site survey, feasibility study, and resource allocation to ensure smooth execution of civil engineering projects.",
      tools: ["Site Survey", "Project Planning", "Feasibility Study", "Resource Allocation"],
      color: "from-purple-500 to-pink-500",
      icon: "📍",
      mobileIcon: "📊",
    },
    {
      phase: "DESIGN",
      number: "02",
      title: "ENGINEERING & DESIGN",
      description:
        "Preparation of structural designs, technical drawings, and engineering plans for construction of buildings, roads, and substations.",
      tools: ["Structural Design", "AutoCAD Drawings", "Engineering Analysis", "Project Blueprint"],
      color: "from-blue-500 to-cyan-400",
      icon: "📐",
      mobileIcon: "✏️",
    },
    {
      phase: "EXECUTION",
      number: "03",
      title: "CONSTRUCTION & IMPLEMENTATION",
      description:
        "Execution of civil construction work using modern machinery, skilled manpower, and effective project management techniques.",
      tools: ["Civil Construction", "Machinery Operation", "Site Management", "Material Handling"],
      color: "from-green-500 to-emerald-400",
      icon: "🏗️",
      mobileIcon: "🔨",
    },
    {
      phase: "QUALITY",
      number: "04",
      title: "QUALITY & SAFETY ASSURANCE",
      description:
        "Strict quality checks and safety standards are maintained to ensure durable infrastructure and a safe working environment.",
      tools: ["Quality Inspection", "Safety Management", "Performance Testing", "Risk Control"],
      color: "from-red-500 to-rose-400",
      icon: "🛡️",
      mobileIcon: "✅",
    },
    {
      phase: "DELIVERY",
      number: "05",
      title: "PROJECT COMPLETION & CLIENT SATISFACTION",
      description:
        "Timely completion of projects with continuous monitoring, maintenance support, and ensuring complete client satisfaction.",
      tools: ["Project Handover", "Monitoring", "Client Feedback", "Maintenance Support"],
      color: "from-orange-500 to-amber-400",
      icon: "🤝",
      mobileIcon: "🚀",
    },
  ];

  const totalSteps = methodologySteps.length;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = ((activeStep + 1) / totalSteps) * circumference;

  // How We Work data
  const workflowStages = [
    {
      number: "01",
      phase: "Stage 1",
      title: "Pre-Construction",
      description: "Laying the groundwork with thorough planning, design and financial modelling.",
      accentColor: "#7C3AED",
      bgColor: "#F3EFFE",
      borderColor: "#7C3AED",
      steps: [
        "Site Survey & Preliminary Report",
        "Design & Drawing",
        "Quantity Survey",
        "Estimation & Costing",
        "Finance Modelling",
        "SCM Strategy",
      ],
    },
    {
      number: "02",
      phase: "Stage 2",
      title: "Construction",
      description: "Efficient on-site execution with tight monitoring and resource management.",
      accentColor: "#2563EB",
      bgColor: "#EFF6FF",
      borderColor: "#2563EB",
      steps: [
        "3M Planning (Manpower, Material, Money)",
        "Execution",
        "Micro Planning & Supervision",
        "Bill Certification",
        "Day-to-Day Monitoring",
      ],
    },
    {
      number: "03",
      phase: "Stage 3",
      title: "Contract Management & Quality",
      description: "Ensuring compliance, quality standards and proactive risk mitigation.",
      accentColor: "#059669",
      bgColor: "#ECFDF5",
      borderColor: "#059669",
      steps: [
        "Pull Plan Meeting & Monitoring",
        "RAG Analysis (Required vs Actual)",
        "Risk & Mitigation Planning",
        "Reconciliation",
      ],
    },
    {
      number: "04",
      phase: "Stage 4",
      title: "Completion & Handover",
      description: "Final documentation, closure and seamless project handover to client.",
      accentColor: "#FF6333",
      bgColor: "#FFF4EF",
      borderColor: "#FF6333",
      steps: [
        "Reconciliation of Materials & Invoices",
        "Final Documentation",
        "Project Closure",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">

        

        {/* ─── HOW WE WORK SECTION ─── */}
        <div className="py-16 px-0">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span
              style={{ color: '#FF6333', letterSpacing: '3px' }}
              className="text-xs font-bold uppercase tracking-widest block mb-3"
            >
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight leading-tight mb-4">
              How We Work
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
              A structured, end-to-end project execution lifecycle built for precision and reliability.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="relative">
            {/* Desktop flow connector */}
            <div
              className="hidden lg:block absolute top-11 z-0 pointer-events-none"
              style={{
                left: 'calc(12.5% + 28px)',
                right: 'calc(12.5% + 28px)',
                height: '2px',
                background: 'linear-gradient(90deg, #7C3AED 0%, #2563EB 33%, #059669 66%, #FF6333 100%)',
                opacity: 0.2,
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {workflowStages.map((stage, idx) => (
                <div
                  key={idx}
                  ref={el => (cardRefs.current[idx] = el)}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 relative"
                  style={{
                    borderTop: `4px solid ${stage.borderColor}`,
                    opacity: visibleCards.includes(idx) ? 1 : 0,
                    transform: visibleCards.includes(idx) ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.55s ease ${idx * 0.1}s, transform 0.55s ease ${idx * 0.1}s, box-shadow 0.3s ease, scale 0.3s ease`,
                  }}
                >
                  {/* Arrow connector (desktop) */}
                  {idx < workflowStages.length - 1 && (
                    <div
                      className="hidden lg:flex items-center justify-center absolute -right-3 top-8 z-20 bg-white border-2 border-gray-100 rounded-full w-7 h-7 text-xs text-gray-400 shadow-sm"
                    >
                      →
                    </div>
                  )}

                  {/* Stage Badge */}
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl font-extrabold text-base mb-4"
                    style={{
                      background: stage.bgColor,
                      color: stage.accentColor,
                      fontFamily: 'system-ui, sans-serif',
                      letterSpacing: '1px',
                    }}
                  >
                    {stage.number}
                  </div>

                  {/* Phase Label */}
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                    {stage.phase}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-tight leading-snug mb-2">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 pb-4 border-b border-gray-100">
                    {stage.description}
                  </p>

                  {/* Steps */}
                  <ul className="space-y-2">
                    {stage.steps.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-gray-700 leading-snug">
                        <span
                          className="mt-1.5 flex-shrink-0 rounded-full"
                          style={{
                            width: 6,
                            height: 6,
                            background: stage.accentColor,
                            minWidth: 6,
                          }}
                        />
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ─── END HOW WE WORK SECTION ─── */}

      </div>
    </div>
  );
};

export default InnovationMethodology;