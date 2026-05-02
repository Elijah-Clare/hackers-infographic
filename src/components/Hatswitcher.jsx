import { useState } from 'react';

const hats = {
  white: {
    label: "White Hat",
    quote: "They act similar to a vaccine, simulating an infection so the body builds antibodies.",
    details: "Licensed professionals operating under NDAs. Current workforce gap: 4.2 million professionals (WEF)."
  },
  black: {
    label: "Black Hat",
    quote: "The actual criminals deploying ransomware and stealing data for personal gain.",
    details: "However, former black hats carry firsthand knowledge of how attackers actually move (AMU Edge)."
  },
  grey: {
    label: "Grey Hat",
    quote: "They probe systems without permission but report findings rather than cause damage.",
    details: "Increasingly funneled into Vulnerability Disclosure Programs as a legal safe space (Bugcrowd)."
  },
  red: {
    label: "Red Hat",
    quote: "The Aggressors.",
    details: "They take a counter-offensive approach, sometimes attacking criminal infrastructure directly."
  },
  blue: {
    label: "Blue Hat",
    quote: "The Final Stress Test.",
    details: "External professionals invited to challenge products before they reach the public."
  },
  purple: {
    label: "Purple Hat",
    quote: "The Bridge.",
    details: "A corporate standard in 2026, bridging the gap between attack and defense teams."
  },
  green: {
    label: "Green Hat",
    quote: "The Newcomers.",
    details: "Learning the craft through Capture the Flag competitions; the next generation."
  }
};

export default function Hatswitcher() {
  const [active, setActive] = useState('white');

  return (
    <section className="bg-slate-900/40 p-8 md:p-12 rounded-[2rem] border border-slate-800">
      <h2 className="text-3xl font-bold mb-2 text-white">THE HACKER TAXONOMY</h2>
      <p className="text-slate-500 font-mono text-xs mb-8 uppercase tracking-widest">// Source: AMU Edge & Bugcrowd</p>
      
      <div className="flex flex-wrap gap-2 mb-10">
        {Object.keys(hats).map(h => (
          <button key={h} onClick={() => setActive(h)}
            className={`px-4 py-2 rounded-md font-mono text-[10px] transition-all border ${active === h ? 'bg-white text-black border-white' : 'border-slate-700 text-slate-500 hover:border-slate-500'}`}>
            {h.toUpperCase()}
          </button>
        ))}
      </div>
      
      <div className="bg-black/40 p-8 rounded-xl border border-slate-800">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">{hats[active].label}</h3>
        <p className="text-xl text-slate-200 italic mb-4 font-serif">"{hats[active].quote}"</p>
        <p className="text-slate-500 text-sm leading-relaxed">{hats[active].details}</p>
      </div>
    </section>
  );
}