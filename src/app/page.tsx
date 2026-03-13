"use client";

import { motion } from "framer-motion";
import { useEffect } from "react"; 
// Removendo a importação de 'react-router-dom'.

// Definindo um Link simples para usar 'href' e manter a estrutura do código.
// Isso simula um componente de link de navegação que usa a tag <a> com 'href'.
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";

type LocalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const Link = ({ href, children, className = "" }: LocalLinkProps) => {
  const pathname = usePathname();

  // Normaliza caminho removendo barras iniciais/finais e retornando string vazia para root
  const strip = (s?: string) => (s ? s.replace(/^\/+|\/+$/g, "") : "");
  const isActive = (() => {
    if (!pathname) return false;
    // Ativa somente quando o caminho normalizado for exatamente igual ao href normalizado
    const normPath = strip(pathname);
    const normHref = strip(href);
    // Root
    if (normHref === "") return normPath === "";
    return normPath === normHref;
  })();

  const activeClass = isActive ? "text-green-700 font-bold" : "";

  return (
    <a href={href} className={`${className} ${activeClass}`.trim()}>
      {children}
    </a>
  );
};

// Dados dos indicadores para reutilização
const highlightIndicators = [
  { title: "Famílias Acompanhadas no PAIF", value: "227", color: "text-blue-700" },
  { title: "Atendimentos particularizados", value: "609", color: "text-blue-700" },
  { title: "Taxa de atualização cadastral", value: " 81,5%", color: "text-blue-700" },
];

export default function HomePage() {
  const year = new Date().getFullYear();

  useEffect(() => {
    // console.log("Componente HomePage carregado no cliente.");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col font-sans">
      
      {/* Header atualizado conforme a estrutura desejada */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-lg p-4 flex flex-col md:flex-row md:justify-between items-center border-b border-gray-200">
        
        {/* Container flex para Imagem + Títulos */}
        <div className="flex items-center space-x-4"> 
          <img
            src="/logo.png"
            alt="Prefeitura de Santa Izabel do Pará"
            width={100}
            height={100}
            className="w-24 md:w-44 h-16 md:h-28 object-contain drop-shadow-md"
          />

          {/* Bloco de Títulos */}
          <div className="text-left">
            <h1 className="text-lg md:text-xl font-extrabold text-gray-800 tracking-tight">
              Secretaria Municipal de Trabalho <br />e Promoção Social - SEMTEPS
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Plataforma da Vigilância Socioassistencial
            </p>
          </div>
        </div> {/* Fim do container flex para Imagem + Títulos */}

        {/* Navegação - Links padronizados com 'href' */}
        <nav className="flex flex-wrap justify-center md:justify-end space-x-6 text-gray-700 font-semibold mt-4 md:mt-0">
          <Link href="/" className="hover:text-green-700 transition">Página Inicial</Link>
          <Link href="/indicadores" className="hover:text-green-700 transition">Indicadores</Link>
          <Link href="/assistencia-social" className="hover:text-green-700 transition">Assistência Social</Link>
          <Link href="/boletins" className="hover:text-green-700 transition">Boletim da Vigilância</Link>
          <Link href="/normativas" className="hover:text-green-700 transition">Normativas</Link>
          {/* O link para âncora interna usa a tag <a> padrão, que já utiliza href. */}
          <a href="#sobre" className="hover:text-green-700 transition">Sobre a Vigilância</a>
        </nav>
      </header>
      {/* Fim do Header */}

      {/* Conteúdo Principal - Flex-col para layout de rolagem */}
      <main className="flex-1 flex flex-col items-center p-4 md:p-8">
        
        {/* Destaque principal e introdução */}
        <section className="text-center max-w-4xl mb-0">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Bem-vindo ao Observatório do SUAS de Santa Izabel do Pará
            </motion.h2>

            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-0">
              Um espaço moderno e acessível para você acompanhar os Indicadores da rede socioassistencial de Santa Izabel do Pará, visualizar boletins e informações essenciais para a gestão do SUAS no município.
            </p>
        </section>

        {/* Dashboard Power BI */}
        <section className="w-full max-w-7xl mt-0 mb-6 flex flex-col items-center">
            <div className="w-full max-w-7xl h-[800px] mx-auto">
              <iframe
                title="Dashboard Power BI"
                src="https://app.powerbi.com/view?r=eyJrIjoiYjMxYzZiNDUtZTJhYS00ZGMyLTkwOTAtYjk5ZTNiN2VhNjYyIiwidCI6IjAzMzJhOGEyLWUzODMtNDYwYi1hMjhkLTUyYTM0Mjg4YTRhZCJ9"
                allowFullScreen={true}
                className="w-full h-full rounded-xl shadow-2xl border-4 border-blue-100"
              ></iframe>
            </div>
        </section>
        
        {/* Indicadores em destaque */}
        <div className="w-full max-w-6xl mt-12 mb-8">
            <h2 className="text-3xl font-extrabold text-blue-800 text-center mb-6">
                Indicadores Chave
            </h2>
            <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlightIndicators.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition border-l-8 border-green-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className={`font-bold text-lg ${item.color}`}>{item.title}</h3>
                  <p className="text-4xl font-extrabold text-gray-800 mt-2">{item.value}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Dados atualizados em fevereiro/2026
                  </p>
                </motion.div>
              ))}
            </section>
        </div>


        {/* Mapa removido */}

      </main>

      {/* Rodapé */}
      <footer className="bg-gradient-to-r from-blue-700 to-green-600 text-center py-4 text-white text-sm">
        © {year} Prefeitura de Santa Izabel do Pará - SEMTEPS | Vigilância Socioassistencial |
        By Camila Barros | Euderson Pereira
      </footer>
    </div>
  );
}
