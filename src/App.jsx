import { useState } from "react";
import Background from "./components/Background";
import HeroCard from "./components/HeroCard";
import ProjectCard, { DetailOverlay, DetailButton } from "./components/ProjectCard";
import SkillsCard from "./components/SkillsCard";
import ContactCard from "./components/ContactCard";
import RookieTerminal from "./components/RookieTerminal";
import RookieRobot from "./components/RookieRobot";
import { Analytics } from "@vercel/analytics/react";

const FITLIP_DETAILS = [
  "Gemini meal plans clamped to budgets via Zod + correction algorithm",
  "BullMQ/Redis background jobs for weekly auto-tuning",
  "Context-aware AI nutrition chat (knows your health profile)",
  "42+ REST endpoints · JWT, Google OAuth, OTP recovery",
];

const HIREKARLO_DETAILS = [
  "Gemini parses PDF/DOCX resumes → scores 0–100 instantly",
  "Kanban pipeline with interview scheduling + email alerts",
  "Recruiter-scoped data isolation (strict ownership checks)",
  "Live in production · public no-login apply links",
];

const ROOKIE_DETAILS = [
  "Local Llama 3.2 extracts meaning → SQLite + NetworkX graph",
  "Hinglish-tuned ChromaDB vector search for semantic memory",
  "Debug session miner (Error → Search → Fix tracking)",
  "MCP server exposes memory as tools for external AI clients",
  "Privacy-first: regex-scrubs secrets before storage",
];

const CONTEXTGUARD_DETAILS = [
  "Manifest V3 Chrome extension with zero build overhead",
  "Monitors token degradation across ChatGPT, Claude, Gemini",
  "Heuristic parsers estimate context-window risk in real-time",
  "Snapshot & restore structured project context directly into chat",
];

function App() {
  const [rookieOpen, setRookieOpen] = useState(false);
  const [contextGuardOpen, setContextGuardOpen] = useState(false);

  return (
    <main className="min-h-dvh p-3 pb-10 text-pine md:p-4 lg:h-dvh lg:overflow-hidden">
      <Background />
      <Analytics />
      <div className="bento-grid relative z-10 mx-auto grid h-full max-w-[1400px] grid-cols-2 gap-3 md:gap-4 lg:grid-cols-6 lg:grid-rows-4">
        
        {/* ── ROWS 1–2 ── */}
        <div className="col-span-2 row-span-2 min-h-0 lg:col-span-3">
          <HeroCard />
        </div>
        
        <div className="col-span-2 flex min-h-0 items-center justify-center py-2 lg:col-span-1 lg:row-span-2 lg:py-0">
          <ProjectCard
            phone
            title="Fitlip"
            badge="LIVE"
            tagline="AI health assistant"
            tags={["React Native", "Node.js", "MongoDB", "Gemini"]}
            img="/images/fitlip.jpg"
            alt="Fitlip mobile app screenshot"
            link="https://github.com/amansamani/fitlip-releases/releases/download/Create_new_tag_v1.0.0_on_publish/fitlip.apk"
            details={FITLIP_DETAILS}
          />
        </div>
        
        <div className="col-span-2 row-span-2 min-h-0 lg:col-span-2">
          <ProjectCard
            title="HireKarlo"
            badge="LIVE"
            badgeTone="lime"
            tagline="AI applicant tracking system"
            tags={["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Gemini"]}
            img="/images/hirekarlo.png"
            alt="HireKarlo landing page screenshot"
            link="https://hirekarlo.amansamani.me"
            details={HIREKARLO_DETAILS}
          />
        </div>

        {/* ── ROW 3 ── */}
        <div className="col-span-2 min-h-0">
          <SkillsCard />
        </div>
        
        <section className="bento-card group col-span-2 min-h-0 p-4 lg:col-span-2 lg:row-span-2">
          <div className="flex items-center justify-between gap-2">
            <h3 className="card-label">Rookie Agent · Local AI Dev-Memory</h3>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="chip">PRIVATE</span>
              <DetailButton open={rookieOpen} onClick={() => setRookieOpen((v) => !v)} />
            </div>
          </div>
          {/* 🤖 robot + terminal, now with breathing room */}
          <div className="mt-3 flex flex-col items-center gap-4 sm:min-h-0 sm:flex-1 sm:flex-row sm:items-stretch">
            <RookieRobot />
            <RookieTerminal />
          </div>
          <div className="mt-3 flex flex-wrap gap-1">
            <span className="chip">Python</span>
            <span className="chip">Ollama</span>
            <span className="chip">ChromaDB</span>
            <span className="chip">NetworkX</span>
            <span className="chip">MCP</span>
          </div>
          <DetailOverlay details={ROOKIE_DETAILS} open={rookieOpen} onClose={() => setRookieOpen(false)} />
        </section>

        {/* ── CONTEXTGUARD (Replaced Fraud Detection) ── */}
        <section className="bento-card group col-span-1 min-h-0 justify-between overflow-hidden p-4 lg:col-span-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="card-label">ContextGuard</h3>
            <DetailButton open={contextGuardOpen} onClick={() => setContextGuardOpen((v) => !v)} />
          </div>

          {/* 🖼️ ContextGuard screenshot */}
          <div className="relative mt-2 min-h-0 flex-1 overflow-hidden rounded-lg border border-pine/15 bg-pine/5">
            <img
              src="/images/contextguard.png"
              alt="ContextGuard widget estimating context usage in an AI chat"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mt-2 flex flex-wrap gap-1">
            <span className="chip">Chrome MV3</span>
            <span className="chip">JavaScript</span>
          </div>
          <DetailOverlay details={CONTEXTGUARD_DETAILS} open={contextGuardOpen} onClose={() => setContextGuardOpen(false)} />
        </section>

        <section className="bento-card col-span-1 min-h-0 justify-between p-4 lg:col-span-1">
          <h3 className="card-label">Now</h3>
          <p className="text-[11px] leading-relaxed text-pine/70">
            <span className="font-semibold text-pine">Building</span> Rookie Agent & ContextGuard ·{" "}
            <span className="font-semibold text-pine">open to</span> SDE roles from 2026.
          </p>
          <p className="font-accent italic text-sm text-pine/60">"ship things that hold up."</p>
        </section>

        {/* ── ROW 4 ── */}
        <div className="col-span-2 min-h-0">
          <ContactCard />
        </div>
        <section className="bento-card col-span-2 min-h-0 p-4 lg:col-span-2">
          <h3 className="card-label">Background</h3>
          <span
            aria-hidden
            className="absolute right-4 top-4 rotate-3 rounded-md border-2 border-dashed border-pine/40 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-pine/60 opacity-70"
          >
            Class of 2026
          </span>
          <div className="mt-2 flex flex-1 flex-col justify-center gap-2.5">
            <div>
              <p className="text-[11px] font-semibold">B.Tech Computer Science</p>
              <p className="text-[10px] leading-snug text-pine/60">Babu Banarsi Das University, Lucknow · 2026 · GPA 7.6/10</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold">Project Lead</p>
              <p className="text-[10px] leading-snug text-pine/60">Led 4-member cross-functional capstone team</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold">Problem Solver</p>
              <p className="text-[10px] leading-snug text-pine/60">LeetCode in Java · arrays, strings, DP</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;