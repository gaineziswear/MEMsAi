MEMsAI Database Schema Specification

Purpose

This document defines the initial database structure for MEMsAI.

The database is designed around:

* User ownership
* Security
* Permission control
* AI interoperability
* Auditability

⸻

Database Technology

Initial recommendation:

PostgreSQL

Reasons:

* Mature relational database
* Strong security features
* JSON support
* Scalable
* Open-source

⸻

Core Tables

1. Users

Stores account information.

users
id
uuid
email
phone
password_hash
status
created_at
updated_at

⸻

2. Identity Profiles

Stores verified identity information.

identity_profiles
id
user_id
full_name
date_of_birth
country
languages
verification_status
verified_at
created_at
updated_at

⸻

3. Vaults

Each user owns a personal vault.

vaults
id
user_id
vault_name
encryption_status
created_at
updated_at

⸻

4. Memory Items

The central knowledge objects.

memory_items
id
vault_id
category
title
content_encrypted
source_type
verification_level
visibility
created_at
updated_at

⸻

Memory Categories

Examples:

PERSONAL
PROFESSIONAL
PROJECT
AI_CONTEXT
KNOWLEDGE
DOCUMENT
CREDENTIAL

⸻

5. AI Profiles

Specialized views for AI systems.

ai_profiles
id
user_id
profile_name
description
allowed_categories
created_at
updated_at

Example:

Professional AI Profile:

Allows:

✓ Career

✓ Skills

✓ Experience

Does not allow:

✗ Private notes

⸻

6. Permissions

Controls access.

permissions
id
owner_id
requester_id
resource_type
resource_id
permission_level
expires_at
status
created_at

⸻

7. Access Requests

Tracks requests.

access_requests
id
requester
requested_data
purpose
status
created_at
approved_at
expires_at

⸻

8. Audit Logs

Permanent transparency record.

audit_logs
id
user_id
action
actor
resource
timestamp
ip_information

⸻

9. Credentials

Verified records.

credentials
id
user_id
type
issuer
document_hash
verification_status
created_at

⸻

10. AI Sessions

Temporary AI access.

ai_sessions
id
user_id
ai_provider
scope
token_hash
expires_at
created_at

⸻

Relationship Model

USER
 |
 ├── Identity Profile
 |
 ├── Vault
       |
       ├── Memory Items
       |
       ├── Documents
       |
       └── Credentials
 |
 ├── Permissions
 |
 └── AI Profiles

⸻

Security Requirements

Sensitive fields:

* Encrypted before storage
* Never exposed without authorization
* Logged when accessed

⸻

Future Extensions

Possible future tables:

* Organizations
* Employers
* Digital certificates
* Blockchain attestations
* AI agents
* Personal assistants

⸻

Database Principle

The database stores information.

The user controls meaning and access.
