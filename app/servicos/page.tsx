import Link from "next/link";

const services = [
  {
    icon: "🚿",
    title: "Desentupimento de Esgotos",
    description:
      "Desentupimos esgotos domésticos e industriais de forma rápida e eficaz, utilizando equipamento de alta pressão.",
  },
  {
    icon: "🪠",
    title: "Desentupimento de Sanitas",
    description:
      "Resolução imediata de sanitas entupidas com técnicas e ferramentas adequadas a cada situação.",
  },
  {
    icon: "🏠",
    title: "Desentupimento de Pias e Lavatórios",
    description:
      "Limpeza e desentupimento de pias de cozinha, lavatórios e banheiras, eliminando gorduras e resíduos acumulados.",
  },
  {
    icon: "🏗️",
    title: "Limpeza de Fossas Sépticas",
    description:
      "Esvaziamento, limpeza e manutenção completa de fossas sépticas para habitações e empresas.",
  },
  {
    icon: "💧",
    title: "Limpeza de Caixas de Esgoto",
    description:
      "Inspeção e limpeza de caixas de esgoto e câmaras de visita para garantir o correto funcionamento da rede.",
  },
  {
    icon: "🔍",
    title: "Inspeção por Câmara de Vídeo",
    description:
      "Diagnóstico preciso com câmara de inspecção CCTV para localizar entupimentos e danos nas tubagens.",
  },
  {
    icon: "🔧",
    title: "Manutenção Preventiva",
    description:
      "Planos de manutenção periódica para empresas e condomínios, evitando problemas futuros.",
  },
  {
    icon: "🌊",
    title: "Hidrojetting de Alta Pressão",
    description:
      "Limpeza profunda de tubagens com jato de água de alta pressão, removendo depósitos e incrustações.",
  },
];

export default function ServicosPage() {
  return (
    <div>
      {/* Page Header */}
      <section
        style={{ backgroundColor: "#0249b6" }}
        className="text-white py-16 px-4 text-center"
      >
        <h1 className="text-4xl font-bold mb-3">Os Nossos Serviços</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Oferecemos uma gama completa de serviços de desentupimento e saneamento
          para particulares e empresas em todo o país.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-200"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#0249b6" }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "#a1a49e" }} className="text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section
        style={{ backgroundColor: "#a1a49e" }}
        className="py-14 px-4 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Urgência? Estamos cá!</h2>
        <p className="text-lg mb-6 opacity-90 max-w-xl mx-auto">
          Serviço de emergência disponível 24 horas por dia, todos os dias do ano.
          Não deixe um entupimento arruinar o seu dia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+351900000000"
            className="inline-block bg-white font-bold text-xl px-10 py-4 rounded-full hover:bg-yellow-300 transition-colors duration-200"
            style={{ color: "#0249b6" }}
          >
            📞 +351 900 000 000
          </a>
          <Link
            href="/contactos"
            className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors duration-200"
          >
            Pedir Orçamento
          </Link>
        </div>
      </section>
    </div>
  );
}
