import { Container } from "@/components/container";

export function Testimonials() {
  const data = [
    {
      name: "Alya",
      text: "Sepatuku yang kusam jadi bersih banget. Midsole-nya balik cerah.",
    },
    {
      name: "Raka",
      text: "Fast response, rapi, dan wangi. Pickup-nya juga enak.",
    },
    {
      name: "Nina",
      text: "Suede-ku aman, gak rusak. Recommended buat yang takut treatment.",
    },
  ];

  return (
    <section className="bg-zinc-50">
      <Container>
        <div className="py-14 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Kata pelanggan
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {data.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm text-zinc-700">“{t.text}”</div>
                <div className="mt-4 text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-zinc-500">Pelanggan</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
