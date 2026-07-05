import { cn } from "@/lib/utils"

export function AnniversaryBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent",
        className,
      )}
    >
      <span className="flex h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      30 anos de mercado
    </span>
  )
}
