import { BrandHeader } from "@/components/BrandHeader";
import { DestinationPanel } from "@/components/DestinationPanel";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="portal-atmosphere relative min-h-dvh overflow-hidden">
      <div className="portal-grain absolute inset-0 z-20" aria-hidden />

      <BrandHeader />

      <div className="relative z-10 grid min-h-dvh grid-cols-1 pt-36 pb-14 md:grid-cols-[1.08fr_0.92fr] md:pt-0 md:pb-0">
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
