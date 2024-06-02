import { cn } from "@/lib/utils"

interface MarkProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "purple" | "yellow" | "red"  | "green" | "blue"
}

export function Mark({
  children,
  icon,
  type = "default",
  ...props
}: MarkProps) {
  return (
    <div
      className={cn("py-0.5 items-start inline-flex underline-offset-8 underline decoration-4 decoration-solid", {
        "decoration-green-400 dark:decoration-green-600 bg-green-100 dark:bg-green-950 dark:text-green-200": type === "green",
        "decoration-blue-900 dark:decoration-blue-600 bg-blue-50 dark:bg-blue-950 dark:text-blue-200": type === "blue",
        "decoration-purple-900 dark:decoration-purple-600 bg-purple-50 dark:bg-purple-950 dark:text-purple-200": type === "purple",
        "decoration-yellow-900 dark:decoration-yellow-600 bg-yellow-50 dark:bg-yellow-950 dark:text-yellow-200": type === "yellow",
        "decoration-red-900 dark:decoration-red-600 bg-red-50 dark:bg-red-950 dark:text-red-200": type === "red",
        "decoration-gray-900 dark:decoration-gray-600 bg-gray-50 dark:bg-gray-950 dark:text-gray-200": type === "default",
      })}
      {...props}
    >{children}</div>
  )
}