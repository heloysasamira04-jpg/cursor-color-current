import { createFileRoute } from "@tanstack/react-router";
import { ScrubVideoBackground } from "@/components/ScrubVideoBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gradiente Vivo — cores que seguem o seu cursor" },
      {
        name: "description",
        content: "Um fundo em gradiente que dança e desliza conforme você move o mouse.",
      },
      { property: "og:title", content: "Gradiente Vivo — cores que seguem o seu cursor" },
      {
        property: "og:description",
        content: "Um fundo em gradiente que dança e desliza conforme você move o mouse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <ScrubVideoBackground />
      <p className="pointer-events-none fixed bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-foreground/60">
        Mova o cursor
      </p>
    </main>
  );
}
