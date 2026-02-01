import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  FileText,
  Mail,
  PhoneCall,
  ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnfrageForm } from "../components/AnfrageForm.jsx";
import { Button } from "../components/Button.jsx";
import { Container } from "../components/Container.jsx";

function getEnv(key, fallback = "") {
  const value = import.meta.env?.[key];
  return typeof value === "string" && value.trim().length > 0 ? value : fallback;
}

function Feature({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{children}</p>
        </div>
      </div>
    </div>
  );
}

function PriceCard({ title, price, subtitle, items }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-slate-900">{price}</div>
          <div className="text-xs text-slate-500">zzgl. ggf. MwSt.</div>
        </div>
      </div>

      <ul className="mt-5 grid gap-2 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2 className="mt-0.5 size-4 text-emerald-600" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Button as="a" href="#anfrage" className="mt-6 w-full">
        Anfrage starten <ArrowRight className="size-4" aria-hidden="true" />
      </Button>
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <summary className="cursor-pointer list-none font-semibold text-slate-900">
        <span className="inline-flex items-center gap-2">
          <BadgeCheck className="size-4 text-brand-700" aria-hidden="true" />
          {q}
        </span>
      </summary>
      <p className="mt-3 text-sm leading-6 text-slate-600">{a}</p>
    </details>
  );
}

export default function Home() {
  const phone = getEnv("VITE_PHONE", "+49 911 XXXXXXX");
  const email = getEnv("VITE_EMAIL", "info@qm-guru.de");

  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -left-40 -top-40 size-[520px] rounded-full bg-brand-500 blur-3xl" />
          <div className="absolute -right-40 top-20 size-[520px] rounded-full bg-cyan-400 blur-3xl" />
        </div>

        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                <CalendarClock className="size-4" aria-hidden="true" />
                Express für Ausschreibungen • Ziel: 2–3 Wochen
              </div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                ISO 9001 Zertifizierung in 2 Wochen
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                Auch ohne vorhandene Dokumentation. Komplett-Service: QM-Handbuch, interne Auditvorbereitung und
                Unterstützung bis zur Zertifizierung.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button as="a" href="#anfrage">
                  Express-Anfrage starten <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button as="a" href="#preise" variant="ghost" className="bg-white/10 text-white hover:bg-white/15">
                  Preise ansehen
                </Button>
              </div>

              <div className="mt-8 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-emerald-300" aria-hidden="true" />
                  Geld-zurück bei Portal-Ablehnung
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="size-4 text-emerald-300" aria-hidden="true" />
                  Doku wird für Sie erstellt
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-300" aria-hidden="true" />
                  Klarer Fahrplan & feste Schritte
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-base font-semibold">Sofort-Kontakt</h2>
              <p className="mt-2 text-sm text-white/75">Wenn es brennt: kurz anrufen oder mailen.</p>
              <div className="mt-6 grid gap-3 text-sm">
                <a className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10" href={`tel:${phone}`}>
                  <PhoneCall className="size-4" aria-hidden="true" />
                  <span className="font-semibold">{phone}</span>
                </a>
                <a className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10" href={`mailto:${email}`}>
                  <Mail className="size-4" aria-hidden="true" />
                  <span className="font-semibold">{email}</span>
                </a>
              </div>
              <p className="mt-5 text-xs text-white/60">
                Hinweis: Details & Rechtstexte findest du unter <Link className="underline" to="/datenschutz">Datenschutz</Link>{" "}
                und <Link className="underline" to="/impressum">Impressum</Link>.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            <Feature icon={CalendarClock} title="Schneller Zeitraum">
              Fokus auf Umsetzung & Nachweisführung – ideal, wenn eine Ausschreibung in Tagen/Wochen ansteht.
            </Feature>
            <Feature icon={FileText} title="Dokumentation inklusive">
              Wir erstellen QM-Handbuch & Kernprozesse auf Basis deiner echten Abläufe – kein Template-Chaos.
            </Feature>
            <Feature icon={ShieldCheck} title="Audit-ready">
              Interne Auditvorbereitung + Checklisten, damit du im externen Audit sicher durchkommst.
            </Feature>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">So läuft die Express-Zertifizierung</h2>
              <p className="mt-4 text-slate-700">
                Ein klarer Ablauf, damit du schnell ein belastbares Ergebnis bekommst – ohne unnötige Schleifen.
              </p>

              <ol className="mt-6 grid gap-3 text-sm text-slate-700">
                {[
                  "Kickoff (30–60 min): Ziele, Scope, Deadline, Prozesse",
                  "Dokumentationserstellung: QM-Handbuch + Kernprozesse",
                  "Interne Auditvorbereitung: Lücken schließen, Nachweise sammeln",
                  "Zertifizierungsvorbereitung & Begleitung bis zur Ausstellung"
                ].map((step, idx) => (
                  <li key={step} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="inline-flex size-8 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-700">
                      {idx + 1}
                    </span>
                    <span className="leading-6">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <AnfrageForm />
            </div>
          </div>
        </Container>
      </section>

      <section id="preise" className="bg-slate-50 py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Pakete & Preise</h2>
            <p className="text-slate-700">Richtwerte nach Unternehmensgröße – final nach Scope & Stand der Prozesse.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <PriceCard
              title="Bis 5 MA"
              price="2.500€"
              subtitle="Express-Startpaket"
              items={["QM-Handbuch", "Prozesslandschaft", "Audit-Checkliste"]}
            />
            <PriceCard
              title="6–20 MA"
              price="3.500€"
              subtitle="Für wachsende Teams"
              items={["QM-Doku", "Umsetzungssprints", "Nachweise & Training"]}
            />
            <PriceCard
              title="21–50 MA"
              price="5.500€"
              subtitle="Mehr Prozesse, mehr Nachweise"
              items={["Prozess-Set", "Auditvorbereitung", "Begleitung bis Audit"]}
            />
            <PriceCard
              title="51–100 MA"
              price="7.000€"
              subtitle="Komplexere Organisation"
              items={["QM-System Setup", "Rollout-Support", "Audit-Readiness"]}
            />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">FAQ</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <FAQ
              q="Wie schnell geht es wirklich?"
              a="In vielen Fällen 2–3 Wochen, abhängig von Verfügbarkeit, Scope und wie schnell Informationen/Nachweise geliefert werden."
            />
            <FAQ
              q="Brauche ich schon eine QM-Dokumentation?"
              a="Nein. Wir erstellen die Dokumentation auf Basis deiner realen Abläufe. Du erklärst nur, wie ihr arbeitet."
            />
            <FAQ
              q="Wird das bei Ausschreibungsportalen akzeptiert?"
              a="In der Praxis sehr häufig. Wenn ein Portal das Zertifikat nicht akzeptiert, klären wir das gemeinsam (Details nach individueller Vereinbarung)."
            />
            <FAQ
              q="Was muss ich intern leisten?"
              a="Kurz: Ansprechpartner, Prozessinfos, Nachweise. Den Rest (Doku, Struktur, Checklisten) übernehmen wir."
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-10">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">Noch Fragen?</p>
            <p className="text-sm text-slate-600">Ruf an oder schreib uns – wir sind schnell erreichbar.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button as="a" href={`tel:${phone}`} variant="secondary">
              <PhoneCall className="size-4" aria-hidden="true" /> {phone}
            </Button>
            <Button as="a" href={`mailto:${email}`} variant="ghost" className="border border-slate-200 bg-white">
              <Mail className="size-4" aria-hidden="true" /> {email}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
