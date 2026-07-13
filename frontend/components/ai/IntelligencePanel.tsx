"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";

export function IntelligencePanel({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <GlassPanel className="space-y-4">
      {title && <h3 className="text-lg font-semibold text-slate-100">{title}</h3>}
      <div className="space-y-3">{children}</div>
    </GlassPanel>
  );
}
