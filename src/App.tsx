import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react"; 
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Configuração do cliente de busca
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* BOTÃO DO WHATSAPP GLOBAL */}
          <a
            href="https://wa.me/5511984209533?text=Olá%20Dra.%20Julia,%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[9999] flex items-center justify-center 
                       w-24 h-24 bg-[#25D366] text-white rounded-full shadow-2xl 
                       transition-all hover:scale-110 active:scale-95 
                       animate-whatsapp"
            aria-label="Agendar consulta no WhatsApp"
          >
            <MessageCircle size={48} />
          </a>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
