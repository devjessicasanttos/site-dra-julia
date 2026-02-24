import heroBg from "@/assets/dra Julia 1.jpeg";
import React from 'react';

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Container da Imagem */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dra. Julia Pereira"
          className="w-full h-full object-cover object-[center_20%] blur-[2px] scale-105"
        />
        
        {/* Camada 1: Banho de cor azul bebê suave na foto inteira */}
        <div className="absolute inset-0 bg-[#B9CFDF]/30" />
        
        {/* Camada 2: O SEGREDO - Gradiente escuro sutil apenas no centro para dar contraste ao texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Subtítulo: Branco com sombra para não sumir */}
        <p className="text-white text-sm font-bold tracking-[0.3em] uppercase mb-4 drop-shadow-md">
          Odontologia & Estética
        </p>
        
        {/* Título: Usamos Branco Puro no texto principal para contraste máximo */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
          Seu sorriso merece o{" "}
          {/* O Azul Bebê fica apenas no destaque e com um tom um pouco mais vivo */}
          <span className="text-[#A5D8FF] drop-shadow-sm">melhor cuidado</span>
        </h1>
        
        {/* Texto de apoio em Branco com opacidade para elegância */}
        <p className="text-white/90 text-lg md:text-xl mb-10 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
          Tratamentos personalizados em odontologia e estética facial com a
          delicadeza e excelência que você merece!!
        </p>
        
        <a
  href="https://wa.me/5511984209533?text=Olá%20Dra.%20Julia,%20gostaria%20de%20agendar%20uma%20consulta."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#8EADC1] hover:bg-[#7A9BB0] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all shadow-xl hover:scale-105"
>
  Agende sua Consulta
</a>
      </div>
    </section>
  );
}