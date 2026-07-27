// Case studies are written deliberately at the systems level: the shape of the
// problem, the decisions, and the tradeoffs — without any organization-specific
// domain detail or internal implementation names.

export const caseStudies = [
    {
        slug: "multi-tenant-auth-spine",
        title: "A multi-tenant authentication & authorization spine",
        eyebrow: "Identity & access",
        summary:
            "Dual-provider identity with role-based access, scoped per tenant — so a request is authenticated, tenant-bound, and authorized before it ever reaches business logic.",
        tags: ["OAuth 2.0 / JWT", "RBAC", "Multi-tenancy"],
        readTime: "8 min read",
        role: "Backend & systems engineering",
        lead:
            "One backend served many customer organizations. Every request had to be authenticated, mapped to the right tenant, and checked against a role model — consistently — before touching any business logic. The goal was to make that a single, predictable path rather than a scattering of checks.",
        sections: [
            {
                heading: "The problem",
                body: [
                    "A single service handled traffic for many tenants at once, and two different identity providers were in play: an enterprise OAuth/OIDC provider issuing JWT bearer tokens, and a self-hosted identity server. Both had to resolve to the same internal answer — who is this user, in which tenant, with what roles — so that everything downstream could reason about identity in one consistent way.",
                    "The strict requirement underneath all of it was isolation: one tenant's users could never see or act on another tenant's data. That constraint couldn't live in application code where any single forgotten check would leak data across customers — it had to be enforced structurally, in front of the business logic, every time.",
                    "So the real problem wasn't validating a token. It was turning authentication, tenant resolution, and access control into a single path that behaved identically in local development and in the cloud, and that a reviewer could reason about in one place.",
                ],
            },
            {
                heading: "The request lifecycle",
                body: [
                    "A single authorization service sits in front of every protected endpoint. Each incoming request runs through a fixed, ordered sequence, and the ordering itself is a design choice — the cheapest, most decisive checks run first so an unauthorized or malformed request is rejected before any expensive work happens:",
                ],
                list: [
                    "Bypass check first: genuinely public routes, CORS preflight requests, and infrastructure health checks skip authentication entirely. There's no reason to validate a token for a request that was never going to be protected.",
                    "Header validation: origin, accept, and content-type headers are checked to enforce basic security and API hygiene.",
                    "Provider handlers in sequence: the configured identity handlers are tried in a fixed order. The first one that fully authenticates and authorizes the request wins and short-circuits the rest.",
                    "On success, a small user-context object (user id, tenant id, roles) is attached to the request so everything downstream reads identity from one place instead of re-parsing the token.",
                    "On failure of all handlers — or a missing token — the request gets an appropriate 401 / 403 / 404 rather than falling through.",
                ],
            },
            {
                heading: "Token validation & the cost of doing it per request",
                body: [
                    "For the JWT path, validating a token means verifying it was really issued by the trusted provider and hasn't been tampered with. That requires the provider's public signing keys. Fetching those keys over the network on every single request would add a network round-trip to every API call — unacceptable.",
                    "So the signing keys are fetched once and cached for a bounded window, then refreshed. On each request the handler selects the correct key by the token's key-id, and verifies the signature along with the standard claims: expiry, issuer, and audience. A token that fails any of these is rejected before the tenant or role checks even run.",
                    "This is the first place a real tradeoff shows up: caching the keys means accepting a small staleness window in exchange for removing a per-request network hop. For signing keys, which rotate rarely and predictably, that trade is clearly worth it.",
                ],
            },
            {
                heading: "The tenant gate",
                body: [
                    "Before any role logic runs, the tenant claim on the token is checked against the set of tenants that are actually enabled on the platform. That set is also cached to avoid a database read per request. A user with a perfectly valid token whose tenant isn't enabled is stopped right here — fail fast, before spending effort on authorization.",
                    "Putting the tenant gate ahead of the role check is deliberate: tenancy is the coarser, more decisive boundary, so it's cheaper to reject on it first.",
                ],
            },
            {
                heading: "Role-based access control",
                body: [
                    "Authorization is driven by a declarative permission table: each API resource, paired with an HTTP method, maps to the set of roles allowed to use it. At startup that table is loaded into an in-memory cache structured for fast lookups.",
                    "When a request arrives, the handler looks up the allowed roles for the requested resource and intersects them with the roles carried on the user's token. Any overlap grants access; none denies it. Because every rule lives in one declarative place, access policy is reviewable as data rather than scattered across decorators and conditionals in the codebase.",
                    "A deliberate limitation: permissions are applied at the resource level rather than per individual method. That keeps the policy table small and easy to audit, at the cost of finer-grained control — a tradeoff I'd revisit only if a real case demanded per-method divergence.",
                ],
            },
            {
                heading: "Just-in-time onboarding & cross-tenant identity",
                body: [
                    "The system keeps its own record of users and their relationships to tenants, rather than trusting the identity provider to be the whole story. This matters most for guests — people invited from one organization into another.",
                    "On a user's first login to a given tenant, they're onboarded just-in-time: the system finds an existing user record by a stable identifier, falls back to matching by email, and otherwise creates a new one (marking that first tenant as their 'home'). It then links that user to the current tenant with their roles.",
                    "The subtle part is that the same person can legitimately have different identifiers in different tenants' identity systems. To handle that without collisions, each user-to-tenant link stores a per-tenant shadow identifier alongside the roles. The result: one logical person, correctly represented across many tenants, with their access in each tenant tracked independently.",
                ],
            },
            {
                heading: "Home vs guest access scoping",
                body: [
                    "Tenant routing comes down to a single reference point: a designated 'home' tenant. Users belonging to the home tenant are treated as privileged — they can operate across all active tenants (the shape an internal admin needs). Everyone else is restricted to exactly the tenants they've been explicitly mapped to.",
                    "A small piece of defensive design lives here too: a grace path allows a home-tenant user to keep authenticating even if a live tenant lookup momentarily fails, so an infrastructure hiccup can't lock administrators out of their own platform. Access is always ultimately filtered by the user's identity and their stored tenant mappings — that filtering is the core of the multi-tenancy strategy.",
                ],
            },
            {
                heading: "Key decisions & tradeoffs",
                list: [
                    "Fail fast on the cheapest check — an unknown or public route returns before any signature work happens, and the tenant gate runs before role logic.",
                    "Cache signing keys and the enabled-tenant set: accept a bounded staleness window in exchange for removing per-request network and database calls.",
                    "Treat a designated home tenant as privileged and restrict everyone else to explicit mappings — simple to reason about, with a grace path so a transient lookup failure can't lock admins out.",
                    "Store a per-tenant shadow identifier per user-tenant link so the same guest can exist across tenants without identity collisions.",
                    "Keep access rules declarative and reviewable in one place, accepting resource-level (rather than per-method) granularity as the cost of that clarity.",
                ],
            },
            {
                heading: "Outcome",
                body: [
                    "A login and authorization path that behaved identically across local and cloud environments, enforced tenant isolation structurally — before business logic ran — and gave the team a single, auditable place to reason about who can do what. New endpoints inherited the whole model by default rather than each having to re-implement access control.",
                ],
            },
        ],
        stack: [
            "OAuth 2.0 / OIDC",
            "JWT + JWKS",
            "RBAC",
            "PostgreSQL",
            "Self-hosted identity server",
            "Docker",
        ],
    },
    {
        slug: "tenant-aware-config-routing",
        title: "Tenant-aware configuration routing",
        eyebrow: "Multi-tenant isolation",
        summary:
            "The same stateless service handles many customers, yet every config read resolves to the caller's tenant — and secrets stay in the vault, never beside plaintext config.",
        tags: ["Multi-tenancy", "Secret management", "Context routing"],
        readTime: "7 min read",
        role: "Backend & systems engineering",
        lead:
            "In a shared-compute model, one stateless service instance handles requests for many customers. Each customer's secrets, connection strings, and settings still have to stay completely isolated — and the business code shouldn't have to know any of that is happening.",
        sections: [
            {
                heading: "The problem",
                body: [
                    "Stateless app instances are shared across tenants, but every configuration read — a database connection string, an API key, a feature flag — must resolve to the calling tenant's value. Get that wrong once and a request for one customer could read another customer's settings, or worse, another customer's data.",
                    "There was a second, quieter constraint: secrets can never sit in plaintext next to non-secret configuration. A tenant's full config had to be describable and inspectable in one place, while the actual secret values stayed locked in a vault.",
                    "The naive approach — sprinkle tenant lookups and secret fetches through every service that needs a setting — spreads the isolation logic across the whole codebase, where any single mistake is a data-isolation bug. The design goal was to make that impossible by construction.",
                ],
            },
            {
                heading: "A single entry point over three layers",
                body: [
                    "Every part of the application that needs a setting calls one configuration entry point. Behind that entry point sit three layers, each with a single responsibility:",
                ],
                list: [
                    "The app-facing resolver is what code actually calls. Its only job is to detect the tenant context and route the request down to the right layer.",
                    "The per-tenant manager fetches and resolves configuration for one specific tenant, including pulling secrets from the vault when needed.",
                    "The system layer provides global, non-tenant-specific settings — the fallback for anything common across all tenants.",
                    "Because there is exactly one entry point, tenant detection and routing live in one place instead of being duplicated (and eventually diverging) across services.",
                ],
            },
            {
                heading: "Detecting the tenant context",
                body: [
                    "The resolver figures out which tenant a config read belongs to by inspecting the execution context in a specific order:",
                    "For a synchronous web request, the tenant comes from the authenticated request context — the same user-context object the authorization layer populated after validating the token. For an asynchronous background job, there's no request in scope, so the tenant is read from an explicit async-local context that the job must set when it starts. If neither exists — or the requested key is a known global setting — the read falls back to the system layer.",
                    "That 'the job must set its own context' rule is a small, enforced discipline. It's the difference between a background worker confidently reading the right tenant's data and one silently reading whatever happened to be lying around.",
                ],
            },
            {
                heading: "Per-tenant resolution & lazy secret handling",
                body: [
                    "When a read is tenant-scoped, the per-tenant manager treats the tenant's stored configuration record as the source of truth. That record holds a structured map of all the tenant's non-secret keys and values — effectively a per-tenant environment file. The whole object is cached on first read so subsequent lookups don't hit the database again.",
                    "The values themselves come in two shapes. A plain value is returned directly. A value formatted as a vault reference is recognized as such, and only then does the manager connect to the secret vault to resolve the real secret. This is the key idea: the database holds the complete map of what a tenant's configuration is, while the secrets stay in the vault and are fetched lazily, only when a caller actually reads that specific key.",
                ],
            },
            {
                heading: "Two reads, walked end-to-end",
                body: [
                    "It helps to trace two concrete paths.",
                    "A web request needs a tenant's database connection string, which is a secret. The authorization layer has already set the tenant context. A repository asks the entry point for the connection-string key. The resolver sees a tenant context and delegates to the per-tenant manager, which loads (or reuses the cached) config map, finds that the key's value is a vault reference, resolves the actual secret from that tenant's vault, and returns it. The repository never knew any of that happened.",
                    "A background job processes data for a different tenant. Because there's no web request, the worker explicitly sets its tenant context as its first step. From then on, every config read inside that job routes to the correct tenant automatically — the same resolution logic, driven by a different context source.",
                ],
            },
            {
                heading: "Key decisions & tradeoffs",
                list: [
                    "One choke-point for all config reads → tenant routing and secret handling live in exactly one place instead of being smeared across services where a single omission becomes an isolation bug.",
                    "Cache the tenant config object, resolve secrets on demand → far fewer database and vault round-trips, with cache invalidation as the price to manage.",
                    "Keep the full non-secret config map in the database and only vault references in it → a tenant's configuration is inspectable as one object, while secret values never leave the vault.",
                    "Require every async job to set its tenant context explicitly → a small enforced discipline that structurally prevents a background job from reading the wrong tenant's data.",
                ],
            },
            {
                heading: "Outcome",
                body: [
                    "Business code reads configuration without knowing anything about tenancy; isolation and secret handling are enforced underneath it. The same mechanism backed both a shared-compute deployment (many tenants per instance) and a fully isolated one-tenant-per-deployment model, with no change to the calling code — the routing simply resolved to a single tenant in the isolated case.",
                ],
            },
        ],
        stack: [
            "Python",
            "Async context (contextvars)",
            "Secret vault",
            "In-memory caching",
            "PostgreSQL",
        ],
    },
    {
        slug: "idempotent-ai-batch-pipeline",
        title: "An idempotent, cost-aware batch pipeline",
        eyebrow: "Data & AI pipeline",
        summary:
            "A continuously re-run batch pipeline over a very large dataset, engineered to lean on an expensive AI service without ever paying for the same answer twice — and to be completely safe to re-run.",
        tags: ["Async pipelines", "Idempotency", "Cost control"],
        readTime: "5 min read",
        role: "Backend & systems engineering",
        lead:
            "A batch pipeline that processed a very large dataset on a continuous basis. The interesting engineering wasn't the domain rules it applied — it was making a pipeline that depends on an expensive, rate-limited external service both cheap to run repeatedly and completely safe to re-execute.",
        sections: [
            {
                heading: "The engineering problem",
                body: [
                    "The pipeline processed a very large, frequently-changing dataset and re-ran constantly — on a schedule, on data imports, and on manual edits. Most units of work could be resolved cheaply from data that already existed; a small fraction required a slow, rate-limited external call to an AI service, which was by far the most expensive part of the system.",
                    "Two requirements dominated the design. The expensive call must never be paid for twice for the same unit of work. And re-running the whole pipeline had to be safe and near-free when nothing had actually changed. Everything else followed from taking those two constraints seriously.",
                ],
            },
            {
                heading: "Separating I/O from decision logic",
                body: [
                    "I structured the system so that all database access happened in one orchestrating layer, in bulk, once per batch, while the components that actually made decisions were kept stateless and free of I/O — they received a pre-built context and returned plain values.",
                    "That separation paid off twice. It amortized database work across the whole batch instead of letting each item trigger its own scatter of queries, and — just as importantly — it made the decision logic unit-testable in isolation, with no database in the loop. The subtle logic lived in pure functions, which is exactly where you want it when correctness matters.",
                ],
            },
            {
                heading: "Spending the expensive path only when it's earned",
                body: [
                    "The expensive external call was treated as a genuine last resort. Anything answerable from existing data was answered that way first; the AI service was invoked only for the specific gaps that nothing cheaper could fill.",
                    "And once it produced an answer, that answer was persisted so the next run would find it already resolved. That single decision bounded the cost of the expensive path to at most once per unit of work, rather than once per run — the difference between a pipeline that's affordable to run continuously and one that isn't.",
                ],
            },
            {
                heading: "Idempotency under constant re-runs",
                body: [
                    "Because re-execution was constant, 'run it again' had to be safe by construction rather than by careful hand-checking. Each generation of results was stamped, writes were made write-once at the storage layer, and already-current work was skipped — so re-running over unchanged input simply did nothing, deterministically, with no duplicated rows and no corrupted state.",
                    "Reads were served from a view that exposed only the current state, while full history was retained underneath for auditing and debugging. Consumers saw a clean present-tense picture; nothing was lost.",
                ],
            },
            {
                heading: "Principles I took from it",
                list: [
                    "Keep slow or expensive external calls off the hot path, and cache their results so each unit of work pays for them at most once — not once per run.",
                    "Separate I/O from decision logic: batch the I/O, keep the logic pure, and it stays both fast and testable.",
                    "Make repeatable jobs idempotent by construction — stamped generations plus write-once storage — so re-execution is inherently safe rather than defended by checks.",
                    "Prefer an honest 'unknown' over a plausible-but-unverified answer when the cheap paths can't decide.",
                ],
            },
            {
                heading: "Outcome",
                body: [
                    "A pipeline that absorbed continuous re-processing without duplicating expensive work or drifting out of date — cheap and safe to re-run, and disciplined about when it was allowed to spend the expensive path. It's the piece of work I most often reach back to for how I think about cost, idempotency, and testable design.",
                ],
            },
        ],
        stack: [
            "Python",
            "asyncio",
            "PostgreSQL",
            "LLM integration",
            "Idempotent batch processing",
        ],
    },
    {
        slug: "incremental-workflow-orchestration",
        title: "A workflow that only re-does what actually changed",
        eyebrow: "Async orchestration",
        summary:
            "Recomputing a large derived dataset on every change is wasteful; never recomputing lets it drift. The orchestration layer decides what needs to run, in what order, and skips everything else.",
        tags: ["Async pipelines", "Schedulers", "Eventual consistency"],
        readTime: "6 min read",
        role: "Backend & systems engineering",
        lead:
            "Recomputing a whole dataset on every change would be enormously wasteful; never recomputing would let it silently drift out of date. This orchestration layer sits between the triggers and an expensive processing step, and its entire purpose is to decide what genuinely needs to run — and to make sure it runs in the right order.",
        sections: [
            {
                heading: "The problem",
                body: [
                    "Processing could be kicked off three different ways — a scheduled sweep, a data import, and a manual API call — and any of them could touch thousands of items. Left naive, each trigger would recompute everything, burning compute and (worse) re-running an expensive downstream step that nothing had changed to justify.",
                    "At the same time, correctness depended on ordering: some items were derived from others, so a derived item must never be computed before the items it depends on are themselves current. The layer had to reconcile three tensions at once — fan work out for throughput, order it for correctness, and skip whatever hadn't actually changed.",
                ],
            },
            {
                heading: "Triggers converge on one entry point",
                body: [
                    "Rather than let each trigger drive its own bespoke flow, all three funnel through a single service that enqueues one workflow message. A scheduled run sweeps everything; an import or a manual call scopes the run to a specific subset and flags that it should only touch those items, not the whole dataset.",
                    "Collapsing every trigger onto one entry point means there's a single place where a run begins, a single place a new generation is stamped, and no divergent copies of the orchestration logic to keep in sync.",
                ],
            },
            {
                heading: "The scheduler & distributed safety",
                body: [
                    "The scheduled sweep runs on an interval, but in a multi-instance deployment several instances could each try to fire it at once. To prevent that, the scheduler is guarded by a distributed lock (a lease that only one instance can hold), so exactly one sweep starts across the whole fleet.",
                    "There are two flavors of sweep. A periodic incremental run honors all the skip logic and does as little as possible. A periodic deep run deliberately bypasses skipping to force a full recomputation — a safety net that reconciles the whole dataset from scratch on a regular cadence, catching anything an incremental run's heuristics might have skipped.",
                ],
            },
            {
                heading: "Fan-out & dependency ordering",
                body: [
                    "Once a run starts, a worker fans the work out into one message per item onto a queue, and a pool of workers processes them concurrently. One message per item buys natural parallelism and per-item retry isolation — a single failing item retries on its own without dragging the batch down — at the cost of higher queue volume, which is a fair trade.",
                    "The ordering guarantee comes from gating the work in dependency order: an item is only released for processing once everything it depends on has been processed and persisted. Workers self-gate on those dependencies, so the ordering, not luck, is what keeps derived results consistent with their inputs.",
                ],
            },
            {
                heading: "Two levels of skipping",
                body: [
                    "Efficiency comes from skipping, applied at two levels. At the scheduler level, a new run won't even start if one is already in flight, or if nothing has changed since the last run began — measured by comparing when the underlying data last changed against when the last run started.",
                    "At the item level, even inside a run that did start, an individual item is skipped if its last-processed generation already matches the current one — it's already up to date. Some items get an additional shallow freshness check that can skip recomputation when neither the item nor the inputs it depends on have changed. The deep run's force flag overrides all of this when a full reconcile is genuinely wanted.",
                ],
            },
            {
                heading: "Key decisions & tradeoffs",
                list: [
                    "A distributed lock on the scheduler → exactly one sweep runs at a time across all instances, at the cost of depending on a lease mechanism.",
                    "One message per item → natural parallelism and per-item retry isolation, at the cost of queue volume.",
                    "Dependency-ordered gating → derived results are correct by construction because their inputs are always processed and persisted first.",
                    "Two-level skip guards plus a periodic forced deep run → most runs do almost nothing (the point), while a regular full reconcile guarantees nothing drifts permanently.",
                    "Eventual consistency accepted where it buys throughput and resilience, rather than forcing everything to be synchronous.",
                ],
            },
            {
                heading: "Outcome",
                body: [
                    "An orchestration layer that keeps a large, constantly-changing dataset current without re-doing settled work: cheap when little changed, thorough on its deep sweep, safe under concurrent triggers, and correct about the order in which things run. The expensive step underneath it only ever ran on the items that actually needed it.",
                ],
            },
        ],
        stack: [
            "Python",
            "asyncio",
            "Message queue",
            "Distributed scheduling",
            "Idempotent workflows",
        ],
    },
];

export const getCaseStudy = (slug) =>
    caseStudies.find((caseStudy) => caseStudy.slug === slug);
