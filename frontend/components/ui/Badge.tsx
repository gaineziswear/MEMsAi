import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
}

export function Badge({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    primary: "bg-blue-500/15 text-blue-300 border border-blue-500/30",
    secondary: "bg-slate-500/15 text-slate-300 border border-slate-500/30",
    success: "bg-green-500/15 text-green-300 border border-green-500/30",
    warning: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",
    error: "bg-red-500/15 text-red-300 border border-red-500/30",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs font-medium rounded",
    md: "px-3 py-1.5 text-sm font-medium rounded-md",
    lg: "px-4 py-2 text-base font-medium rounded-lg",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
