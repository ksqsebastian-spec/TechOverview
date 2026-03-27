"use client";

import { useState, useEffect, useCallback } from "react";

type Project = {
  name: string;
  vercelProject: string;
  repo: string;
  url: string;
  purpose: string;
  stack: string;
  totalDeployments: number;
  productionDeployments: number;
  latestDeployment: string;
  created: string;
  visibility: "public" | "private";
};

type Company = {
  name: string;
  color: string;
  description: string;
  projects: Project[];
};

type ProjectPhase = "wip" | "done";

type UserData = {
  [vercelProject: string]: {
    phase: ProjectPhase;
    notes: string;
  };
};

const companies: Company[] = [
  {
    name: "Gruppenwerk",
    color: "#3B82F6",
    description: "Bauunternehmen / Construction & Renovation",
    projects: [
      {
        name: "GW Dienstleistung ROI",
        vercelProject: "gw-dienstleistung-roi",
        repo: "GWDienstleistungROI",
        url: "https://gw-dienstleistung-roi.vercel.app",
        purpose: "ROI-Rechner & Marketing Flywheel Dashboard mit Kanalallokation, Best Practices Checkliste, WhatsApp Automation",
        stack: "Next.js, TypeScript",
        totalDeployments: 9,
        productionDeployments: 4,
        latestDeployment: "2026-03-25",
        created: "2026-03-24",
        visibility: "public",
      },
      {
        name: "GW Recruiting Admin",
        vercelProject: "gw-recruiting-admin",
        repo: "GWRecruitingAdmin",
        url: "https://gw-recruiting-admin.vercel.app",
        purpose: "Recruiting-Verwaltung: Bewerbermanagement, Stellenanzeigen-Admin",
        stack: "Next.js, TypeScript, Turbopack",
        totalDeployments: 3,
        productionDeployments: 2,
        latestDeployment: "2026-03-14",
        created: "2026-03-14",
        visibility: "public",
      },
      {
        name: "VOB Dashboard",
        vercelProject: "vob-dashboard",
        repo: "VOBDashboard",
        url: "https://vob-dashboard.vercel.app",
        purpose: "Ausschreibungen-Dashboard: VOB-Tender-Monitoring, Firmen-Matching, Trend-Analyse, PDF-Export, Sortierung, Angefordert-Status",
        stack: "Next.js, TypeScript, Supabase, Turbopack",
        totalDeployments: 20,
        productionDeployments: 10,
        latestDeployment: "2026-03-18",
        created: "2026-03-17",
        visibility: "public",
      },
    ],
  },
  {
    name: "Seehafer Elemente",
    color: "#F59E0B",
    description: "Tischlerei / Doors & Windows / Fenster & Tueren",
    projects: [
      {
        name: "Affiliate Admin Site",
        vercelProject: "seehafer-affiliate-admin-site",
        repo: "SeehaferAffiliateAdminSite",
        url: "https://seehafer-affiliate-admin-site.vercel.app",
        purpose: "Affiliate-Verwaltung: Kunde-gruppierte Ansicht, Status-Workflow (offen/erledigt/ausgezahlt), Auszahlung, Archiv, E-Mail-Konfigurator, PDF-Quittungen",
        stack: "Next.js, TypeScript, Supabase, jsPDF, Turbopack",
        totalDeployments: 20,
        productionDeployments: 10,
        latestDeployment: "2026-03-14",
        created: "2026-03-03",
        visibility: "public",
      },
      {
        name: "Affiliate Referrer Site",
        vercelProject: "seehafer-affiliate-referrer-site",
        repo: "SeehaferAffiliateReferrerSite",
        url: "https://seehafer-affiliate-referrer-site.vercel.app",
        purpose: "Empfehlungs-Landingpage: Formular fuer Empfehlungsgeber, E-Mail/Gmail/PDF-Versand, Bank/PayPal-Optionen, Schritt-fuer-Schritt-Anleitung",
        stack: "Next.js, TypeScript, jsPDF, Turbopack",
        totalDeployments: 20,
        productionDeployments: 9,
        latestDeployment: "2026-03-03",
        created: "2026-03-03",
        visibility: "public",
      },
      {
        name: "Recruiting Referral",
        vercelProject: "seehafer-recruiting-referral",
        repo: "SeehaferRecruitingReferral",
        url: "https://seehafer-recruiting-referral.vercel.app",
        purpose: "Mitarbeiter-Empfehlungsprogramm: Empfehlungs-Landingpage fuer Recruiting, E-Mail/Gmail/PDF-Versand",
        stack: "Next.js, TypeScript, Turbopack",
        totalDeployments: 11,
        productionDeployments: 6,
        latestDeployment: "2026-03-03",
        created: "2026-03-03",
        visibility: "public",
      },
    ],
  },
  {
    name: "Multi-Company Tools",
    color: "#8B5CF6",
    description: "Firmenuebergreifende Werkzeuge fuer mehrere Betriebe",
    projects: [
      {
        name: "Wertungshelfer (ReviewBot)",
        vercelProject: "review-bot-p7rw",
        repo: "ReviewBot",
        url: "https://review-bot-p7rw.vercel.app",
        purpose: "Google-Bewertungs-Wizard: QR-Code-basiert, 7 Firmen mit branchenspezifischen Beschreibungen, Bewertungs-Generator, QR-Export/Druck",
        stack: "Next.js, TypeScript, Turbopack",
        totalDeployments: 20,
        productionDeployments: 10,
        latestDeployment: "2026-03-07",
        created: "2026-01-26",
        visibility: "public",
      },
      {
        name: "Review Testing",
        vercelProject: "review-testing",
        repo: "Review-Testing",
        url: "https://review-testing.vercel.app",
        purpose: "QR-Review-Generator Prototyp: 9 Firmen, Admin-Panel, DE/EN, AI-Bewertungstexte",
        stack: "Next.js, TypeScript",
        totalDeployments: 5,
        productionDeployments: 5,
        latestDeployment: "2026-01-22",
        created: "2026-01-22",
        visibility: "public",
      },
      {
        name: "B2B Helper",
        vercelProject: "b2-b-helper",
        repo: "B2BHelper",
        url: "https://b2-b-helper.vercel.app",
        purpose: "B2B-Lead-Management: CSV/Apollo-Import, Smart Auto-Mapping, E-Mail-Generierung, Supabase-Auth, Prompt-Builder",
        stack: "Next.js, TypeScript, Supabase, Turbopack",
        totalDeployments: 20,
        productionDeployments: 10,
        latestDeployment: "2026-02-20",
        created: "2026-02-20",
        visibility: "public",
      },
      {
        name: "Fuhrpark Management",
        vercelProject: "fuhrpark-management",
        repo: "FuhrparkManagement",
        url: "https://fuhrpark-management.vercel.app",
        purpose: "Flottenmanagement: Fahrzeuge, Dokumente, Wartung, Fuehrerscheinkontrolle, UVV-Kontrolle, Mitarbeiter-Verwaltung",
        stack: "Next.js, TypeScript, Supabase",
        totalDeployments: 20,
        productionDeployments: 8,
        latestDeployment: "2026-02-06",
        created: "2026-01-27",
        visibility: "private",
      },
      {
        name: "Fuhrpark Test",
        vercelProject: "fuhrpark-test",
        repo: "FuhrparkTest",
        url: "https://fuhrpark-test.vercel.app",
        purpose: "Fuhrpark-Prototyp: Vanilla JS, VIN-Decoder, Kalender, CSV-Import, Passwortschutz, DE/EN",
        stack: "HTML/JS, Supabase, Vercel Functions",
        totalDeployments: 20,
        productionDeployments: 10,
        latestDeployment: "2026-01-22",
        created: "2026-01-18",
        visibility: "public",
      },
      {
        name: "BauDok (AutoTest)",
        vercelProject: "auto-test-ndge",
        repo: "AutoTest",
        url: "https://auto-test-ndge.vercel.app",
        purpose: "Baudokumenten-Automatisierung: Angebote, Rechnungen, Mahnungen, LV, Nachtraege, Aufmasse - DIN 5008, GoBD-konform",
        stack: "Python, FastAPI, Jinja2, Supabase",
        totalDeployments: 5,
        productionDeployments: 4,
        latestDeployment: "2026-02-17",
        created: "2026-02-17",
        visibility: "public",
      },
    ],
  },
];

