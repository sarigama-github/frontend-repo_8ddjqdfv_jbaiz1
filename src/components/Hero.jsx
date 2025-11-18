import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(900px_500px_at_90%_20%,rgba(14,165,233,0.20),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10 py-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-black tracking-tight text-white"
          >
            Rexxobe
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400">
              Performance Shoes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg text-slate-200/90 max-w-xl"
          >
            Ultra-light. Energy return. Street-proof. Built for athletes and creators who move the culture forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#models" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-xl shadow-white/10 hover:shadow-white/20 transition-all">
              Explore Models
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/15 hover:bg-white/15 transition-colors">
              Contact
            </a>
          </motion.div>

          <div className="mt-10 flex items-center gap-6 text-slate-300/80 text-sm">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-500 to-sky-500 ring-2 ring-slate-900/80" />
              ))}
            </div>
            <span>Trusted by 10k+ runners and creators</span>
          </div>
        </div>

        <div className="relative h-[60vh] lg:h-[75vh] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40">
          <Spline scene="https://prod.spline.design/Pn4Rikwhvdiw9zcL/scene.splinecode" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-slate-900/30 via-transparent to-sky-500/10" />
        </div>
      </div>
    </section>
  );
}
