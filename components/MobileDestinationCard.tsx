import Image from "next/image";

type MobileDestinationCardProps = {
  href: string;
  title: string;
  subtitle: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  accent: "cafe" | "home";
  index: string;
  label: string;
  animationClass?: string;
};

const accentStyles = {
  cafe: {
    line: "bg-cafe-gold/45",
    frame: "border-cafe-gold/40",
    label: "text-cafe-gold",
    cta: "border-cafe-gold/55 group-active:border-cafe-gold group-active:bg-cafe-deep/60",
    imageClass: "object-center",
  },
  home: {
    line: "bg-home-rosegold/45",
    frame: "border-home-rosegold/40",
    label: "text-home-rosegold",
    cta: "border-home-rosegold/55 group-active:border-home-rosegold group-active:bg-home-deep/60",
    imageClass: "object-[center_32%]",
  },
} as const;

export function MobileDestinationCard({
  href,
  title,
  subtitle,
  cta,
  imageSrc,
  imageAlt,
  accent,
  index,
  label,
  animationClass = "animate-panel-in",
}: MobileDestinationCardProps) {
  const styles = accentStyles[accent];

  return (
    <a
      href={href}
      className={`group block outline-none focus-visible:ring-2 focus-visible:ring-cream/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${animationClass}`}
      aria-label={`${title} — ${cta}`}
    >
      <div className="mb-4 flex items-center gap-4">
        <span className="font-body text-[0.62rem] tracking-[0.32em] text-cream/40 uppercase">
          {index}
        </span>
        <span className={`h-px flex-1 ${styles.line}`} aria-hidden />
        <span
          className={`font-body text-[0.62rem] tracking-[0.32em] uppercase ${styles.label}`}
        >
          {label}
        </span>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className={`object-cover transition-transform duration-[1.1s] ease-out group-active:scale-105 ${styles.imageClass}`}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
          aria-hidden
        />
        <div
          className={`pointer-events-none absolute inset-2.5 border ${styles.frame}`}
          aria-hidden
        />
      </div>

      <div className="mt-6">
        <h2 className="font-display text-[2rem] leading-tight font-medium tracking-wide text-cream">
          {title}
        </h2>
        <p className="font-body mt-2.5 max-w-sm text-sm leading-relaxed text-cream/70">
          {subtitle}
        </p>
        <span
          className={`font-body mt-6 inline-flex w-fit items-center gap-3 border px-5 py-2.5 text-xs tracking-[0.22em] text-cream uppercase transition-colors duration-300 ${styles.cta}`}
        >
          {cta}
          <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}
