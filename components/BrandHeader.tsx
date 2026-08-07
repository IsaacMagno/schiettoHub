export function BrandHeader() {
  return (
    <header className="animate-brand-in pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-center px-6 pt-8 md:pt-10">
      <div className="relative flex flex-col items-center text-center">
        <div
          className="absolute top-1/2 left-1/2 -z-10 h-40 w-[min(92vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/45 blur-2xl md:h-48"
          aria-hidden
        />
        <p className="font-body mb-3 text-[0.65rem] tracking-[0.38em] text-cream/55 uppercase md:text-xs">
          Café · Decoração
        </p>
        <h1 className="font-display text-[2.75rem] leading-none font-medium tracking-[0.06em] text-cream md:text-6xl lg:text-7xl">
          Schiètto
        </h1>
        <p className="font-body mt-3 text-sm tracking-wide text-cream/65 md:text-base">
          Escolha o seu destino
        </p>
      </div>
    </header>
  );
}
