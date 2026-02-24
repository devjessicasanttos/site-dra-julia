import React from 'react';
import serviceLimpeza from "@/assets/limpeza.jpeg";
import serviceClareamento from "@/assets/clareamento.jpeg";
import serviceProtese from "@/assets/service-ortodontia.jpg";
import serviceBotox from "@/assets/botox.jpeg";
import servicePreenchimento from "@/assets/labio.jpeg";
import serviceOrtodontia from "@/assets/service-ortodontia.jpg";

const services = [
  { 
    title: "Limpeza Dental", 
    description: "Remoção profissional de tártaro e placa bacteriana para manter a saúde bucal.", 
    image: serviceLimpeza 
  },
  { 
    title: "Clareamento Dental", 
    description: "Devolva a luminosidade do seu sorriso com técnicas avançadas de clareamento.", 
    image: serviceClareamento 
  },
  { 
    title: "Prótese", 
    description: "Suavize linhas de expressão e conquiste uma aparência rejuvenescida.", 
    image: serviceProtese  
  },
  { 
    title: "Botox", 
    description: "Suavize linhas de expressão e conquiste uma aparência rejuvenescida.", 
    image: serviceBotox
  },
  { 
    title: "Preenchimento Labial", 
    description: "Lábios mais definidos e volumosos com preenchimento de ácido hialurônico.", 
    image: servicePreenchimento 
  },
  { 
    title: "Aparelho Ortodôntico", 
    description: "Correção do alinhamento dental com opções modernas e discretas.", 
    image: serviceOrtodontia 
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <p className="text-[#8EADC1] text-xs font-bold tracking-[0.3em] uppercase mb-2">
            Especialidades
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Meus Serviços
          </h2>
          <div className="w-12 h-[2px] bg-[#8EADC1] mx-auto mt-4" />
        </div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-500"
            >
              {/* CAMADA DA FOTO INTEIRA (Aparece no Hover) */}
              <div className="absolute inset-0 z-50 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 scale-95 group-hover:scale-110">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain bg-white/95 rounded-[2rem] shadow-2xl p-2"
                />
              </div>

              {/* CONTEÚDO NORMAL DO CARD */}
              <div className="h-64 overflow-hidden rounded-t-[2rem]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 pb-8"> {/* Aumentei levemente o padding inferior para equilíbrio visual */}
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#8EADC1] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                  {/* Aumentei para 3 linhas para preencher o espaço onde ficava o botão */}
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}