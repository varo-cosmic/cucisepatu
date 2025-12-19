import { Container } from "@/components/container";
import { Button } from "@/components/button";

export function Pricing() {
  const plans = [
    {
      name: "Basic Clean",
      price: "35k",
      desc: "Cocok untuk kotor ringan.",
      features: ["Upper + midsole", "Lace basic", "Estimasi 1–2 hari"],
    },
    {
      name: "Deep Clean",
      price: "70k",
      desc: "Paling populer untuk pemakaian harian.",
      features: ["Upper detail", "Midsole + insole", "Lace wash", "Estimasi 2–3 hari"],
      highlight: true,
    },
    {
      name: "Premium Treatment",
      price: "Mulai 100k",
      desc: "Untuk kasus khusus/material sensitif.",
      features: ["Suede/leather care", "Unyellowing/whitening (opsional)", "Assessment dulu"],
    },
  ];

  return (
    <section id="harga" className="bg-zinc-50">
      <Container>
        <div className="py-14 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Paket harga
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Harga bisa menyesuaikan kondisi sepatu. Noda lama/kuning berat perlu
            assessment terlebih dahulu.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={[
                  "rounded-3xl border p-6 shadow-sm",
                  p.highlight
                    ? "border-zinc-900 bg-white"
                    : "border-zinc-200 bg-white",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-base font-semibold">{p.name}</div>
                    <div className="mt-1 text-sm text-zinc-600">{p.desc}</div>
                  </div>
                  {p.highlight && (
                    <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                      Best value
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <div className="text-3xl font-semibold">{p.price}</div>
                  <div className="pb-1 text-sm text-zinc-500">/pasang</div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button href="#booking" className="w-full">
                    Pilih paket
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            *Contoh harga. Ubah sesuai bisnismu. Tambahkan biaya pickup/antar bila perlu.
          </p>
        </div>
      </Container>
    </section>
  );
}
