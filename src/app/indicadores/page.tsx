"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg p-4 flex flex-col md:flex-row md:justify-between items-center border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Prefeitura de Santa Izabel do Pará"
            width={100}
            height={100}
            className="w-44 h-28 object-contain drop-shadow-md"
          />

          <div className="text-left">
            <h1 className="text-lg md:text-xl font-extrabold text-gray-800 tracking-tight">
              Secretaria Municipal de Trabalho <br />e Promoção Social - SEMTEPS
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Plataforma da Vigilância Socioassistencial
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end space-x-6 text-gray-700 font-semibold mt-4 md:mt-0">
          <Link href="/" className="hover:text-green-700 transition"> Página Inicial </Link>
          <Link href="/indicadores" className="text-green-700 font-bold">Indicadores</Link>
          <Link href="/assistencia-social" className="hover:text-green-700 transition">Assistência Social</Link>
          <Link href="/boletins" className="hover:text-green-700 transition">Boletim da Vigilância</Link>
          <Link href="/normativas" className="hover:text-green-700 transition">Normativas</Link>
          <a href="/sobre" className="hover:text-green-700 transition"> Sobre a Vigilância</a>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dados Socioeconômicos e demográficos
          
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
          Os indicadores da rede socioassistencial de Santa Izabel do Pará revelam o perfil 
          da população em situação de vulnerabilidade. Os dados refletem a atuação dos serviços, 
          programas e benefícios ofertados, contribuindo para o planejamento de 
          políticas públicas mais eficazes e inclusivas.
.
        </p>

      
        {/* Título do mapa */}
        <section className="flex-1 p-6 flex flex-col items-center text-center w-full max-w-6xl">
          <motion.h3
            className="text-2xl md:text-3xl font-extrabold text-green-900 mb-6 drop-shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mapa de distribuição de dados por Bairro - Localidade Rural
          </motion.h3>

          {/* Mapa incorporado */}
          <div className="w-full max-w-9xl h-[700px] mb-12 relative overflow-visible mx-auto">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1RTfwf1S4E9FI8ucL0y0NLwVC58wBAXM&ehbc=2E312F"
              loading="lazy"
              allowFullScreen
              className="rounded-xl shadow-lg border border-gray-300 absolute left-1/2 -translate-x-1/2 w-[120%] h-full"
            ></iframe>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gradient-to-r from-blue-700 to-green-600 text-center py-4 text-white text-sm mt-8">
        © {year} Prefeitura de Santa Izabel do Pará - SEMTEPS | Vigilância Socioassistencial |
        By Camila Barros | Euderson Pereira
      </footer>
    </div>
  );
}