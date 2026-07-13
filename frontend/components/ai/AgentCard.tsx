"use client";

import { GlassPanel } from "@/components/ui/GlassPanel";
import { Badge } from "@/components/ui/Badge";

interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    description: string;
    model: string;
    isActive: boolean;
  };
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <GlassPanel className="space-y-4 hover:border-blue-500/50 transition-all">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-slate-100">{agent.name}</h3>
          <p className="text-sm text-slate-400 mt-1">{agent.description}</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-500" />
      </div>
      <div className="flex items-center justify-between">
        <Badge variant="secondary" size="sm">
          {agent.model}
        </Badge>
        <span className={`text-xs font-medium ${agent.isActive ? "text-green-400" : "text-slate-500"}`}>
          {agent.isActive ? "Active" : "Inactive"}
        </span>
      </div>
    </GlassPanel>
  );
}
