import Intro from './components/Intro';
import MachinevsHuman from './components/MachinevsHuman';
import Hatswitcher from './components/Hatswitcher';
import CaseStudies from './components/CaseStudies';
import Conclusion from './components/Conclusion';

function App() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Intro />
      <hr className="my-20 border-slate-800" />
      <MachinevsHuman />
      <Hatswitcher />
      <CaseStudies />
      <Conclusion />
      
      <footer className="mt-40 text-xs text-slate-500 pb-10">
        <h4 className="font-bold mb-2">Works Cited</h4>
        <p>HackerOne (2025), World Economic Forum (2026), IBM (2025)...</p>
      </footer>
    </div>
  );
}

export default App;