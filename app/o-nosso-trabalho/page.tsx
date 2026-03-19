"use client";

import { useState } from "react";

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    title: "Desentupimento de Esgoto Industrial",
    description: "Intervenção rápida em esgoto industrial, restabelecendo o fluxo em menos de 2 horas.",
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800",
    title: "Limpeza de Fossas com Equipamento Profissional",
    description: "Esvaziamento e limpeza completa de fossa séptica com autotanque de alta capacidade.",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
    title: "Hidrojetting de Alta Pressão",
    description: "Limpeza de tubagens com jato de água a alta pressão, removendo depósitos e gorduras.",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800",
    title: "Inspeção por Câmara de Vídeo",
    description: "Diagnóstico preciso com câmara CCTV para localizar entupimentos sem obras desnecessárias.",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800",
    title: "Desentupimento de Canalização Doméstica",
    description: "Resolução eficaz de entupimento em cozinha residencial, com resultado imediato.",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800",
    title: "Manutenção Preventiva em Condomínio",
    description: "Trabalho de manutenção periódica realizado em condomínio residencial de Lisboa.",
  },
  {
    id: 7,
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800",
    title: "Processo de Desentupimento com Jato de Alta Pressão",
    description: "Veja como realizamos o processo completo de desentupimento com equipamento profissional.",
  },
  {
    id: 8,
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800",
    title: "Inspeção CCTV em Tempo Real",
    description: "Demonstração da nossa câmara de inspeção a identificar um entupimento numa tubagem subterrânea.",
  },
];

export default function NossoTrabalhoPage() {
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);

  const filtered = filter === "all" ? mediaItems : mediaItems.filter((m) => m.type === filter);

  return (
    <div>
      {/* Page Header */}
      <section
        style={{ backgroundColor: "#0249b6" }}
        className="text-white py-16 px-4 text-center"
      >
        <h1 className="text-4xl font-bold mb-3">O Nosso Trabalho</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Conheça alguns dos trabalhos que realizámos. A nossa equipa tem orgulho nos
          resultados que entrega a cada cliente.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto flex justify-center gap-3 flex-wrap">
          {(["all", "image", "video"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200"
              style={
                filter === f
                  ? { backgroundColor: "#0249b6", color: "white" }
                  : { backgroundColor: "white", color: "#0249b6", border: "2px solid #0249b6" }
              }
            >
              {f === "all" ? "Todos" : f === "image" ? "📷 Fotos" : "🎬 Vídeos"}
            </button>
          ))}
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200 cursor-pointer"
              onClick={() => setLightbox(item)}
            >
              <div className="relative">
                {item.type === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.thumbnail || item.src}
                      alt={item.title}
                      className="w-full h-52 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4">
                        <span className="text-white text-3xl">▶</span>
                      </div>
                    </div>
                  </div>
                )}
                <span
                  className="absolute top-2 right-2 text-xs text-white px-2 py-1 rounded-full font-semibold"
                  style={{ backgroundColor: "#0249b6" }}
                >
                  {item.type === "image" ? "📷 Foto" : "🎬 Vídeo"}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base mb-1" style={{ color: "#0249b6" }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "#a1a49e" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[60vh] object-contain bg-black"
              />
            ) : (
              <video
                src={lightbox.src}
                controls
                autoPlay
                muted
                className="w-full max-h-[60vh] bg-black"
              />
            )}
            <div className="p-5">
              <h3 className="font-bold text-xl mb-1" style={{ color: "#0249b6" }}>
                {lightbox.title}
              </h3>
              <p style={{ color: "#a1a49e" }}>{lightbox.description}</p>
              <button
                className="mt-4 text-sm font-semibold px-4 py-2 rounded-full text-white"
                style={{ backgroundColor: "#a1a49e" }}
                onClick={() => setLightbox(null)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
