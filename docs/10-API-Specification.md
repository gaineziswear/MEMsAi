MEMsAI API Specification

Purpose

Define communication between:

* Frontend
* Backend
* AI systems
* External services

⸻

API Style

Recommended:

REST API initially

Future:

GraphQL support

⸻

Authentication

All requests require:

* Authentication token
* User authorization
* Permission verification

⸻

User API

Create Account

POST /api/users/register

Creates a new user.

⸻

Login

POST /api/users/login

Returns secure session.

⸻

Profile

GET /api/users/profile

Returns user profile.

⸻

Vault API

Create Vault

POST /api/vault/create

⸻

Add Memory

POST /api/vault/memory

Example:

{
category:
"AI_CONTEXT",
title:
"Response Preferences",
content:
"Detailed structured answers"
}

⸻

Retrieve Memory

GET /api/vault/memory/{id}

Requires permission.

⸻

Permission API

Request Access

POST /api/access/request

⸻

Approve Access

POST /api/access/approve

⸻

Revoke Access

POST /api/access/revoke

⸻

AI Gateway API

Request AI Session

POST /api/ai/session

Creates temporary access.

⸻

Get AI Context

GET /api/ai/context

Returns authorized information.

⸻

Third Party API

Example:

Employer request:

POST /api/company/request-profile

User receives notification.

⸻

Security Rules

Every API request must:

1. Authenticate user.
2. Validate permissions.
3. Log activity.
4. Return minimum required data.

⸻

Future API

Developer SDK:

MEMsAI.connect()
MEMsAI.authorize()
MEMsAI.context()

⸻

API Principle

Access is granted, never assumed.
