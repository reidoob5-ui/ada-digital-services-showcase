import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { waLink, DEFAULT_WA_MESSAGE, whyChooseUs } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/sobre")({
  component: Sobre,
  head: () => ({
    meta: [
      { title: "Sobre Nós — Ada Lovelace Technologies" },
      {
        name: "description",
        content:
          "Conheça a Ada Lovelace Technologies: tecnologia com propósito, qualidade e inovação para impulsionar o seu negócio.",
      },
      { property: "og:title", content: "Sobre Nós — Ada Lovelace Technologies" },
      {
        property: "og:description",
        content:
          "Tecnologia com propósito: qualidade, inovação e parceria de longo prazo com o seu negócio.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
});

function Sobre() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <WhatsAppFloat />
      <main className="flex-1">
        <section className="border-b border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Sobre Nós
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Tecnologia com propósito
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Somos a Ada Lovelace Technologies: transformamos ideias em tecnologia e tecnologia em
              resultados para o seu negócio.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              O nosso nome é uma homenagem a{" "}
              <span className="font-semibold text-foreground">Ada Lovelace</span>, a pioneira que
              imaginou o primeiro programa da história muito antes de existirem computadores. É
              desse espírito visionário que nasce a nossa empresa: antecipar o futuro e construir
              hoje as soluções que farão o seu negócio crescer.
            </p>
            <p>
              Criamos websites, aplicações móveis, sistemas de gestão, bots de trading, automações e
              plataformas completas — sempre com o mesmo objetivo:{" "}
              <span className="font-semibold text-gold">
                mais eficiência, mais alcance e mais resultados
              </span>{" "}
              para quem confia no nosso trabalho.
            </p>
            <p>
              Trabalhamos lado a lado com cada cliente, do primeiro contacto à entrega e além dela.
              Para nós, cada projeto é o início de uma parceria de longo prazo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" />
                </span>
                <h2 className="font-display mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="glow-gold mt-12 rounded-3xl border border-gold/30 bg-gradient-to-br from-card to-neon-deep/20 p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Vamos construir o futuro do seu negócio?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Ver Serviços e Preços
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
