import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-300 shadow-sm",
  secondary:
    "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-200",
  ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-200",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const common =
    "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-4";
  const Comp = (
    <span className={`${common} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" aria-label="External link">
        {Comp}
      </a>
    );
  }

  return <Link href={href}>{Comp}</Link>;
}
