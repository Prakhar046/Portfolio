import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Braces,
  Building2,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Database,
  DoorOpen,
  Download,
  Gauge,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  Workflow,
  X,
} from "lucide-react";

const EMAIL = "prakhar9522@gmail.com";
const PHONE = "+91 9522909496";
const LINKEDIN = "https://www.linkedin.com/in/prakhar-gupta-3023a5230";
const RESUME_PATH = "/Prakhar_Gupta_Resume.pdf";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const HERO_STATS = [
  { value: "2.3+", label: "Years experience" },
  { value: "50+", label: "Clients served" },
  { value: "40%", label: "Faster processing" },
  { value: "500+", label: "Users supported" },
];

const EXPERIENCES = [
  {
    role: "Python Developer",
    company: "ISPARK DATACONNECT PVT. LTD.",
    location: "Noida, India",
    period: "Oct 2025 – Present",
    current: true,
    highlights: [
      "Developed an Enterprise Agent Panel supporting 50+ clients with incoming/outgoing call tracking and dynamic client-specific custom tag fields.",
      "Built an AI-driven Call Audit System that converts call recordings to transcripts and executes automated quality audits using OpenRouter and local LLM APIs.",
      "Engineered a scalable multi-tenant CRM Dashboard & Reporting System, optimizing backend APIs and SQL queries to reduce processing time by 40%.",
    ],
    tags: ["Python", "FastAPI", "MySQL", "OpenRouter", "AI/LLM"],
  },
  {
    role: "Backend Developer Intern",
    company: "SheltrX",
    location: "Remote",
    period: "June 2025 – Oct 2025",
    highlights: [
      "Implemented core backend services using FastAPI, Celery, and MySQL, reducing API latency by 30%.",
      "Built web and mobile APIs for a live product currently active on the Google Play Store and actively used by tenants and property managers.",
      "Integrated payment gateways, hardware entry/exit gate devices, SMS OTP authentication, notification pipelines, and real-time community chat APIs.",
      "Documented production-ready APIs via Swagger and Postman, cutting integration errors by 40%.",
    ],
    tags: ["FastAPI", "Celery", "MySQL", "WebSockets", "Swagger"],
  },
  {
    role: "Software Developer Intern",
    company: "Polysia Tech Pvt. Ltd.",
    location: "Noida, India",
    period: "Sept 2024 – Mar 2025",
    highlights: [
      "Led backend development for ThreatMap using Django REST Framework, MongoDB, Celery, and Docker.",
      "Improved API efficiency by 35% through service-level and query-level optimization.",
    ],
    tags: ["Django REST Framework", "MongoDB", "Celery", "Docker"],
  },
  {
    role: "Backend Developer Intern",
    company: "BYTO",
    location: "Remote",
    period: "May 2024 – July 2024",
    highlights: [
      "Implemented OTP-based authentication and booking APIs using Django and DRF.",
      "Supported 500+ users with reliable authentication and booking workflows.",
    ],
    tags: ["Django", "Django REST Framework", "Python"],
  },
];

