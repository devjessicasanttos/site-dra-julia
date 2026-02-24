import React from 'react';
import { Award, Heart, Shield } from "lucide-react";
import draJuliaImg from "@/assets/dra-julia.jpeg"; 

const differentials = [
  // Ícones agora em Azul
  { icon: Heart, title: "Cuidado Humanizado", desc: "Atendimento acolhedor e individualizado para cada paciente." },
  { icon: Award, title: "Excelência Técnica", desc: "Formação sólida e atualização constante nas melhores técnicas." },
  { icon: Shield, title: "Segurança", desc: "Protocolos rigorosos de biossegurança e materiais de alta qualidade." },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          
          <div className="relative group mx-auto md:mx-0 w-full max-w-md">
            {/* Moldura Decorativa - Agora em Azul Suave */}
            <div className="absolute -inset-4 bg-blue-600/10 rounded-2xl -rotate-2 transition-transform group-hover:rotate-0 duration-500"></div>
            
            <img 
              src={draJuliaImg} 
              alt="Dra. Julia Pereira" 
              className="relative rounded-2xl shadow-2xl w-full h-auto aspect-[3/4] object-cover object-top"
            />
          </div>

          <div className="flex flex-col space-y-6">
            <div>
              {/* "Conheça a Profissional" - Mudado para Azul Profissional */}
              <p className="text-[#5B7C99] text-sm font-semibold tracking-[0.2em] uppercase mb-2 font-sans">
                Conheça a Profissional
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Dra. Julia Pereira
              </h2>
            </div>

           <div className="text-muted-foreground text-lg leading-relaxed font-sans space-y-4 text-justify">
              <p>
                Sou a Dra Julia, cirurgiã-dentista por escolha e vocação. Sempre acreditei que o sorriso é uma extensão da nossa história e autoestima. Por isso, escolhi cuidar de pessoas, não apenas de dentes.
              </p>
              <p>
                Sou detalhista, dedicada e muito comprometida com tudo o que faço. No consultório, prezo pela organização, clareza e excelência. Em cada atendimento, escuto com atenção, explico com calma e respeito o tempo, as inseguranças e as expectativas de cada paciente.
              </p>
              <p>
                Abrir meu próprio consultório na minha cidade é a realização de um sonho construído com estudo, coragem e amor pela odontologia. Um espaço pensado para acolher, transmitir confiança e oferecer uma experiência tranquila desde o primeiro contato.
              </p>
              <p>
                Acredito em uma odontologia ética, atualizada e personalizada. Valorizo o natural, o equilíbrio e resultados que façam sentido para quem você é. Aqui, cada paciente é único e tratado com sensibilidade, respeito e verdade.

                <p><center>Será um prazer cuidar do seu sorriso!!!</center>
                </p>
              </p>
            </div>
          </div>
        </div>

        {/* Grade de Diferenciais */}
        <div className="grid md:grid-cols-3 gap-8">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              {/* Ícones com fundo azul suave e ícone em azul profissional */}
              <div className="w-14 h-14 rounded-full bg-blue-600/5 flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-blue-600/10">
                <item.icon size={24} className="text-[#5B7C99]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}