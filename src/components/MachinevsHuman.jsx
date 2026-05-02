export default function MachinevsHuman() {
  return (
    <section className="space-y-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-tight">The Problem With Trusting Machines</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            By 2026, over <span className="text-cyan-400">64% of organizations</span> integrated AI-driven security tools (WEF). However, automation has a significant blind spot. AI is excellent at recognizing patterns, but it struggles with <strong>creative thinking</strong>.
          </p>
          
          <div className="bg-slate-900 border-l-4 border-cyan-500 p-6 rounded-r-xl mb-6">
            <h4 className="text-white font-bold mb-2 font-mono text-sm tracking-wide text-cyan-400">Tactical Insight: "Low-and-Slow"</h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Automated scanners struggle to distinguish meaningful threats from false alarms. A skilled human hacker doesn't just find bugs; they chain three low-risk bugs into one critical exploit, noticing the <span className="text-white italic">"low-and-slow"</span> attacks that evade rule-based detection entirely.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-8 bg-cyan-950/20 border border-cyan-500/20 rounded-3xl text-center">
            <div className="text-6xl font-black text-cyan-500 mb-2">8X</div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-mono">Faster Traffic Growth</p>
            <p className="text-slate-300 mt-4 text-sm leading-relaxed">
              AI-driven traffic is growing eight times faster than human traffic, giving malicious bots enormous amounts of cover to hide in (HUMAN Security).
            </p>
          </div>
          
          <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl">
            <h4 className="text-white font-bold mb-2 text-sm">The Arms Race Paradox</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              As cybercriminals stop operating at human speed and start launching coordinated, AI-powered campaigns, companies find themselves in an <strong>"arms race"</strong> where automated defense is the bare minimum, not the solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}