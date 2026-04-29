import Link from "next/link";

const linksSociais = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61571793724653',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ds_desentupimento',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" />
      </svg>
    )
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #0249b6 0%, #0156c8 100%)" }} className="text-white mt-auto border-t-4 border-yellow-300">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
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
          <h3 className="font-bold text-lg mb-2">Redes Sociais</h3>
          <ul className="text-sm space-y-3 opacity-80">
            {linksSociais.map((social) => (
              <li key={social.name}>
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-100 hover:text-yellow-300 flex items-center gap-2 transition-colors duration-200"
                >
                  {social.icon}
                  {social.name}
                </a>
              </li>
            ))}
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
