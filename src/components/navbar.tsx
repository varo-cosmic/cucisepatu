import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Badge } from "@/components/badge";

const WHATSAPP = "https://wa.me/6281234567890?text=Halo%20mau%20booking%20cuci%20sepatu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-900 text-white">
              KC
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Klinik Cuci Sepatu</div>
              <div className="text-xs text-zinc-500">Pickup • Delivery • Cepat</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="text-zinc-600 hover:text-zinc-900" href="#layanan">
              Layanan
            </a>
            <a className="text-zinc-600 hover:text-zinc-900" href="#harga">
              Harga
            </a>
            <a className="text-zinc-600 hover:text-zinc-900" href="#galeri">
              Galeri
            </a>
            <a className="text-zinc-600 hover:text-zinc-900" href="#booking">
              Booking
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Badge>Open hari ini</Badge>
            </div>
            <Button href={WHATSAPP} external className="rounded-2xl">
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
