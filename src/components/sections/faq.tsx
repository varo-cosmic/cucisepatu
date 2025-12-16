import { Container } from "@/components/container";

export function Faq() {
  const faqs = [
    {
      q: "Berapa lama prosesnya?",
      a: "Umumnya 1–3 hari. Treatment khusus (unyellowing/repaint) bisa lebih lama tergantung kondisi.",
    },
    {
      q: "Apakah aman untuk suede dan kulit?",
      a: "Aman jika pakai treatment yang tepat. Kami biasanya minta foto dulu untuk assessment.",
    },
    {
      q: "Bisa pickup & delivery?",
      a: "Bisa untuk area tertentu. Ongkir menyesuaikan jarak.",
    },
    {
      q: "Hasil unyellowing pasti putih?",
      a: "Tidak selalu. Kuning yang sudah lama/teroksidasi berat bisa berkurang signifikan tapi tidak selalu 100% putih.",
    },
  ];

  return (
    <section className="bg-white">
      <Container>
        <div className="py-14 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            FAQ
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold">{f.q}</div>
                <div className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {f.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
