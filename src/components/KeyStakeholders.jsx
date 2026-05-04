import React from 'react';

const KeyStakeholders = () => {
  // Pure black + #FF6333 — all new design language
  const stakeholders = {
    internal: [
      {
        title: "MD & Director",
        members: [
          { name: "Rishikesh Kumar", role: "Managing Director", initial: "RK" },
          { name: "Vandana Jaiswal", role: "Director & Admin", initial: "VJ" }
        ]
      },
      {
        title: "Finance",
        members: [
          { name: "Arvind Kumar", role: "Financial Controller", initial: "AK" },
          { name: "Ajit Rai", role: "Financial Controller", initial: "AR" }
        ]
      },
      {
        title: "Project Control",
        members: [
          { name: "AK Singh", role: "Project Controller", initial: "AS" },
          { name: "Praveen Kumar", role: "Project Manager", initial: "PK" }
        ]
      },
      {
        title: "Site Execution",
        members: [
          { name: "Site Engineers", role: "Execution Team", initial: "SE", isGroup: true },
          { name: "Workforce", role: "Skilled + Unskilled", initial: "👷", isGroup: true }
        ]
      }
    ],
    external: [
      { name: "Clients", icon: "🤝", color: "black" },
      { name: "Suppliers", icon: "🚛", color: "black" },
      { name: "Regulatory", icon: "⚖️", color: "black" },
      { name: "Communities", icon: "🏘️", color: "black" }
    ]
  };

  return (
    <section className="bg-white py-10 px-4 font-['Inter',sans-serif] relative exo">
      {/* EDGY BACKGROUND — diagonal split */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF6333] rotate-12 opacity-5"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black rotate-45 opacity-5"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* HEADER — industrial tag */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#FF6333] text-2xl font-black">⬤</span>
              <span className="text-black/40 text-xs font-bold uppercase tracking-[0.2em]">Power Structure</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-black leading-none tracking-tight">
              KEY<span className="text-[#FF6333]">|</span>HOLDERS
            </h1>
          </div>
          <div className="bg-black px-4 py-2">
            <span className="text-[#FF6333] text-xs font-black uppercase tracking-wider">Nation Builders</span>
          </div>
        </div>

        {/* DEFINITION BANNER — horizontal stripe */}
        <div className="bg-[#FF6333] py-3 px-5 mb-10 flex flex-wrap items-center gap-3 justify-between">
          <p className="text-black text-sm md:text-base font-bold flex-1">
            <span className="bg-black text-[#FF6333] px-2 py-0.5 mr-2 text-xs">DEF</span>
            Stakeholders = wo log/org jo company ke growth, decision making & project execution me directly/indirectly involved hain.
          </p>
          <span className="text-black text-2xl font-black opacity-30 hidden sm:block">//</span>
        </div>

        {/* INTERNAL — dashboard style */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="text-[#FF6333] text-lg font-black">01</span>
            </div>
            <h2 className="text-2xl font-black text-black uppercase tracking-tight">Internal Command</h2>
            <div className="flex-1 border-b-2 border-dashed border-black/20"></div>
          </div>

          {/* 2x2 grid — clean blocks */}
          <div className="grid sm:grid-cols-2 gap-5">
            {stakeholders.internal.map((group, idx) => (
              <div key={idx} className="bg-white border-2 border-black hover:border-[#FF6333] transition-colors relative">
                {/* diagonal corner cut */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-[#FF6333] clip-diagonal"></div>
                
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-black text-black uppercase tracking-tight">
                      {group.title}
                    </h3>
                    <span className="bg-black text-[#FF6333] text-xs font-bold px-2 py-1">
                      {group.members.length}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {group.members.map((member, midx) => (
                      <div key={midx} className="flex items-center gap-3">
                        <div className={`w-9 h-9 flex items-center justify-center font-black text-base
                          ${member.isGroup 
                            ? 'bg-[#FF6333] text-black border-2 border-black' 
                            : 'bg-black text-[#FF6333]'}`}
                        >
                          {member.initial}
                        </div>
                        <div>
                          <p className="text-black font-black text-sm leading-tight">
                            {member.name}
                          </p>
                          <p className="text-black/60 text-[11px] font-bold uppercase">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SITE POWER — full width strip */}
          <div className="mt-5 bg-black p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-3xl bg-[#FF6333] px-3 py-1.5 text-black font-bold">⚡</span>
              <div>
                <span className="text-[#FF6333] text-base font-black block">SITE FORCE</span>
                <span className="text-white/80 text-xs">Engineers · Skilled · Unskilled</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white text-2xl font-black">50+</span>
              <span className="bg-[#FF6333] text-black text-[10px] font-black px-2 py-1 uppercase tracking-wider">on ground</span>
            </div>
          </div>
        </div>

        {/* EXTERNAL — badge style */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#FF6333] flex items-center justify-center">
              <span className="text-black text-lg font-black">02</span>
            </div>
            <h2 className="text-2xl font-black text-black uppercase tracking-tight">External Network</h2>
            <div className="flex-1 border-b-2 border-dashed border-black/20"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {stakeholders.external.map((item, idx) => (
              <div key={idx} className="group flex items-center bg-white border-2 border-black hover:border-[#FF6333] transition-all">
                <div className="bg-black p-3 group-hover:bg-[#FF6333] transition-colors">
                  <span className="text-white group-hover:text-black text-xl">{item.icon}</span>
                </div>
                <span className="px-4 font-black text-black text-sm uppercase">{item.name}</span>
                <div className="w-0 group-hover:w-8 h-full bg-[#FF6333] transition-all duration-300 flex items-center justify-center">
                  <span className="text-black font-black opacity-0 group-hover:opacity-100 text-xs">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS GRID — micro metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-black/5 border border-black/20 p-3">
            <span className="text-2xl font-black text-black block leading-none">14+</span>
            <span className="text-[10px] font-bold text-black/60 uppercase tracking-wider">Key Roles</span>
          </div>
          <div className="bg-black/5 border border-black/20 p-3">
            <span className="text-2xl font-black text-black block leading-none">50+</span>
            <span className="text-[10px] font-bold text-black/60 uppercase tracking-wider">Workforce</span>
          </div>
          <div className="bg-black/5 border border-black/20 p-3">
            <span className="text-2xl font-black text-black block leading-none">8</span>
            <span className="text-[10px] font-bold text-black/60 uppercase tracking-wider">Networks</span>
          </div>
        </div>

        {/* HINDI LINE — industrial seal */}
        <div className="flex items-center gap-3 border-t-2 border-black pt-5 mt-2">
          <div className="w-8 h-8 bg-[#FF6333] rotate-45 flex-shrink-0 flex items-center justify-center">
            <span className="text-black font-black -rotate-45">”</span>
          </div>
          <span className="text-black font-bold text-sm uppercase tracking-wide flex-1">
            हर stakeholder हमारे nation-building का अहम हिस्सा
          </span>
          <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
            <span className="text-[#FF6333] text-xs font-black">✓</span>
          </div>
        </div>

        {/* BOTTOM TAG */}
        <div className="mt-8 text-center">
          <span className="text-[10px] font-black text-black/30 uppercase tracking-[0.4em]">
            INTEGRITY • EXCELLENCE • TRUST
          </span>
        </div>
      </div>

      {/* custom diagonal clip style */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 100%);
        }
      `}</style>
    </section>
  );
};

export default KeyStakeholders;