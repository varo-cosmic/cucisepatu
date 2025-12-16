import { Container } from "@/components/container";

export function Gallery() {
  const items = Array.from({ length: 6 }).map((_, i) => i + 1);

  return (
    <section id="galeri" className="bg-white">
      <Container>
        <div className="py-14 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Galeri hasil
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Placeholder untuk foto before/after. Nanti kamu bisa ganti jadi Image
            Next.js atau ambil dari CMS.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {items.map((n) => (
              <div
                key={n}
                className="aspect-[4/3] rounded-3xl border border-zinc-200 bg-zinc-100 p-4"
              >
                <div className="text-xs text-zinc-500">Foto #{n}</div>
                <div className="mt-2 h-full rounded-2xl bg-white/60" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
