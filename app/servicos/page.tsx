import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Detecção de Fugas",
    description: "Tecnologia avançada para localizar e reparar fugas ocultas.",
    image: "/fuga.png",
  },
  {
    title: "Limpeza de Drenos",
    description: "Soluções eficazes de desentupimento e limpeza profunda.",
    image: "/drenos.png",
  },
  {
    title: "Reparação de Tubagens",
    description: "Instalação e reparação profissional de sistemas de esgotos.",
    image: "/rutura.png",
  },
  {
    title: "Casas de Banho e Cozinhas",
    description: "Serviços de encanamento completos para cozinhas e casas de banho.",
    image: "/wc.png",
  },
  {
    title: "Filtragem de Água",
    description: "Garanta água limpa e segura com os nossos sistemas de filtragem fiáveis.",
    image: "/filtragem.png",
  },
  {
    title: "Reparação de Tubos",
    description: "Reparação fiável e serviços de substituição para tubos danificados.",
    image: "/rutura.png",
  },
];

export default function ServicosPage() {
  return (
    <div>
      {/* Services Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #0249b6 0%, #0156c8 100%)",
        }}
        className="text-white px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-300">
              Os nossos serviços
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de desentupimento adaptados às
              suas necessidades.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
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
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-100 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Tem uma emergência de desentupimento?
            </h2>
            <Link
              href="/contactos"
              className="inline-block bg-yellow-300 text-gray-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors duration-200"
            >
              Contacte-nos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
