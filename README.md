# Ada Lovelace Technologies

Site institucional da Ada Lovelace Technologies: apresenta os serviços da empresa
(websites, aplicações, sistemas, automação e mais), os planos em Kz e um formulário
de pedido de orçamento que também abre a conversa por WhatsApp.

## Funcionalidades

- Páginas: Início, Serviços, Projetos, Sobre e Contacto
- Planos e preços em Kz, definidos num único ficheiro (`src/lib/site.ts`)
- Formulário de contacto que guarda cada pedido e abre o WhatsApp
- Botão flutuante de WhatsApp
- Sitemap e metadados de SEO

## Desenvolvimento

Requer Node.js e npm.

```sh
npm i
npm run dev
```

## Avisos de novos pedidos

Quando alguém envia o formulário de orçamento, o pedido é guardado e o dono recebe um aviso.
Cada canal liga-se com variáveis de ambiente (segredos do servidor); sem elas é ignorado.

| Canal | Variáveis |
|---|---|
| Email (Resend) | `RESEND_API_KEY`, `NOTIFY_EMAIL` (opcional: `RESEND_FROM`) |
| WhatsApp (CallMeBot) | `CALLMEBOT_APIKEY`, `NOTIFY_WHATSAPP_PHONE` (ex.: `244925856294`) |

Uma falha nos avisos nunca impede o pedido de ficar guardado.
