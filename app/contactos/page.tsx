"use client";

import { useState } from "react";

export default function ContactosPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#0249b6" }}>
              Informações de Contacto
            </h2>
            <div className="space-y-5">
              {[
                { icon: "📞", label: "Telefone", value: "+351 900 000 000", href: "tel:+351900000000" },
                { icon: "✉️", label: "Email", value: "info@dsdesentupimentos.pt", href: "mailto:info@dsdesentupimentos.pt" },
                { icon: "📍", label: "Localização", value: "Portugal — serviço em todo o país", href: null },
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
              className="mt-8 rounded-xl p-6 text-white text-center"
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

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: "#0249b6" }}>
              Enviar Mensagem
            </h2>
            {submitted ? (
              <div
                className="text-white rounded-xl p-8 text-center"
                style={{ backgroundColor: "#0249b6" }}
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="opacity-90">
                  Obrigado pelo seu contacto. Responderemos brevemente.
                </p>
                <button
                  className="mt-4 bg-white font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors duration-200"
                  style={{ color: "#0249b6" }}
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                >
                  Enviar outro
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: "#0249b6" }}>
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: "#a1a49e" }}
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: "#0249b6" }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: "#a1a49e" }}
                    placeholder="o.seu@email.pt"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: "#0249b6" }}>
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: "#a1a49e" }}
                    placeholder="+351 900 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: "#0249b6" }}>
                    Assunto *
                  </label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: "#a1a49e" }}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Pedido de Orçamento</option>
                    <option value="urgencia">Situação de Emergência</option>
                    <option value="manutencao">Manutenção Preventiva</option>
                    <option value="informacao">Pedido de Informação</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" style={{ color: "#0249b6" }}>
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: "#a1a49e" }}
                    placeholder="Descreva a sua situação..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
                  style={{ backgroundColor: "#0249b6" }}
                >
                  Enviar Mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
