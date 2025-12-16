import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container>
        <div className="grid gap-6 py-10 md:grid-cols-3">
          <div>
            <div className="font-semibold">Klinik Cuci Sepatu</div>
            <p className="mt-2 text-sm text-zinc-600">
              Deep clean, whitening, unyellowing, repaint. Bisa pickup & delivery.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Kontak</div>
            <ul className="mt-2 space-y-1 text-zinc-600">
              <li>WhatsApp: 0812-3456-7890</li>
              <li>Instagram: @kliniccucisepatu</li>
              <li>Alamat: (isi alamat kamu)</li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Jam Operasional</div>
            <ul className="mt-2 space-y-1 text-zinc-600">
              <li>Senin–Sabtu: 10.00–20.00</li>
              <li>Minggu: 12.00–18.00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 py-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Klinik Cuci Sepatu. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
