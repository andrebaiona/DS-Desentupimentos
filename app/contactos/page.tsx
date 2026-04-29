"use client";

export default function ContactosPage() {

  return (
    <div>
      {/* Page Header */}
      <section
        style={{ backgroundColor: "#0249b6" }}
        className="text-white py-16 px-4 text-center"
      >
        <h1 className="text-4xl font-bold mb-3">Contactos</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Entre em contacto connosco. Respondemos rapidamente a qualquer pedido de
          informação ou orçamento.
        </p>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          {/* Contact Info */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#0249b6" }}>
              Informações de Contacto
            </h2>
            <div className="space-y-5 mb-10">
              {[
                { icon: "📞", label: "Telefone", value: "+351 900 000 000", href: "tel:+351900000000" },
                { icon: "✉️", label: "Email", value: "info@dsdesentupimentos.pt", href: "mailto:info@dsdesentupimentos.pt" },
                { icon: "📍", label: "Localização", value: "Zona Metropolitana de Lisboa", href: null },
                { icon: "🕐", label: "Horário", value: "24 horas por dia, 7 dias por semana", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div
                    className="text-white rounded-full w-12 h-12 flex items-center justify-center text-xl flex-shrink-0"
                    style={{ backgroundColor: "#0249b6" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#0249b6" }}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm hover:underline"
                        style={{ color: "#a1a49e" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "#a1a49e" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Urgency Box */}
            <div
              className="rounded-xl p-6 text-white text-center"
              style={{ backgroundColor: "#0249b6" }}
            >
              <p className="text-xl font-bold mb-1">🚨 Emergência?</p>
              <p className="text-sm opacity-90 mb-3">
                Para situações urgentes, ligue diretamente:
              </p>
              <a
                href="tel:+351900000000"
                className="inline-block bg-white font-bold text-lg px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors duration-200"
                style={{ color: "#0249b6" }}
              >
                +351 900 000 000
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
