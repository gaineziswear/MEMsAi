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
