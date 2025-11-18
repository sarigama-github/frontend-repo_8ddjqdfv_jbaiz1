import { Menu, ShoppingBag, Instagram, Twitter, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 shadow-lg shadow-fuchsia-500/20" />
          <span className="text-white font-semibold tracking-tight text-lg">Rexxobe</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="text-slate-200/90 hover:text-white transition-colors">Home</a>
          <a href="#models" className="text-slate-200/90 hover:text-white transition-colors">Models</a>
          <a href="#tech" className="text-slate-200/90 hover:text-white transition-colors">Tech</a>
          <a href="#contact" className="text-slate-200/90 hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white transition-colors border border-white/10">
            <ShoppingBag size={18} />
            <span className="text-sm">Shop</span>
          </button>
          <a
            href="https://t.me/zentowa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/40 transition-all"
          >
            <MessageCircle size={18} />
            <span className="text-sm">Telegram</span>
          </a>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 text-white border border-white/10">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
