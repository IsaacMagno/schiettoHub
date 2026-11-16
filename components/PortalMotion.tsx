"use client";

import { useEffect, useRef } from "react";

/**
 * Faz as fotos acompanharem o mouse de leve. Não desenha nada: só escreve as
 * variáveis CSS --mx/--my no elemento onde está (usadas por .panel-mouse).
 * No toque e com "reduzir movimento" não faz nada, a não ser que o site tenha
 * sido aberto com ?movimento=completo.
 */
export function PortalMotion() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const stage = ref.current?.parentElement;
    if (!stage) return;

    const full = document.documentElement.classList.contains("motion-full");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!mouse || (reduced && !full)) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const apply = () => {
      frame = 0;
      stage.style.setProperty("--mx", x.toFixed(3));
      stage.style.setProperty("--my", y.toFixed(3));
    };
    const onMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      x = (event.clientX - rect.left) / rect.width - 0.5;
      y = (event.clientY - rect.top) / rect.height - 0.5;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    stage.addEventListener("pointermove", onMove);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <span ref={ref} hidden />;
}
