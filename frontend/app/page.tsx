"use client";

import { Section } from "@/components/ui/Section";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Logo } from "@/components/brand/Logo";

export default function Home() {
  return (
    <main className="space-y-16">
      {/* Header */}
      <div className="text-center space-y-4 pt-8">
        <Logo />
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mt-6">
          Personal Intelligence Vault
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Own your AI memory. Control your context. Build your intelligence.
        </p>
      </div>

      {/* Features Section */}
      <Section 
        heading="Enterprise Features"
        subheading="Built for serious intelligence work"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <GlassPanel>
            <h3 className="text-lg font-semibold text-blue-400">Secure Vault</h3>
            <p className="text-slate-400 mt-2">AES-256 encrypted personal memory storage</p>
          </GlassPanel>
          <GlassPanel>
            <h3 className="text-lg font-semibold text-purple-400">AI Integration</h3>
            <p className="text-slate-400 mt-2">Semantic search and intelligent retrieval</p>
          </GlassPanel>
          <GlassPanel>
            <h3 className="text-lg font-semibold text-green-400">Full Control</h3>
            <p className="text-slate-400 mt-2">Granular permissions and data ownership</p>
          </GlassPanel>
        </div>
      </Section>

      {/* Status */}
      <GlassPanel className="text-center py-8">
        <p className="text-slate-300">🚀 MEMsAI v0.1.0 - Foundation Phase</p>
        <p className="text-slate-500 text-sm mt-2">Building the future of personal AI memory</p>
      </GlassPanel>
    </main>
  );
}