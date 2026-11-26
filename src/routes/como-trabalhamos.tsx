import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { SITE_URL, waLink, DEFAULT_WA_MESSAGE } from "@/lib/site";
import { PageShell } from "@/components/site/PageShell";

const steps = [
  {
    title: "Conversa e descoberta",
    text: "Percebemos o seu negócio, o problema a resolver e o que é prioritário. Pode começar pelo WhatsApp ou pelo formulário de orçamento.",
  },
  {
    title: "Proposta",
    text: "Enviamos por escrito o âmbito, o preço, o prazo e a forma de pagamento, para saber exatamente o que vai receber antes de começar.",
  },
  {
    title: "Desenvolvimento",
    text: "Construímos por fases e mostramos o progresso, para validar consigo e ajustar o rumo cedo.",
  },
  {
    title: "Entrega e formação",
    text: "Testamos, publicamos e explicamos como usar. Fica com o acesso ao que foi contratado.",
  },
  {
    title: "Suporte e evolução",
    text: "Depois da entrega ficamos disponíveis para suporte, correções e novas funcionalidades, conforme o combinado.",
  },
];

const timelines = [
  { item: "Website simples", time: "1 a 2 semanas" },
  { item: "Website com várias páginas", time: "2 a 4 semanas" },
  { item: "Automação de processos", time: "alguns dias a poucas semanas" },
  { item: "Aplicações, APIs, ERP e marketplaces", time: "definido na proposta, de semanas a meses" },
  { item: "Bots de trading", time: "depende da estratégia e da plataforma" },
];

const faqs = [
  {
    q: "Quanto custa?",
    a: "Os preços do site são pontos de partida. O valor final depende do que precisa e fica na proposta escrita, antes de começarmos.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Depende do projeto. Os prazos acima são indicativos e o prazo real é confirmado na proposta.",
  },
  {
    q: "Como se paga?",
    a: "A forma de pagamento (por exemplo, um sinal e o restante por fases) é combinada e escrita na proposta.",
  },
  {
    q: "Quem fica com o código do projeto?",
    a: "Isso fica definido por escrito na proposta de cada projeto, para não haver dúvidas.",
  },
  {
    q: "Há suporte depois da entrega?",
    a: "Sim. O suporte e as atualizações são combinados em cada projeto, e pode continuar a pedir melhorias.",
  },
  {
    q: "Os bots de trading garantem lucros?",
    a: "Não. Operar em mercados financeiros envolve risco de perda do capital e nenhum bot garante resultados. Desenvolvemos o bot a partir da estratégia que definir, e as plataformas de terceiros têm regras próprias.",
  },
  {
    q: "Como começo?",
    a: "Envie-nos uma mensagem por WhatsApp ou preencha o formulário de orçamento. Respondemos com os próximos passos.",
  },
];

export const Route = createFileRoute("/como-trabalhamos")({
  component: ComoTrabalhamos,
  head: () => ({
    meta: [
      { title: "Como Trabalhamos — Ada Lovelace Technologies" },
      {
        name: "description",
        content:
          "Veja como trabalhamos, da conversa inicial à entrega e ao suporte, com prazos indicativos e respostas às dúvidas mais comuns.",
      },
      { property: "og:title", content: "Como Trabalhamos — Ada Lovelace Technologies" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/como-trabalhamos` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/como-trabalhamos` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function ComoTrabalhamos() {
  return (
    <PageShell
      eyebrow="Como Trabalhamos"
      title="Do primeiro contacto ao suporte"
      intro="Um processo claro, com tudo combinado por escrito antes de começar."
    >
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
        <ol className="space-y-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-base font-bold text-gold">
                {i + 1}
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">{step.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-display mt-16 text-2xl font-bold text-foreground">Prazos indicativos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          São estimativas. O prazo de cada projeto é confirmado na proposta.
        </p>
        <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
          {timelines.map((t) => (
            <li key={t.item} className="flex flex-wrap justify-between gap-2 px-6 py-4 text-sm">
              <span className="font-medium text-foreground">{t.item}</span>
              <span className="text-muted-foreground">{t.time}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-display mt-16 text-2xl font-bold text-foreground">
          Perguntas frequentes
        </h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card p-5">
              <summary className="cursor-pointer list-none font-display text-base font-semibold text-foreground">
                {f.q}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              Fale connosco
            </a>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-accent"
            >
              Pedir orçamento
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
