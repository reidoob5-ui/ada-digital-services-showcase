import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { SITE_URL, projectCases, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/projetos")({
  component: Projetos,
  head: () => ({
    meta: [
      { title: "Soluções de Exemplo — Ada Lovelace Technologies" },
      {
        name: "description",
        content:
          "Exemplos do que a Ada Lovelace Technologies pode construir: websites, sistemas de gestão, aplicações móveis, automações e plataformas à medida do seu negócio.",
      },
      { property: "og:title", content: "Soluções de Exemplo — Ada Lovelace Technologies" },
      {
        property: "og:description",
        content:
          "Exemplos de soluções que podemos construir: websites, ERP, aplicações, automações e plataformas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/projetos` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projetos` }],
  }),
});

function Projetos() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <WhatsAppFloat />
      <main className="flex-1">
        <section className="border-b border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Soluções de Exemplo
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              O que podemos construir para o seu negócio
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Exemplos ilustrativos de soluções que desenhamos à medida de cada negócio, do primeiro
              contacto à entrega. Não são trabalhos de clientes reais.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectCases.map((project) => (
              <article
                key={project.id}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/40"
              >
                <span className="inline-flex w-fit items-center rounded-full border border-gold/30 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
                  {project.category}
                </span>
                <h2 className="font-display mt-4 text-lg font-semibold text-foreground">
                  {project.title}
                </h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="glow-gold mt-16 rounded-3xl border border-gold/30 bg-gradient-to-br from-card to-neon-deep/20 p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              O seu projeto pode ser o primeiro
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Conte-nos a sua ideia e receba uma proposta à medida do seu negócio.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-5 w-5" />
                Solicite o seu Orçamento
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-accent"
              >
                Ver Serviços e Preços
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
