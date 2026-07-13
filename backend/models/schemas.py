"""
MEMsAI Pydantic Models for API validation and serialization
"""

from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional, Dict, Any
from datetime import datetime
from enum import Enum
from uuid import UUID


class HolderProfileType(str, Enum):
    PRIMARY_USER = "primary_user"
    TEAM_MEMBER = "team_member"
    EXTERNAL_PARTNER = "external_partner"


class MemoryImportance(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


class PermissionLevel(str, Enum):
    READ = "read"
    WRITE = "write"
    ADMIN = "admin"


# Communication Preferences
class CommunicationPreferences(BaseModel):
    default_language: str = "en"
    secondary_languages: List[str] = []
    response_style: List[str] = []


# Identity Layer
class IdentityLayer(BaseModel):
    preferred_name: str
    communication_preferences: CommunicationPreferences


# Core Traits
class CoreTraits(BaseModel):
    thinking_style: List[str] = []
    decision_preferences: List[str] = []


# Professional Intelligence
class ProfessionalBackground(BaseModel):
    industry_experience: List[str] = []
    skills: List[str] = []


class ProfessionalIntelligence(BaseModel):
    background: ProfessionalBackground


# Technology Profile
class ActiveProject(BaseModel):
    name: str
    purpose: str
    focus: List[str] = []


class TechnologyProfile(BaseModel):
    primary_interests: List[str] = []
    active_projects: List[ActiveProject] = []


# Development Environment
class FrontendPreferences(BaseModel):
    style: List[str] = []


class DevelopmentEnvironment(BaseModel):
    preferred_tools: List[str] = []
    frontend_preferences: FrontendPreferences


# Interaction Model
class InteractionModel(BaseModel):
    preferred_ai_role: List[str] = []
    preferred_workflow: List[str] = []


# Family and Personal Context
class PersonalContext(BaseModel):
    important_relationships: List[str] = []
    privacy_level: str = "high"


# Vault Permissions
class VaultPermissions(BaseModel):
    owner: bool = True
    data_control: str = "full"
    sharing_default: str = "private"
    external_ai_access: str = "requires_permission"


# Memory Model
class MemoryCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    content: str = Field(..., min_length=1, max_length=4000)
    tags: List[str] = []
    importance: MemoryImportance = MemoryImportance.MEDIUM
    category: Optional[str] = None


class MemoryUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    tags: Optional[List[str]] = None
    importance: Optional[MemoryImportance] = None
    category: Optional[str] = None


class MemoryResponse(BaseModel):
    id: UUID
    holder_id: UUID
    title: str
    content: str
    tags: List[str]
    importance: MemoryImportance
    category: Optional[str]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


# Permission Model
class PermissionCreate(BaseModel):
    granted_to: str
    permission_level: PermissionLevel
    description: Optional[str] = None
    expires_at: Optional[datetime] = None


class PermissionResponse(BaseModel):
    id: UUID
    holder_id: UUID
    granted_to: str
    permission_level: PermissionLevel
    description: Optional[str]
    is_active: bool
    created_at: datetime
    expires_at: Optional[datetime]

    class Config:
        from_attributes = True


# Vault Settings
class VaultSettingsResponse(BaseModel):
    id: UUID
    holder_id: UUID
    encryption_level: str
    is_encrypted: bool
    default_sharing: str
    external_ai_access: str
    last_audit: datetime
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


# Holder Model - Create
class HolderCreate(BaseModel):
    holder_id: str
    profile_type: HolderProfileType = HolderProfileType.PRIMARY_USER
    preferred_name: str
    identity: IdentityLayer
    core_traits: CoreTraits
    professional_intelligence: ProfessionalIntelligence
    technology_profile: TechnologyProfile
    development_environment: DevelopmentEnvironment
    knowledge_domains: Dict[str, List[str]] = {}
    interaction_model: InteractionModel
    personal_context: PersonalContext
    vault_permissions: VaultPermissions


# Holder Model - Response
class HolderResponse(BaseModel):
    id: UUID
    holder_id: str
    profile_type: HolderProfileType
    status: str
    preferred_name: str
    identity: Optional[Dict[str, Any]]
    core_traits: Optional[Dict[str, Any]]
    professional_intelligence: Optional[Dict[str, Any]]
    technology_profile: Optional[Dict[str, Any]]
    development_environment: Optional[Dict[str, Any]]
    knowledge_domains: Optional[Dict[str, Any]]
    interaction_model: Optional[Dict[str, Any]]
    personal_context: Optional[Dict[str, Any]]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


# Holder Model - Update
class HolderUpdate(BaseModel):
    preferred_name: Optional[str] = None
    identity: Optional[IdentityLayer] = None
    core_traits: Optional[CoreTraits] = None
    professional_intelligence: Optional[ProfessionalIntelligence] = None
    technology_profile: Optional[TechnologyProfile] = None
    development_environment: Optional[DevelopmentEnvironment] = None
    knowledge_domains: Optional[Dict[str, List[str]]] = None
    interaction_model: Optional[InteractionModel] = None
    personal_context: Optional[PersonalContext] = None


# Full Holder with Relations
class HolderFull(HolderResponse):
    memories: List[MemoryResponse] = []
    permissions: List[PermissionResponse] = []
    vault_settings: Optional[VaultSettingsResponse] = None


# Genesis Note
class GenesisNote(BaseModel):
    purpose: str
    created_for: str
