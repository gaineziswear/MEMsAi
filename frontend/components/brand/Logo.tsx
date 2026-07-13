"use client";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
        <span className="text-white font-bold text-lg">M</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          MEMsAI
        </span>
        <span className="text-xs text-slate-400 font-medium">Enterprise Memory</span>
      </div>
    </div>
  );
}