const PROJECTS = [
  {
    number: "01",
    title: "Dynamic Agent Call Tracking Panel",
    subtitle: "Call tagging · Dynamic schemas · Agent tracking",
    status: "Enterprise platform",
    live: false,
    stack: ["FastAPI", "React", "MySQL"],
    highlights: [
      "Dedicated platform built for 50+ enterprise clients to manage incoming and outgoing call tagging.",
      "Fully customized schemas and dynamic fields configured independently per client.",
      "Agent-level call activity tracking with low-latency access to client-specific call data.",
    ],
    cta: "Request a walkthrough",
    subject: "Agent Call Tracking Panel walkthrough",
    Visual: AgentPanelVisual,
  },
  {
    number: "02",
    title: "AI-Powered Call Audit & Quality Assurance System",
    subtitle: "Transcription · LLM audits · Compliance",
    status: "AI-powered",
    live: false,
    stack: ["FastAPI", "OpenRouter", "Local LLM APIs", "MySQL"],
    highlights: [
      "Automated backend system that processes call recordings into transcripts.",
      "Runs AI-based compliance and quality auditing workflows using OpenRouter and local LLM APIs.",
      "Turns audit results into structured quality data for faster team reviews.",
    ],
    cta: "Request a walkthrough",
    subject: "AI Call Audit System walkthrough",
    Visual: AuditVisual,
  },
  {
    number: "03",
    title: "Enterprise CRM Dashboard & Reporting System",
    subtitle: "Multi-tenant CRM · Reporting · RBAC",
    status: "Enterprise platform",
    live: false,
    stack: ["FastAPI", "React", "MySQL"],
    highlights: [
      "Multi-tenant platform serving 50+ clients with dynamic reporting pipelines.",
      "Role-based access control (RBAC) across isolated client workspaces.",
      "Optimized APIs and SQL queries reduced report processing latency by 40%.",
    ],
    cta: "Request a walkthrough",
    subject: "CRM Dashboard walkthrough",
    Visual: CrmVisual,
  },
  {
    number: "04",
    title: "SheltrX Hostel & PG Management System",
    subtitle: "Play Store app · RBAC · Billing · Live chat",
    status: "Live on Play Store",
    live: true,
    stack: ["FastAPI", "MySQL", "Celery", "Redis", "APScheduler", "WebSockets"],
    highlights: [
      "Active production platform serving real tenants and property admins, available on the Google Play Store.",
      "Multi-role RBAC with payment gateway integration and hardware device integration for entry/exit tracking.",
      "SMS OTP login, automated rent billing schedules, notification pipelines, and real-time community chat.",
    ],
    cta: "Request a demo",
    subject: "SheltrX demo request",
    Visual: SheltrxVisual,
  },
  {
    number: "05",
    title: "ThreatMap",
    subtitle: "Threat intelligence · Async workers · Docker",
    status: "Threat intelligence",
    live: false,
    stack: ["Django REST Framework", "MongoDB", "Celery", "Docker"],
    highlights: [
      "Threat intelligence platform built on an optimized Django REST Framework backend.",
      "Asynchronous task handling via Celery workers and containerized deployment with Docker.",
      "Improved API efficiency by 35% through service and query-level optimization.",
    ],
    cta: "Request a walkthrough",
    subject: "ThreatMap walkthrough",
    Visual: ThreatMapVisual,
  },
];

const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: Braces,
    span: "lg:col-span-2",
    items: ["Python"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    span: "lg:col-span-2",
    items: ["FastAPI", "Django", "Django REST Framework", "React (Basic)"],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    span: "lg:col-span-2",
    items: ["MySQL", "MongoDB", "Redis"],
  },
  {
    title: "AI & Integrations",
    icon: Sparkles,
    span: "lg:col-span-2",
    items: [
      "OpenRouter",
      "LLM/Local APIs",
      "WebSockets",
      "Payment Gateways",
      "SMS APIs",
      "Telephony Data",
    ],
  },
  {
    title: "Tools & Utilities",
    icon: Server,
    span: "lg:col-span-2",
    items: ["Docker", "Celery", "APScheduler", "Linux", "Postman/Swagger"],
  },
  {
    title: "Core Concepts",
    icon: Workflow,
    span: "lg:col-span-2",
    items: [
      "REST API Design",
      "Database Optimization",
      "Distributed Systems",
      "Task Scheduling",
      "Multi-Tenancy Architecture",
    ],
  },
];

