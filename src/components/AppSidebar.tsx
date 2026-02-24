import { useState } from "react";
import { Home, User, Sparkles, Phone, Instagram, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import profileImg from "@/assets/logo 2.png";

const navItems = [
  { title: "Início", href: "#inicio", icon: Home },
  { title: "Sobre", href: "#sobre", icon: User },
  { title: "Serviços", href: "#servicos", icon: Sparkles },
  { title: "Contato", href: "#contato", icon: Phone },
];

export function AppSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Botão Mobile - Agora integrado à paleta */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-6 left-6 z-50 md:hidden bg-white text-[#8EADC1] p-3 rounded-2xl shadow-xl border border-slate-100 transition-all active:scale-95"
        aria-label="Menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay - Mais suave (Blur) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/10 backdrop-blur-md z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Principal */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-72 z-40 flex flex-col transition-transform duration-500 ease-in-out border-r border-slate-100/50",
          "bg-[#F4F8FB] text-slate-800", // Fundo Azul Gelo Profissional
          "md:translate-x-0 shadow-2xl md:shadow-none",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Área do Perfil Refinada */}
        <div className="flex flex-col items-center pt-14 pb-8 px-6">
          <div className="w-28 h-28 rounded-full bg-white border-[3px] border-white shadow-xl overflow-hidden mb-6 flex items-center justify-center">
            <img 
              src={profileImg} 
              alt="Dra. Julia Pereira" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          <h2 className="text-center leading-tight">
            <span className="block font-light text-base italic text-slate-400 mb-1">Dra.</span>
            <span className="block font-bold text-lg uppercase tracking-[0.15em] text-slate-800">Julia Pereira</span>
          </h2>

          <div className="w-8 h-[2px] bg-[#8EADC1] mt-4 opacity-40 rounded-full" />

          <p className="text-[9px] font-bold tracking-[0.4em] text-[#8EADC1] uppercase mt-4 text-center">
            Odontologia & Estética
          </p>
        </div>

        {/* Navegação Principal */}
        <nav className="flex-1 px-6 space-y-1.5 mt-4">
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavClick(item.href)}
              className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl text-sm font-semibold transition-all text-slate-500 hover:bg-white hover:text-[#8EADC1] hover:shadow-md group"
            >
              <item.icon size={20} className="text-slate-300 group-hover:text-[#8EADC1] transition-colors" />
              <span className="tracking-wide">{item.title}</span>
            </button>
          ))}
        </nav>       
      </aside>
    </>
  );
}