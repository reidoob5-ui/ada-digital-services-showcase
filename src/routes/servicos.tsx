import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle } from "lucide-react";
import { services, waLink, trustItems } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/servicos")({
  component: Servicos,
  head: () => ({
    meta: [
      { title: "Serviços e Preços — Ada Lovelace Technologies" },
      {
        name: "description",
        content:
          "Websites a partir de 35.000 Kz, aplicações, APIs, bots de trading, sistemas de gestão (ERP), automação de processos e marketplaces. Soluções completas para todas as necessidades do seu negócio.",
      },
      {
        property: "og:title",
        content: "Serviços e Preços — Ada Lovelace Technologies",
      },
      {
        property: "og:description",
        content:
          "Soluções completas para todas as necessidades do seu negócio, com preços em Kwanzas claros e sem surpresas.",
      },
      { property: "og:url", content: "/servicos" },
    ],
    links: [{ rel: "canonical", href: "/servicos" }],
  }),
});

function Servicos() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <WhatsAppFloat />
      <main className="flex-1">
        {/* Cabeçalho */}
        <section className="border-b border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Nossos Serviços e Preços
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Soluções completas para todas as necessidades do seu negócio
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Preços transparentes em Kwanzas. Fale connosco para um orçamento à medida do seu
              projeto.
            </p>
          </div>
        </section>

        {/* Serviços */}
        <section className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 md:py-20">
          {services.map((service) => (
            <article
              key={service.id}
              className="overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
                <div>
                  <div className="flex items-center gap-4">
                    <span className="glow-neon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neon/10 text-neon">
                      <service.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                        {service.title}
                      </h2>
                      <p className="text-sm text-neon">{service.tagline}</p>
                    </div>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center gap-4 lg:w-64">
                  {service.priceFrom && (
                    <div className="w-full rounded-2xl border border-gold/30 bg-primary/5 px-6 py-5 text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        A partir de
                      </p>
                      <p className="font-display mt-1 text-3xl font-bold text-gradient-gold">
                        {service.priceFrom}
                      </p>
                    </div>
                  )}
                  <a
                    href={waLink(`Olá! Tenho interesse em: ${service.title}. Gostaria de um orçamento.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Solicitar Orçamento
                  </a>
                </div>
              </div>

              {service.plans && (
                <div className="grid gap-6 border-t border-border bg-background/40 p-6 sm:p-8 md:grid-cols-3">
                  {service.plans.map((plan, index) => (
                    <div
                      key={plan.name}
                      className={
                        index === 1
                          ? "glow-gold rounded-2xl border border-gold/40 bg-card p-6"
                          : "rounded-2xl border border-border bg-card p-6"
                      }
                    >
                      <h3 className="font-display text-base font-semibold text-neon">{plan.name}</h3>
                      <p className="font-display mt-2 text-2xl font-bold text-gold">{plan.price}</p>
                      <ul className="mt-4 space-y-2">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={waLink(
                          `Olá! Tenho interesse no plano ${plan.name} de ${service.title} (${plan.price}).`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        Escolher {plan.name}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>

        {/* Faixa de confiança */}
        <section className="border-t border-border bg-card/40">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-gold">
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-foreground">{item.title}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
