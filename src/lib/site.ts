import {
  Globe,
  Smartphone,
  Braces,
  Bot,
  Building2,
  Workflow,
  ShoppingCart,
  ShieldCheck,
  Zap,
  Headset,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export const SITE_URL = "https://ada-digital-services-showcase.lovable.app";

export const WHATSAPP_NUMBER_DISPLAY = "+244 925 856 294";
export const WHATSAPP_NUMBER_RAW = "244925856294";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE = "Olá! Gostaria de solicitar um orçamento.";

export type ServicePlan = {
  name: string;
  price: string;
  features: string[];
};

export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  priceFrom?: string;
  plans?: ServicePlan[];
};

export const services: Service[] = [
  {
    id: "websites",
    title: "Criação de Websites",
    tagline: "Sites modernos, rápidos e seguros.",
    description:
      "Presença digital profissional para o seu negócio, com design responsivo que funciona em qualquer ecrã.",
    icon: Globe,
    features: ["Design responsivo", "Otimização para motores de busca", "Integração com WhatsApp"],
    plans: [
      {
        name: "Starter",
        price: "35.000 Kz",
        features: ["Site básico", "Design responsivo", "WhatsApp"],
      },
      {
        name: "Business",
        price: "75.000 Kz",
        features: ["Várias páginas", "Formulário de contacto", "SEO básico"],
      },
      {
        name: "Premium",
        price: "120.000 Kz",
        features: ["Personalizado", "Funcionalidades avançadas", "Integrações"],
      },
    ],
  },
  {
    id: "aplicacoes",
    title: "Desenvolvimento de Aplicações",
    tagline: "A sua app na palma da mão.",
    description:
      "Aplicações móveis para Android e iOS, publicadas nas lojas oficiais, com desempenho de nível profissional.",
    icon: Smartphone,
    features: ["Android e iOS", "Design moderno", "Alta performance", "Publicação nas lojas"],
    priceFrom: "150.000 Kz",
  },
  {
    id: "apis",
    title: "Desenvolvimento de APIs",
    tagline: "Integrações que conectam o seu negócio.",
    description:
      "Interfaces robustas que ligam os seus sistemas entre si e com serviços externos, com segurança e documentação completa.",
    icon: Braces,
    features: [
      "Integrações com sistemas",
      "Autenticação segura",
      "Documentação completa",
      "Escaláveis",
    ],
    priceFrom: "150.000 Kz",
  },
  {
    id: "trading-bots",
    title: "Bots de Trading Automáticos",
    tagline: "Robôs desenvolvidos à medida da sua estratégia.",
    description:
      "Desenvolvemos bots de trading à medida para a sua conta, a partir da estratégia que definir. Não garantimos lucros: operar em mercados financeiros envolve risco de perda de capital.",
    icon: Bot,
    features: [
      "IQ Option, Quotex, Pocket Option, Bullex e Avalon",
      "Estratégias personalizadas",
      "Gestão de risco",
      "Suporte e atualizações",
    ],
    priceFrom: "120.000 Kz",
  },
  {
    id: "erp",
    title: "Sistemas de Gestão Empresarial (ERP)",
    tagline: "Controlo total do seu negócio.",
    description:
      "Sistemas à medida para gerir vendas, finanças e equipas, com relatórios e painéis de acompanhamento em tempo real.",
    icon: Building2,
    features: [
      "Gestão de vendas e estoque",
      "Gestão financeira",
      "Recursos humanos",
      "Relatórios e dashboards",
    ],
    priceFrom: "300.000 Kz",
  },
  {
    id: "automacao",
    title: "Automação de Processos",
    tagline: "Mais eficiência, menos trabalho manual.",
    description:
      "Rotinas repetitivas passam a correr sozinhas: atendimento, notificações e processos administrativos automatizados.",
    icon: Workflow,
    features: [
      "Atendimento automatizado",
      "Integração entre plataformas",
      "Notificações automáticas",
      "Processos administrativos",
    ],
    priceFrom: "50.000 Kz",
  },
  {
    id: "marketplaces",
    title: "Plataformas e Marketplaces",
    tagline: "Conecte pessoas, produtos e serviços.",
    description:
      "Plataformas completas de compra e venda, com pagamentos, comissões e gestão de vendedores e compradores.",
    icon: ShoppingCart,
    features: [
      "Cadastro de utilizadores",
      "Publicação de produtos/serviços",
      "Pagamentos e comissões",
      "Gestão de vendedores e compradores",
      "Notificações e dashboards",
    ],
    priceFrom: "500.000 Kz",
  },
];

