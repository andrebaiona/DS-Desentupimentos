import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{ backgroundColor: "#0249b6" }}
        className="text-white py-24 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          DS Desentupimentos
        </h1>
        <p className="text-xl md:text-2xl mb-6 opacity-90">
          Serviços profissionais de desentupimento em todo o país
        </p>
        <p className="text-base md:text-lg mb-8 opacity-80 max-w-2xl mx-auto">
          Disponíveis 24 horas por dia, 7 dias por semana. Resposta rápida e eficaz para
          qualquer situação de entupimento.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contactos"
            className="bg-white font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors duration-200"
            style={{ color: "#0249b6" }}
          >
            Contacte-nos
          </Link>
          <Link
            href="/servicos"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-blue-800 transition-colors duration-200"
          >
            Ver Serviços
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ color: "#0249b6" }}
          >
            Porquê escolher a DS Desentupimentos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Resposta Rápida",
                desc: "Respondemos ao seu chamado em menos de 1 hora, qualquer dia do ano.",
              },
              {
                icon: "👷",
                title: "Equipa Especializada",
                desc: "Técnicos experientes e certificados com equipamento profissional de última geração.",
              },
              {
                icon: "💰",
                title: "Preço Justo",
                desc: "Orçamentos transparentes e sem surpresas. Qualidade ao melhor preço.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#0249b6" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#a1a49e" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ color: "#0249b6" }}
          >
            Os Nossos Serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚿", label: "Desentupimento de Esgotos" },
              { icon: "🪠", label: "Desentupimento de Sanitas" },
              { icon: "🏗️", label: "Limpeza de Fossas" },
              { icon: "🔧", label: "Manutenção Preventiva" },
            ].map((service) => (
              <div
                key={service.label}
                className="rounded-xl p-6 text-center text-white font-semibold text-base"
                style={{ backgroundColor: "#0249b6" }}
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                {service.label}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/servicos"
              className="inline-block text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: "#0249b6" }}
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        style={{ backgroundColor: "#a1a49e" }}
        className="py-14 px-4 text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-4">Precisa de ajuda urgente?</h2>
        <p className="text-lg mb-6 opacity-90">
          Estamos disponíveis 24h/dia para resolver o seu problema.
        </p>
        <a
          href="tel:+351900000000"
          className="inline-block bg-white font-bold text-xl px-10 py-4 rounded-full hover:bg-yellow-300 transition-colors duration-200"
          style={{ color: "#0249b6" }}
        >
          📞 +351 900 000 000
        </a>
      </section>
    </div>
  );
}
