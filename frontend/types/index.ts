export interface MemoryVault {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
}

export interface MemoryEntry {
  id: string;
  vaultId: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface AIAgent {
  id: string;
  name: string;
  description: string;
  model: string;
  isActive: boolean;
}

export interface SecurityStatus {
  vaultId: string;
  encryptionLevel: "AES-256" | "AES-192" | "AES-128";
  isEncrypted: boolean;
  lastAudit: Date;
}