const allProjects = companies.flatMap((c) => c.projects);
const totalProjects = allProjects.length;
const totalDeployments = allProjects.reduce((s, p) => s + p.totalDeployments, 0);

function PhaseBadge({
  phase,
  onClick,
}: {
  phase: ProjectPhase;
  onClick: () => void;
}) {
  const styles = {
    wip: "bg-amber-500/15 text-amber-400 border-amber-500/30 hover:bg-amber-500/25",
    done: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/25",
  };
  const labels = { wip: "WIP", done: "Done" };
  return (
    <button
      onClick={onClick}
      className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors ${styles[phase]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          phase === "done" ? "bg-emerald-400" : "bg-amber-400"
        }`}
      />
      {labels[phase]}
    </button>
  );
}

function VisibilityBadge({ visibility }: { visibility: "public" | "private" }) {
  return visibility === "private" ? (
    <span className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
      Private
    </span>
  ) : null;
}

const STORAGE_KEY = "techoverview-data";

function loadData(): UserData {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveData(data: UserData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export default function Dashboard() {
  const [userData, setUserData] = useState<UserData>({});
  const [expandedNote, setExpandedNote] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setUserData(loadData());
    setLoaded(true);
  }, []);

  const getPhase = useCallback(
    (id: string): ProjectPhase => userData[id]?.phase ?? "wip",
    [userData]
  );

  const getNotes = useCallback(
    (id: string): string => userData[id]?.notes ?? "",
    [userData]
  );

  const togglePhase = (id: string) => {
    setUserData((prev) => {
      const current = prev[id]?.phase ?? "wip";
      const next: UserData = {
        ...prev,
        [id]: { ...prev[id], phase: current === "wip" ? "done" : "wip", notes: prev[id]?.notes ?? "" },
      };
      saveData(next);
      return next;
    });
  };

  const updateNotes = (id: string, notes: string) => {
    setUserData((prev) => {
      const next: UserData = {
        ...prev,
        [id]: { ...prev[id], phase: prev[id]?.phase ?? "wip", notes },
      };
      saveData(next);
      return next;
    });
  };

  const wipCount = allProjects.filter((p) => getPhase(p.vercelProject) === "wip").length;
  const doneCount = allProjects.filter((p) => getPhase(p.vercelProject) === "done").length;

  if (!loaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-zinc-500">Laden...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Publishing Dashboard
          </h1>
          <p className="mt-2 text-zinc-400">
            Alle Vercel-Publishings sortiert nach Firma und Zweck
          </p>

          {/* Summary Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-500">Projekte</p>
              <p className="mt-1 text-2xl font-semibold text-white">
                {totalProjects}
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-500">Deployments</p>
              <p className="mt-1 text-2xl font-semibold text-white">
                {totalDeployments}+
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-500">WIP</p>
              <p className="mt-1 text-2xl font-semibold text-amber-400">
                {wipCount}
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-500">Done</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-400">
                {doneCount}
              </p>
            </div>
          </div>
        </header>

        {/* Companies */}
        <div className="space-y-10">
          {companies.map((company) => (
            <section key={company.name}>
              {/* Company Header */}
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: company.color }}
                />
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {company.name}
                  </h2>
                  <p className="text-sm text-zinc-500">{company.description}</p>
                </div>
                <span className="ml-auto rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400">
                  {company.projects.length}{" "}
                  {company.projects.length === 1 ? "Projekt" : "Projekte"}
                </span>
              </div>

              {/* Project Cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {company.projects.map((project) => {
                  const id = project.vercelProject;
                  const phase = getPhase(id);
                  const notes = getNotes(id);
                  const isExpanded = expandedNote === id;

                  return (
                    <div
                      key={id}
                      className={`group rounded-xl border p-5 transition-colors ${
                        phase === "done"
                          ? "border-emerald-900/40 bg-zinc-900/60"
                          : "border-zinc-800 bg-zinc-900"
                      } hover:border-zinc-600`}
                    >
                      {/* Project name + phase toggle */}
                      <div className="mb-3 flex items-start justify-between gap-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-white hover:underline"
                        >
                          {project.name}
                        </a>
                        <div className="flex items-center gap-1.5">
                          <VisibilityBadge visibility={project.visibility} />
                          <PhaseBadge
                            phase={phase}
                            onClick={() => togglePhase(id)}
                          />
                        </div>
                      </div>

                      {/* Purpose */}
                      <p className="mb-4 text-sm leading-relaxed text-zinc-400">
                        {project.purpose}
                      </p>

                      {/* Stack */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {project.stack.split(", ").map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-zinc-800 px-2 py-0.5 text-[11px] font-medium text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Stats row */}
                      <div className="flex items-center gap-4 border-t border-zinc-800 pt-3 text-xs text-zinc-500">
                        <span>{project.totalDeployments} Deployments</span>
                        <span className="text-zinc-700">|</span>
                        <span>{project.productionDeployments} Prod</span>
                        <span className="ml-auto text-zinc-600">
                          {project.latestDeployment}
                        </span>
                      </div>

                      {/* Notes section */}
                      <div className="mt-3 border-t border-zinc-800 pt-3">
                        <button
                          onClick={() =>
                            setExpandedNote(isExpanded ? null : id)
                          }
                          className="flex w-full items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300"
                        >
                          <span className="font-medium">Notizen</span>
                          {notes && !isExpanded && (
                            <span className="truncate text-zinc-600 italic">
                              {notes.slice(0, 60)}
                              {notes.length > 60 ? "..." : ""}
                            </span>
                          )}
                          <span className="ml-auto">
                            {isExpanded ? "\u25B2" : "\u25BC"}
                          </span>
                        </button>
                        {isExpanded && (
                          <textarea
                            value={notes}
                            onChange={(e) => updateNotes(id, e.target.value)}
                            placeholder="Notizen hier eingeben..."
                            rows={3}
                            className="mt-2 w-full resize-y rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:border-zinc-500 focus:outline-none"
                          />
                        )}
                      </div>

                      {/* Repo + link */}
                      <div className="mt-3 flex items-center gap-2 text-xs">
                        <span className="rounded bg-zinc-800 px-2 py-1 text-zinc-400">
                          {project.repo}
                        </span>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto text-zinc-600 transition-colors hover:text-zinc-400"
                        >
                          Seite oeffnen &rarr;
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-600">
          Stand: 27. Maerz 2026 &middot; Daten aus Vercel API &middot; Notizen
          werden lokal gespeichert
        </footer>
      </div>
    </div>
  );
}
