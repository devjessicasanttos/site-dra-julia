import React from "react";
import { MapPin, Clock, Phone, Mail, MessageCircle, Navigation } from "lucide-react";

export function ContactSection() {
  // Criamos uma constante com o link de busca oficial para evitar erros de Embed
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Hamilton+226+Centro+Franco+da+Rocha";

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <p className="text-[#8EADC1] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Onde Estamos
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Canais de Atendimento
          </h2>
          <div className="w-16 h-[3px] bg-[#8EADC1] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: Localização */}
          <div className="bg-[#F8FAFC] p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500 h-full">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-[#8EADC1] transition-colors">
              <MapPin className="text-[#8EADC1] group-hover:text-white" size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Endereço</h4>
            <p className="text-slate-600 text-xl leading-relaxed mb-8 px-2">
              Rua Doutor Hamilton, 226<br />
              <span className="font-semibold text-slate-800">Centro - Franco da Rocha</span>
            </p>
            
            {/* LINK CORRIGIDO AQUI */}
            <a 
              href={googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#8EADC1] font-bold text-sm uppercase tracking-widest hover:opacity-70 mt-auto transition-all"
            >
              <Navigation size={16} /> Ver no Mapa
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-slate-900 p-10 rounded-[2.5rem] flex flex-col items-center text-center text-white shadow-2xl scale-105 relative z-10 h-full">
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/20 flex items-center justify-center mb-8">
              <MessageCircle className="text-[#25D366]" size={28} />
            </div>
            <h4 className="text-2xl font-bold mb-6">Agendamento</h4>                       
            <a
              href="https://wa.me/5511984209533"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#25D366]/20 text-xl"
            >
              <MessageCircle size={24} />
              WhatsApp
            </a>

            <div className="mt-auto pt-8 border-t border-white/10 w-full space-y-4">
              <div className="flex items-center justify-center gap-3 text-lg text-slate-200">
                <Phone size={18} /> (11) 98420-9533
              </div>
              <div className="flex items-center justify-center gap-3 text-lg text-slate-200">
                <Mail size={18} /> drajuliapereiraa@gmail.com
              </div>
            </div>
          </div>

          {/* Card 3: Horários */}
          <div className="bg-[#F8FAFC] p-10 rounded-[2.5rem] border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-500 h-full">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-[#8EADC1] transition-colors">
              <Clock className="text-[#8EADC1] group-hover:text-white" size={28} />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Horários</h4>
            <div className="text-slate-600 text-xl space-y-6 leading-tight">
              <p>
                <span className="font-bold text-slate-800 block mb-1">Segunda - Sexta</span>
                09h às 18h
              </p>
              <p>
                <span className="font-bold text-slate-800 block mb-1">Sábado</span>
                09h às 14h
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}