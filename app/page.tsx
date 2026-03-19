import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-200">
      <section className="max-w-6xl mx-auto border-x-2 border-black border-b-4 border-black bg-[linear-gradient(135deg,#dbeafe_0%,#fef9c3_100%)] min-h-[320px] flex items-center justify-center text-center px-4 shadow-[inset_0_-4px_0_0_#00000020]">
        <p className="text-5xl font-medium leading-tight text-slate-800 font-display">
          Uma imagem
          <br />
          aqui
        </p>
      </section>

      <section style={{ backgroundColor: "#f3c400" }} className="max-w-6xl mx-auto border-x-2 border-black border-b-2 border-black px-6 py-16 shadow-[0_6px_0_0_#00000014]">
        <h1 className="text-center text-4xl sm:text-5xl font-medium mb-10 text-slate-800 font-display">
          DS Desentupimentos
        </h1>
        <p className="max-w-5xl mx-auto text-xl sm:text-2xl text-slate-800 mb-8 leading-relaxed">
          Serviços profissionais de desentupimento em todo o país
        </p>
        <p className="max-w-5xl mx-auto text-xl sm:text-2xl text-slate-800 mb-16 leading-relaxed">
          Disponíveis 24 horas por dia, 7 dias por semana. Resposta rápida e eficaz para
          qualquer situação de entupimento.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16">
          <Link
            href="/contactos"
            className="inline-flex justify-center items-center min-w-56 min-h-24 border-4 border-black bg-stone-200 px-6 py-3 text-2xl sm:text-3xl text-slate-800 hover:bg-white transition-colors duration-200 shadow-[4px_4px_0_0_#000] font-display"
          >
            Contacte-nos
          </Link>
          <Link
            href="/servicos"
            className="inline-flex justify-center items-center min-w-56 min-h-24 border-4 border-black bg-stone-200 px-6 py-3 text-2xl sm:text-3xl text-slate-800 hover:bg-white transition-colors duration-200 shadow-[4px_4px_0_0_#000] font-display"
          >
            Ver Serviços
          </Link>
        </div>
      </section>
    </div>
  );
}
