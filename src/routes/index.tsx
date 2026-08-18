import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import {
  Shield, Code2, Network, Lock, Github, Linkedin, Mail, Phone, Download,
  ArrowRight, ExternalLink, Award, GraduationCap, Briefcase, Sparkles,
  Terminal, Database, Globe, Cpu, Eye, Trophy, Languages, Palette,
  Send, MapPin, ChevronDown, BookOpen, Lightbulb, Zap, FolderOpen, X,
} from "lucide-react";

import studentPhoto from "@/assets/student-photo-2.jpg.asset.json";
import resumeAsset from "@/assets/resume.png.asset.json";
import { ParticleField } from "@/components/ParticleField";
import { SparkField } from "@/components/SparkField";
import { CursorGlow } from "@/components/CursorGlow";

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
  { icon: Terminal, title: "Programming", items: ["Python", "C", "C++", "HTML", "SQL"] },
  { icon: Shield, title: "Cyber Security", items: ["Network Security", "Secure Coding", "Vulnerability Assessment", "Security Fundamentals"] },
  { icon: Globe, title: "Web Development", items: ["HTML5", "CSS3", "Responsive Design"] },
  { icon: Code2, title: "Tools", items: ["GitHub", "VS Code", "Canva", "Hack The Box", "TryHackMe", "Nmap", "Kali Linux"] },
  { icon: Cpu, title: "Core Concepts", items: ["OOPs", "DBMS", "Data Structures", "Computer Networks", "SDLC"] },
  { icon: Network, title: "Focus Areas", items: ["Ethical Hacking", "Python Dev", "Front-End", "Networking"] },
];

const education = [
  { school: "Sri Ramakrishna Institute of Technology", degree: "B.E Computer Science and Engineering", period: "2024 – 2028", score: "CGPA: 8.4 / 10" },
  { school: "Tagore Matric Higher Secondary School", degree: "Higher Secondary", period: "2021 – 2023", score: "Score: 85%" },
];

import seAgileCert from "@/assets/certs/se-agile.png.asset.json";
import basicsPythonCert from "@/assets/certs/basics-python.png.asset.json";
import pythonP1Cert from "@/assets/certs/python-p1.png.asset.json";
import pythonP2Cert from "@/assets/certs/python-p2.png.asset.json";
import oopPythonCert from "@/assets/certs/oop-python.png.asset.json";
import dbmsCert from "@/assets/certs/dbms.png.asset.json";
import businessCommCert from "@/assets/certs/business-comm.png.asset.json";
import ciscoJuniorCert from "@/assets/certs/cisco-junior-cybersec.png.asset.json";
import ciscoPacketCert from "@/assets/certs/cisco-packet-tracer.png.asset.json";
import skillIndiaSecurityCert from "@/assets/certs/skillindia-security-analyst.png.asset.json";
import skillIndiaCyberProgramCert from "@/assets/certs/skillindia-cyber-program.png.asset.json";
import skillIndiaIntroCert from "@/assets/certs/skillindia-intro-cyber.png.asset.json";
import skillIndiaIotCert from "@/assets/certs/skillindia-iot.png.asset.json";
import spokenPythonCert from "@/assets/certs/spoken-python.png.asset.json";
import spokenCppCert from "@/assets/certs/spoken-cpp.png.asset.json";
import spokenCCert from "@/assets/certs/spoken-c.png.asset.json";

type CertItem = { title: string; date?: string; image?: string };
type CertFolder = { id: string; name: string; subtitle: string; accent: string; certs: CertItem[] };

