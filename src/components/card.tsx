export function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-100">
          {icon ?? <span className="text-lg">👟</span>}
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-zinc-600">{desc}</p>
    </div>
  );
}
