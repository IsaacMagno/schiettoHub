import Image from "next/image";
import type { CSSProperties } from "react";

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
    cta: "border-cafe-gold/60 bg-cafe-deep/40 text-cream group-hover:border-cafe-gold group-hover:bg-cafe-gold group-hover:text-ink group-focus-visible:border-cafe-gold group-focus-visible:bg-cafe-gold group-focus-visible:text-ink",
    imageClass: "object-center",
    contentAlign: "items-start text-left",
    lineAlign: "origin-left",
  },
  home: {
    wash: "from-home-deep/85 via-home-charcoal/40 to-transparent",
    line: "bg-home-gold",
    cta: "border-home-gold/60 bg-home-deep/40 text-cream group-hover:border-home-gold group-hover:bg-home-gold group-hover:text-ink group-focus-visible:border-home-gold group-focus-visible:bg-home-gold group-focus-visible:text-ink",
    imageClass: "object-[center_32%]",
    contentAlign: "items-end text-right ml-auto",
    lineAlign: "origin-right ml-auto",
  },
} as const;

/** Título que sobe letra por letra (as palavras não quebram no meio). */
function RisingTitle({ text }: { text: string }) {
  let index = 0;
  return (
    <>
      {text.split(" ").map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
          {wordIndex > 0 && " "}
          {Array.from(word).map((letter) => {
            const style = { "--i": index++ } as CSSProperties;
            return (
              <span key={`${letter}-${index}`} className="rise-letter" style={style}>
                {letter}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}

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
      className={`portal-panel group relative block overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-cream/70 focus-visible:ring-inset ${animationClass} ${className}`}
      aria-label={`${title} — ${cta}`}
    >
      {/* Foto: respira devagar, acompanha o mouse e aproxima ao passar por cima */}
      <div className="panel-drift absolute inset-0">
        <div className="panel-mouse absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            className={`object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 group-focus-visible:scale-105 ${styles.imageClass}`}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-t from-ink from-[12%] via-ink/75 via-[38%] to-transparent to-[72%]" />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${styles.wash} opacity-75`}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-14">
        <div className={`relative flex max-w-md flex-col ${styles.contentAlign}`}>
          <span
            className={`panel-line mb-5 block h-px w-12 transition-[width] duration-500 ease-out group-hover:w-24 group-focus-visible:w-24 ${styles.lineAlign} ${styles.line}`}
            aria-hidden
          />
          <h2
            className="font-display text-4xl leading-tight font-medium tracking-wide text-cream [text-shadow:0_2px_14px_rgba(0,0,0,0.45)] lg:text-[3.25rem]"
            aria-label={title}
          >
            <span aria-hidden>
              <RisingTitle text={title} />
            </span>
          </h2>
          <p className="panel-copy font-body mt-4 max-w-sm text-sm leading-relaxed text-cream/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)] lg:text-base">
            {subtitle}
          </p>
          <span
            className={`panel-copy font-body mt-8 inline-flex w-fit items-center gap-3 border px-6 py-3 text-xs tracking-[0.22em] uppercase transition-colors duration-300 ${styles.cta}`}
          >
            {cta}
            <span
              className="transition-transform duration-300 group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5"
              aria-hidden
            >
              →
            </span>
          </span>
        </div>
      </div>
    </a>
  );
}
