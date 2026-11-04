import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Informe o seu nome")
    .max(100, "O nome deve ter menos de 100 caracteres"),
  phone: z.string().trim().max(40, "Contacto demasiado longo").optional().default(""),
  service: z.string().trim().min(1).max(120),
  projectDescription: z
    .string()
    .trim()
    .min(1, "Descreva brevemente o projeto")
    .max(2000, "A descrição deve ter menos de 2000 caracteres"),
});

/**
 * Stores a contact-form submission server-side. Kept public on purpose: the
 * site has no accounts, and visitors submit quote requests anonymously.
 */
export const submitLead = createServerFn({ method: "POST" })
  .validator((input: unknown) => leadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      phone: data.phone || null,
      service: data.service,
      project_description: data.projectDescription,
    });
    if (error) {
      console.error("Failed to store contact submission:", error.message);
      throw new Error("Não foi possível guardar o seu pedido.");
    }
    return { ok: true as const };
  });
