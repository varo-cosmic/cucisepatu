import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Badge } from "@/components/badge";

const WHATSAPP =
  "https://wa.me/6281234567890?text=Halo%20mau%20booking%20cuci%20sepatu";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.06),transparent_40%)]" />
      <Container>
        <div className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <Badge>Garansi rapi & wangi</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Sepatu kinclong tanpa ribet.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              Layanan cuci sepatu profesional untuk sneakers, kulit, suede, dan
              kanvas. Bisa <b>pickup & delivery</b>. Estimasi selesai 1–3 hari
              (tergantung treatment).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#booking">Booking sekarang</Button>
              <Button href={WHATSAPP} external variant="secondary">
                Tanya via WhatsApp
              </Button>
              <Button href="#harga" variant="ghost">
                Lihat paket harga →
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-3xl border border-zinc-200 bg-white p-4">
                <div className="text-xl font-semibold">1–3</div>
                <div className="text-xs text-zinc-600">hari selesai</div>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-4">
                <div className="text-xl font-semibold">4.9★</div>
                <div className="text-xs text-zinc-600">rating pelanggan</div>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-4">
                <div className="text-xl font-semibold">Pickup</div>
                <div className="text-xs text-zinc-600">area tertentu</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="rounded-3xl bg-zinc-100 p-6">
              <div className="text-sm font-semibold">Preview proses</div>
              <ol className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-2xl bg-white">
                    1
                  </span>
                  <span>Inspeksi material & noda</span>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-2xl bg-white">
                    2
                  </span>
                  <span>Deep clean + detailing</span>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-2xl bg-white">
                    3
                  </span>
                  <span>Drying aman + finishing</span>
                </li>
              </ol>

              <div className="mt-6 rounded-3xl bg-white p-4">
                <div className="text-xs text-zinc-500">Catatan</div>
                <p className="mt-1 text-sm text-zinc-700">
                  Suede & kulit butuh treatment khusus. Kalau ragu, chat dulu —
                  biar aman.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