const certFolders: CertFolder[] = [
  {
    id: "infosys",
    name: "INFOSYS SPRINGBOARD",
    subtitle: "Virtual internship & encryption courses",
    accent: "from-amber-500/30 to-orange-700/20",
    certs: [
      { title: "Software Engineering & Agile Software Development", date: "April 12, 2026", image: seAgileCert.url },
      { title: "Basics of Python", date: "April 12, 2026", image: basicsPythonCert.url },
      { title: "Programming Fundamentals using Python — Part 1", date: "April 14, 2026", image: pythonP1Cert.url },
      { title: "Programming Fundamentals using Python — Part 2", date: "April 14, 2026", image: pythonP2Cert.url },
      { title: "Object Oriented Programming using Python", date: "April 14, 2026", image: oopPythonCert.url },
      { title: "Database Management System — Part 1", date: "April 22, 2026", image: dbmsCert.url },
      { title: "Basics of Business Communication", date: "April 27, 2026", image: businessCommCert.url },
      { title: "IBM & Infosys Springboard Encryption Course", date: "2026" },
    ],
  },
  {
    id: "cisco",
    name: "CISCO CERTIFICATES",
    subtitle: "Networking Academy programs",
    accent: "from-sky-500/25 to-blue-700/20",
    certs: [
      { title: "Junior Cybersecurity Analyst Career Path Exam", date: "05 Jun 2026", image: ciscoJuniorCert.url },
      { title: "Getting Started with Cisco Packet Tracer", date: "13 Jun 2026", image: ciscoPacketCert.url },
    ],
  },
  {
    id: "skillindia",
    name: "SKILL INDIA CERTIFICATES",
    subtitle: "Reliance Foundation & NIIT Foundation",
    accent: "from-emerald-500/25 to-amber-600/20",
    certs: [
      { title: "Security Analyst Certificate Programme", date: "May 20, 2026 · 120 Hours", image: skillIndiaSecurityCert.url },
      { title: "Program in Cyber Security", date: "May 20, 2026 · 13 Hours", image: skillIndiaCyberProgramCert.url },
      { title: "Introduction to Cyber Security", date: "May 29, 2026 · 13 Hours", image: skillIndiaIntroCert.url },
      { title: "IoT-Network Specialist Certificate Programme", date: "May 20, 2026 · 60 Hours", image: skillIndiaIotCert.url },
    ],
  },
  {
    id: "isc2",
    name: "ISC2 CERTIFICATE",
    subtitle: "Foundational cybersecurity credentials",
    accent: "from-fuchsia-500/25 to-rose-700/20",
    certs: [
      { title: "Cyber Security and Its Foundations", date: "ISC2" },
    ],
  },
  {
    id: "spoken",
    name: "SPOKEN TUTORIAL — IIT BOMBAY",
    subtitle: "Programming language training",
    accent: "from-red-500/25 to-orange-700/20",
    certs: [
      { title: "Python 3.4.3 Training", date: "April 22, 2025 · 80%", image: spokenPythonCert.url },
      { title: "C++ Training", date: "May 2, 2025 · 75%", image: spokenCppCert.url },
      { title: "C Training", date: "April 8, 2025 · 40%", image: spokenCCert.url },
    ],
  },
];

const otherCertifications = [
  "ISTE Certified",
  "Certified Yoga Practitioner",
  "First Class Typewriting",
];


const GITHUB_URL = "https://github.com/kavibharathi2007";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mljrpzna";

