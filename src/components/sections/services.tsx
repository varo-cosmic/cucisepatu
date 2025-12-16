import { Container } from "@/components/container";
import { Card } from "@/components/card";

export function Services() {
  const services = [
    {
      title: "Deep Clean",
      desc: "Cuci menyeluruh upper, midsole, insole, dan lace (sesuai kondisi).",
      icon: <span className="text-lg">🧼</span>,
    },
    {
      title: "Whitening Midsole",
      desc: "Memutihkan midsole kusam agar kembali cerah dan bersih.",
      icon: <span className="text-lg">✨</span>,
    },
    {
      title: "Unyellowing",
      desc: "Treatment untuk outsole/midsole menguning (hasil tergantung kondisi).",
      icon: <span className="text-lg">🧪</span>,
    },
    {
      title: "Repaint / Touch Up",
      desc: "Perapihan cat & scuff kecil (cek dulu via foto untuk estimasi).",
      icon: <span className="text-lg">🎨</span>,
    },
    {
      title: "Suede & Nubuck Care",
      desc: "Pembersihan material sensitif dengan alat & produk khusus.",
      icon: <span className="text-lg">🧤</span>,
    },
    {
      title: "Pickup & Delivery",
      desc: "Jemput-antar area tertentu. Ongkir mengikuti jarak.",
      icon: <span className="text-lg">🛵</span>,
    },
  ];

  return (
    <section id="layanan" className="bg-white">
      <Container>
        <div className="py-14 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Layanan
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Pilih treatment sesuai kebutuhan. Kalau bingung, kirim foto sepatu —
            kami rekomendasikan opsi paling aman.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} title={s.title} desc={s.desc} icon={s.icon} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
