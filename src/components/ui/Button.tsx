import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold text-sm rounded-lg px-6 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
        variant === "primary" && "bg-accent text-white hover:bg-accent-light",
        variant === "outline" &&
          "border border-brand-300 text-brand-800 hover:border-brand-600 hover:bg-brand-50",
        variant === "ghost" && "text-brand-700 hover:bg-brand-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
