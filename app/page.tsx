import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-200">
      <section className="max-w-6xl mx-auto border-x-2 border-black border-b-4 border-black bg-neutral-200 min-h-[320px] flex items-center justify-center text-center px-4">
        <p className="text-5xl font-medium leading-tight text-slate-800">
          Uma imagem
          <br />
          aqui
        </p>
      </section>

      <section style={{ backgroundColor: "#f3c400" }} className="max-w-6xl mx-auto border-x-2 border-black border-b-2 border-black px-6 py-16">
        <h1 className="text-center text-4xl sm:text-5xl font-medium mb-10 text-slate-800">
          DS Desentupimentos
        </h1>
        <p className="max-w-5xl mx-auto text-xl sm:text-2xl text-slate-800 mb-8">
          Serviços profissionais de desentupimento em todo o país
        </p>
        <p className="max-w-5xl mx-auto text-xl sm:text-2xl text-slate-800 mb-16">
          Disponíveis 24 horas por dia, 7 dias por semana. Resposta rápida e eficaz para
          qualquer situação de entupimento.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-16">
          <Link
            href="/contactos"
            className="inline-flex justify-center items-center min-w-56 min-h-24 border-4 border-black bg-stone-200 px-6 py-3 text-2xl sm:text-3xl text-slate-800 hover:bg-stone-300 transition-colors duration-200"
          >
            Contacte-nos
          </Link>
          <Link
            href="/servicos"
            className="inline-flex justify-center items-center min-w-56 min-h-24 border-4 border-black bg-stone-200 px-6 py-3 text-2xl sm:text-3xl text-slate-800 hover:bg-stone-300 transition-colors duration-200"
          >
            Ver Serviços
          </Link>
        </div>
      </section>
    </div>
  );
}
