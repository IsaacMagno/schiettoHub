export function BrandHeader() {
  return (
    <header className="animate-brand-in pointer-events-none absolute inset-x-0 top-0 z-30 flex flex-col items-center px-6 pt-8 text-center md:pt-10">
      <p className="font-body mb-2 text-[0.65rem] tracking-[0.42em] text-cream/55 uppercase md:text-xs">
        Universo Schiètto
      </p>
      <h1 className="font-display text-[2.75rem] leading-none font-medium tracking-[0.04em] text-cream md:text-6xl lg:text-7xl">
        Schiètto
      </h1>
      <p className="font-body mt-3 max-w-md text-sm leading-relaxed text-cream/65 md:text-base">
        Escolha para onde deseja ir
      </p>
    </header>
  );
}
