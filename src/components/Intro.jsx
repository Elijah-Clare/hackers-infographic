export default function Intro() {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center text-center px-4 border-b border-slate-800">
      <div className="inline-block px-3 py-1 mb-6 border border-cyan-500/50 text-cyan-400 font-mono text-xs rounded-full uppercase tracking-widest animate-pulse">
        ENGL 1020 | Adapted Research Project
      </div>
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent uppercase">
        Fighting Hackers <br /> With <span className="text-cyan-500">Hackers</span>
      </h1>
      <p className="max-w-3xl text-xl text-slate-400 leading-relaxed font-light">
        As cybercriminals stop operating at human speed and start launching coordinated, AI-powered campaigns, companies have found themselves in an <span className="text-white font-semibold">"arms race."</span>
      </p>
      <div className="mt-12 text-slate-600 font-mono text-xs uppercase tracking-widest">
        Scroll to view the 2026 intelligence report
      </div>
    </header>
  );
}