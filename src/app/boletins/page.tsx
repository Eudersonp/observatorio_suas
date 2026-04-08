"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
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
          <Link href="/assistencia-social" className="hover:text-green-700 transition">Assistência Social</Link>
          <Link href="/boletins" className="text-green-700 font-bold">Boletim da Vigilância</Link>
          <Link href="/normativas" className="hover:text-green-700 transition">Normativas</Link>
          <a href="/sobre" className="hover:text-green-700 transition">Sobre a Vigilância</a>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Boletins da Vigilância Socioassistencial
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
          Acompanhe os boletins mensais com dados atualizados sobre os atendimentos, serviços e indicadores da rede socioassistencial de Santa Izabel do Pará. Os boletins são instrumentos essenciais para a gestão e o planejamento das ações da SEMTEPS.
        </p>

        {/* Lista de boletins */}
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Boletim de Fevereiro/2026", file: "/boletins/fevereiro-2026.pdf" },
            { title: "Boletim de Março/2026", file: "/boletins/marco-2026.pdf" },
            { title: "Boletim de Abril/2026", file: "/boletins/abril-2026.pdf" },
            { title: "Boletim de Maio/2026", file: "/boletins/maio-2026.pdf" },
          ].map((boletim, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
              whileHover={{ scale: 1.03 }}
            >
              {/* Imagem com cantos arredondados e borda azul */}
              <img
                src="/boletins/boletim.png"
                alt="Imagem do boletim"
                className="w-20 h-20 object-contain mb-4 rounded-lg border-4 border-blue-500"
              />

              <h3 className="font-bold text-blue-800">{boletim.title}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Clique abaixo para visualizar ou baixar o boletim completo.
              </p>
              <a
                href={boletim.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-white text-blue-800 px-4 py-2 rounded-lg shadow-md border-2 border-blue-800 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
              >
                Visualize aqui
              </a>
            </motion.div>
          ))}
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
