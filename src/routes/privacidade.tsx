import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LEGAL, SITE_URL, WHATSAPP_NUMBER_DISPLAY } from "@/lib/site";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/privacidade")({
  component: Privacidade,
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Ada Lovelace Technologies" },
      {
        name: "description",
        content:
          "Como a Ada Lovelace Technologies recolhe, usa e protege os dados pessoais enviados através do formulário de orçamento.",
      },
      { property: "og:title", content: "Política de Privacidade — Ada Lovelace Technologies" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/privacidade` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacidade` }],
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

function Privacidade() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Política de Privacidade"
      intro={`Última atualização: ${LEGAL.updated}`}
    >
      <div className="mx-auto max-w-3xl space-y-10 px-4 py-14 text-sm leading-relaxed text-muted-foreground sm:px-6">
        <Section title="1. Quem é o responsável">
          <p>
            Este site é da {LEGAL.brand}, operada por {LEGAL.owner}, em {LEGAL.country}. Para
            qualquer questão sobre os seus dados, contacte-nos por WhatsApp em{" "}
            {WHATSAPP_NUMBER_DISPLAY}.
          </p>
        </Section>

        <Section title="2. Que dados recolhemos">
          <p>
            Só recolhemos os dados que nos envia no formulário de pedido de orçamento: o seu nome, o
            telefone (opcional), o serviço pretendido, a descrição do projeto e, se os indicar, o
            orçamento e o prazo. Não pedimos documentos de identificação nem dados de pagamento
            neste site.
          </p>
          <p>
            Ao enviar o formulário abrimos uma conversa no WhatsApp com a sua mensagem. Essa
            conversa passa a ser regida pelas regras e pela política de privacidade do WhatsApp.
          </p>
        </Section>

        <Section title="3. Para que usamos os dados">
          <p>
            Usamos os dados para responder ao seu pedido, enviar-lhe uma proposta e contactá-lo sobre
            o projeto. Não vendemos nem cedemos os seus dados para publicidade.
          </p>
        </Section>

        <Section title="4. Onde ficam guardados">
          <p>
            Os pedidos ficam numa base de dados alojada num fornecedor de serviços na nuvem, com
            acesso restrito ao responsável. Para sermos avisados de cada novo pedido, o conteúdo do
            pedido pode ser enviado por serviços de email e de mensagens de terceiros. Esses
            serviços só tratam os dados para entregar o aviso.
          </p>
        </Section>

        <Section title="5. Durante quanto tempo">
          <p>
            Guardamos os dados enquanto forem necessários para tratar o seu pedido e, no máximo, 24
            meses depois do último contacto, salvo se uma obrigação legal ou um contrato exigir
            mais tempo.
          </p>
        </Section>

        <Section title="6. Os seus direitos">
          <p>
            Pode pedir o acesso aos seus dados, a correção, a eliminação ou opor-se ao tratamento,
            nos termos da lei angolana de proteção de dados pessoais. Para isso, envie-nos uma
            mensagem por WhatsApp. Também pode apresentar reclamação à Agência de Proteção de Dados
            de Angola.
          </p>
        </Section>

        <Section title="7. Cookies">
          <p>
            Este site não usa cookies de publicidade nem de seguimento. Só podem existir
            armazenamentos técnicos necessários ao funcionamento das páginas.
          </p>
        </Section>

        <Section title="8. Alterações">
          <p>
            Podemos atualizar esta política. A data de atualização aparece no topo desta página.
          </p>
        </Section>
      </div>
    </PageShell>
  );
}
