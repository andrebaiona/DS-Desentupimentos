import Link from "next/link";
import Image from "next/image";

const trabalhos = [
  {
    title: "Desentupimento de Esgoto Industrial",
    description: "Intervenção rápida em esgoto industrial com restabelecimento do fluxo em menos de 2 horas.",
    image: "/trabalho.png",
  },
  {
    title: "Limpeza de Fossas",
    description: "Limpeza completa com equipamento profissional e descarte adequado, com máxima segurança.",
    image: "/trabalho.png",
  },
  {
    title: "Hidrojetting de Alta Pressão",
    description: "Remoção de gordura e resíduos com jato de água de alta pressão para desobstrução total.",
    image: "/trabalho.png",
  },
  {
    title: "Inspeção por Câmara",
    description: "Diagnóstico preciso com câmara para identificar o ponto exato do entupimento.",
    image: "/trabalho.png",
  },
  {
    title: "Canalização Doméstica",
    description: "Resolução eficiente de entupimentos em cozinhas e casas de banho com resposta imediata.",
    image: "/trabalho.png",
  },
  {
    title: "Manutenção Preventiva",
    description: "Plano de manutenção periódica para evitar falhas e garantir o bom funcionamento da rede.",
    image: "/trabalho.png",
  },
];

export default function NossoTrabalhoPage() {
  return (
    <div>
      <section
        style={{
          background: "linear-gradient(135deg, #0249b6 0%, #0156c8 100%)",
        }}
        className="text-white px-4 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-300">
              O nosso trabalho
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
              Veja alguns exemplos reais de intervenções concluídas pela nossa equipa em Lisboa e arredores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {trabalhos.map((trabalho) => (
              <div
                key={trabalho.title}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                className="rounded-lg p-6 hover:bg-opacity-20 transition-all duration-200 hover:scale-105"
              >
                <div className="mb-5 rounded-lg overflow-hidden bg-white/10 border border-white/20 h-44 flex items-center justify-center">
                  <Image
                    src={trabalho.image}
                    alt={trabalho.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{trabalho.title}</h3>
                <p className="text-gray-100 leading-relaxed">{trabalho.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Quer ver o próximo trabalho concluído no seu espaço?
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
