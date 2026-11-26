import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Lightbulb, Code2, Settings2, TrendingUp } from "lucide-react";
import heroImg from "@/assets/hero-laptop.png";
import {
  SITE_URL,
  services,
  trustItems,
  whyChooseUs,
  products,
  waLink,
  DEFAULT_WA_MESSAGE,
} from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Ada Lovelace Technologies — Soluções Digitais para um Futuro Sem Limites",
      },
      {
        name: "description",
        content:
          "Criação de websites, aplicações móveis, APIs, bots de trading, sistemas de gestão (ERP), automação de processos e marketplaces. Solicite o seu orçamento pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Ada Lovelace Technologies — Soluções Digitais para um Futuro Sem Limites",
      },
      {
        property: "og:description",
        content:
          "Inovação que impulsiona o seu negócio: websites, aplicações, APIs, bots de trading, ERP, automação e marketplaces.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
});

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <WhatsAppFloat />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={heroImg}
            alt="Computador portátil com a identidade da Ada Lovelace Technologies"
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-36">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-gold backdrop-blur">
                <Lightbulb className="h-3.5 w-3.5" />
                Ideias + Tecnologia + Soluções = Resultados
              </p>
              <h1 className="font-display mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient-silver">Soluções digitais para um</span>{" "}
                <span className="text-gradient-gold">futuro sem limites.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Inovação que impulsiona o seu negócio: websites, aplicações móveis, sistemas de
                gestão, automação e plataformas completas — da ideia ao resultado.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={waLink(DEFAULT_WA_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-gold inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Solicite o seu Orçamento
                </a>
                <Link
                  to="/servicos"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-7 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent"
                >
                  Ver Serviços e Preços
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Faixa de confiança */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 md:grid-cols-4">
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

        {/* Serviços */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <SectionTitle
            eyebrow="O que fazemos"
            title="Serviços completos para o seu negócio"
            subtitle="Da primeira página web à plataforma completa: escolha o serviço e solicite o seu orçamento."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                to="/servicos"
                className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/40 hover:bg-accent/40"
              >
                <span className="glow-neon mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10 text-neon">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-neon">{service.tagline}</p>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{service.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  {service.priceFrom ? (
                    <span className="text-sm text-muted-foreground">
                      A partir de{" "}
                      <span className="font-display font-semibold text-gold">
                        {service.priceFrom}
                      </span>
                    </span>
                  ) : (
                    <span className="text-sm text-muted-foreground">Planos à medida</span>
                  )}
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Fórmula */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-4">
              {[
                { icon: Lightbulb, label: "Ideias" },
                { icon: Code2, label: "Tecnologia" },
                { icon: Settings2, label: "Soluções" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-6 md:gap-4">
                  {i > 0 && <span className="font-display text-2xl font-bold text-gold">+</span>}
                  <div className="flex flex-col items-center gap-2">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background text-gold">
                      <step.icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-sm font-semibold text-foreground">
                      {step.label}
                    </span>
                  </div>
                </div>
              ))}
              <span className="font-display text-2xl font-bold text-gold">=</span>
              <div className="flex flex-col items-center gap-2">
                <span className="glow-gold flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <TrendingUp className="h-6 w-6" />
                </span>
                <span className="font-display text-sm font-semibold text-gold">Resultados</span>
              </div>
            </div>
          </div>
        </section>

        {/* Porquê escolher */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <SectionTitle
            eyebrow="Porquê escolher a Ada"
            title="Qualidade e inovação em cada projeto"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projetos e cases */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
            <SectionTitle
              eyebrow="Produtos"
              title="O que já construímos"
              subtitle="Produtos nossos, com demonstração. O estado de cada um está indicado."
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-gold/40"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex w-fit items-center rounded-full border border-gold/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                      {product.category}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">{product.status}</span>
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{product.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                    >
                      Ver demonstração
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-7 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Ver produtos e soluções
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
          <div className="glow-gold relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-card via-card to-neon-deep/20 px-6 py-14 text-center sm:px-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Pronto para começar o seu projeto?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Fale connosco hoje e receba a melhor proposta para o seu negócio.
            </p>
            <a
              href={waLink("Olá! Gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Solicite o seu Orçamento
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
