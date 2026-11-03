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
    tagline: "Robôs de trading com licença oficial.",
    description:
      "Automação de operações financeiras com estratégias personalizadas e gestão de risco, compatível com as principais corretoras.",
    icon: Bot,
    features: [
      "Estratégias personalizadas",
      "Gestão de risco",
      "Suporte e atualizações",
      "Compatível com principais corretoras",
    ],
    priceFrom: "350.000 Kz",
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

export const formulaSteps = [
  { label: "Ideias", icon: "💡" },
  { label: "Tecnologia", icon: "</>" },
  { label: "Soluções", icon: "⚙" },
];
