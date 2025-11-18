import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let's build your pair</h2>
            <p className="mt-3 text-slate-300/85 max-w-xl">
              For collaborations, bulk orders, or custom colorways, reach out directly. We're fast to respond.
            </p>

            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-fuchsia-500/15 to-violet-500/10 border border-white/10">
              <div className="text-slate-300 text-sm">Contact on Telegram</div>
              <a
                href="https://t.me/zentowa"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/40 transition-all"
              >
                <MessageCircle size={18} /> @zentowa
              </a>
              <p className="mt-3 text-slate-400 text-sm">Fastest way to get a response.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative h-[360px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40"
          >
            <img
              src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop"
              alt="Rexxobe studio"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-transparent to-sky-500/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
