import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "muted";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold px-2.5 py-1 rounded-full",
        variant === "default" && "bg-brand-100 text-brand-700",
        variant === "success" && "bg-green-100 text-green-700",
        variant === "muted" && "bg-brand-50 text-brand-400"
      )}
    >
      {children}
    </span>
  );
}
