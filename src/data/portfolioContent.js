export const navLinks = [
    { link: "#home", name: "Home" },
    { link: "#thinking", name: "Thinking" },
    { link: "#systems", name: "Systems" },
    { link: "#contact", name: "Contact" },
];

export const heroMetrics = [
    { value: "Backend first", label: "I start from systems, not screens." },
    { value: "Azure + data", label: "Cloud and databases shaped my execution." },
    { value: "Calm delivery", label: "I prefer durable decisions over noisy output." },
];

export const luminaSteps = [
    "Understand the problem",
    "Analyze the system",
    "Design the tradeoff",
    "Execute with precision",
    "Test until the shape is clear",
];

export const thinkingSignals = [
    "Distributed systems",
    "Cloud architecture",
    "Backend engineering",
    "Database design",
    "Security posture",
    "DevOps discipline",
];

export const operatingPrinciples = [
    {
        title: "Presence over clutter",
        description:
            "The portfolio should feel intentional, not stacked with every line of work I have ever touched.",
    },
    {
        title: "Systems over sections",
        description:
            "I want the site to read like a mind map of decisions, not a generic resume layout.",
    },
    {
        title: "Silence is power",
        description:
            "Spacing, restraint, and layered context matter more than decoration.",
    },
];

export const featuredSystems = [
    {
        title: "Authentication spine",
        domain: "Keycloak, themes, certificates, app redirects",
        problem:
            "Identity had to feel seamless across UI, backend, and deployment boundaries.",
        approach:
            "Custom Keycloak theme, certificate trust integration, Docker-based delivery, and redirect flow tuning between the app and the auth layer.",
        tradeoff:
            "Tighter coupling to the identity stack, but a much more predictable login path and a cleaner operational model.",
        outcome:
            "A stable auth flow that behaved well in local development and Azure App Service environments.",
        tags: ["Keycloak v26", "DigiCert", "Docker", "Azure App Service"],
    },
    {
        title: "Cloud platform topology",
        domain: "Azure App Services, WAF, VNets, private networking",
        problem:
            "Multiple services needed to live behind a secure, observable, and cost-aware cloud boundary.",
        approach:
            "Designed Azure networking with Application Gateway, WAF policies, private endpoints, DNS zones, firewall rules, and App Service deployment boundaries.",
        tradeoff:
            "More infrastructure complexity, but a far stronger security posture and clearer service isolation.",
        outcome:
            "A production-ready Azure footprint with tighter access control and lower telemetry waste.",
        tags: ["Azure", "WAF", "VNet", "Private DNS", "Cost control"],
    },
    {
        title: "Database engine decisions",
        domain: "PostgreSQL, JSONB, ltree, pooling, managed identity",
        problem:
            "The data model needed to support hierarchical queries, auth-aware access, and predictable performance.",
        approach:
            "Used JSONB indexing, ltree hierarchy modeling, connection pooling considerations, and managed identity access patterns.",
        tradeoff:
            "More up-front schema thinking, but less drift and fewer surprises under load.",
        outcome:
            "A schema strategy that was easier to query, easier to operate, and better aligned with scaling.",
        tags: ["PostgreSQL", "JSONB", "ltree", "PgBouncer"],
    },
    {
        title: "Async processing pipeline",
        domain: "asyncio, httpx, batch jobs, reconciliation",
        problem:
            "High-volume workflows needed to stay responsive while still reducing drift over time.",
        approach:
            "Built async workflows for batch processing, combined hourly incremental runs with daily reconciliation, and tracked evaluation state carefully.",
        tradeoff:
            "I accepted eventual consistency where it created a better throughput and resilience profile.",
        outcome:
            "A pipeline that handled volume well without losing the shape of the data over time.",
        tags: ["asyncio", "httpx", "Eventual consistency", "Batching"],
    },
];

export const selectedBuilds = [
    {
        title: "Blogin",
        description:
            "Blog sharing platform built to let people publish and read posts in a focused UI.",
        imageUrl: "/project/blogin-preview.png",
        projectLink: "https://github.com/IDayanandJagtap/blogin-frontend",
        websiteLink: "https://blogin-alpha.vercel.app/",
    },
    {
        title: "PDF Manager",
        description:
            "Node.js and EJS project for handling PDF workflows with a simple operational flow.",
        imageUrl: "/project/pdf-manager-preview.png",
        projectLink: "https://github.com/IDayanandJagtap/Pdf---Manager",
        websiteLink: null,
    },
    {
        title: "Portfolio v2",
        description:
            "The current rebuild of my portfolio with a stronger systems-first voice.",
        imageUrl: "/project/portfolio-preview.png",
        projectLink: "https://github.com/IDayanandJagtap/dayanandjagtap",
        websiteLink: null,
    },
    {
        title: "Todo in TypeScript",
        description:
            "A small TypeScript build that focused on simple flow and clean execution.",
        imageUrl: "/project/todo-preview.png",
        projectLink: "https://github.com/IDayanandJagtap/Todo-In-Typescript",
        websiteLink: "https://todo-in-typescript.vercel.app",
    },
];

export const footerSignal = "To become great that's what we strive for isn't it?";