export const trustItems: { title: string; icon: LucideIcon }[] = [
  { title: "Soluções Seguras", icon: ShieldCheck },
  { title: "Desempenho de Alta Performance", icon: Zap },
  { title: "Suporte Especializado", icon: Headset },
  { title: "Parceria Estratégica", icon: Handshake },
];

export const whyChooseUs = [
  {
    title: "Qualidade e inovação",
    description: "Soluções construídas com tecnologia atual e atenção aos detalhes.",
  },
  {
    title: "Entrega rápida",
    description: "Prazos realistas e cumpridos, sem comprometer a qualidade.",
  },
  {
    title: "Suporte contínuo",
    description: "Acompanhamento depois da entrega, sempre que precisar.",
  },
  {
    title: "Parceria de longo prazo",
    description: "Crescemos junto com o seu negócio, projeto após projeto.",
  },
];

export type ProjectCase = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export const projectCases: ProjectCase[] = [
  {
    id: "restaurante-website",
    title: "Website e menu digital para rede de restaurantes",
    category: "Website",
    description:
      "Site institucional com menu digital, reservas por WhatsApp e página otimizada para pesquisas locais, permitindo que os clientes encontrem o restaurante e façam pedidos em poucos toques.",
    tags: ["Website", "Menu digital", "SEO local", "WhatsApp"],
  },
  {
    id: "erp-retalho",
    title: "Sistema de gestão para comércio a retalho",
    category: "ERP",
    description:
      "Sistema de vendas e estoque com relatórios de faturação, controlo de produtos e painel de acompanhamento diário para a gerência tomar decisões com dados reais.",
    tags: ["ERP", "Vendas e estoque", "Relatórios", "Dashboard"],
  },
  {
    id: "app-entregas",
    title: "Aplicação de entregas com acompanhamento em tempo real",
    category: "Aplicação",
    description:
      "Aplicação móvel para registo de pedidos, atribuição de entregas aos motoristas e acompanhamento do estado de cada encomenda, com notificações para o cliente final.",
    tags: ["Aplicação", "Android e iOS", "Notificações", "Tempo real"],
  },
  {
    id: "automacao-atendimento",
    title: "Atendimento automático no WhatsApp",
    category: "Automação",
    description:
      "Robô de atendimento que responde às perguntas mais frequentes, recolhe os dados do cliente e encaminha cada conversa para a equipa certa — reduzindo o tempo de resposta.",
    tags: ["Automação", "WhatsApp", "Atendimento", "Integrações"],
  },
  {
    id: "portal-imobiliario",
    title: "Portal imobiliário com pesquisa avançada",
    category: "Plataforma",
    description:
      "Plataforma de anúncios de imóveis com pesquisa por localização e preço, perfis de consultores e área de gestão de anúncios para a imobiliária.",
    tags: ["Plataforma", "Pesquisa avançada", "Gestão de anúncios"],
  },
  {
    id: "api-pagamentos",
    title: "Integração de pagamentos e faturação",
    category: "API",
    description:
      "API que liga o sistema de vendas da empresa a serviços de pagamento e emissão de documentos, com autenticação segura e documentação completa para a equipa técnica.",
    tags: ["API", "Pagamentos", "Segurança", "Documentação"],
  },
];

export const sitePages = [
  { path: "/", priority: "1.0" },
  { path: "/servicos", priority: "0.9" },
  { path: "/projetos", priority: "0.8" },
  { path: "/sobre", priority: "0.7" },
  { path: "/contacto", priority: "0.8" },
];

export const formulaSteps = [
  { label: "Ideias", icon: "💡" },
  { label: "Tecnologia", icon: "</>" },
  { label: "Soluções", icon: "⚙" },
];
