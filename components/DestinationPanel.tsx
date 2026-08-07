import Image from "next/image";

type DestinationPanelProps = {
  href: string;
  title: string;
  subtitle: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  accent: "cafe" | "home";
  className?: string;
  animationClass?: string;
};

const accentStyles = {
  cafe: {
    wash: "from-cafe-deep/80 via-cafe-espresso/35 to-transparent",
    line: "bg-cafe-gold",
    cta: "border-cafe-gold/55 bg-cafe-deep/40 text-cream group-hover:border-cafe-gold group-hover:bg-cafe-deep/60",
    imageClass: "object-center",
    contentAlign: "items-start text-left",
    lineAlign: "origin-left",
  },
  home: {
    wash: "from-home-deep/85 via-home-charcoal/40 to-transparent",
    line: "bg-home-rosegold",
    cta: "border-home-rosegold/55 bg-home-deep/40 text-cream group-hover:border-home-rosegold group-hover:bg-home-deep/60",
    imageClass: "object-[center_32%]",
    // Mobile left, desktop right
    contentAlign: "items-start text-left md:items-end md:text-right md:ml-auto",
    lineAlign: "origin-left md:origin-right md:ml-auto",
  },
} as const;

export function DestinationPanel({
  href,
  title,
  subtitle,
  cta,
  imageSrc,
  imageAlt,
  accent,
  className = "",
  animationClass = "animate-panel-in",
}: DestinationPanelProps) {
  const styles = accentStyles[accent];

  return (
    <a
      href={href}
      className={`group relative block min-h-[70vh] overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-cream/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:min-h-0 ${animationClass} ${className}`}
      aria-label={`${title} — ${cta}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 55vw"
        className={`object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105 group-focus-visible:scale-105 ${styles.imageClass}`}
      />

      {/* Dark bottom gradient on all viewports for readability */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-[12%] via-ink/75 via-[38%] to-transparent to-[72%]" />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${styles.wash} opacity-75`}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-12">
        <div
          className={`relative flex max-w-md flex-col ${styles.contentAlign}`}
        >
          <span
            className={`mb-4 block h-px w-12 transition-transform duration-500 group-hover:scale-x-150 ${styles.lineAlign} ${styles.line}`}
            aria-hidden
          />
          <h2 className="font-display text-3xl leading-tight font-medium tracking-wide text-cream [text-shadow:0_2px_14px_rgba(0,0,0,0.45)] md:text-4xl lg:text-[2.75rem]">
            {title}
          </h2>
          <p className="font-body mt-3 max-w-sm text-sm leading-relaxed text-cream/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)] md:text-[0.95rem]">
            {subtitle}
          </p>
          <span
            className={`font-body mt-7 inline-flex w-fit items-center border px-5 py-2.5 text-xs tracking-[0.22em] uppercase transition-colors duration-300 ${styles.cta}`}
          >
            {cta}
          </span>
        </div>
      </div>
    </a>
  );
}
