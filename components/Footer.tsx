import Image from "next/image";

const navLinks = [
  { label: "Sabores", href: "#sabores" },
  { label: "Nosotros", href: "#proceso" },
  { label: "Calidad", href: "#calidad" },
  { label: "Contacto", href: "#contacto" },
];

const sabores = ["Frutilla", "Guanábana", "Mora", "Naranjilla", "Piña", "Tamarindo", "Tomate de árbol"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#173b2b] text-white">
      {/* Soft radial glow */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-80"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(230,184,92,0.15) 0%, transparent 70%)",
        }}
      />

        <div className="mx-auto max-w-7xl px-6 pt-14 pb-8 md:px-12">
        {/* CTA band */}
        <div className="mb-12 grid items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.04] px-7 py-8 text-center md:grid-cols-[1fr_auto] md:px-10 md:text-left">
          <div>
            <h3 className="text-xl font-bold leading-tight md:text-2xl">
              ¿Listo para el sabor
              <span className="text-[#e6b85c]"> de verdad?</span>
            </h3>
            <p className="mx-auto mt-1.5 max-w-md text-sm leading-6 text-white/45 md:mx-0">
              Pide tus pulpas por WhatsApp y recíbelas frescas en Quito.
            </p>
          </div>
          <a
            href="https://wa.me/593984629133?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20FRUTPULP."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#e6b85c] px-6 py-3 text-sm font-bold text-[#173b2b] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(230,184,92,0.3)]"
          >
            Pedir por WhatsApp
            <span>→</span>
          </a>
        </div>

        {/* Main columns */}
        <div className="grid gap-10 text-center md:grid-cols-2 lg:grid-cols-12 lg:text-left">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <div className="relative h-11 w-11">
                <Image
                  src="/images/logo_sin_fondo.png"
                  alt="FRUTPULP"
                  fill
                  sizes="44px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold tracking-tight">FRUTPULP</div>
                <div className="text-[9px] uppercase tracking-[0.25em] text-[#e6b85c]">
                  Pulpas de fruta natural
                </div>
              </div>
            </div>
            <p className="mx-auto max-w-xs text-sm leading-6 text-white/40 lg:mx-0">
              Elaboradas artesanalmente en Quito. Sin conservantes, sin atajos. Solo fruta de verdad.
            </p>
            <div className="mt-5 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://wa.me/593984629133"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all duration-300 hover:border-white/40 hover:text-white"
                aria-label="WhatsApp"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Navegación</h4>
            <div className="flex flex-col items-center gap-2.5 lg:items-start">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Sabores */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Sabores</h4>
            <div className="mx-auto grid max-w-[260px] grid-cols-2 gap-2.5 text-sm text-white/45 lg:mx-0">
              {sabores.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/30">Contacto</h4>
            <div className="flex flex-col items-center gap-2.5 text-sm text-white/45 lg:items-start">
              <p>Quito · El Recreo</p>
              <a
                href="https://wa.me/593984629133"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
              >
                098 462 9133
              </a>
              <a
                href="https://wa.me/593979084514"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-white"
              >
                097 908 4514
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center text-xs text-white/30 lg:flex-row lg:text-left">
          <p>© {new Date().getFullYear()} FRUTPULP. Todos los derechos reservados.</p>
          <p>Página creada por Tec. Mateo Rodríguez</p>
        </div>
      </div>
    </footer>
  );
}
