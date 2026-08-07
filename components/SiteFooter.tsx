export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="animate-footer-in absolute inset-x-0 bottom-0 z-30 flex justify-center px-6 pb-5 md:pb-6">
      <p className="font-body text-[0.7rem] tracking-[0.28em] text-cream/45 uppercase">
        Pedreira · SP · {year}
      </p>
    </footer>
  );
}
