"""
MEMsAI Holder Database Schema
Enterprise-grade holder profile management
"""

from sqlalchemy import (
    Column,
    String,
    Boolean,
    DateTime,
    JSON,
    UUID,
    ForeignKey,
    Enum as SQLEnum,
    create_engine,
)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid
from enum import Enum

Base = declarative_base()


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


class Holder(Base):
    __tablename__ = "holders"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    holder_id = Column(String(50), unique=True, nullable=False)
    profile_type = Column(SQLEnum(HolderProfileType), default=HolderProfileType.PRIMARY_USER)
    status = Column(String(20), default="active")
    
    # Identity information
    preferred_name = Column(String(100))
    default_language = Column(String(10), default="en")
    communication_style = Column(JSON)
    
    # Core traits and preferences
    thinking_style = Column(JSON)
    decision_preferences = Column(JSON)
    
    # Professional information
    professional_background = Column(JSON)
    skills = Column(JSON)
    
    # Technology profile
    technology_interests = Column(JSON)
    active_projects = Column(JSON)
    
    # Development environment
    preferred_tools = Column(JSON)
    frontend_preferences = Column(JSON)
    
    # Knowledge domains
    knowledge_domains = Column(JSON)
    
    # Interaction model
    preferred_ai_role = Column(JSON)
    preferred_workflow = Column(JSON)
    
    # Personal context
    personal_context = Column(JSON)
    
    # Timestamps
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    memories = relationship("Memory", back_populates="holder", cascade="all, delete-orphan")
    permissions = relationship("Permission", back_populates="holder", cascade="all, delete-orphan")
    vault_settings = relationship("VaultSettings", back_populates="holder", uselist=False, cascade="all, delete-orphan")
    
    def __repr__(self):
        return f"<Holder {self.holder_id}>"


class Memory(Base):
    __tablename__ = "memories"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    holder_id = Column(UUID(as_uuid=True), ForeignKey("holders.id"), nullable=False)
    
    title = Column(String(255), nullable=False)
    content = Column(String(4000), nullable=False)
    tags = Column(JSON)
    importance = Column(SQLEnum(MemoryImportance), default=MemoryImportance.MEDIUM)
    category = Column(String(50))
    
    # Vector embedding for semantic search
    embedding_vector = Column(JSON)
    
    # Timestamps
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    holder = relationship("Holder", back_populates="memories")
    
    def __repr__(self):
        return f"<Memory {self.id}>"


class Permission(Base):
    __tablename__ = "permissions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    holder_id = Column(UUID(as_uuid=True), ForeignKey("holders.id"), nullable=False)
    
    granted_to = Column(String(255), nullable=False)
    permission_level = Column(SQLEnum(PermissionLevel), nullable=False)
    description = Column(String(500))
    
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    expires_at = Column(DateTime)
    
    # Relationships
    holder = relationship("Holder", back_populates="permissions")
    
    def __repr__(self):
        return f"<Permission {self.granted_to}>"


class VaultSettings(Base):
    __tablename__ = "vault_settings"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    holder_id = Column(UUID(as_uuid=True), ForeignKey("holders.id"), unique=True, nullable=False)
    
    encryption_level = Column(String(50), default="AES-256")
    is_encrypted = Column(Boolean, default=True)
    default_sharing = Column(String(20), default="private")
    external_ai_access = Column(String(50), default="requires_permission")
    
    last_audit = Column(DateTime, default=datetime.utcnow)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Relationships
    holder = relationship("Holder", back_populates="vault_settings")
    
    def __repr__(self):
        return f"<VaultSettings {self.holder_id}>"
