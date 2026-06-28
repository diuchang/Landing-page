import { Nav } from "@/components/nav"
import { FadeUp } from "@/components/fade-up"

/* ─── Reusable primitives ─────────────────────────────────────────── */

function SectionLabel({
  children,
  center = false,
}: {
  children: string
  center?: boolean
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[2.5px] text-primary mb-4 ${center ? "justify-center" : ""}`}
    >
      <span className="w-5 h-px bg-primary flex-shrink-0" />
      {children}
    </div>
  )
}

function SkillBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent border border-border rounded-full text-[13px] font-medium text-foreground transition-all hover:border-primary hover:text-primary cursor-default">
      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
      {children}
    </span>
  )
}

/* ─── Hero ────────────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ padding: "90px 48px 40px" }}
    >

      {/* Label */}
      <div className="inline-flex items-center gap-2 text-[13px] font-medium text-foreground uppercase tracking-[2px] mb-6">
        <span className="w-2 h-px bg-foreground" />
        Available for opportunities
        <span className="w-6 h-px bg-foreground" />
      </div>

      {/* H1 */}
      <h1
        className="font-bold leading-none tracking-[-2px] mb-6 max-w-[900px]"
        style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
      >
        Minh <span className="text-primary">Nguyen.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[15px] text-muted-foreground max-w-[420px] leading-[1.6] mb-12 mx-auto">
        Product Manager &amp; Design Lead building digital products that create
        real impact — from zero to shipped.
      </p>

      {/* CTAs */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-primary text-black text-[15px] font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)]"
          style={{ padding: "14px 28px" }}
        >
          View Projects ↓
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-transparent text-foreground text-[15px] font-semibold border border-border transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
          style={{ padding: "14px 28px" }}
        >
          Get in Touch
        </a>
      </div>

      {/* Meta */}
      <div className="flex gap-12 mt-16">
        {[
          { label: "Location", value: "Ho Chi Minh", accent: false },
          { label: "Role", value: "Product & Design", accent: false },
          { label: "Status", value: "● Open", accent: true },
        ].map(({ label, value, accent }) => (
          <div key={label} className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[1.5px] text-muted-foreground mb-0.5">
              {label}
            </span>
            <span
              className={`text-[14px] font-semibold ${accent ? "text-primary" : "text-foreground"}`}
            >
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── About ───────────────────────────────────────────────────────── */

function AboutSection() {
  const stats = [
    { number: "4+", label: "Years in Product Management" },
    { number: "50+", label: "Weekly active users on Rebo Finance" },
    { number: "1K+", label: "Organic visits in first week on jobs.nhathao.com" },
    { number: "3", label: "Live products shipped & growing" },
  ]

  const skills = [
    "Claude AI",
    "Cursor",
    "Figma",
    "Product Strategy",
    "UX/UI Design",
    "Design Systems",
    "Go-to-Market",
    "AI-assisted Dev",
  ]

  return (
    <section id="about" className="bg-muted" style={{ padding: "100px 48px" }}>
      <SectionLabel>About</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <FadeUp>
          <h2
            className="font-bold tracking-[-1px] leading-[1.1] mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            Building products
            <br />
            at the intersection
            <br />
            of design &amp; growth.
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-[1.8]">
              I&apos;m a{" "}
              <strong className="text-foreground font-semibold">
                Product Manager and Design Lead
              </strong>{" "}
              based in Ho Chi Minh City with a background in Entrepreneurship
              Management. I specialize in translating complex business
              opportunities into digital products that people actually use.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              From leading client negotiations at Rebo Agency to building design
              systems at ReOrc, I thrive where product thinking meets execution.
              I&apos;ve shipped everything from AI-powered financial dashboards
              to sports booking platforms.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              When I&apos;m not building products, I&apos;m obsessing over{" "}
              <strong className="text-foreground font-semibold">
                productivity systems
              </strong>{" "}
              — how to do more with less, faster and smarter.
            </p>
          </div>

          <p className="text-[13px] uppercase tracking-[2px] text-muted-foreground mt-8 mb-4">
            Tools &amp; Skills
          </p>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((s) => (
              <SkillBadge key={s}>{s}</SkillBadge>
            ))}
          </div>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={200}>
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ number, label }) => (
              <div
                key={number}
                className="bg-card border border-border rounded-2xl p-7"
              >
                <div className="text-[42px] font-bold tracking-[-2px] text-primary leading-none mb-1.5">
                  {number}
                </div>
                <div className="text-[13px] text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ─── Experience ──────────────────────────────────────────────────── */

const experiences = [
  {
    period: "Jan 2021 – Present",
    badge: "Current",
    company: "Rebo Agency",
    role: "Product Management",
    bullets: [
      "Led client-facing project negotiations: defined design scope, aligned expectations, and managed project timelines and delivery execution.",
      "Built and scaled REBO Academy — trained students, developed educational programs, and created sales funnel initiatives that strengthened brand positioning.",
      "Led development of internal digital products and new business initiatives, coordinating design, execution, and go-to-market efforts.",
    ],
  },
  {
    period: "Jul 2024 – Sep 2025",
    badge: null,
    company: "ReOrc",
    role: "Design Lead",
    bullets: [
      "Led UX/UI design initiatives, improving core user flows and enhancing product usability across multiple shipped features.",
      "Collaborated with product and engineering stakeholders to translate complex requirements into scalable design solutions.",
      "Built and managed a scalable design system, establishing reusable UI patterns and team workflows that improved design consistency.",
    ],
  },
  {
    period: "Jul 2024 – Sep 2025",
    badge: null,
    company: "WeSport",
    role: "Account Manager",
    bullets: [
      "Managed client relationships and sports venue partnership operations, coordinating between customers, venue owners, and internal teams.",
      "Supported business growth by identifying partnership opportunities and optimizing account performance.",
      "Managed design execution and repositioned product UX to improve usability and create a seamless booking journey.",
    ],
  },
  {
    period: "Earlier",
    badge: null,
    company: "Rebo Sport Booking",
    role: "Product Marketer",
    bullets: [
      "Led product design and end-to-end digital execution across client and internal projects, working closely with developers on UX and delivery.",
      "Coordinated project resources, timelines, and cross-functional teams to ensure milestones were delivered on schedule.",
      "Managed client acquisition and business development in a founder-led environment.",
    ],
  },
]

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-background"
      style={{ padding: "100px 48px" }}
    >
      <SectionLabel>Experience</SectionLabel>
      <FadeUp>
        <h2
          className="font-bold tracking-[-1px] leading-[1.1] mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          Where I&apos;ve
          <br />
          been building.
        </h2>
      </FadeUp>
      <FadeUp delay={100}>
        <p className="text-[17px] text-muted-foreground max-w-[540px] leading-[1.7] mb-16">
          A track record of shipping products, leading teams, and driving growth
          across startups and agencies in Vietnam.
        </p>
      </FadeUp>

      {/* Timeline */}
      <div className="relative max-w-[860px]">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <FadeUp
            key={exp.company + exp.role}
            delay={i * 100}
            className="relative pl-10 mb-14 last:mb-0"
          >
            {/* Dot */}
            <div className="absolute -left-[5px] top-2 w-[11px] h-[11px] bg-primary rounded-full border-2 border-background" />

            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-[12px] text-muted-foreground font-medium uppercase tracking-[1px]">
                {exp.period}
              </span>
              {exp.badge && (
                <span className="text-[11px] px-2.5 py-0.5 rounded-full font-semibold text-primary bg-primary/10">
                  {exp.badge}
                </span>
              )}
            </div>
            <div className="text-[22px] font-bold text-foreground tracking-[-0.5px] mb-1">
              {exp.company}
            </div>
            <div className="text-[14px] text-primary font-medium mb-4">
              {exp.role}
            </div>
            <ul className="space-y-2 list-none m-0 p-0">
              {exp.bullets.map((b) => (
                <li
                  key={b}
                  className="text-muted-foreground text-[15px] leading-[1.75] flex gap-2"
                >
                  <span className="text-primary text-[13px] mt-[3px] flex-shrink-0">
                    →
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

/* ─── Projects ────────────────────────────────────────────────────── */

const projects = [
  {
    icon: "⚡",
    tag: "Product · Mar 2026 – Now",
    name: "Tinh Toc",
    desc: "The Lean-Fast Work Management Platform. Led product design, client negotiations, defined scope, and managed delivery execution to ensure high-quality outcomes aligned with business goals.",
    metrics: ["Work Management", "SaaS"],
    link: "tinhtoc.com",
    href: "https://tinhtoc.com",
  },
  {
    icon: "📊",
    tag: "AI Product · Sep 2025 – Now",
    name: "Rebo Finance",
    desc: "AI-powered financial insights product built with Claude Code and Perplexity for real-time research. Transforms complex business and market information into structured, accessible insights.",
    metrics: ["50+ WAU", "AI-Powered", "6 months"],
    link: "rebo.ai.vn",
    href: "https://rebo.ai.vn",
  },
  {
    icon: "🤖",
    tag: "AI Research · Mar 2026 – Now",
    name: "AI's Impact on Employment",
    desc: "AI-powered career insights landing page using VietJobs data, Claude Code for rapid development, and DeepSeek API for trend analysis. Transforms raw job-market data into structured insights.",
    metrics: ["1,000+ visits wk 1", "DeepSeek API"],
    link: "jobs.nhathao.com",
    href: "https://jobs.nhathao.com",
  },
]

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-muted"
      style={{ padding: "100px 48px" }}
    >
      <SectionLabel>Projects</SectionLabel>
      <FadeUp>
        <h2
          className="font-bold tracking-[-1px] leading-[1.1] mb-4"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          Things I&apos;ve
          <br />
          shipped.
        </h2>
      </FadeUp>
      <FadeUp delay={100}>
        <p className="text-[17px] text-muted-foreground max-w-[540px] leading-[1.7] mb-16">
          Live products I&apos;ve built and launched — from AI-powered dashboards
          to job market insights.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <FadeUp key={p.name} delay={i * 100}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-4 bg-card border border-border rounded-[20px] p-8 text-foreground transition-all duration-[250ms] hover:border-primary hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.10)] overflow-hidden h-full"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] pointer-events-none" />

              <div className="w-12 h-12 bg-accent border border-border rounded-xl flex items-center justify-center text-[22px] flex-shrink-0">
                {p.icon}
              </div>

              <div className="text-[11px] uppercase tracking-[1.5px] text-primary font-semibold">
                {p.tag}
              </div>

              <div className="text-[20px] font-bold tracking-[-0.5px] text-foreground">
                {p.name}
              </div>

              <p className="text-[14px] text-muted-foreground leading-[1.7] flex-1">
                {p.desc}
              </p>

              <div className="flex gap-3 flex-wrap">
                {p.metrics.map((m) => (
                  <span
                    key={m}
                    className="text-[12px] px-2.5 py-1 bg-accent rounded-full text-muted-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                <span className="text-[13px] text-muted-foreground">
                  {p.link}
                </span>
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent text-muted-foreground text-[14px] transition-all group-hover:bg-primary group-hover:text-black">
                  ↗
                </span>
              </div>
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

/* ─── Education ───────────────────────────────────────────────────── */

function EducationSection() {
  return (
    <section
      id="education"
      className="bg-background"
      style={{ padding: "100px 48px" }}
    >
      <SectionLabel>Education</SectionLabel>
      <FadeUp>
        <h2
          className="font-bold tracking-[-1px] leading-[1.1] mb-8"
          style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
        >
          Where it
          <br />
          all started.
        </h2>
      </FadeUp>

      <FadeUp delay={100}>
        <div className="flex gap-8 items-start bg-card border border-border rounded-[20px] p-10 max-w-[700px] flex-col sm:flex-row">
          <div
            className="w-14 h-14 rounded-[14px] flex items-center justify-center text-[26px] flex-shrink-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.597 0.147 167.4), oklch(0.491 0.274 292.7))",
            }}
          >
            🎓
          </div>
          <div>
            <div className="text-[20px] font-bold tracking-[-0.5px] text-foreground mb-1">
              University of Economics Ho Chi Minh City
            </div>
            <div className="text-[15px] text-primary font-medium mb-2">
              Entrepreneurship Management
            </div>
            <div className="text-[13px] text-muted-foreground">
              Graduated 2017 · Ho Chi Minh City, Vietnam
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}

/* ─── Contact ─────────────────────────────────────────────────────── */

function ContactSection() {
  const links = [
    {
      label: "nguyenvunhathao0501@gmail.com",
      href: "mailto:nguyenvunhathao0501@gmail.com",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4 text-primary flex-shrink-0"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: "0969.016.24",
      href: "tel:0969016024",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4 text-primary flex-shrink-0"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8A16 16 0 0 0 15.2 16.1l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "behance.net/nguyenvunhatminh",
      href: "https://behance.net/nguyenvunhatminh",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-primary flex-shrink-0"
        >
          <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.836 1.884 2.109 1.884.91 0 1.55-.355 1.847-1.084l2.8.55zm-5.18-4.1c-.073-1.029-.668-1.806-1.86-1.806-1.216 0-1.874.676-2.025 1.806h3.886zm-8.59-6.3h4.562c2.338 0 3.451 1.049 3.451 2.77 0 1.361-.71 2.198-1.86 2.5 1.428.256 2.299 1.21 2.299 2.817 0 2.028-1.349 3.313-3.938 3.313H9.956V6.6zm3.9 4.658c1.05 0 1.628-.475 1.628-1.43 0-.916-.591-1.33-1.594-1.33H12.87v2.76h1.014zm.218 4.758c1.19 0 1.788-.524 1.788-1.57 0-.975-.618-1.493-1.808-1.493H12.87V16h1.204z" />
        </svg>
      ),
    },
    {
      label: "rebo.ai.vn",
      href: "https://rebo.ai.vn",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-4 h-4 text-primary flex-shrink-0"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="contact"
      className="bg-muted text-center"
      style={{ padding: "100px 48px" }}
    >
      <div className="flex justify-center">
        <SectionLabel>Contact</SectionLabel>
      </div>
      <h2
        className="font-bold tracking-[-1px] leading-[1.1] mb-3"
        style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
      >
        Let&apos;s build
        <br />
        something great.
      </h2>
      <p className="text-[17px] text-muted-foreground max-w-[540px] leading-[1.7] mx-auto mb-12">
        Whether you have a project in mind, a role to fill, or just want to
        connect — my inbox is always open.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        {links.map((c, i) => (
          <FadeUp key={c.label} delay={i * 100}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="inline-flex items-center gap-2.5 bg-card border border-border rounded-full text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-0.5"
              style={{ padding: "14px 24px" }}
            >
              {c.icon}
              {c.label}
            </a>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}

/* ─── Footer ──────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer
      className="bg-background border-t border-border text-center"
      style={{ padding: "32px 48px" }}
    >
      <p className="text-[13px] text-muted-foreground">
        Designed &amp; built by{" "}
        <span className="text-primary">Minh Nguyen</span> · Ho Chi Minh City ·
        2026
      </p>
    </footer>
  )
}

/* ─── Page ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </>
  )
}
