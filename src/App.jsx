import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Models from "./components/Models";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Models />
        <Contact />

        <footer className="border-t border-white/10 py-10 mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Rexxobe. All rights reserved.</p>
            <a
              href="https://t.me/zentowa"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-300 hover:text-white"
            >
              Contact: @zentowa
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
