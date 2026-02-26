import React from 'react';
import serviceLimpeza from "@/assets/limpeza.jpeg";
import serviceClareamento from "@/assets/clareamento.jpeg";
import serviceProtese from "@/assets/protese.png";
import serviceBotox from "@/assets/botox.jpeg";
import serviceBotox2 from "@/assets/botox2.jpeg";
import servicePreenchimento from "@/assets/labio.jpeg";
import serviceOrtodontia from "@/assets/ap orto.png";

const services = [
  { 
    title: "Limpeza Dental", 
    description: "Remoção profissional de tártaro e placa bacteriana para manter a saúde bucal.", 
    images: [serviceLimpeza] // Transformei tudo em array para padronizar
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
    images: [serviceBotox, serviceBotox2] // CORRETO: Agora é um array com as duas fotos
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
  return (
    <section id="servicos" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <p className="text-[#8EADC1] text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Especialidades
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Meus Serviços
          </h2>
          <div className="w-16 h-[3px] bg-[#8EADC1] mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-sm transition-all duration-500 flex flex-col"
            >          
              <div className="relative h-64 w-full">
                {/* LÓGICA PARA EXIBIR: 
                   Aqui pegamos a primeira imagem images[0]. 
                   Se quiser um carrossel, a lógica mudaria, mas para o efeito de "foco", 
                   exibimos a principal.
                */}
                <img
                  src={service.images[0]} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-[2.5rem] transition-all duration-500 ease-in-out z-10 
                             group-hover:scale-110 group-hover:object-contain group-hover:z-50 group-hover:rounded-2xl group-hover:shadow-2xl group-hover:bg-white"
                />

                {/* Badge opcional indicando que há mais fotos (estilo moderno) */}
                {service.images.length > 1 && (
                  <div className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm text-[#8EADC1] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                    +{service.images.length - 1} FOTO
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
          ))}
        </div>
      </div>
    </section>
  );
}