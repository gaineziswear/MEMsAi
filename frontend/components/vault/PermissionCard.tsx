"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { Badge } from "@/components/ui/Badge";

interface PermissionCardProps {
  permission: {
    id: string;
    name: string;
    description: string;
    level: "read" | "write" | "admin";
    grantedTo: string;
  };
}

export function PermissionCard({ permission }: PermissionCardProps) {
  const levelColors = {
    read: "secondary",
    write: "primary",
    admin: "warning",
  } as const;

  return (
    <GlassPanel className="space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-semibold text-slate-100">{permission.name}</h4>
          <p className="text-sm text-slate-400 mt-1">{permission.description}</p>
        </div>
        <Badge variant={levelColors[permission.level]}>
          {permission.level.charAt(0).toUpperCase() + permission.level.slice(1)}
        </Badge>
      </div>
      <p className="text-xs text-slate-400">Granted to: {permission.grantedTo}</p>
    </GlassPanel>
  );
}
