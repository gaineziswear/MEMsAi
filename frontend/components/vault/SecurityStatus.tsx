"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { Badge } from "@/components/ui/Badge";

interface SecurityStatusProps {
  encryptionLevel: "AES-256" | "AES-192" | "AES-128";
  isEncrypted: boolean;
  lastAudit: Date;
}

export function SecurityStatus({
  encryptionLevel,
  isEncrypted,
  lastAudit,
}: SecurityStatusProps) {
  return (
    <GlassPanel className="flex items-center justify-between">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-slate-100">Security Status</h3>
        <p className="text-xs text-slate-400">
          Last audited {new Date(lastAudit).toLocaleDateString()}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Badge variant={isEncrypted ? "success" : "warning"}>
          {encryptionLevel}
        </Badge>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>
    </GlassPanel>
  );
}
