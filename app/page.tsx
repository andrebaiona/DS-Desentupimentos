import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0249b6 0%, #0156c8 100%)",
        }}
        className="text-white px-4 pt-16 pb-24"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Soluções de desentupimento de confiança no distrito de Lisboa
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Com mais de 15 anos de experiência, construímos uma reputação sólida em oferecer soluções de desentupimento de qualidade, adaptadas às suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contactos"
                className="bg-yellow-300 text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors duration-200 text-center"
              >
                Contacte-nos agora
              </Link>
              <Link
                href="#ratings"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>⭐⭐⭐⭐⭐</span>
                <span>400+ avaliações</span>
              </Link>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex justify-center">
            <div className="bg-yellow-500 rounded-full w-80 h-80 md:w-[28rem] md:h-[28rem] flex items-center justify-center">
              <Image
                src="/canalizador-sf.png"
                alt="DS Desentupimentos"
                width={760}
                height={760}
                className="object-contain w-[38rem] h-[38rem] md:w-[46rem] md:h-[46rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#d4dbe6" }}>
        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute left-[30%] top-14">
            <svg width="110" height="50" viewBox="0 0 110 50" fill="none">
              <path
                d="M4 18C30 42 72 42 102 20"
                stroke="#9AA4B2"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
              />
              <path d="M94 14L103 20L92 23" stroke="#9AA4B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="hidden md:block absolute right-[30%] top-14">
            <svg width="110" height="50" viewBox="0 0 110 50" fill="none">
              <path
                d="M4 18C30 42 72 42 102 20"
                stroke="#9AA4B2"
                strokeWidth="2.5"
                strokeDasharray="7 7"
                strokeLinecap="round"
              />
              <path d="M94 14L103 20L92 23" stroke="#9AA4B2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                title: "Ligue +351 900 000 000",
                desc: "Mantemo-nos disponíveis 24/7",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.12.9.33 1.77.63 2.6a2 2 0 01-.45 2.11L9.1 10.9a16 16 0 006 6l1.47-1.1a2 2 0 012.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0122 16.92z" />
                  </svg>
                ),
              },
              {
                title: "Avaliação especializada",
                desc: "Analisamos e propomos a melhor solução",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11V8a5 5 0 015-5h8a5 5 0 015 5v3" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 11h2a2 2 0 012 2v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4a2 2 0 012-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 11h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4a2 2 0 012-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19h2" />
                  </svg>
                ),
              },
              {
                title: "Chegamos em 30 minutos",
                desc: "Levamos todo o equipamento necessário",
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M1 7h13v9H1z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4l3 3v3h-7z" />
                    <circle cx="6" cy="17" r="2" />
                    <circle cx="18" cy="17" r="2" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative w-24 h-16 mb-5">
                  <span className="absolute left-1 top-3 w-20 h-10 rounded-[999px] bg-yellow-300 rotate-[-15deg]" />
                  <span className="relative z-10 flex h-full w-full items-center justify-center">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg h-100 w-100 justify-center">
              <Image
                src="/trabalho.png"
                alt="DS Desentupimentos"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: "#0249b6" }}>
              Soluções de desentupimento adaptadas às suas necessidades
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A nossa equipa de técnicos licenciados e experientes está comprometida em oferecer um serviço rápido, profissional e atencioso, garantindo que o seu sistema de esgotos está sempre em perfeito estado.
            </p>
            <div className="space-y-4">
              {[
                "Técnicos Experientes",
                "Equipamento Profissional",
                "Satisfação do Cliente 100%",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-2xl text-yellow-300">✓</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0249b6 0%, #0156c8 100%)",
        }}
        className="text-white px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-300">
              Os nossos serviços
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de desentupimento adaptados às suas necessidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Detecção de Fugas",
                image: "/fuga.png",
              },
              {
                title: "Limpeza de Drenos",
                image: "/drenos.png",
              },
              {
                title: "Reparação de Tubagens",
                image: "/rutura.png",
              },
              {
                title: "Casas de Banho e Cozinhas",
                image: "/wc.png",
              },
              {
                title: "Filtragem de Água",
                image: "/filtragem.png",
              },
              {
                title: "Reparação de Tubos",
                image: "/rutura.png",
              },
            ].map((service) => (
              <div
                key={service.title}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                className="rounded-lg p-8 text-center hover:bg-opacity-20 transition-all duration-200 hover:scale-105"
              >
                <div className="mb-6 flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/servicos"
              className="inline-block bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors duration-200"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{ background: "linear-gradient(135deg, #0249b6 0%, #0156c8 100%)" }}
        className="py-16 px-4 text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-4">Precisa de ajuda urgente?</h2>
        <p className="text-xl mb-8 opacity-90">
          Estamos disponíveis 24/7 para resolver o seu problema de desentupimento.
        </p>
        <a
          href="tel:+351900000000"
          className="inline-block bg-yellow-300 text-gray-900 font-bold text-xl px-10 py-4 rounded-full hover:bg-yellow-400 transition-colors duration-200"
        >
          📞 +351 900 000 000
        </a>
      </section>
    </div>
  );
}
