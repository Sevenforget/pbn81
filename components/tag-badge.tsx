import { cn } from "@/lib/utils"

interface TagBadgeProps {
  tag: string
  size?: "sm" | "md"
}

export function TagBadge({ tag, size = "md" }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-muted px-2 py-1 text-muted-foreground",
        size === "sm" ? "text-xs" : "text-sm",
      )}
    >
      #{tag}
    </span>
  )
}
