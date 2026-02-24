import React from 'react';
import serviceLimpeza from "@/assets/limpeza.jpeg";
import serviceClareamento from "@/assets/clareamento.jpeg";
import serviceProtese from "@/assets/protese.png";
import serviceBotox from "@/assets/botox.jpeg";
import servicePreenchimento from "@/assets/labio.jpeg";
import serviceOrtodontia from "@/assets/ap orto.png";

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
    description: "Reabilitação oral com próteses fixas ou removíveis, devolvendo função e estética.", 
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
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="mb-20">
          <p className="text-[#8EADC1] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Especialidades
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900">
            Nossos <span className="font-bold">Serviços</span>
          </h2>
          <div className="w-12 h-[3px] bg-[#8EADC1] mt-6" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {services.map((service) => (
            <div key={service.title} className="group cursor-pointer flex flex-col">
              
              {/* CONTAINER DA IMAGEM - O segredo do "Foco" está aqui */}
              <div className="relative aspect-square overflow-hidden rounded-[3rem] mb-8 bg-slate-50 shadow-sm border border-slate-100 transition-all duration-500 group-hover:shadow-xl">
                
                {/* Imagem em estado normal (Cover) e Hover (Contain + Zoom sutil) */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:object-contain group-hover:scale-95 p-0 group-hover:p-4"
                />

                {/* Overlay de brilho que some no hover para dar foco total na imagem */}
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Textos */}
              <div className="px-2">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#8EADC1] transition-colors flex items-center gap-3">
                  {service.title}
                  <span className="h-[1px] w-0 bg-[#8EADC1] transition-all duration-500 group-hover:w-12"></span>
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2">
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