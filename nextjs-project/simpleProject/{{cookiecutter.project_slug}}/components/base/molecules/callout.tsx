import { cn } from "@/lib/utils"

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}

export function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
        "border-red-900 dark:border-red-600 bg-red-50 dark:bg-red-950": type === "danger",
        "border-yellow-900 dark:border-yellow-600 bg-yellow-50 dark:bg-yellow-950": type === "warning",
        "dark:border-white/20 border-black/40 dbg-transparent": type === "default",
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  )
}