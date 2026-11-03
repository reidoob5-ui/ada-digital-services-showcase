import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Send, Smartphone } from "lucide-react";
import { services, waLink, WHATSAPP_NUMBER_DISPLAY } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  head: () => ({
    meta: [
      { title: "Contacto — Ada Lovelace Technologies" },
      {
        name: "description",
        content:
          "Solicite o seu orçamento pelo WhatsApp +244 925 856 294. Tire as suas dúvidas, converse connosco e receba a melhor proposta.",
      },
      { property: "og:title", content: "Contacto — Ada Lovelace Technologies" },
      {
        property: "og:description",
        content: "Solicite o seu orçamento pelo WhatsApp +244 925 856 294.",
      },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
});

function Contacto() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0].title);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const parts = [`Olá! O meu nome é ${name || "—"}.`];
    if (phone) parts.push(`O meu contacto é ${phone}.`);
    parts.push(`Tenho interesse em: ${service}.`);
    if (message) parts.push(message);
    window.open(waLink(parts.join(" ")), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <WhatsAppFloat />
      <main className="flex-1">
        <section className="border-b border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contacto</p>
            <h1 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Solicite o seu Orçamento
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tire as suas dúvidas, converse connosco e receba a melhor proposta para o seu negócio.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] md:py-20">
          {/* Informações */}
          <div className="space-y-6">
            <a
              href={waLink("Olá! Gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/40"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp/10 text-whatsapp">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-base font-semibold text-foreground">
                    WhatsApp
                  </h2>
                  <p className="text-sm text-muted-foreground">Atendimento direto e rápido</p>
                </div>
              </div>
              <p className="font-display mt-4 text-2xl font-bold text-gold">
                {WHATSAPP_NUMBER_DISPLAY}
              </p>
            </a>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 text-neon">
                  <Smartphone className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-base font-semibold text-foreground">
                    Como funciona
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    O formulário abre uma conversa no WhatsApp com os seus dados preenchidos.
                  </p>
                </div>
              </div>
              <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>1. Preencha os seus dados e escolha o serviço.</li>
                <li>2. Clique em enviar — a conversa abre no WhatsApp.</li>
                <li>3. A nossa equipa responde com a melhor proposta.</li>
              </ol>
            </div>
          </div>

          {/* Formulário */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 sm:p-8"
          >
            <h2 className="font-display text-xl font-bold text-foreground">Peça a sua proposta</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-foreground">O seu nome</span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex.: João Silva"
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">
                  O seu telefone <span className="text-muted-foreground">(opcional)</span>
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+244 ..."
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-foreground">Serviço de interesse</span>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-foreground">A sua mensagem</span>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Conte-nos brevemente o que precisa..."
                  className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
            </div>
            <button
              type="submit"
              className="glow-gold mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Send className="h-5 w-5" />
              Enviar pelo WhatsApp
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
