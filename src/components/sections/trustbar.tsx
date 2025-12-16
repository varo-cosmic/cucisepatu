import { Container } from "@/components/container";

export function TrustBar() {
  const items = [
    { title: "Aman untuk material", desc: "Produk & teknik sesuai sepatu" },
    { title: "Transparan", desc: "Estimasi waktu & biaya jelas" },
    { title: "Detailing rapi", desc: "Sampai sela & midsole" },
    { title: "Support cepat", desc: "Fast response via WhatsApp" },
  ];

  return (
    <section className="border-y border-zinc-200 bg-white">
      <Container>
        <div className="grid gap-4 py-10 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-3xl bg-zinc-50 p-5">
              <div className="text-sm font-semibold">{it.title}</div>
              <div className="mt-1 text-sm text-zinc-600">{it.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
