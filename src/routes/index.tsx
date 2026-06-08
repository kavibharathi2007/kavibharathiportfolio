import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield, Code2, Network, Lock, Github, Linkedin, Mail, Phone, Download,
  ArrowRight, ExternalLink, Award, GraduationCap, Briefcase, Sparkles,
  Terminal, Database, Globe, Cpu, Eye, Trophy, Languages, Palette,
  Send, MapPin, ChevronDown,
} from "lucide-react";
import studentPhoto from "@/assets/student-photo.png.asset.json";
import resumeAsset from "@/assets/resume.png.asset.json";
import { ParticleField } from "@/components/ParticleField";

const heroPortrait = studentPhoto.url;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kavibharathi S — Cyber Security & Software Developer" },
      { name: "description", content: "Portfolio of Kavibharathi S, a Computer Science Engineering student specializing in cyber security, secure coding, and software development." },
      { property: "og:title", content: "Kavibharathi S — Cyber Security Portfolio" },
      { property: "og:description", content: "Cyber security enthusiast, software developer, and CSE student building secure, innovative solutions." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { icon: Terminal, title: "Programming", items: ["Python", "C", "SQL"] },
  { icon: Shield, title: "Cyber Security", items: ["Network Security", "Secure Coding", "Vulnerability Assessment", "Security Fundamentals"] },
  { icon: Globe, title: "Web Development", items: ["HTML5", "CSS3", "Responsive Design"] },
  { icon: Code2, title: "Tools", items: ["GitHub", "VS Code", "Canva"] },
  { icon: Cpu, title: "Core Concepts", items: ["OOPs", "DBMS", "Data Structures", "Computer Networks", "SDLC"] },
  { icon: Network, title: "Focus Areas", items: ["Ethical Hacking", "Python Dev", "Front-End", "Networking"] },
];

const education = [
  { school: "Sri Ramakrishna Institute of Technology", degree: "B.E Computer Science and Engineering", period: "2024 – 2028", score: "CGPA: 8.4 / 10" },
  { school: "Tagore Matric Higher Secondary School", degree: "Higher Secondary", period: "2021 – 2023", score: "Score: 85%" },
];

const certifications = [
  "ISTE Certified",
  "Cyber Security and Its Foundations",
  "IBM & Infosys Springboard Encryption Course",
  "SkillRack C Programming",
  "SkillRack C++",
  "SkillRack Python",
  "Certified Yoga Practitioner",
  "First Class Typewriting",
];

const internships = [
  { role: "Cyber Security Intern", org: "Security Track", desc: "Secure coding, networking fundamentals, vulnerability awareness, and system protection." },
  { role: "Web Development Intern", org: "SkillCraft Technologies", desc: "Built To-Do List and Resume Generator projects using HTML and CSS." },
  { role: "Python Developer Intern", org: "ShadowFox", desc: "Python development and practical project implementation." },
];

const projects = [
  {
    title: "INK A BOT",
    tag: "Smart India Hackathon — Top 25",
    desc: "An environmental sustainability solution that converts air pollutants into usable ink through integrated hardware and software.",
    stack: ["IoT", "Embedded Systems", "Software"],
  },
  {
    title: "Sign Language Translator",
    tag: "Accessibility",
    desc: "A real-time communication bridge for the deaf community using computer vision and machine learning.",
    stack: ["Python", "Machine Learning", "Computer Vision"],
  },
];

