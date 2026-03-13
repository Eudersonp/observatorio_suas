"use client";
// Using native <button> instead of missing "@/components/ui/button"
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Componente auxiliar para links de navegação com classe ativa
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const strip = (s?: string) => (s ? s.replace(/^\/+|\/+$/g, "") : "");
  const normPath = strip(pathname);
  const normHref = strip(href);
  const isActive = normHref === "" ? normPath === "" : normPath === normHref;
  const className = `hover:text-green-700 transition ${isActive ? "text-green-700 font-bold" : ""}`.trim();
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

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
          {/* Nav com classe ativa baseada no pathname */}
          <NavLink href="/">Página Inicial</NavLink>
          <NavLink href="/indicadores">Indicadores</NavLink>
          <NavLink href="/assistencia-social">Assistência Social</NavLink>
          <NavLink href="/boletins">Boletim da Vigilância</NavLink>
          <NavLink href="/normativas">Normativas</NavLink>
          <NavLink href="/sobre">Sobre a Vigilância</NavLink>
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
          Normativas da Assistência Social
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
          As normativas orientam a organização, funcionamento e prestação dos serviços da rede socioassistencial. Aqui você encontra leis, portarias e resoluções que fundamentam a atuação da SEMTEPS e garantem os direitos dos usuários.
        </p>

        {/* Lista de normativas */}
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Lei Municipal nº 499 de 01 de Julho de 2025",
              file: "/normativas/lei499.pdf",
              description: "Dispõe sobre o Sistema Único de Assistência Social do município de Santa Izabel do Pará e dá outras providências.",
            },
            {
              title: "Lei Municipal nº 124 de 03 de outubro de 2007",
              file: "/normativas/lei124.pdf",
              description: "Institui o Conselho Municipal dos Direitos da Pessoa Idosa e dá outras providências.",
            },
            {
              title: "Resolução CNAS nº 109/2009",
              file: "/normativas/resolucao-cnas-109.pdf",
              description: "Tipifica os serviços da proteção social básica e especial no SUAS.",
            },
            {
              title: "Decreto Municipal nº 456/2024",
              file: "/normativas/decreto-456-2024.pdf",
              description: "Regulamenta o funcionamento dos CRAS e CREAS no município.",
            },
          ].map((norma, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="font-bold text-green-700">{norma.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{norma.description}</p>
            <a
            href={norma.file}
            className="mt-3 inline-block text-blue-700 hover:underline text-sm font-semibold"
            aria-label={`Visualizar ${norma.title}`}
          >
            Visualizar o arquivo
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