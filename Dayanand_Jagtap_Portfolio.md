# Dayanand Jagtap — Technical Portfolio

## Overview
Backend-focused engineer working across distributed systems, cloud infrastructure (Azure), and data platforms. Experience in building scalable services, secure authentication systems, and efficient database workflows.

---

## Core Areas
- Distributed Systems & Resilience (Circuit Breakers, eventual consistency patterns)
- Cloud & Infrastructure (Azure App Services, Networking, WAF, VNet)
- Backend Development (Python, Java Spring Boot, Flask)
- Database Engineering (PostgreSQL, JSONB, ltree, connection pooling)
- DevOps & Containerization (Docker, Docker Compose)
- Security & Code Analysis (Semgrep, CodeQL, GitHub Advanced Security)

---

## Cloud & Infrastructure (Azure)
- Designed and managed Azure infrastructure including:
  - App Services (multi-service architecture: React UI, Spring Boot, Flask)
  - Application Gateway with WAF policies
  - Azure PostgreSQL Flexible Server
  - VNets, Private Endpoints, Private DNS Zones
  - Firewall, Firewall Policies, Route Tables, IP Groups

- Optimized Application Insights usage to reduce telemetry costs.

---

## Authentication & Identity
- Implemented and customized Keycloak (v26):
  - Custom theme (viridium)
  - Certificate integration (DigiCert root CA)
  - Docker-based deployment
  - Azure App Service container deployment

- Solved authentication flows:
  - UI → Keycloak → redirect back to app
  - Managed identity integration with PostgreSQL

---

## Backend Systems
### Python
- Built async workflows using asyncio and httpx
- Designed batch processing pipelines for BOM analysis (Viridium AI)
- Implemented token-based auth flows with Keycloak
- Optimized high-volume HTTP request workflows

### Java (Spring Boot)
- Deployed apps on Azure App Service (Tomcat 10.1, Java 17)
- Integrated agents (contrast-agent) with WAR deployments

### Flask
- Lightweight service integration within multi-service architecture

---

## Database Engineering (PostgreSQL)
- Designed schema strategies:
  - node_taxonomy modeling
  - evaluation_result separation
- Used advanced features:
  - JSONB indexing
  - ltree for hierarchical queries
- Performance & operations:
  - Connection pooling tuning
  - PgBouncer considerations
  - Querying running processes and wait states
  - Memory usage analysis

- Authentication strategies:
  - Managed Identity (DefaultAzureCredential)
  - Local dev via Azure CLI auth
  - Group-based DB access design

---

## System Design & Data Processing
- Designed eventual consistency workflows:
  - Hourly incremental processing
  - Daily full reconciliation to reduce drift
- Implemented evaluation tracking:
  - last_evaluated_at vs updated_at strategies
- Tradeoff handling:
  - Accuracy vs performance in distributed pipelines

---

## DevOps & Containerization
- Docker & Docker Compose usage:
  - Multi-service orchestration
  - Custom Dockerfile builds
- Azure Container Registry integration
- Port mapping and container runtime tuning

---

## Security & Code Quality
- Integrated:
  - Semgrep CLI
  - CodeQL CLI
  - GitHub Advanced Security
- Focus on improving code security posture across services

---

## Frontend Deployment
- React static app deployment:
  - Served via PM2 (due to VNet restrictions)
  - Replaced npx serve to avoid public exposure
- Integrated authentication redirects with backend services

---

## Additional Skills
- Git workflow standardization (branch naming conventions)
- Database migration practices (Alembic usage)
- Observability and logging strategies (App Insights)

---

## Notable Strengths
- Strong system-level thinking (tradeoffs, scaling, resilience)
- Practical cloud experience with production workloads
- Focus on optimization (cost, performance, reliability)

---

## Tools & Technologies
Python, Java, Flask, Spring Boot, PostgreSQL, Docker, Azure, Keycloak, asyncio, httpx, GitHub Actions, Semgrep, CodeQL

