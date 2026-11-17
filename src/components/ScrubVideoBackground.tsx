import { useEffect, useRef, useState } from "react";
import bgVideo from "@/assets/bg-gradient.mp4.asset.json";

/** Fração do caminho percorrida a cada quadro (0–1). Menor = mais suave/lento. */
const EASE = 0.06;

/**
 * Vídeo de fundo em tela cheia cujo progresso (currentTime) acompanha o mouse,
 * interpolado com lerp em requestAnimationFrame.
 */
export function ScrubVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let target = 0; // posição normalizada desejada (0–1)
    let current = 0; // posição normalizada interpolada (0–1)
    let raf = 0;

    const onPointerMove = (e: PointerEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      // Combina os eixos X e Y numa única posição 0–1
      target = Math.min(1, Math.max(0, (x + y) / 2));
    };

    const tick = () => {
      current += (target - current) * EASE;
      const duration = video.duration;
      if (Number.isFinite(duration) && duration > 0 && !video.seeking) {
        // Evita o último quadro exato, que alguns navegadores tratam como "ended"
        const time = current * (duration - 0.05);
        if (Math.abs(video.currentTime - time) > 0.008) {
          video.currentTime = time;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const onReady = () => {
      video.pause();
      setReady(true);
    };

    if (video.readyState >= 2) onReady();
    video.addEventListener("loadeddata", onReady);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadeddata", onReady);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-surface-fallback">
      <video
        ref={videoRef}
        src={bgVideo.url}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        className={`h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
