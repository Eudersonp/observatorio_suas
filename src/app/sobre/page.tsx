"use client";
// Using native <button> instead of missing "@/components/ui/button"
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
          <Link href="/" className="hover:text-green-700 transition">Página Inicial</Link>
          <Link href="/indicadores" className="hover:text-green-700 transition">Indicadores</Link>
          <Link href="/assistencia-social" className="hover:text-green-700 transition">Assistência Social</Link>
          <Link href="/boletins" className="hover:text-green-700 transition">Boletim da Vigilância</Link>
          <Link href="/normativas" className="hover:text-green-700 transition">Normativas</Link>
          <Link href="/sobre" className="text-green-700 font-bold">Sobre a Vigilância</Link>
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
          Sobre a Vigilância Socioassistencial
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
          A Vigilância Socioassistencial é um dos pilares da Política de Assistência Social, responsável por produzir, sistematizar e analisar informações sobre as situações de vulnerabilidade e risco social no território. Em Santa Izabel do Pará, a Vigilância atua dentro da SEMTEPS como instrumento estratégico para o planejamento, monitoramento e avaliação das ações da rede socioassistencial, contribuindo para a efetividade dos serviços e a garantia de direitos.
        </p>

        {/* Informações institucionais */}
        <section className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-md text-left text-gray-700 space-y-4">
          <div>
            <h3 className="font-bold text-green-700">📍 Endereço</h3>
            <p>Tv. José Amâncio s/n, bairro Centro, Santa Izabel do Pará</p>
          </div>

          <div>
            <h3 className="font-bold text-green-700">📧 E-mail</h3>
            <p><a href="mailto:vigilancia.sipa@gmail.com" className="text-blue-700 hover:underline">vigilancia.sipa@gmail.com</a></p>
          </div>

          <div>
            <h3 className="font-bold text-green-700">👥 Equipe Técnica</h3>
            <p><strong>Coordenação:</strong> Euderson Luiz Araújo Pereira - Bacharel em Ciência da Computação - Pós-graduado em Análise de Dados</p>
            <p><strong>Técnica:</strong> Camila Barros da Costa - Análise e Desenvolvimento de Sistemas</p>
            <p><strong>Técnica:</strong> Carla Patrícia dos Santos de Souza - Serviço Social</p>
          </div>

          <div>
            <h3 className="font-bold text-green-700">🕒 Horário de Funcionamento</h3>
            <p>De segunda a sexta-feira, das 8h às 14h</p>
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