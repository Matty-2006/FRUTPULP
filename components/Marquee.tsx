const items = [
  "100% Fruta Natural",
  "Sin Conservantes",
  "Hecho en Quito",
  "7 Sabores Únicos",
  "Sin Colorantes",
  "Elaboración Artesanal",
  "Directo del Campo",
  "Pulpa Premium",
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden bg-[#173b2b] py-5">
      <div className="flex w-fit animate-marquee">
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-4 px-6 text-[11px] font-bold uppercase tracking-[0.25em] text-white/30"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-[#e6b85c]/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
