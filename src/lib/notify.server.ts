// Avisos ao dono quando entra um pedido de orçamento. Corre só no servidor.
// Cada canal só funciona se as suas variáveis de ambiente estiverem definidas;
// sem elas é ignorado em silêncio. Uma falha aqui NUNCA impede o pedido de ficar guardado.
//
// Email (Resend):  RESEND_API_KEY, NOTIFY_EMAIL            (opcional: RESEND_FROM)
// WhatsApp (CallMeBot): CALLMEBOT_APIKEY, NOTIFY_WHATSAPP_PHONE (ex.: 244925856294)

export type LeadNotice = {
  name: string;
  phone: string | null;
  service: string;
  projectDescription: string;
};

const TIMEOUT_MS = 8000;

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function withTimeout(url: string, init?: RequestInit) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

function plainText(lead: LeadNotice) {
  return [
    "Novo pedido de orçamento",
    `Nome: ${lead.name}`,
    `Contacto: ${lead.phone ?? "não indicado"}`,
    `Serviço: ${lead.service}`,
    `Projeto: ${lead.projectDescription}`,
  ].join("\n");
}

async function sendEmail(lead: LeadNotice) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFY_EMAIL;
  if (!key || !to) return;
  const from = process.env.RESEND_FROM || "Ada Lovelace Technologies <onboarding@resend.dev>";
  const html =
    `<h2>Novo pedido de orçamento</h2>` +
    `<p><b>Nome:</b> ${esc(lead.name)}</p>` +
    `<p><b>Contacto:</b> ${esc(lead.phone ?? "não indicado")}</p>` +
    `<p><b>Serviço:</b> ${esc(lead.service)}</p>` +
    `<p><b>Projeto:</b><br/>${esc(lead.projectDescription).replace(/\n/g, "<br/>")}</p>`;
  const res = await withTimeout("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Novo pedido: ${lead.service} — ${lead.name}`.slice(0, 200),
      html,
      text: plainText(lead),
    }),
  });
  if (!res.ok) console.error("Aviso por email falhou:", res.status);
}

async function sendWhatsApp(lead: LeadNotice) {
  const apikey = process.env.CALLMEBOT_APIKEY;
  const phone = process.env.NOTIFY_WHATSAPP_PHONE;
  if (!apikey || !phone) return;
  const url =
    "https://api.callmebot.com/whatsapp.php?" +
    new URLSearchParams({ phone, apikey, text: plainText(lead).slice(0, 1500) }).toString();
  const res = await withTimeout(url);
  if (!res.ok) console.error("Aviso por WhatsApp falhou:", res.status);
}

export async function notifyOwner(lead: LeadNotice) {
  const results = await Promise.allSettled([sendEmail(lead), sendWhatsApp(lead)]);
  for (const r of results) {
    if (r.status === "rejected") console.error("Aviso falhou:", String(r.reason?.message ?? r.reason));
  }
}
