import React, { useState } from 'react';
import serviceLimpeza from "@/assets/limpeza.jpeg";
import serviceClareamento from "@/assets/clareamento.jpeg";
import serviceProtese from "@/assets/protese.png";
import serviceBotox from "@/assets/botox.jpeg";
import serviceBotox2 from "@/assets/botox2.jpeg";
import servicePreenchimento from "@/assets/labio.jpeg";
import serviceOrtodontia from "@/assets/ap orto.png";

const servicesData = [
  { 
    title: "Limpeza Dental", 
    description: "Remoção profissional de tártaro e placa bacteriana para manter a saúde bucal.", 
    images: [serviceLimpeza] 
  },
  { 
    title: "Clareamento Dental", 
    description: "Devolva a luminosidade do seu sorriso com técnicas avançadas de clareamento.", 
    images: [serviceClareamento] 
  },
  { 
    title: "Prótese", 
    description: "Reabilitação oral com próteses fixas ou removíveis, devolvendo função e estética.", 
    images: [serviceProtese]  
  },
  { 
    title: "Botox", 
    description: "Suavize linhas de expressão e conquiste uma aparência rejuvenescida.", 
    images: [serviceBotox, serviceBotox2] 
  },
  { 
    title: "Preenchimento Labial", 
    description: "Lábios mais definidos e volumosos com preenchimento de ácido hialurônico.", 
    images: [servicePreenchimento] 
  },
  { 
    title: "Aparelho Ortodôntico", 
    description: "Correção do alinhamento dental com opções modernas e discretas.", 
    images: [serviceOrtodontia] 
  },
];

export function ServicesSection() {
  // Estado para controlar qual imagem de cada card está ativa
  const [activeIndices, setActiveIndices] = useState<Record<string, number>>({});

  const toggleImage = (title: string, max: number) => {
    if (max <= 1) return;
    setActiveIndices(prev => ({
      ...prev,
      [title]: ((prev[title] || 0) + 1) % max
    }));
  };

  return (
    <section id="servicos" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <p className="text-[#8EADC1] text-xs font-bold tracking-[0.3em] uppercase mb-3">Especialidades</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Meus Serviços</h2>
          <div className="w-16 h-[3px] bg-[#8EADC1] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service) => {
            const currentIndex = activeIndices[service.title] || 0;
            
            return (
              <div
                key={service.title}
                onClick={() => toggleImage(service.title, service.images.length)}
                className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 flex flex-col cursor-pointer active:scale-[0.98] md:active:scale-100"
              >          
                <div className="relative h-64 w-full">
                  {/* IMAGEM ATIVA COM TRANSIÇÃO */}
                  <img
                    key={currentIndex} // 'key' força o React a re-renderizar a animação na troca
                    src={service.images[currentIndex]} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-t-[2.5rem] transition-all duration-500 ease-in-out z-10 
                               md:group-hover:scale-110 md:group-hover:object-contain md:group-hover:z-50 md:group-hover:rounded-2xl md:group-hover:shadow-2xl md:group-hover:bg-white animate-in fade-in zoom-in duration-500"
                  />

                  {/* INDICADOR DE FOTOS (Mobile Friendly) */}
                  {service.images.length > 1 && (
                    <div className="absolute top-4 right-4 z-20 flex gap-1">
                      {service.images.map((_, i) => (
                        <div 
                          key={i} 
                          className={`h-1.5 w-4 rounded-full transition-all ${i === currentIndex ? 'bg-[#8EADC1]' : 'bg-white/50'}`} 
                        />
                      ))}
                    </div>
                  )}

                  {service.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[20] bg-black/20 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1 rounded-full md:hidden">
                      TOQUE PARA ALTERNAR
                    </div>
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col bg-white rounded-b-[2.5rem] z-20">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#8EADC1] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}