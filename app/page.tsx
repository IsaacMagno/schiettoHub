import { BrandHeader } from "@/components/BrandHeader";
import { DestinationPanel } from "@/components/DestinationPanel";
import { MobileDestinationCard } from "@/components/MobileDestinationCard";
import { SiteFooter } from "@/components/SiteFooter";

function CardDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-12" aria-hidden>
      <span className="h-px w-14 bg-cream/15" />
      <span className="h-1.5 w-1.5 rotate-45 border border-cream/30" />
      <span className="h-px w-14 bg-cream/15" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="portal-atmosphere relative min-h-dvh overflow-hidden">
      <div className="portal-grain absolute inset-0 z-20" aria-hidden />

      <BrandHeader />

      {/* Mobile: cartões editoriais em coluna */}
      <div className="relative z-10 flex flex-col px-6 pt-44 pb-24 md:hidden">
        <MobileDestinationCard
          href="https://cafe.schietto.com.br"
          title="Caffè Schiètto"
          subtitle="Café gourmet no centro de Pedreira — aroma, cardápio e o ambiente que você já conhece."
          cta="Visitar o café"
          imageSrc="/images/cafe-ambiente.webp"
          imageAlt="Interior do Caffè Schiètto em Pedreira"
          accent="cafe"
          index="Nº 01"
          label="Café"
          animationClass="animate-panel-in"
        />
        <CardDivider />
        <MobileDestinationCard
          href="https://homedecor.schietto.com.br"
          title="Home Decor"
          subtitle="Curadoria de decoração e semi jóias em um casarão histórico — inspire-se e visite a loja."
          cta="Visitar a loja"
          imageSrc="/images/home-ambiente.webp"
          imageAlt="Peças e ambientes Schiètto Home Decor"
          accent="home"
          index="Nº 02"
          label="Decoração"
          animationClass="animate-panel-in-delay"
        />
      </div>

      {/* Desktop: painéis lado a lado */}
      <div className="relative z-10 hidden min-h-dvh grid-cols-2 md:grid">
        <DestinationPanel
          href="https://cafe.schietto.com.br"
          title="Caffè Schiètto"
          subtitle="Café gourmet no centro de Pedreira — aroma, cardápio e o ambiente que você já conhece."
          cta="Visitar o café"
          imageSrc="/images/cafe-ambiente.webp"
          imageAlt="Interior do Caffè Schiètto em Pedreira"
          accent="cafe"
          animationClass="animate-panel-in"
        />
        <DestinationPanel
          href="https://homedecor.schietto.com.br"
          title="Home Decor"
          subtitle="Curadoria de decoração e semi jóias em um casarão histórico — inspire-se e visite a loja."
          cta="Visitar a loja"
          imageSrc="/images/home-ambiente.webp"
          imageAlt="Peças e ambientes Schiètto Home Decor"
          accent="home"
          animationClass="animate-panel-in-delay"
        />
      </div>

      <SiteFooter />
    </main>
  );
}
