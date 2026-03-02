import React, { useState } from 'react';

// imports de assets
import serviceLimpeza from "@/assets/limpeza.jpeg";
import serviceClareamento from "@/assets/clareamento.jpeg";
import serviceProtese from "@/assets/protese.png";
import serviceBotox from "@/assets/botox.jpeg";
import serviceBotox2 from "@/assets/botox2.jpeg";
import servicePreenchimento from "@/assets/labio.jpeg";
import servicePreenchimento1 from "@/assets/labio2.jpeg";
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
    images: [servicePreenchimento, servicePreenchimento1] 
  },
  { 
    title: "Aparelho Ortodôntico", 
    description: "Correção do alinhamento dental com opções modernas e discretas.", 
    images: [serviceOrtodontia] 
  },
];

export function ServicesSection() {
  const [activeIndices, setActiveIndices] = useState<Record<string, number>>({});
  const [focusedCard, setFocusedCard] = useState<string | null>(null);

  const handleInteraction = (title: string, max: number) => {
    // Se clicar no mesmo card, troca a foto
    if (focusedCard === title) {
      if (max > 1) {
        setActiveIndices(prev => ({
          ...prev,
          [title]: ((prev[title] || 0) + 1) % max
        }));
      } else {
        setFocusedCard(null); // Se só tem uma foto, fecha o foco no segundo clique
      }
    } else {
      setFocusedCard(title); // Primeiro clique: foca e expande a foto
    }
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
            const isFocused = focusedCard === service.title;
            
            return (
              <div
                key={service.title}
                onClick={() => handleInteraction(service.title, service.images.length)}
                className={`group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 flex flex-col cursor-pointer 
                           ${isFocused ? 'z-50 shadow-2xl scale-[1.02]' : 'z-10'}`}
              >          
                <div className="relative h-64 w-full">
                  <img
                    key={currentIndex}
                    src={service.images[currentIndex]} 
                    alt={service.title}
                    /* A mágica acontece aqui: 
                       Se estiver focado (clicado no mobile) OU com mouse em cima (desktop), 
                       aplicamos as classes de expansão.
                    */
                    className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out
                               ${isFocused || 'group-hover:scale-125'} 
                               ${isFocused ? 'scale-125 object-contain z-50 rounded-2xl shadow-2xl bg-white' : 'object-cover rounded-t-[2.5rem]'}
                               md:group-hover:object-contain md:group-hover:z-50 md:group-hover:rounded-2xl md:group-hover:shadow-2xl md:group-hover:bg-white`}
                  />

                  {/* Indicadores de Galeria */}
                  {service.images.length > 1 && (
                    <div className={`absolute top-4 right-4 z-20 flex gap-1 transition-opacity ${isFocused ? 'opacity-0' : 'opacity-100'}`}>
                      {service.images.map((_, i) => (
                        <div key={i} className={`h-1.5 w-4 rounded-full ${i === currentIndex ? 'bg-[#8EADC1]' : 'bg-white/50'}`} />
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col bg-white rounded-b-[2.5rem]">
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
      
      {/* Overlay para fechar o foco ao clicar fora (opcional) */}
      {focusedCard && (
        <div 
          className="fixed inset-0 z-40 bg-black/5" 
          onClick={() => setFocusedCard(null)} 
        />
      )}
    </section>
  );
}