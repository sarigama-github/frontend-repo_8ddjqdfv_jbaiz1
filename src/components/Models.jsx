import { motion } from "framer-motion";
import { Zap, Feather, ShieldCheck } from "lucide-react";

const models = [
  {
    name: "Rexxobe Pulse",
    tagline: "Responsive energy return",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { icon: Zap, label: "Energy Foam" },
      { icon: Feather, label: "FeatherLite" },
      { icon: ShieldCheck, label: "StreetGuard" },
    ],
  },
  {
    name: "Rexxobe Aero",
    tagline: "Featherlight speed",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { icon: Feather, label: "180g" },
      { icon: Zap, label: "+7% return" },
      { icon: ShieldCheck, label: "GripMax" },
    ],
  },
  {
    name: "Rexxobe Prime",
    tagline: "Cushioned for miles",
    image:
      "https://images.unsplash.com/photo-1526404079165-8fa5b0b88b6c?q=80&w=1600&auto=format&fit=crop",
    badges: [
      { icon: ShieldCheck, label: "Duraflex" },
      { icon: Zap, label: "BounceCore" },
      { icon: Feather, label: "CloudKnit" },
    ],
  },
];

export default function Models() {
  return (
    <section id="models" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature Models</h2>
            <p className="text-slate-300/80 mt-2">Engineered for performance, designed for culture.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/15">Get fitted</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((m, idx) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold text-lg">{m.name}</h3>
                <p className="text-slate-300/80 text-sm">{m.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {m.badges.map((b) => (
                    <span key={b.label} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg bg-white/10 text-white border border-white/10">
                      <b.icon size={14} /> {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
