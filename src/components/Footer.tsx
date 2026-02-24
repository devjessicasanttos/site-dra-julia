import { Instagram, MessageCircle, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F4F8FB] border-t border-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Coluna 1: Identidade */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Dra. Julia Pereira
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Especialista em Odontologia & Estética, dedicada a transformar sorrisos com tecnologia e delicadeza.
            </p>
            <div className="flex items-center gap-2 text-[#8EADC1] font-bold text-[10px] uppercase tracking-widest">
              <ShieldCheck size={14} />
              <span>CRO 158970</span>
            </div>
          </div>
          {/* Coluna 3: Conecte-se */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dra.juliapereiraa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white text-slate-400 hover:text-[#E1306C] hover:shadow-lg transition-all border border-slate-200/50"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5511984209533"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white text-slate-400 hover:text-[#25D366] hover:shadow-lg transition-all border border-slate-200/50"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Final: Copyright */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs tracking-wide">
            © 2026 Dra. Julia Pereira. Todos os direitos reservados.
          </p>
          <p className="text-slate-300 text-[10px] uppercase tracking-[0.2em]">
            Odontologia de Alta Performance
          </p>
        </div>
      </div>
    </footer>
  );
}