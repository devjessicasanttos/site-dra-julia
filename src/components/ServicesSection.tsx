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
        
        {/* Cabeçalho Minimalista */}
        <div className="mb-16">
          <span className="text-[#8EADC1] text-sm font-bold tracking-[0.2em] uppercase">
            Especialidades
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mt-2">
            Nossos <span className="font-bold text-[#8EADC1]">Serviços</span>
          </h2>
        </div>

        {/* Grid Profissional */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group cursor-pointer flex flex-col"
            >
              {/* Container da Imagem com Aspect Ratio fixo (Estilo Revista) */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Overlay sutil para dar contraste ao título se necessário */}
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Textos com tipografia limpa */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 group-hover:text-[#8EADC1] transition-colors">
                  {service.title}
                  <div className="w-0 h-[2px] bg-[#8EADC1] transition-all duration-500 group-hover:w-8" />
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
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