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
    overlay:
      "bg-gradient-to-t from-cafe-deep/95 via-cafe-espresso/55 to-cafe-deep/25 group-hover:from-cafe-deep group-hover:via-cafe-espresso/70",
    line: "bg-cafe-gold",
    cta: "border-cafe-gold/50 text-cream group-hover:border-cafe-gold group-hover:bg-cafe-gold/15",
  },
  home: {
    overlay:
      "bg-gradient-to-t from-home-deep/95 via-home-charcoal/55 to-home-deep/25 group-hover:from-home-deep group-hover:via-home-charcoal/70",
    line: "bg-home-rosegold",
    cta: "border-home-rosegold/50 text-cream group-hover:border-home-rosegold group-hover:bg-home-rosegold/15",
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
        className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-105 group-focus-visible:scale-105"
      />

      <div
        className={`absolute inset-0 transition-colors duration-500 ${styles.overlay}`}
        aria-hidden
      />

      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 lg:p-12">
        <span
          className={`mb-4 h-px w-12 origin-left transition-transform duration-500 group-hover:scale-x-150 ${styles.line}`}
          aria-hidden
        />
        <h2 className="font-display text-3xl leading-tight font-medium tracking-wide text-cream md:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        <p className="font-body mt-3 max-w-sm text-sm leading-relaxed text-cream/70 md:text-[0.95rem]">
          {subtitle}
        </p>
        <span
          className={`font-body mt-7 inline-flex w-fit items-center border px-5 py-2.5 text-xs tracking-[0.22em] uppercase transition-colors duration-300 ${styles.cta}`}
        >
          {cta}
        </span>
      </div>
    </a>
  );
}
