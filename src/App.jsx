import Intro from './components/Intro';
import MachinevsHuman from './components/MachinevsHuman';
import Hatswitcher from './components/Hatswitcher';
import CaseStudies from './components/CaseStudies';
import Conclusion from './components/Conclusion';

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-black">
      <Intro />
      <div className="max-w-5xl mx-auto px-6 space-y-32 pb-20">
        <MachinevsHuman />
        <Hatswitcher />
        <CaseStudies />
        <Conclusion />
      </div>
      <footer className="py-10 text-center border-t border-slate-900 text-slate-600 text-xs">
        ENGL 1020 | 2026 Adapted Reseach Project
      </footer>
    </div>
  );
}