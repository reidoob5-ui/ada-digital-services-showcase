import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import aiTraderImg from "@/assets/ai-trader-pro.webp";
import botExec1 from "@/assets/bot-mdg-delta-1.webp";
import botExec2 from "@/assets/bot-mdg-delta-2.webp";
import { SITE_URL, products, projectCases, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/projetos")({
  component: Projetos,
  head: () => ({
    meta: [
      { title: "Produtos e Soluções — Ada Lovelace Technologies" },
      {
        name: "description",
        content:
          "Produtos construídos pela Ada Lovelace Technologies, com demonstração, e exemplos de soluções à medida: websites, sistemas de gestão, aplicações, automações e plataformas.",
      },
      { property: "og:title", content: "Produtos e Soluções — Ada Lovelace Technologies" },
      {
        property: "og:description",
        content:
          "Os nossos produtos e exemplos de soluções à medida.",
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
              Produtos e Soluções
            </p>
            <h1 className="font-display mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              O que já construímos e o que podemos construir
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Produtos nossos, com demonstração e estado indicado, e exemplos ilustrativos de soluções à
              medida. Os exemplos não são trabalhos de clientes reais.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <h2 className="font-display text-2xl font-bold text-foreground">Os nossos produtos</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <article
                  key={product.id}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/40"
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

          <h2 className="font-display mt-16 text-2xl font-bold text-foreground">
            Bots de trading em ação
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Capturas de ecrã de bots que desenvolvemos. Desenvolvemos bots à medida para IQ Option,
            Quotex, Pocket Option, Bullex e Avalon, a partir de 120.000 Kz.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { src: aiTraderImg, alt: "Interface do AI Trader Pro: escolha da plataforma", caption: "Interface do AI Trader Pro: escolha da plataforma" },
              { src: botExec1, alt: "Bot a operar numa conta IQ Option, com o histórico de operações no terminal", caption: "Bot em execução na IQ Option, com histórico de operações" },
              { src: botExec2, alt: "Bot a operar numa conta IQ Option, com o histórico de operações no terminal", caption: "Outra execução do bot, com histórico de operações" },
            ].map((shot) => (
              <figure key={shot.caption} className="overflow-hidden rounded-2xl border border-border bg-card">
                <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full object-cover" />
                <figcaption className="p-4 text-sm text-muted-foreground">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 max-w-3xl rounded-xl border border-border bg-card/60 p-4 text-xs text-muted-foreground">
            Aviso de risco: operar em mercados financeiros, incluindo opções binárias, envolve risco
            elevado de perda do capital investido. Resultados passados, como os das capturas, não
            garantem resultados futuros e não prometemos lucros. Os bots executam a estratégia
            definida e não eliminam o risco. IQ Option, Quotex, Pocket Option, Bullex e Avalon são
            marcas dos respetivos titulares, sem qualquer ligação a nós.
          </p>

          <h2 className="font-display mt-16 text-2xl font-bold text-foreground">
            Exemplos de soluções à medida
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Exemplos ilustrativos, não trabalhos de clientes reais.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
