"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function ProgramsGroup() {
  const cards = [
    { href: "/assistencia-social/cras", img: "/cras.png", title: "CRAS" },
    { href: "/assistencia-social/creas", img: "/creas.png", title: "CREAS" },
    { href: "/assistencia-social/samca", img: "/samca.png", title: "SAMCA" },
    { href: "/assistencia-social/ccpi", img: "/ccpi.png", title: "CCPI" },
    { href: "/assistencia-social/cadunico_pbf", img: "/cadunico.png", title: "Cadastro Único / PBF" },
    { href: "/assistencia-social/semteps", img: "/logo.png", title: "SEMTEPS - Sede" },
  ];

  return (
    <div className="w-full">
      <div className="relative my-4">
        <div className="border-0 border-white-700 rounded-2xl p-6 pt-2">
          {/* Título animado em azul */}
          <motion.h2
            className="text-xl md:text-2xl font-bold text-blue-700 text-center mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Programas e Benefícios
          </motion.h2>

          {/* Cards centralizados */}
          <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {cards.map((c) => (
              <Link key={c.href} href={c.href} className="group">
                <div className="bg-white p-2 rounded-xl shadow-lg hover:shadow-2xl transition border-l-8 border-green-500 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white p-2 shadow-md flex items-center justify-center">
                    <img src={c.img} alt={c.title} className="w-14 h-14 object-contain" />
                  </div>
                  <div className="mt-3">
                    <span className="text-sm font-semibold text-gray-800">{c.title}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
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
          <Link href="/" className="hover:text-green-700 transition">Página Inicial</Link>
          <Link href="/indicadores" className="hover:text-green-700 transition">Indicadores</Link>
          <Link href="/assistencia-social" className="text-green-700 font-bold">Assistência Social</Link>
          <Link href="/boletins" className="hover:text-green-700 transition">Boletim da Vigilância</Link>
          <Link href="/normativas" className="hover:text-green-700 transition">Normativas</Link>
          <a href="/sobre" className="hover:text-green-700 transition">Sobre a Vigilância</a>
        </nav>
      </header>

      {/* Conteúdo da Página de Assistência Social */}
      <main className="flex-1 flex flex-col items-center text-center p-6 pt-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-700 mb-2 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Assistência Social
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-2">
          Aqui você encontra informações sobre programas, benefícios e serviços
          da Assistência Social do município de Santa Izabel do Pará. Explore os
          conteúdos para saber mais sobre o funcionamento da política de
          assistência social.
        </p>

        {/* Grid de programas */}
        <div className="w-full max-w-4xl">
          <ProgramsGroup />
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gradient-to-r from-blue-700 to-green-600 text-center py-4 text-white text-sm mt-8">
        © {year} Prefeitura de Santa Izabel do Pará - SEMTEPS | Vigilância Socioassistencial |
        By Camila Barros | Euderson Pereira
      </footer>
    </div>
  );
}