const FOCUS_AREAS = [
  {
    title: "Multi-tenant architectures",
    description: "Tenant-aware data models, RBAC, and dynamic client-specific fields.",
    icon: Layers,
  },
  {
    title: "AI-powered automation",
    description: "LLM-driven transcription, audio auditing, and automated quality checks.",
    icon: Sparkles,
  },
  {
    title: "High-performance APIs",
    description: "FastAPI and Django REST APIs built for low-latency reporting.",
    icon: Code2,
  },
  {
    title: "Database optimization",
    description: "Query tuning and schema design that cut processing time by 40%.",
    icon: Database,
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
        <Sparkles className="h-3 w-3" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
      ) : null}
    </div>
  );
}

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-ink-950" />
      <div className="bg-grid mask-fade-top absolute inset-0 opacity-40" />
      <div className="absolute -top-48 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/[0.08] blur-[130px]" />
      <div className="absolute right-[-12%] top-[32%] h-[440px] w-[440px] rounded-full bg-cyan-500/[0.05] blur-[130px]" />
      <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full bg-teal-500/[0.04] blur-[130px]" />
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = (event) => {
      if (event.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const solid = scrolled || open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-white/5 bg-ink-950/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-300 to-teal-500 font-display text-sm font-bold text-ink-950 shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
              PG
            </span>
            <span className="hidden sm:block">
              <span className="block font-display text-sm font-semibold text-white">
                Prakhar Gupta
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Python Developer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "bg-white/[0.06] text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.id ? (
                  <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                ) : null}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-emerald-300 sm:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition-colors hover:border-white/20 hover:text-white lg:hidden"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
                className={`group flex items-center justify-between border-b border-white/5 py-4 font-display text-2xl font-semibold transition-all duration-300 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                } ${active === link.id ? "text-emerald-300" : "text-slate-200"}`}
              >
                {link.label}
                <ArrowUpRight className="h-5 w-5 text-slate-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-10">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300"
            >
              <Mail className="h-4 w-4 text-emerald-300" />
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300"
            >
              <Linkedin className="h-4 w-4 text-emerald-300" />
              Connect on LinkedIn
            </a>
            <a
              href={RESUME_PATH}
              download="Prakhar_Gupta_Resume.pdf"
              className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-4 py-3.5 text-sm font-semibold text-ink-950"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function TerminalCard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-transparent blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b14]/90 shadow-2xl shadow-black/60 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <Terminal className="h-3.5 w-3.5" />
            audit.py
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            live
          </span>
        </div>

        <div className="no-scrollbar overflow-x-auto p-5 font-mono text-[11px] leading-6 sm:text-xs">
          <pre className="text-slate-300">
            <code>
              <span className="text-slate-600"># app/services/audit.py</span>
              {"\n"}
              <span className="text-fuchsia-400">from</span> fastapi{" "}
              <span className="text-fuchsia-400">import</span> APIRouter{"\n"}
              <span className="text-fuchsia-400">from</span> app.services{" "}
              <span className="text-fuchsia-400">import</span> CallAuditService
              {"\n"}
              {"\n"}
              router = APIRouter(prefix=
              <span className="text-amber-300">&quot;/audit&quot;</span>)
              {"\n"}
              {"\n"}
              <span className="text-sky-400">@router.post</span>(
              <span className="text-amber-300">
                &quot;/&#123;call_id&#125;&quot;
              </span>
              ){"\n"}
              <span className="text-fuchsia-400">async def</span>{" "}
              <span className="text-cyan-300">audit_call</span>(call_id:{" "}
              <span className="text-teal-300">str</span>):{"\n"}
              {"    "}
              <span className="text-slate-500">
                &quot;&quot;&quot;Transcribe and audit a call.&quot;&quot;&quot;
              </span>
              {"\n"}
              {"    "}
              <span className="text-fuchsia-400">return</span>{" "}
              <span className="text-fuchsia-400">await</span> CallAuditService.run(
              {"\n"}
              {"        "}call_id=call_id, model=
              <span className="text-amber-300">&quot;openrouter/auto&quot;</span>
              {"\n"}
              {"    "}){"\n"}
              {"\n"}
              <span className="text-slate-600"># 200 OK · 24ms · 50+ tenants</span>
              <span className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-emerald-400/80" />
            </code>
          </pre>
        </div>

        <div className="flex flex-wrap items-center gap-2 border-t border-white/5 bg-white/[0.02] px-4 py-3">
          {["Python 3.12", "FastAPI", "OpenRouter", "MySQL"].map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/5 bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-slate-400"
            >
              {item}
            </span>
          ))}
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            200 OK · 24ms
          </span>
        </div>
      </div>

      <div className="absolute -left-4 top-28 hidden animate-float items-center gap-3 rounded-xl border border-white/10 bg-ink-900/90 p-3 shadow-xl shadow-black/40 backdrop-blur sm:flex lg:-left-8">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-400/10 text-emerald-300">
          <Activity className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">40% faster</p>
          <p className="text-[11px] text-slate-500">call processing</p>
        </div>
      </div>

      <div
        className="absolute -bottom-5 -right-3 hidden animate-float-slow items-center gap-3 rounded-xl border border-white/10 bg-ink-900/90 p-3 shadow-xl shadow-black/40 backdrop-blur sm:flex lg:-right-6"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
          <Users className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">50+ clients</p>
          <p className="text-[11px] text-slate-500">on one platform</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden pb-16 pt-32 sm:pt-36 lg:pb-24 lg:pt-40"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for backend opportunities
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Prakhar <span className="text-gradient">Gupta</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg font-medium text-slate-200 sm:text-xl">
              <span>Python Developer</span>
              <span className="h-1 w-1 rounded-full bg-emerald-400/70" />
              <span className="text-slate-400">
                FastAPI · Django · MySQL
              </span>
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Crafting multi-tenant backend architectures, AI-driven automation
              systems, and high-performance REST APIs that turn complex business
              requirements into reliable products.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-6 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-emerald-500/20 transition duration-300 hover:shadow-emerald-400/30 hover:brightness-110"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={RESUME_PATH}
                download="Prakhar_Gupta_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <Download className="h-4 w-4 text-emerald-300 transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 rounded-full px-3 py-3 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
              >
                Contact Me
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-white/5 pt-8 sm:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-semibold text-white">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={180}>
            <TerminalCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="About me"
            title="Backend engineering with product sense."
            description="I build the systems behind the product — multi-tenant platforms, AI-powered automation, and APIs that stay fast as data grows."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="space-y-5">
                <p className="text-lg leading-relaxed text-slate-300">
                  I&apos;m a{" "}
                  <span className="font-semibold text-white">
                    Python Developer
                  </span>{" "}
                  with over <span className="text-white">2.3 years</span> of
                  experience specializing in{" "}
                  <span className="text-emerald-300">
                    FastAPI, Django, MySQL, PostgreSQL, and database optimization
                  </span>
                  .
                </p>
                <p className="leading-relaxed text-slate-400">
                  Skilled in engineering multi-tenant platforms, AI/LLM audio
                  transcription &amp; auditing pipelines, dynamic telephony agent
                  tracking panels, and asynchronous task scheduling — with a
                  focus on reliable APIs, clean data models, and infrastructure
                  that stays fast as products grow.
                </p>
              </div>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {FOCUS_AREAS.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Reveal key={area.title} delay={index * 80}>
                    <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-emerald-400/25 hover:bg-white/[0.04]">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-emerald-400/[0.15] bg-emerald-400/10 text-emerald-300 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 font-display text-sm font-semibold text-white">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">
                        {area.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
                <div className="relative overflow-hidden border-b border-white/5 p-6">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-400/10 blur-2xl"
                  />
                  <div className="relative flex items-center gap-4">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-300 to-teal-500 font-display text-xl font-bold text-ink-950 shadow-lg shadow-emerald-500/20">
                      PG
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold text-white">
                        Prakhar Gupta
                      </p>
                      <p className="mt-0.5 text-sm text-slate-400">
                        Python &amp; Backend Developer
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        Open to opportunities
                      </span>
                    </div>
                  </div>
                </div>

                <dl className="space-y-4 p-6">
                  {[
                    ["Experience", "2.3+ years"],
                    ["Current role", "Python Developer · ISPARK"],
                    ["Location", "Satna, MP · India"],
                    ["Focus", "Multi-tenant & AI systems"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-start justify-between gap-6"
                    >
                      <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        {label}
                      </dt>
                      <dd className="text-right text-sm font-medium text-slate-200">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-4 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-emerald-400/[0.15] bg-emerald-400/10 text-emerald-300">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Education
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    B.Tech in Computer Science
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    AKS University, Satna
                    <span className="mx-1.5 text-slate-600">·</span>
                    Aug 2018 – Jul 2022
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Shipping backend systems in production."
            description="A track record spanning AI-powered call auditing, a Play Store-live hostel platform, multi-tenant CRM systems, and asynchronous task processing for real clients and users."
          />
        </Reveal>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[10px] top-2 w-px bg-gradient-to-b from-emerald-400/60 via-white/10 to-transparent"
          />

          <div className="space-y-6">
            {EXPERIENCES.map((job, index) => (
              <Reveal key={`${job.company}-${job.period}`} delay={index * 60}>
                <div className="relative pl-9 sm:pl-14">
                  <span
                    className={`absolute left-0 top-6 grid h-[21px] w-[21px] place-items-center rounded-full border ${
                      job.current
                        ? "border-emerald-400/60 bg-emerald-400/10"
                        : "border-white/[0.15] bg-ink-900"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        job.current
                          ? "animate-pulse bg-emerald-400"
                          : "bg-slate-500"
                      }`}
                    />
                  </span>

                  <article
                    className={`group rounded-2xl border bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.035] sm:p-7 ${
                      job.current
                        ? "border-emerald-400/20 shadow-lg shadow-emerald-500/[0.04] hover:border-emerald-400/[0.35]"
                        : "border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
                            {job.role}
                          </h3>
                          {job.current ? (
                            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                              Current
                            </span>
                          ) : null}
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm text-slate-400">
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 className="h-3.5 w-3.5 text-slate-500" />
                            {job.company}
                          </span>
                          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-slate-500" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-slate-400">
                        {job.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/70" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-white/5 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-colors group-hover:border-emerald-400/[0.15] group-hover:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentPanelVisual({ wide = false }) {
  const calls = [
    {
      type: "Inbound",
      agent: "Priya S.",
      duration: "04:12",
      tags: ["Support", "VIP"],
    },
    {
      type: "Outbound",
      agent: "Rahul M.",
      duration: "02:48",
      tags: ["Sales", "Follow-up"],
    },
    {
      type: "Inbound",
      agent: "Aisha K.",
      duration: "06:31",
      tags: ["Billing"],
    },
  ];

  return (
    <div
      className={`relative h-60 overflow-hidden border-b border-white/5 bg-gradient-to-br from-emerald-500/[0.12] via-ink-900 to-ink-950 sm:h-64 ${
        wide ? "lg:h-full lg:border-b-0 lg:border-r" : ""
      }`}
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div
        className={`absolute inset-x-6 overflow-hidden rounded-xl border border-white/10 bg-ink-900/90 shadow-2xl shadow-black/40 backdrop-blur ${
          wide ? "top-8 lg:top-1/2 lg:-translate-y-1/2" : "top-8"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-slate-500">
            <Phone className="h-3 w-3" />
            Agent activity
          </div>
        </div>

        <div className="p-3">
          <div className="grid grid-cols-3 gap-2">
            {[
              ["24", "Live calls"],
              ["68", "Agents"],
              ["120+", "Custom tags"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-white/5 bg-white/[0.03] p-2"
              >
                <p className="text-[10px] font-semibold text-white">{value}</p>
                <p className="text-[8px] text-slate-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 space-y-1.5">
            {calls.map((call) => (
              <div
                key={`${call.agent}-${call.duration}`}
                className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2 py-1.5"
              >
                <span
                  className={`shrink-0 rounded px-1.5 py-0.5 text-[7px] font-semibold uppercase tracking-wider ${
                    call.type === "Inbound"
                      ? "bg-emerald-400/10 text-emerald-300"
                      : "bg-cyan-400/10 text-cyan-300"
                  }`}
                >
                  {call.type}
                </span>
                <span className="min-w-0 flex-1 truncate text-[8px] text-slate-300">
                  {call.agent}
                </span>
                <div className="hidden gap-1 sm:flex">
                  {call.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/[0.05] px-1.5 py-0.5 text-[7px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[7px] text-slate-500">
                  {call.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-ink-950/80 px-3 py-1.5 text-[10px] font-medium text-emerald-300 backdrop-blur">
        <Users className="h-3 w-3" />
        50+ enterprise clients
      </div>
    </div>
  );
}

function AuditVisual() {
  const bars = [42, 60, 48, 76, 64, 88, 72, 96, 80, 100];

  return (
    <div className="relative h-60 overflow-hidden border-b border-white/5 bg-gradient-to-br from-fuchsia-500/[0.12] via-ink-900 to-ink-950 sm:h-64">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-3xl"
      />

      <div className="absolute inset-x-6 top-8 overflow-hidden rounded-xl border border-white/10 bg-ink-900/90 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-slate-500">
            <Sparkles className="h-3 w-3" />
            AI call audit
          </div>
        </div>

        <div className="flex gap-3 p-3">
          <div className="hidden w-8 shrink-0 flex-col gap-1.5 rounded-lg bg-white/[0.03] p-1.5 sm:flex">
            {[0, 1, 2, 3].map((item) => (
              <span
                key={item}
                className={`h-1.5 w-full rounded-full ${
                  item === 2 ? "bg-fuchsia-400/70" : "bg-white/10"
                }`}
              />
            ))}
          </div>

          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-3 gap-2">
              {[
                ["92%", "Quality"],
                ["AI", "LLM"],
                ["100%", "Transcribed"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/5 bg-white/[0.03] p-2"
                >
                  <p className="text-[10px] font-semibold text-white">{value}</p>
                  <p className="text-[8px] text-slate-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-2.5 rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
              <div className="flex h-14 items-end justify-between gap-1.5">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="w-full rounded-t-sm bg-gradient-to-t from-fuchsia-500/30 to-cyan-400/80"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[8px] text-slate-600">
                <span>Audit 01</span>
                <span>Audit 10</span>
                <span>Audit 20</span>
                <span>Audit 30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 flex items-center gap-1.5 rounded-full border border-fuchsia-400/20 bg-ink-950/80 px-3 py-1.5 text-[10px] font-medium text-fuchsia-300 backdrop-blur">
        <Activity className="h-3 w-3" />
        Automated quality audits
      </div>
    </div>
  );
}

function CrmVisual() {
  const bars = [38, 56, 44, 72, 60, 84, 68, 92, 76, 100];

  return (
    <div className="relative h-60 overflow-hidden border-b border-white/5 bg-gradient-to-br from-emerald-500/[0.12] via-ink-900 to-ink-950 sm:h-64">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl"
      />

      <div className="absolute inset-x-6 top-8 overflow-hidden rounded-xl border border-white/10 bg-ink-900/90 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-slate-500">
            <Gauge className="h-3 w-3" />
            Reports overview
          </div>
        </div>

        <div className="flex gap-3 p-3">
          <div className="hidden w-8 shrink-0 flex-col gap-1.5 rounded-lg bg-white/[0.03] p-1.5 sm:flex">
            {[0, 1, 2, 3].map((item) => (
              <span
                key={item}
                className={`h-1.5 w-full rounded-full ${
                  item === 1 ? "bg-emerald-400/70" : "bg-white/10"
                }`}
              />
            ))}
          </div>

          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-3 gap-2">
              {[
                ["50+", "Clients"],
                ["40%", "Faster"],
                ["RBAC", "Access"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-white/5 bg-white/[0.03] p-2"
                >
                  <p className="text-[10px] font-semibold text-white">{value}</p>
                  <p className="text-[8px] text-slate-500">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-2.5 rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
              <div className="flex h-14 items-end justify-between gap-1.5">
                {bars.map((height, index) => (
                  <div
                    key={index}
                    className="w-full rounded-t-sm bg-gradient-to-t from-emerald-500/30 to-emerald-400/80"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[8px] text-slate-600">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-ink-950/80 px-3 py-1.5 text-[10px] font-medium text-emerald-300 backdrop-blur">
        <Activity className="h-3 w-3" />
        Real-time reporting
      </div>
    </div>
  );
}

function SheltrxVisual() {
  return (
    <div className="relative h-60 overflow-hidden border-b border-white/5 bg-gradient-to-br from-cyan-500/[0.12] via-ink-900 to-ink-950 sm:h-64">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="absolute inset-x-6 top-8 flex gap-2.5">
        <div className="min-w-0 flex-1 rounded-xl border border-white/10 bg-ink-900/90 p-3 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-wider text-slate-500">
                Occupancy
              </p>
              <p className="mt-0.5 text-lg font-semibold text-white">
                82<span className="text-xs text-slate-500">%</span>
              </p>
            </div>
            <div
              className="grid h-11 w-11 place-items-center rounded-full"
              style={{
                background:
                  "conic-gradient(#34d399 0 82%, rgba(255,255,255,0.07) 82% 100%)",
              }}
            >
              <div className="grid h-8 w-8 place-items-center rounded-full bg-ink-900 text-[8px] text-emerald-300">
                82%
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5">
              <span className="text-[8px] text-slate-400">Rent collected</span>
              <span className="text-[9px] font-medium text-emerald-300">
                ₹4.2L
              </span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5">
              <span className="text-[8px] text-slate-400">Pending bills</span>
              <span className="text-[9px] font-medium text-amber-300">12</span>
            </div>
          </div>
        </div>

        <div className="flex w-24 shrink-0 flex-col gap-2">
          <div className="rounded-xl border border-white/10 bg-ink-900/90 p-2.5">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-white/90 p-1">
              <DoorOpen className="h-10 w-10 text-ink-950" />
            </div>
            <p className="mt-2 text-center text-[8px] text-slate-500">
              Gate access
            </p>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2 py-1.5">
            <Phone className="h-3 w-3 text-emerald-300" />
            <span className="text-[8px] text-emerald-300">SMS OTP</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 flex items-center gap-1.5 rounded-full border border-cyan-400/20 bg-ink-950/80 px-3 py-1.5 text-[10px] font-medium text-cyan-300 backdrop-blur">
        <Smartphone className="h-3 w-3" />
        Live on Play Store
      </div>
    </div>
  );
}

function ThreatMapVisual() {
  const feed = [
    {
      label: "Critical",
      count: "3",
      width: "w-1/4",
      color: "bg-rose-400",
      text: "text-rose-300",
    },
    {
      label: "High",
      count: "12",
      width: "w-1/2",
      color: "bg-amber-400",
      text: "text-amber-300",
    },
    {
      label: "Medium",
      count: "28",
      width: "w-3/4",
      color: "bg-cyan-400",
      text: "text-cyan-300",
    },
  ];

  return (
    <div className="relative h-60 overflow-hidden border-b border-white/5 bg-gradient-to-br from-rose-500/[0.1] via-ink-900 to-ink-950 sm:h-64">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30" />
      <div
        aria-hidden="true"
        className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-rose-400/10 blur-3xl"
      />

      <div className="absolute inset-x-6 top-8 overflow-hidden rounded-xl border border-white/10 bg-ink-900/90 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-slate-500">
            <ShieldAlert className="h-3 w-3" />
            Threat intelligence
          </div>
        </div>

        <div className="flex gap-3 p-3">
          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-8 gap-1.5 rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
              {Array.from({ length: 32 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full ${
                    [5, 12, 19, 24].includes(index)
                      ? "bg-rose-400/80"
                      : [8, 15, 26].includes(index)
                        ? "bg-emerald-400/60"
                        : "bg-white/10"
                  }`}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between rounded-md bg-white/[0.03] px-2 py-1.5">
              <span className="text-[8px] text-slate-400">
                Scanning endpoints
              </span>
              <span className="font-mono text-[8px] text-emerald-300">
                1,248
              </span>
            </div>
          </div>

          <div className="w-24 shrink-0 space-y-1.5">
            {feed.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/5 bg-white/[0.03] p-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[7px] text-slate-500">
                    {item.label}
                  </span>
                  <span className={`text-[8px] font-semibold ${item.text}`}>
                    {item.count}
                  </span>
                </div>
                <div className="mt-1 h-1 rounded-full bg-white/5">
                  <div
                    className={`h-full rounded-full ${item.color} ${item.width}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 flex items-center gap-1.5 rounded-full border border-rose-400/20 bg-ink-950/80 px-3 py-1.5 text-[10px] font-medium text-rose-300 backdrop-blur">
        <ShieldAlert className="h-3 w-3" />
        35% faster APIs
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Systems built for real clients, real scale."
            description="Five production-focused builds spanning call tracking, AI quality auditing, CRM reporting, hostel operations, and threat intelligence."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const Visual = project.Visual;
            const featured = index === 0;
            return (
              <Reveal
                key={project.title}
                delay={index * 80}
                className={featured ? "h-full lg:col-span-2" : "h-full"}
              >
                <article
                  className={`group flex h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.035] hover:shadow-2xl hover:shadow-emerald-500/[0.06] ${
                    featured ? "flex-col lg:flex-row" : "flex-col"
                  }`}
                >
                  <div className={featured ? "lg:w-[46%] lg:shrink-0" : ""}>
                    <Visual wide={featured} />
                  </div>

                  <div
                    className={`flex flex-1 flex-col p-6 sm:p-7 ${
                      featured ? "lg:justify-center lg:p-9" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-medium text-emerald-300">
                        {project.number}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                          project.live
                            ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-300"
                            : "border-white/10 bg-white/[0.04] text-slate-400"
                        }`}
                      >
                        {project.live ? (
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        ) : null}
                        {project.status}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500">
                      {project.subtitle}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/70" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/5 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-400 transition-colors group-hover:border-emerald-400/[0.15] group-hover:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="flex items-center justify-between gap-4 border-t border-white/5 pt-5">
                        <span className="text-xs text-slate-600">
                          {project.live
                            ? "Live product · Production"
                            : "Production system · Case study"}
                        </span>
                        <a
                          href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                            project.subject
                          )}`}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
                        >
                          {project.cta}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Tech stack"
            title="The tools I reach for."
            description="A focused stack for building APIs, managing data, and running background workloads in production."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal
                key={group.title}
                delay={index * 70}
                className={`h-full ${group.span}`}
              >
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-emerald-400/25 hover:bg-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-400/[0.15] bg-emerald-400/10 text-emerald-300 transition duration-300 group-hover:scale-105 group-hover:bg-emerald-400/[0.15]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/5 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.06] hover:text-emerald-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="bg-grid absolute inset-0 opacity-20"
            />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-cyan-500/[0.06] blur-3xl"
            />

            <div className="relative">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  <Sparkles className="h-3 w-3" />
                  Contact
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let&apos;s build something that scales.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400">
                  Have a backend project, a role, or a system that needs
                  untangling? I&apos;m open to conversations about backend
                  engineering and product-focused teams.
                </p>

                <div className="mt-8 grid gap-3 md:grid-cols-2">
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition duration-300 hover:border-emerald-400/20 hover:bg-white/[0.05]">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="mt-0.5 block truncate text-sm font-medium text-slate-200 transition-colors hover:text-emerald-300"
                      >
                        {EMAIL}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/5 bg-white/[0.03] text-slate-400 transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
                      aria-label={copied ? "Email copied" : "Copy email address"}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-emerald-300" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <a
                    href="tel:+919522909496"
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition duration-300 hover:border-emerald-400/20 hover:bg-white/[0.05]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Phone
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-slate-200 transition-colors group-hover:text-emerald-300">
                        {PHONE}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Location
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-slate-200">
                        Satna, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition duration-300 hover:border-emerald-400/20 hover:bg-white/[0.05]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        LinkedIn
                      </p>
                      <p className="mt-0.5 truncate text-sm font-medium text-slate-200 transition-colors group-hover:text-emerald-300">
                        linkedin.com/in/prakhar-gupta-3023a5230
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-300 to-teal-500 font-display text-sm font-bold text-ink-950">
              PG
            </span>
            <span>
              <span className="block font-display text-sm font-semibold text-white">
                Prakhar Gupta
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Python Developer
              </span>
            </span>
          </a>

          <nav
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
            aria-label="Footer"
          >
            {NAV_LINKS.slice(1).map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs font-medium text-slate-500 transition-colors hover:text-emerald-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Send an email"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={RESUME_PATH}
              download="Prakhar_Gupta_Resume.pdf"
              aria-label="Download resume"
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
            >
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-white/5 pt-6 text-xs text-slate-600 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Prakhar Gupta. All rights reserved.</p>
          <p>Built with React, Tailwind CSS &amp; Lucide.</p>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-ink-900/80 text-slate-300 shadow-xl backdrop-blur transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-300 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip font-sans text-slate-300 antialiased">
      <Backdrop />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
