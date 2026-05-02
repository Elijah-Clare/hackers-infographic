export default function Conclusion() {
  return (
    <section className="py-20 border-t border-slate-800 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-widest">The Trust Problem</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Can someone whose entire skill set was built on bypassing systems be trusted to protect them? Most companies land on <strong>Zero Trust Architecture (ZTA)</strong>. ZTA doesn't rely on trust; it assumes every user is a potential threat and builds technical guardrails.
            </p>
            <p className="text-slate-500 text-sm italic">
              "You give people access to what they need, monitor everything, and let the architecture do the work that trust can't" (CrowdStrike).
            </p>
          </div>
          
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-cyan-500 font-mono text-xs uppercase mb-4 font-bold">Legal & Ethical Complexity</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              The Department of Justice has refined guidelines to protect good-faith security work, and Bug Bounty programs now include <strong>Safe Harbor clauses</strong>—contracts promising that the company won't sue researchers who follow the rules.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              However, international law remains a minefield. What's legal for a researcher in one country can be a crime in another, requiring significant corporate governance to manage (Department of Defense).
            </p>
          </div>
        </div>
        
        <div className="bg-cyan-500/10 border border-cyan-500/30 p-10 rounded-[3rem] text-center mb-20">
          <h3 className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6 font-bold">// FINAL VERDICT</h3>
          <p className="text-2xl md:text-3xl font-serif italic text-white leading-snug">
            "The most effective defenses are built by people who understand how attacks actually work, and interestingly enough, those people used to be on the other side."
          </p>
        </div>
        
        <div className="pt-12 border-t border-slate-900">
          <h3 className="text-sm font-mono text-cyan-500 uppercase tracking-[0.2em] mb-8">Works Cited</h3>
          <div className="space-y-4 text-[10px] font-mono text-slate-600 leading-relaxed text-left">
            <p className="pl-6 -indent-6">"Cybersecurity Maturity Model Certification (CMMC) 2.0." Chief Information Officer, U.S. Department of Defense, 2025, https://dowcio.war.gov/cmmc/About/.</p>
            <p className="pl-6 -indent-6">"Global Cybersecurity Outlook 2026." World Economic Forum, Jan. 2026, www.weforum.org/reports/global-cybersecurity-outlook-2026/.</p>
            <p className="pl-6 -indent-6">"IBM Security: Cost of a Data Breach Report 2025." IBM, Aug. 2025, www.ibm.com/reports/data-breach.</p>
            <p className="pl-6 -indent-6">"Investigation Report on Jaguar Land Rover Cyberattack." Cyfirma, 2 Sep. 2025, https://www.cyfirma.com/research/investigation-report-on-jaguar-land-rover-cyberattack.</p>
            <p className="pl-6 -indent-6">“Key Cyber Security Statistics for 2026” SentinelOne, 12 Mar. 2026, https://www.sentinelone.com/cybersecurity-101/cybersecurity/cyber-security-statistics/</p>
            <p className="pl-6 -indent-6">"HackerOne Report Finds 210% Spike in AI Vulnerability Reports Amid Rise of AI Autonomy" HackerOne, 1 Oct. 2025, https://www.hackerone.com/press-release/hackerone-report-finds-210-spike-ai-vulnerability-reports-amid-rise-ai-autonomy.</p>
            <p className="pl-6 -indent-6">"Salesforce's Bug Bounty Program Marks a Decade of Building Trust." Salesforce News, 4 Mar. 2026, www.salesforce.com/news/stories/bug-bounty-10-year-anniversary/.</p>
            <p className="pl-6 -indent-6">"The 2026 Human Factor Report." HUMAN Security, 2026, www.humansecurity.com/learn/research/human-factor-2026.</p>
            <p className="pl-6 -indent-6">Kovacich, Gerald L., and Andy Jones. "The Basic Techniques Used by High-Technology Crime Miscreants." High-Technology Crime Investigator's Handbook, 2nd ed., Butterworth-Heinemann, 2006, pp. 49-76.</p>
            <p className="pl-6 -indent-6">"Threat Landscape: April 2026 Review." CrowdStrike, 15 Apr. 2026, https://www.crowdstrike.com/en-us/blog/patch-tuesday-analysis-april-2026/.</p>
            <p className="pl-6 -indent-6">"Types of Cybercrime." AMU Edge, American Military University, 2024, www.amu.apus.edu/area-of-study/criminal-justice/resources/types-of-cybercrime/.</p>
            <p className="pl-6 -indent-6">"Vulnerability Disclosure Policy and Safe Harbor." Bugcrowd, 2025, https://www.bugcrowd.com/resources/guide/ultimate-guide-to-vulnerability-disclosure/.</p>
          </div>
        </div>
      </div>
    </section>
  );
}