const achievements = [
  { value: "25", label: "SIH Top Finalist" },
  { value: "🥇", label: "State-Level Throwball Winner" },
  { value: "🏆", label: "College-Level Throwball Winner" },
  { value: "8+", label: "Certifications Earned" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex items-center gap-1 sm:gap-2 rounded-full px-3 py-2 text-sm">
        <a href="#home" className="flex items-center gap-2 px-3 py-1.5 font-display font-bold tracking-tight">
          <Shield className="size-4 text-primary" />
          <span className="hidden sm:inline">KAVIBHARATHI</span>
          <span className="sm:hidden">KB</span>
        </a>
        <span className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-muted-foreground hover:text-foreground hover:bg-primary/10 transition">
              {l.label}
            </a>
          ))}
        </span>
        <a href="#contact" className="ml-1 rounded-full bg-primary px-3 py-1.5 font-semibold text-primary-foreground hover:opacity-90 transition">Hire Me</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-28" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <ParticleField />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div className="space-y-6 animate-[fade-in_0.8s_ease-out]">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Available for internships & collaborations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">KAVIBHARATHI S</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary/90 font-mono">
            Cyber Security Enthusiast · Software Developer · CSE Student
          </p>
          <p className="max-w-xl text-muted-foreground leading-relaxed">
            Passionate Computer Science Engineering student focused on Cyber Security,
            Secure Coding, Networking, and Software Development. Dedicated to building
            innovative solutions and continuously learning emerging technologies.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={resumeAsset.url} download="Kavibharathi-S-Resume.png" target="_blank" rel="noopener noreferrer" className="btn-cyber"><Download className="size-4" /> Download Resume</a>
            <a href="#projects" className="btn-ghost-cyber">View Projects <ArrowRight className="size-4" /></a>
            <a href="#contact" className="btn-ghost-cyber">Contact Me</a>
          </div>
          <div className="flex items-center gap-3 pt-3">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Globe, href: "#" },
              { icon: Mail, href: "mailto:Kavibharathi.71382402060@sritcbe.ac.in" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} className="glass glass-hover flex size-10 items-center justify-center rounded-full text-primary">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative mx-auto">
          <div className="absolute -inset-6 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
          <div className="glass relative size-72 sm:size-80 lg:size-96 overflow-hidden rounded-full p-2 animate-float">
            <img
              src={heroPortrait}
              alt="Portrait of Kavibharathi S"
              width={1024}
              height={1024}
              className="size-full rounded-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-2 -left-4 rounded-2xl px-4 py-3 font-mono text-xs animate-float" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2"><Lock className="size-3.5 text-primary" /> Secure by design</div>
          </div>
          <div className="glass absolute -top-2 -right-4 rounded-2xl px-4 py-3 font-mono text-xs animate-float" style={{ animationDelay: "2s" }}>
            <div className="flex items-center gap-2"><Sparkles className="size-3.5 text-primary" /> CSE · 2024–28</div>
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ChevronDown />
      </a>
    </section>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{kicker}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gradient">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  const interests = ["Cyber Security", "Ethical Hacking", "Python Development", "Front-End Development", "Networking", "Vulnerability Assessment"];
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker="01 — About" title="About Me" />
        <div className="glass grid gap-8 rounded-3xl p-8 md:p-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am <span className="text-foreground font-semibold">Kavibharathi S</span>, a Computer Science and Engineering student at
              Sri Ramakrishna Institute of Technology, Coimbatore. Driven by a passion for building secure and scalable digital solutions, I specialize in the intersection of <span className="text-foreground font-semibold">Cyber Security, Software Development, and Networking</span>.
            </p>
            <p>
              My professional foundation is built on diverse hands-on internships spanning Cyber Security, Python Development, and Full-Stack Web Technologies. These experiences, coupled with my active participation in hackathons and impactful projects, have honed my ability to solve complex problems under pressure. Currently, I am deepening my expertise in Ethical Hacking, Network Security, and Full-Stack Development.
            </p>
            <p>
              Beyond the keyboard, I am a lifelong learner who values discipline and creativity. Whether I am competing in Throwball, practicing Pencil Art, or sharpening my focus through Typewriting and puzzle-solving, I bring the same level of persistence and attention to detail to my technical work.
            </p>
            <p className="text-foreground font-medium italic">
              "Securing systems, solving problems, and building the future through technology."
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {interests.map((i) => (
                <span key={i} className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary">{i}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { k: "Focus", v: "Cyber Security" },
              { k: "Role", v: "CSE Student" },
              { k: "Based in", v: "Coimbatore, IN" },
              { k: "CGPA", v: "8.4 / 10" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border/60 bg-ocean-deep/40 p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.k}</p>
                <p className="mt-1 font-display font-semibold">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="02 — Toolkit" title="Skills & Stack" sub="A blend of secure-coding fundamentals, developer tooling, and core computer science." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="glass glass-hover rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((it) => (
                  <li key={it} className="rounded-md border border-border/60 bg-ocean-deep/50 px-2.5 py-1 text-xs font-mono text-muted-foreground">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ icon: Icon, title, subtitle, period, desc }: { icon: any; title: string; subtitle: string; period: string; desc?: string }) {
  return (
    <div className="relative pl-12 pb-10 last:pb-0">
      <div className="absolute left-0 top-0 flex size-9 items-center justify-center rounded-full border border-primary/40 bg-ocean-deep text-primary">
        <Icon className="size-4" />
      </div>
      <div className="absolute left-[17px] top-9 h-full w-px bg-gradient-to-b from-primary/40 to-transparent" />
      <div className="glass glass-hover rounded-2xl p-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-lg font-semibold">{title}</h3>
          <span className="font-mono text-xs text-primary">{period}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        {desc && <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>}
      </div>
    </div>
  );
}

function Education() {
  return (
    <section id="education" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader kicker="03 — Journey" title="Education" />
        <div className="relative">
          {education.map((e) => (
            <TimelineItem key={e.school} icon={GraduationCap} title={e.school} subtitle={`${e.degree} · ${e.score}`} period={e.period} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="04 — Credentials" title="Certifications" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <div key={c} className="glass glass-hover group flex items-start gap-3 rounded-2xl p-5">
              <Award className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm font-medium">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader kicker="05 — Experience" title="Internships" />
        <div className="relative">
          {internships.map((i) => (
            <TimelineItem key={i.role} icon={Briefcase} title={i.role} subtitle={i.org} period="Internship" desc={i.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="06 — Work" title="Projects Showcase" sub="Selected projects bridging security, accessibility, and sustainability." />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="glass glass-hover group relative overflow-hidden rounded-3xl p-8">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-primary/15 blur-3xl transition group-hover:bg-primary/25" />
              <span className="font-mono text-xs uppercase tracking-widest text-primary">{p.tag}</span>
              <h3 className="mt-2 font-display text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs font-mono text-primary">{s}</span>
                ))}
              </div>
              <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                View case study <ExternalLink className="size-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="07 — Highlights" title="Achievements" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <div key={a.label} className="glass glass-hover rounded-2xl p-6 text-center">
              <p className="font-display text-4xl font-bold text-gradient">{a.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Extras() {
  const languages = [
    { name: "English", level: "Professional" },
    { name: "Tamil", level: "Native" },
    { name: "Telugu", level: "Conversational" },
  ];
  const interests = [
    { icon: Palette, label: "Pencil Art" },
    { icon: Trophy, label: "Throwball" },
    { icon: Terminal, label: "Typewriting" },
    { icon: Eye, label: "Puzzle Solving" },
  ];
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="glass rounded-3xl p-8">
          <div className="flex items-center gap-3">
            <Languages className="size-5 text-primary" />
            <h3 className="font-display text-xl font-semibold">Languages</h3>
          </div>
          <ul className="mt-6 space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between rounded-xl border border-border/60 bg-ocean-deep/40 px-4 py-3">
                <span className="font-medium">{l.name}</span>
                <span className="font-mono text-xs text-primary">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-3xl p-8">
          <div className="flex items-center gap-3">
            <Sparkles className="size-5 text-primary" />
            <h3 className="font-display text-xl font-semibold">Interests</h3>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {interests.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-border/60 bg-ocean-deep/40 px-4 py-3">
                <Icon className="size-4 text-primary" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="08 — Contact" title="Let's Build Something Amazing Together" sub="Have an idea, opportunity, or want to collaborate? Drop a message." />
        <div className="glass grid gap-10 rounded-3xl p-8 md:p-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            {[
              { icon: Mail, label: "Email", value: "Kavibharathi.71382402060@sritcbe.ac.in", href: "mailto:Kavibharathi.71382402060@sritcbe.ac.in" },
              { icon: Phone, label: "Phone", value: "+91 6385594877", href: "tel:+916385594877" },
              { icon: MapPin, label: "Location", value: "Coimbatore, India" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kavibharathi", href: "#" },
              { icon: Github, label: "GitHub", value: "github.com/kavibharathi", href: "#" },
            ].map(({ icon: Icon, label, value, href }) => {
              const C: any = href ? "a" : "div";
              return (
                <C key={label} href={href} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-ocean-deep/40 p-4 hover:border-primary/60 transition">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
                    <p className="truncate text-sm font-medium">{value}</p>
                  </div>
                </C>
              );
            })}
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thanks! I'll get back to you soon."); }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-xl border border-border/60 bg-input px-4 py-3 text-sm outline-none focus:border-primary/70 transition"
              />
            </div>
            <button type="submit" className="btn-cyber w-full justify-center">
              Send Message <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        maxLength={255}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-border/60 bg-input px-4 py-3 text-sm outline-none focus:border-primary/70 transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
        <p>© 2026 KAVIBHARATHI S</p>
        <p className="font-mono text-xs">Cyber Security · Software Development · Computer Science Engineering</p>
        <div className="flex gap-3">
          {[Github, Linkedin, Mail].map((Icon, i) => (
            <a key={i} href="#" className="glass glass-hover flex size-9 items-center justify-center rounded-full text-primary">
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
