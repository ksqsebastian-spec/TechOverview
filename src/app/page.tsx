type Project = {
  name: string;
  vercelProject: string;
  repo: string;
  purpose: string;
  stack: string;
  status: "live" | "prototype" | "error";
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
        purpose: "ROI-Rechner & Marketing Flywheel Dashboard mit Kanalallokation, Best Practices Checkliste, WhatsApp Automation",
        stack: "Next.js, TypeScript",
        status: "live",
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
        purpose: "Recruiting-Verwaltung: Bewerbermanagement, Stellenanzeigen-Admin",
        stack: "Next.js, TypeScript, Turbopack",
        status: "live",
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
        purpose: "Ausschreibungen-Dashboard: VOB-Tender-Monitoring, Firmen-Matching, Trend-Analyse, PDF-Export, Sortierung, Angefordert-Status",
        stack: "Next.js, TypeScript, Supabase, Turbopack",
        status: "live",
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
        purpose: "Affiliate-Verwaltung: Kunde-gruppierte Ansicht, Status-Workflow (offen/erledigt/ausgezahlt), Auszahlung, Archiv, E-Mail-Konfigurator, PDF-Quittungen",
        stack: "Next.js, TypeScript, Supabase, jsPDF, Turbopack",
        status: "live",
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
        purpose: "Empfehlungs-Landingpage: Formular fuer Empfehlungsgeber, E-Mail/Gmail/PDF-Versand, Bank/PayPal-Optionen, Schritt-fuer-Schritt-Anleitung",
        stack: "Next.js, TypeScript, jsPDF, Turbopack",
        status: "live",
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
        purpose: "Mitarbeiter-Empfehlungsprogramm: Empfehlungs-Landingpage fuer Recruiting, E-Mail/Gmail/PDF-Versand",
        stack: "Next.js, TypeScript, Turbopack",
        status: "live",
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
        purpose: "Google-Bewertungs-Wizard: QR-Code-basiert, 7 Firmen mit branchenspezifischen Beschreibungen, Bewertungs-Generator, QR-Export/Druck",
        stack: "Next.js, TypeScript, Turbopack",
        status: "live",
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
        purpose: "QR-Review-Generator Prototyp: 9 Firmen, Admin-Panel, DE/EN, AI-Bewertungstexte",
        stack: "Next.js, TypeScript",
        status: "prototype",
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
        purpose: "B2B-Lead-Management: CSV/Apollo-Import, Smart Auto-Mapping, E-Mail-Generierung, Supabase-Auth, Prompt-Builder",
        stack: "Next.js, TypeScript, Supabase, Turbopack",
        status: "live",
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
        purpose: "Flottenmanagement: Fahrzeuge, Dokumente, Wartung, Fuehrerscheinkontrolle, UVV-Kontrolle, Mitarbeiter-Verwaltung",
        stack: "Next.js, TypeScript, Supabase",
        status: "live",
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
        purpose: "Fuhrpark-Prototyp: Vanilla JS, VIN-Decoder, Kalender, CSV-Import, Passwortschutz, DE/EN",
        stack: "HTML/JS, Supabase, Vercel Functions",
        status: "prototype",
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
        purpose: "Baudokumenten-Automatisierung: Angebote, Rechnungen, Mahnungen, LV, Nachtraege, Aufmasse - DIN 5008, GoBD-konform",
        stack: "Python, FastAPI, Jinja2, Supabase",
        status: "live",
        totalDeployments: 5,
        productionDeployments: 4,
        latestDeployment: "2026-02-17",
        created: "2026-02-17",
        visibility: "public",
      },
    ],
  },
];

const totalProjects = companies.reduce((s, c) => s + c.projects.length, 0);
const totalDeployments = companies.reduce(
  (s, c) => s + c.projects.reduce((ps, p) => ps + p.totalDeployments, 0),
  0
);
const liveProjects = companies.reduce(
  (s, c) => s + c.projects.filter((p) => p.status === "live").length,
  0
);

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles = {
    live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    prototype: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    error: "bg-red-500/15 text-red-400 border-red-500/30",
  };
  const labels = { live: "Live", prototype: "Prototyp", error: "Fehler" };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "live"
            ? "bg-emerald-400"
            : status === "prototype"
            ? "bg-amber-400"
            : "bg-red-400"
        }`}
      />
      {labels[status]}
    </span>
  );
}

function VisibilityBadge({ visibility }: { visibility: "public" | "private" }) {
  return visibility === "private" ? (
    <span className="inline-flex items-center gap-1 rounded-full border border-zinc-700 bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-400">
      Private
    </span>
  ) : null;
}

export default function Dashboard() {
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
              <p className="text-sm text-zinc-500">Live</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-400">
                {liveProjects}
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <p className="text-sm text-zinc-500">Firmen</p>
              <p className="mt-1 text-2xl font-semibold text-white">
                {companies.length}
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
                {company.projects.map((project) => (
                  <div
                    key={project.vercelProject}
                    className="group rounded-xl border border-zinc-800 bg-zinc-900 p-5 transition-colors hover:border-zinc-700"
                  >
                    {/* Project name + status */}
                    <div className="mb-3 flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-white">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <VisibilityBadge visibility={project.visibility} />
                        <StatusBadge status={project.status} />
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
                      <span title="Total Deployments">
                        {project.totalDeployments} Deployments
                      </span>
                      <span className="text-zinc-700">|</span>
                      <span title="Production Deployments">
                        {project.productionDeployments} Prod
                      </span>
                      <span className="ml-auto text-zinc-600">
                        {project.latestDeployment}
                      </span>
                    </div>

                    {/* Links */}
                    <div className="mt-3 flex gap-2 text-xs">
                      <span className="rounded bg-zinc-800 px-2 py-1 text-zinc-400">
                        {project.repo}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-600">
          Stand: 27. Maerz 2026 &middot; Daten aus Vercel API
        </footer>
      </div>
    </div>
  );
}
