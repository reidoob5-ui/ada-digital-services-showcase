import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LEGAL, SITE_URL, WHATSAPP_NUMBER_DISPLAY } from "@/lib/site";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/termos")({
  component: Termos,
  head: () => ({
    meta: [
      { title: "Termos de Serviço — Ada Lovelace Technologies" },
      {
        name: "description",
        content:
          "Termos de utilização do site e condições gerais dos serviços da Ada Lovelace Technologies, incluindo o aviso de risco dos bots de trading.",
      },
      { property: "og:title", content: "Termos de Serviço — Ada Lovelace Technologies" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/termos` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/termos` }],
  }),
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Termos() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Termos de Serviço"
      intro={`Última atualização: ${LEGAL.updated}`}
    >
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-14 text-sm leading-relaxed text-muted-foreground sm:px-6">
        <Section title="1. Âmbito">
          <p>
            Este site apresenta os serviços e os produtos da {LEGAL.brand}, operada por{" "}
            {LEGAL.owner}, em {LEGAL.country}. Ao usá-lo, aceita estes termos.
          </p>
        </Section>

        <Section title="2. Orçamentos e contratos">
          <p>
            Os preços "a partir de" são indicativos. O preço, o âmbito, o prazo, a forma de
            pagamento e a propriedade do código de cada projeto ficam definidos numa proposta ou
            acordo escrito. Um pedido de orçamento não obriga nenhuma das partes.
          </p>
          <p>Os valores estão em kwanzas (Kz) e podem ser atualizados.</p>
        </Section>

        <Section title="3. Produtos e demonstrações">
          <p>
            Os produtos mostrados no site têm o estado indicado (por exemplo, "Online" ou "Em
            desenvolvimento"). Os produtos em desenvolvimento podem mudar ou não chegar a ser
            lançados. O InvoiceFlow não está certificado pela Administração Geral Tributária (AGT)
            enquanto o site não disser o contrário. Os exemplos de soluções à medida são
            ilustrativos e não são trabalhos de clientes reais.
          </p>
        </Section>

        <Section title="4. Bots de trading: aviso de risco">
          <p>
            Operar em mercados financeiros, incluindo opções binárias, envolve risco elevado e pode
            levar à perda total do capital investido. Não garantimos lucros nem resultados. Os
            resultados passados, incluindo os das capturas de ecrã do site, não garantem resultados
            futuros.
          </p>
          <p>
            Os bots executam a estratégia definida com o cliente e não eliminam o risco. As
            plataformas de terceiros (IQ Option, Quotex, Pocket Option, Bullex, Avalon) têm regras
            próprias e podem limitar ou bloquear contas e acessos automatizados, ou alterar o seu
            funcionamento a qualquer momento, o que pode afetar o bot. O cliente é responsável pelas
            suas decisões, pela sua conta e por verificar se estas plataformas são permitidas no seu
            país. Nada neste site é aconselhamento financeiro.
          </p>
        </Section>

        <Section title="5. Propriedade intelectual">
          <p>
            O conteúdo e o design deste site pertencem à {LEGAL.brand}. As marcas de terceiros
            mencionadas pertencem aos respetivos titulares, sem qualquer ligação a nós.
          </p>
        </Section>

        <Section title="6. Responsabilidade">
          <p>
            Esforçamo-nos por manter o site correto e disponível, mas ele é fornecido tal como está.
            Na medida permitida pela lei, não respondemos por danos indiretos nem por perdas
            decorrentes do uso do site.
          </p>
        </Section>

        <Section title="7. Lei aplicável">
          <p>Estes termos regem-se pela lei angolana.</p>
        </Section>

        <Section title="8. Contacto">
          <p>Para qualquer questão, contacte-nos por WhatsApp em {WHATSAPP_NUMBER_DISPLAY}.</p>
        </Section>
      </div>
    </PageShell>
  );
}
