"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/container";

type BookingPayload = {
  name: string;
  phone: string;
  service: string;
  pickup: string;
  notes: string;
};

export function Booking() {
  const [payload, setPayload] = useState<BookingPayload>({
    name: "",
    phone: "",
    service: "Deep Clean",
    pickup: "Antar sendiri",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState<string>("");

  const canSubmit = useMemo(() => {
    const phoneOk = payload.phone.replace(/\D/g, "").length >= 10;
    return payload.name.trim().length >= 2 && phoneOk;
  }, [payload]);

  async function submit() {
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Gagal mengirim booking.");
      }

      setStatus("success");
      setMessage("Booking terkirim! Kami akan hubungi kamu via WhatsApp.");
      setPayload((p) => ({ ...p, notes: "" }));
    } catch (e: any) {
      setStatus("error");
      setMessage(e?.message ?? "Terjadi error.");
    }
  }

  return (
    <section id="booking" className="bg-zinc-50">
      <Container>
        <div className="py-14 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Booking cepat
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600">
            Isi form ini untuk reservasi. Untuk estimasi akurat, sertakan catatan
            seperti “midsole kuning” atau “noda oli”.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-5">
            <div className="md:col-span-3 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Nama">
                  <input
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                    value={payload.name}
                    onChange={(e) =>
                      setPayload((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="Nama kamu"
                  />
                </Field>

                <Field label="No. WhatsApp">
                  <input
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                    value={payload.phone}
                    onChange={(e) =>
                      setPayload((p) => ({ ...p, phone: e.target.value }))
                    }
                    placeholder="0812xxxxxxx"
                  />
                </Field>

                <Field label="Paket">
                  <select
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                    value={payload.service}
                    onChange={(e) =>
                      setPayload((p) => ({ ...p, service: e.target.value }))
                    }
                  >
                    <option>Basic Clean</option>
                    <option>Deep Clean</option>
                    <option>Premium Treatment</option>
                    <option>Whitening</option>
                    <option>Unyellowing</option>
                    <option>Repaint / Touch Up</option>
                  </select>
                </Field>

                <Field label="Pengantaran">
                  <select
                    className="w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                    value={payload.pickup}
                    onChange={(e) =>
                      setPayload((p) => ({ ...p, pickup: e.target.value }))
                    }
                  >
                    <option>Antar sendiri</option>
                    <option>Pickup (jemput)</option>
                    <option>Delivery (antar balik)</option>
                    <option>Pickup + Delivery</option>
                  </select>
                </Field>

                <div className="md:col-span-2">
                  <Field label="Catatan (opsional)">
                    <textarea
                      className="min-h-[110px] w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:ring-4 focus:ring-zinc-200"
                      value={payload.notes}
                      onChange={(e) =>
                        setPayload((p) => ({ ...p, notes: e.target.value }))
                      }
                      placeholder="Contoh: sepatu putih, midsole menguning, ada noda di toe box."
                    />
                  </Field>
                </div>
              </div>

              <button
                disabled={!canSubmit || status === "loading"}
                onClick={submit}
                className={[
                  "mt-5 inline-flex w-full items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-4",
                  canSubmit && status !== "loading"
                    ? "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-300"
                    : "bg-zinc-200 text-zinc-500 cursor-not-allowed focus:ring-zinc-200",
                ].join(" ")}
              >
                {status === "loading" ? "Mengirim..." : "Kirim booking"}
              </button>

              {message && (
                <div
                  className={[
                    "mt-4 rounded-2xl px-4 py-3 text-sm",
                    status === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700",
                  ].join(" ")}
                >
                  {message}
                </div>
              )}

              <p className="mt-4 text-xs text-zinc-500">
                Dengan mengirim, kamu setuju dihubungi via WhatsApp untuk konfirmasi.
              </p>
            </div>

            <div className="md:col-span-2 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Setelah booking</div>
              <ol className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-2xl bg-zinc-100">
                    1
                  </span>
                  <span>Admin konfirmasi paket & estimasi</span>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-2xl bg-zinc-100">
                    2
                  </span>
                  <span>Pickup / kamu antar ke lokasi</span>
                </li>
                <li className="flex gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-2xl bg-zinc-100">
                    3
                  </span>
                  <span>Selesai → delivery / ambil</span>
                </li>
              </ol>

              <div className="mt-6 rounded-3xl bg-zinc-50 p-5">
                <div className="text-xs text-zinc-500">Tips</div>
                <p className="mt-1 text-sm text-zinc-700">
                  Kirim foto sepatu dari 3 angle (depan, samping, outsole) biar
                  assessment cepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium text-zinc-700">{label}</span>
      {children}
    </label>
  );
}
