import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Send, Smartphone } from "lucide-react";
import { toast } from "sonner";
import { SITE_URL, services, waLink, WHATSAPP_NUMBER_DISPLAY } from "@/lib/site";
import { submitLead } from "@/lib/lead.functions";
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
          "Solicite o seu orçamento pelo WhatsApp +244 925 856 294 ou pelo formulário. Tire as suas dúvidas, converse connosco e receba a melhor proposta.",
      },
      { property: "og:title", content: "Contacto — Ada Lovelace Technologies" },
      {
        property: "og:description",
        content: "Solicite o seu orçamento pelo WhatsApp +244 925 856 294.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contacto` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contacto` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contacto — Ada Lovelace Technologies",
          url: `${SITE_URL}/contacto`,
          mainEntity: {
            "@type": "Organization",
            name: "Ada Lovelace Technologies",
            url: `${SITE_URL}/`,
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+244925856294",
              contactType: "customer service",
              availableLanguage: "Portuguese",
            },
          },
        }),
      },
    ],
  }),
});

const BUDGETS = [
  "Ainda não sei",
  "Até 100.000 Kz",
  "100.000 a 300.000 Kz",
  "300.000 a 600.000 Kz",
  "Mais de 600.000 Kz",
];
const DEADLINES = ["Sem pressa", "Até 1 mês", "1 a 3 meses", "Urgente"];

function Contacto() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(services[0]?.title ?? "");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [deadline, setDeadline] = useState(DEADLINES[0]);
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (sending) return;
    setSending(true);

    const parts = [`Olá! O meu nome é ${name || "—"}.`];
    if (phone) parts.push(`O meu contacto é ${phone}.`);
    parts.push(`Tenho interesse em: ${service}.`);
    if (message) parts.push(message);
    parts.push(`Orçamento: ${budget}. Prazo: ${deadline}.`);
    const waUrl = waLink(parts.join(" "));

    let stored = false;
    try {
      await submitLead({ data: {
          name,
          phone,
          service,
          projectDescription: `${message}\n\nOrçamento: ${budget}\nPrazo: ${deadline}`,
        } });
      stored = true;
    } catch {
      // The conversation still opens below so the request always reaches the team.
    }

    if (stored) {
      toast.success("Pedido registado! Vamos abrir o WhatsApp para finalizar o contacto.");
    } else {
      toast.error(
        "Não conseguimos registar o pedido, mas abrimos o WhatsApp para si. Tente novamente mais tarde.",
      );
    }
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSending(false);
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
                    O seu pedido fica registado na nossa equipa e a conversa abre no WhatsApp com os
                    seus dados preenchidos.
                  </p>
                </div>
              </div>
              <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>1. Preencha os seus dados e escolha o serviço.</li>
                <li>2. Clique em enviar — o pedido é registado e a conversa abre no WhatsApp.</li>
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
                  maxLength={100}
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
                  maxLength={40}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+244 ..."
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-foreground">Serviço desejado</span>
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
              <label className="block">
                <span className="text-sm font-medium text-foreground">Orçamento previsto</span>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Prazo desejado</span>
                <select
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {DEADLINES.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-foreground">Descrição do projeto</span>
                <textarea
                  rows={4}
                  required
                  maxLength={1800}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva o que precisa: o tipo de projeto, o objetivo e alguma detalhe importante..."
                  className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
            </div>
            <label className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
              <input
                type="checkbox"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4"
              />
              <span>
                Li e aceito a{" "}
                <Link to="/privacidade" className="text-gold hover:underline">
                  Política de Privacidade
                </Link>
                .
              </span>
            </label>
            <button
              type="submit"
              disabled={sending}
              className="glow-gold mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-5 w-5" />
              {sending ? "A enviar..." : "Enviar pelo WhatsApp"}
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
