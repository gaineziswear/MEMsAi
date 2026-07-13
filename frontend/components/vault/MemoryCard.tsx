import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { MemoryVault } from "@/types";

interface MemoryCardProps {
  vault: MemoryVault;
}

export function MemoryCard({ vault }: MemoryCardProps) {
  return (
    <Card className="hover:border-blue-300 cursor-pointer transition-all">
      <CardTitle>{vault.name}</CardTitle>
      <CardContent className="mt-3">
        <p className="text-sm text-gray-600">{vault.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Created {new Date(vault.createdAt).toLocaleDateString()}
          </span>
          <span
            className={`text-xs font-medium px-2 py-1 rounded ${
              vault.isPublic
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {vault.isPublic ? "Public" : "Private"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
