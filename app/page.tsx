import { BrandHeader } from "@/components/BrandHeader";
import { DestinationPanel } from "@/components/DestinationPanel";
import { MobileDestinationCard } from "@/components/MobileDestinationCard";
import { PortalMotion } from "@/components/PortalMotion";
import { SiteFooter } from "@/components/SiteFooter";

const CAFE = {
  href: "https://cafe.schietto.com.br",
  title: "Caffè Schiètto",
  subtitle:
    "Café gourmet no centro de Pedreira — aroma, cardápio e o ambiente que você já conhece.",
  cta: "Visitar o café",
  imageSrc: "/images/cafe-ambiente.webp",
  imageAlt: "Interior do Caffè Schiètto em Pedreira",
  accent: "cafe",
} as const;

const HOME = {
  href: "https://homedecor.schietto.com.br",
  title: "Home Decor",
  subtitle:
    "Curadoria de decoração e semi jóias em um casarão histórico — inspire-se e visite a loja.",
  cta: "Visitar a loja",
  imageSrc: "/images/home-ambiente.webp",
  imageAlt: "Peças e ambientes Schiètto Home Decor",
  accent: "home",
} as const;

function CardDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-12" aria-hidden>
      <span className="h-px w-14 bg-cream/15" />
      <span className="h-1.5 w-1.5 rotate-45 border border-cafe-gold/60" />
      <span className="h-px w-14 bg-cream/15" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="portal-atmosphere relative min-h-dvh overflow-hidden">
      <div className="portal-grain absolute inset-0 z-20" aria-hidden />

      <BrandHeader />

      {/* Celular: cartões editoriais em coluna */}
      <div className="relative z-10 flex flex-col px-6 pt-44 pb-24 md:hidden">
        <MobileDestinationCard
          {...CAFE}
          index="Nº 01"
          label="Café"
          animationClass="animate-panel-in"
        />
        <CardDivider />
        <MobileDestinationCard
          {...HOME}
          index="Nº 02"
          label="Decoração"
          animationClass="animate-panel-in-delay"
        />
      </div>

      {/* Computador: dois painéis; o que recebe o mouse cresce e o outro recua */}
      <div className="portal-split relative z-10 hidden min-h-dvh md:flex">
        <PortalMotion />
        <DestinationPanel {...CAFE} animationClass="animate-panel-in" />
        <span className="portal-seam" aria-hidden />
        <DestinationPanel {...HOME} animationClass="animate-panel-in-delay" />
      </div>

      <SiteFooter />
    </main>
  );
}
