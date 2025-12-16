import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Payload tidak valid." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const service = String(body.service ?? "").trim();
  const pickup = String(body.pickup ?? "").trim();
  const notes = String(body.notes ?? "").trim();

  const phoneDigits = phone.replace(/\D/g, "");

  if (name.length < 2) {
    return NextResponse.json({ error: "Nama minimal 2 karakter." }, { status: 400 });
  }
  if (phoneDigits.length < 10) {
    return NextResponse.json({ error: "Nomor WhatsApp tidak valid." }, { status: 400 });
  }
  if (!service) {
    return NextResponse.json({ error: "Pilih paket layanan." }, { status: 400 });
  }

  // Untuk tahap awal: simpan ke DB / kirim email / kirim ke WhatsApp gateway nanti.
  // Sekarang kita log dulu ke server:
  console.log("[BOOKING]", {
    name,
    phone,
    service,
    pickup,
    notes,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
