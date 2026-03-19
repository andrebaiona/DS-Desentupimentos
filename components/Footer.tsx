import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0249b6" }} className="text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-2">DS Desentupimentos</h3>
          <p className="text-sm opacity-80">
            Serviços profissionais de desentupimento ao seu dispor 24 horas por dia, 7 dias por semana.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Links Rápidos</h3>
          <ul className="text-sm space-y-1 opacity-80">
            <li><Link href="/" className="hover:opacity-100 hover:text-yellow-300">Início</Link></li>
            <li><Link href="/servicos" className="hover:opacity-100 hover:text-yellow-300">Serviços</Link></li>
            <li><Link href="/o-nosso-trabalho" className="hover:opacity-100 hover:text-yellow-300">O Nosso Trabalho</Link></li>
            <li><Link href="/contactos" className="hover:opacity-100 hover:text-yellow-300">Contactos</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Contacto</h3>
          <p className="text-sm opacity-80">📞 +351 900 000 000</p>
          <p className="text-sm opacity-80">✉️ info@dsdesentupimentos.pt</p>
          <p className="text-sm opacity-80">📍 Portugal</p>
        </div>
      </div>
      <div className="border-t border-white/20 py-3 text-center text-xs opacity-60">
        © {new Date().getFullYear()} DS Desentupimentos. Todos os direitos reservados.
      </div>
    </footer>
  );
}
