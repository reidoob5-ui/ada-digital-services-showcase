import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/ada-lovelace-logo.png.asset.json";
import { services, waLink, WHATSAPP_NUMBER_DISPLAY, DEFAULT_WA_MESSAGE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="Ada Lovelace Technologies"
            className="h-14 w-auto"
            loading="lazy"
          />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Soluções digitais para um futuro sem limites. Inovação que impulsiona o seu negócio.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Navegação
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/servicos"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Serviços e Preços
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Produtos e Soluções
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold">
            Serviços
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  to="/servicos"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Ada Lovelace Technologies. Todos os direitos reservados.</p>
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4 text-whatsapp" />
            {WHATSAPP_NUMBER_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