const internships = [
  { role: "Cyber Security Intern", org: "Code Alpha", desc: "Secure coding, networking fundamentals, vulnerability awareness, and system protection.", repo: "https://github.com/kavibharathi2007" },
  { role: "Python Developer Intern (Virtual)", org: "Infosys Springboard", desc: "Virtual internship focused on Python programming, OOP, database fundamentals, and software engineering best practices. Completed multiple Infosys Springboard certification tracks in the Python domain.", repo: "https://github.com/kavibharathi2007" },
  { role: "Web Development Intern", org: "SkillCraft Technologies", desc: "Built To-Do List and Resume Generator projects using HTML and CSS.", repo: "https://github.com/kavibharathi2007" },
  { role: "Cyber Security Intern", org: "ShadowFox", desc: "Hands-on cyber security training covering vulnerability assessment, network reconnaissance, threat analysis, and defensive security practices.", repo: "https://github.com/kavibharathi2007" },
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
  { value: "Cisco", label: "Cisco Networking Certification — Cisco Networking Academy" },
  { value: "Cisco", label: "Cisco Junior Cyber Analyst Certificate — Cisco Networking Academy" },
  { value: "OWASP", label: "Student of SREC OWASP Chapter" },
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
      <SparkField />
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Philosophy />
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
            Hi, I'm{" "}
            <span
              className="text-gradient font-display italic tracking-tight"
              style={{
                fontFamily: "'Playfair Display', 'Space Grotesk', serif",
                letterSpacing: "-0.01em",
                textShadow: "0 2px 24px color-mix(in oklab, var(--color-primary) 25%, transparent)",
              }}
            >
              Kavibharathi&nbsp;S
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-primary/90 font-mono">
            Cyber Security Enthusiast · Software Developer · CSE Student
          </p>
          <p className="max-w-xl text-muted-foreground leading-relaxed">
            Passionate Computer Science Engineering student focused on Cyber Security,
            Secure Coding, Networking, and Software Development. Dedicated to building
            innovative solutions and continuously learning emerging technologies.
          </p>
          <p className="font-display text-lg sm:text-xl font-semibold tracking-wide text-primary pt-1">
            Secure. Build. Innovate. Repeat.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={resumeAsset.url} download="Kavibharathi-S-Resume.png" target="_blank" rel="noopener noreferrer" className="btn-cyber"><Download className="size-4" /> Download Resume</a>
            <a href="#projects" className="btn-ghost-cyber">View Projects <ArrowRight className="size-4" /></a>
            <a href="#contact" className="btn-ghost-cyber">Contact Me</a>
          </div>
          <div className="flex items-center gap-3 pt-3">
            {[
              { icon: Github, href: GITHUB_URL },
              { icon: Linkedin, href: "#" },
              { icon: Globe, href: "#" },
              { icon: Mail, href: "mailto:Kavibharathi.71382402060@sritcbe.ac.in" },
            ].map(({ icon: Icon, href }, i) => (
              <a key={i} href={href} className="glass glass-hover icon-touch flex size-10 items-center justify-center rounded-full text-primary">
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

function Philosophy() {
  const topics = [
    {
      icon: BookOpen,
      title: "Continuous Learning",
      text: "I strongly believe that technology evolves every day, and staying updated is essential for growth. I continuously invest time in learning new technologies, improving my programming skills, and exploring emerging trends in Cyber Security and Software Development. Through online courses, hands-on projects, internships, and technical communities, I strive to expand my knowledge and transform learning into practical experience.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      text: "I believe that every complex problem can be decomposed into smaller, solvable pieces. Whether debugging code, analyzing network vulnerabilities, or architecting a system, I rely on structured thinking and persistence. My hackathon and internship experiences have sharpened my ability to stay calm under pressure, iterate quickly, and deliver effective solutions that balance security, performance, and usability.",
    },
    {
      icon: Zap,
      title: "Innovation",
      text: "I am passionate about creating innovative solutions that address real-world problems. From developing impactful projects like INK A BOT to exploring accessibility-focused technologies such as Sign Language Translation systems, I aim to combine creativity and technology to make a meaningful difference. I believe innovation starts with curiosity and grows through experimentation and continuous improvement.",
    },
  ];
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Philosophy" title="How I Think & Work" sub="The principles that guide my journey in technology." />
        <div className="grid gap-6 lg:grid-cols-3">
          {topics.map((t) => (
            <div key={t.title} className="glass glass-hover rounded-3xl p-8">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary mb-6">
                <t.icon className="size-6" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{t.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{t.text}</p>
            </div>
          ))}
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
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary icon-touch">
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

function TimelineItem({ icon: Icon, title, subtitle, period, desc, repo }: { icon: any; title: string; subtitle: string; period: string; desc?: string; repo?: string }) {
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
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-mono text-primary hover:bg-primary/20 transition icon-touch">
            <Github className="size-3.5" /> View Repository
          </a>
        )}
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
  const [openFolder, setOpenFolder] = useState<CertFolder | null>(null);
  const [activeCert, setActiveCert] = useState<CertItem | null>(null);

  useEffect(() => {
    if (!openFolder && !activeCert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeCert) setActiveCert(null);
        else setOpenFolder(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openFolder, activeCert]);

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="04 — Credentials"
          title="Certifications"
          sub="Tap a folder to explore certificates grouped by issuer."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certFolders.map((folder) => (
            <button
              key={folder.id}
              type="button"
              onClick={() => setOpenFolder(folder)}
              className="glass glass-hover group relative overflow-hidden rounded-3xl p-6 text-left active:scale-[0.98] transition-transform touch-manipulation"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${folder.accent} opacity-60 pointer-events-none`} />
              <div className="relative flex items-start gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/20 text-primary shrink-0">
                  <FolderOpen className="size-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary/80">
                    {folder.certs.length} {folder.certs.length === 1 ? "certificate" : "certificates"}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold leading-tight">{folder.name}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground">{folder.subtitle}</p>
                </div>
              </div>
              <div className="relative mt-5 flex items-center justify-between text-xs font-mono text-primary">
                <span>Open folder</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5 text-center">
            Other Credentials
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherCertifications.map((c) => (
              <div key={c} className="glass glass-hover group flex items-start gap-3 rounded-2xl p-5">
                <Award className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm font-medium">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {openFolder && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-[fade-in_0.2s_ease-out]"
          onClick={() => setOpenFolder(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
          <div
            className="glass relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 animate-[fade-in_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  {openFolder.certs.length} certificates
                </p>
                <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-gradient">{openFolder.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{openFolder.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpenFolder(null)}
                className="glass glass-hover flex size-10 items-center justify-center rounded-full shrink-0"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {openFolder.certs.map((c) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => c.image && setActiveCert(c)}
                  className="glass glass-hover group block overflow-hidden rounded-2xl text-left active:scale-[0.98] transition-transform touch-manipulation"
                >
                  {c.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden bg-ocean-deep">
                      <img
                        src={c.image}
                        alt={c.title}
                        loading="lazy"
                        className="size-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10">
                      <Award className="size-12 text-primary" />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm font-semibold leading-snug">{c.title}</p>
                    {c.date && (
                      <p className="mt-1.5 font-mono text-[11px] text-muted-foreground">{c.date}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeCert?.image && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 animate-[fade-in_0.2s_ease-out]"
          onClick={() => setActiveCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
          <button
            type="button"
            onClick={() => setActiveCert(null)}
            className="absolute top-4 right-4 z-10 glass glass-hover flex size-10 items-center justify-center rounded-full"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <div className="relative z-10 max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            />
            <p className="mt-3 text-center text-sm font-mono text-primary">{activeCert.title}</p>
          </div>
        </div>
      )}
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
            <TimelineItem key={i.role} icon={Briefcase} title={i.role} subtitle={i.org} period="Internship" desc={i.desc} repo={i.repo} />
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
  const [state, handleSubmit] = useForm(FORMSPREE_ENDPOINT);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    if (state.succeeded) {
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  }, [state.succeeded]);

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
              { icon: Github, label: "GitHub", value: "github.com/kavibharathi2007", href: GITHUB_URL },
            ].map(({ icon: Icon, label, value, href }) => {
              const C: any = href ? "a" : "div";
              return (
                <C key={label} href={href} className="flex items-center gap-4 rounded-2xl border border-border/60 bg-ocean-deep/40 p-4 hover:border-primary/60 transition">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary icon-touch">
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
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field name="email" label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <Field name="subject" label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-xl border border-border/60 bg-input px-4 py-3 text-sm outline-none focus:border-primary/70 transition"
              />
            </div>
            {state.succeeded && (
              <div aria-live="polite" className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {state.errors && (
              <div aria-live="polite" className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
                Something went wrong. Please try again later.
              </div>
            )}
            <button type="submit" disabled={state.submitting} className="btn-cyber w-full justify-center">
              {state.submitting ? "Sending..." : "Send Message"} <Send className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, value, onChange, type = "text" }: { name: string; label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
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
          {[
            { Icon: Github, href: GITHUB_URL },
            { Icon: Linkedin, href: "#" },
            { Icon: Mail, href: "mailto:Kavibharathi.71382402060@sritcbe.ac.in" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="glass glass-hover icon-touch flex size-9 items-center justify-center rounded-full text-primary">
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
