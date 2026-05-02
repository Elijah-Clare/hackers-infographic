export default function CaseStudies() {
  return (
    <section className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white uppercase">The Business Case</h2>
        <p className="text-slate-400 mt-2">The average cost of a data breach in 2026 is $4.88 million.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative p-1 bg-gradient-to-br from-red-500/50 to-transparent rounded-3xl">
          <div className="bg-slate-950 p-8 rounded-[22px] h-full">
            <h3 className="text-red-500 font-mono text-xs uppercase tracking-tighter mb-4">Case Study: Failure</h3>
            <div className="text-4xl font-black text-white mb-2">$2.5 Billion</div>
            <p className="text-slate-200 font-bold mb-4 italic">Jaguar Land Rover (2025)</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Hit by "Scattered Spider." It wasn't a surprise attack; it was a known flaw in SAP software that nobody patched (Cyfirma).
            </p>
          </div>
        </div>

        <div className="relative p-1 bg-gradient-to-br from-emerald-500/50 to-transparent rounded-3xl">
          <div className="bg-slate-950 p-8 rounded-[22px] h-full">
            <h3 className="text-emerald-500 font-mono text-xs uppercase tracking-tighter mb-4">Case Study: Success</h3>
            <div className="text-4xl font-black text-white mb-2">10 Years</div>
            <p className="text-slate-200 font-bold mb-4 italic">Salesforce Bug Bounty</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Described as a "vital moat," pressure-testing systems against global expertise before exploits reach customers (Salesforce).
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl text-center">
         <p className="text-slate-300">Organizations combining automation with <strong>human-led crowdsourced testing</strong> saved an average of <span className="text-emerald-400 font-bold">$2.22 million</span> (IBM).</p>
      </div>
    </section>
  );
}