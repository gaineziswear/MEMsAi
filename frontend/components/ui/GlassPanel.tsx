import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassPanel({ className, children, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-700/30 bg-slate-900/40 backdrop-blur-md p-6 shadow-xl shadow-slate-950/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
