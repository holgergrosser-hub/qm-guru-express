import { useState } from 'react'
import { Clock, CheckCircle, AlertCircle, Phone, Mail, ArrowRight } from 'lucide-react'
import AnfrageForm from './components/AnfrageForm'

function App() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen">

      {/* Sticky Urgency Bar */}
      <div className="bg-primary-500 text-white py-2 text-center text-sm font-bold sticky top-0 z-50">
        ⏰ Ausschreibung läuft? Wir schaffen das ISO 9001 Zertifikat in 2 Wochen!
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">

          {/* Breadcrumb */}
          <nav className="text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-400">
              <li><a href="https://qm-guru.de" className="hover:text-white">QM-Guru</a></li>
              <li>/</li>
              <li className="text-white font-semibold">Express ISO 9001 Zertifizierung</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Text */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-primary-500/20 rounded-full
                            border border-primary-500/30 text-primary-300 text-sm font-bold animate-pulse">
                🚨 EXPRESS ISO 9001 ZERTIFIZIERUNG
              </div>

              <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
                ISO 9001 Zertifikat in{' '}
                <span className="text-primary-400">2 Wochen</span>{' '}
                auch ohne Dokumentation
              </h1>

              <h2 className="text-2xl text-gray-300 mb-8 font-semibold">
                Ausschreibung läuft? Portal braucht ISO-Zertifikat?<br />
                <span className="text-white">Wir erstellen QM-Dokumentation, führen internes Audit durch und zertifizieren Sie.</span>
              </h2>

              {/* USPs */}
              <ul className="space-y-4 mb-8">
                {[
                  'Express-Zertifizierung auch OHNE vorhandene QM-Dokumentation',
                  'QM-Handbuch, Verfahrensanweisungen & Prozesse erstellen wir',
                  'Internes Audit & Vorbereitung auf Zertifizierungsaudit inklusive',
                  'ISO 9001 Zertifikat in 2-3 Wochen statt 6 Monaten beim TÜV'
                ].map((usp, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-secondary-500 flex-shrink-0" />
                    <span className="text-lg">{usp}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="btn-primary group"
                >
                  <Clock className="inline-block w-5 h-5 mr-2" />
                  Jetzt Express-Anfrage stellen
                </button>

                <a
                  href={`tel:${import.meta.env.VITE_PHONE}`}
                  className="bg-white hover:bg-gray-50 text-primary-600 font-semibold px-8 py-4 rounded-lg border-2 border-primary-500 transition-all duration-200 text-center"
                >
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Sofort anrufen
                </a>
              </div>

              <p className="text-sm text-gray-400 mt-4">
                ⚡ Rückmeldung innerhalb 2 Stunden • Keine Abofalle
              </p>
            </div>

            {/* Right: Urgency Box */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">

              <div className="text-center mb-6">
                <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  TYPISCHE KUNDENSITUATION
                </div>
                <h3 className="text-2xl font-bold">So läuft's ab:</h3>
              </div>

              <div className="space-y-4">

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-red-900">HEUTE</div>
                      <p className="text-sm text-red-700">
                        "Ausschreibung gefunden. Portal verlangt ISO-Zertifikat.
                        Deadline in 3 Wochen. Ich habe KEINE Dokumentation."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-blue-900">WOCHE 1-2</div>
                      <p className="text-sm text-blue-700">
                        QM-Guru erstellt Ihre komplette Dokumentation, führt internes Audit durch
                        und bereitet Sie auf das Zertifizierungsaudit vor
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-bold text-green-900">WOCHE 3</div>
                      <p className="text-sm text-green-700">
                        Zertifizierungsaudit (3-4h) → Zertifikat →
                        Sie laden es im Portal hoch. GESCHAFFT! ✅
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <div className="text-3xl font-black text-primary-600 mb-2">
                  Ab 2.500€
                </div>
                <p className="text-sm text-gray-600">
                  All-inclusive: Dokumentation + Internes Audit + Vorbereitung + Zertifizierung
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Kennen Sie das Problem?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">⏰</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ausschreibung läuft JETZT</h3>
              <p className="text-gray-600">
                Sie haben eine lukrative Ausschreibung gefunden.
                Aber das Portal verlangt ISO-Zertifikat-Upload. Deadline in 2-4 Wochen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Keine Dokumentation</h3>
              <p className="text-gray-600">
                Sie arbeiten professionell, aber haben kein formales QM-System.
                Kein QM-Handbuch, keine Verfahrensanweisungen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🚫</span>
              </div>
              <h3 className="text-xl font-bold mb-3">TÜV zu langsam</h3>
              <p className="text-gray-600">
                Der TÜV braucht 3-6 Monate. Bis dahin ist die Ausschreibung längst vergeben.
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-red-50 border-2 border-red-200 rounded-xl p-6 max-w-2xl">
              <p className="text-lg font-bold text-red-900 mb-2">
                ❌ Ohne Zertifikat = Keine Teilnahme
              </p>
              <p className="text-red-700">
                Portale wie Jagger, Ariba & Co. filtern automatisch aus.
                Ihre Qualität zählt nicht – nur das hochgeladene Zertifikat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Der QM-Guru Express-Prozess: Dokumentation bis Zertifikat
            </h2>
            <p className="text-xl text-gray-600">
              Komplettservice in 6 Schritten – Wir machen ALLES
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Kickoff & Prozessanalyse</h3>
              <p className="text-sm text-gray-600">
                2-3 Stunden Video-Call. Sie erklären uns Ihre Prozesse.
                Wir verstehen, wie Sie arbeiten.
              </p>
              <div className="mt-3 text-xs text-gray-500">📅 Tag 1-2</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">QM-Dokumentation erstellen</h3>
              <p className="text-sm text-gray-600">
                Wir schreiben Ihr QM-Handbuch, Verfahrensanweisungen, Prozessbeschreibungen –
                basierend auf IHREN echten Abläufen.
              </p>
              <div className="mt-3 text-xs text-gray-500">📋 Woche 1</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Dokumenten-Review</h3>
              <p className="text-sm text-gray-600">
                Sie prüfen die erstellten Dokumente. Wir passen an.
                Solange bis alles zu 100% Ihre Realität abbildet.
              </p>
              <div className="mt-3 text-xs text-gray-500">✅ Ende Woche 1</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-secondary-500">
              <div className="w-12 h-12 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">Internes Audit durchführen</h3>
              <p className="text-sm text-gray-600">
                Wir führen ein internes Audit durch, um sicherzustellen,
                dass Ihre Prozesse der Dokumentation entsprechen.
              </p>
              <div className="mt-3 text-xs text-secondary-700 font-semibold">
                🔍 Woche 2 • NEU IM PAKET
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-secondary-500">
              <div className="w-12 h-12 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                5
              </div>
              <h3 className="font-bold text-lg mb-2">Vorbereitung Zertifizierungsaudit</h3>
              <p className="text-sm text-gray-600">
                Schulung Ihrer Mitarbeiter. Simulation typischer Audit-Fragen.
                Maßnahmenplan für Abweichungen.
              </p>
              <div className="mt-3 text-xs text-secondary-700 font-semibold">
                🎓 Woche 2 • NEU IM PAKET
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-500">
              <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                6
              </div>
              <h3 className="font-bold text-lg mb-2">Zertifizierungsaudit & Zertifikat</h3>
              <p className="text-sm text-gray-600">
                3-4 Stunden Online-Audit. ISO 9001:2015 Zertifikat (PDF + Druck).
                Sofort ins Portal hochladen! ✅
              </p>
              <div className="mt-3 text-xs text-gray-500">🎯 Woche 2-3</div>
            </div>

          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              NEU: Internes Audit & Vorbereitung inklusive!
            </h3>
            <p className="text-gray-700 mb-3">
              Anders als bei der Konkurrenz ist bei QM-Guru das <strong>interne Audit</strong> und
              die <strong>Vorbereitung auf das Zertifizierungsaudit</strong> bereits im Preis enthalten.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ Internes Audit identifiziert Lücken BEVOR der Zertifizierer kommt</li>
              <li>✓ Mitarbeiter-Schulung: Wie verhalte ich mich im Audit?</li>
              <li>✓ Maßnahmenplan für gefundene Abweichungen</li>
              <li>✓ Simulation typischer Audit-Fragen</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary text-xl"
            >
              Jetzt starten – mit internem Audit & Vorbereitung!
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            30 Jahre Erfahrung • 1.000+ Audits
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-black text-primary-600 mb-2">230+</div>
              <p className="text-gray-600">Zertifizierte Unternehmen</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-primary-600 mb-2">2-3</div>
              <p className="text-gray-600">Wochen Durchschnittsdauer</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-primary-600 mb-2">98%</div>
              <p className="text-gray-600">Portal-Akzeptanzrate</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="text-6xl">💬</div>
              <div>
                <p className="text-lg italic mb-4">
                  "Ausschreibung lief, ich hatte 3 Wochen Zeit. QM-Guru hat meine komplette
                  Dokumentation erstellt, internes Audit durchgeführt und mich zertifiziert.
                  In 2,5 Wochen war ich portal-fähig. Auftrag im 6-stelligen Bereich gesichert."
                </p>
                <p className="font-bold">— Geschäftsführer, Technische Beratung, 15 Mitarbeiter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preis Section */}
      <section className="py-16 bg-gray-900 text-white" id="preise">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Transparente ISO 9001 Festpreise
            </h2>
            <p className="text-xl text-gray-300">
              All-inclusive: Dokumentation + Internes Audit + Vorbereitung + Zertifizierung
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

            {/* Paket 1 */}
            <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-2xl">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-2">Bis 5 Mitarbeiter</div>
                <div className="text-4xl font-black text-primary-600">2.500€</div>
                <div className="text-xs text-gray-500 mt-1">zzgl. MwSt.</div>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ QM-Dokumentation</li>
                <li>✓ Internes Audit</li>
                <li>✓ Audit-Vorbereitung</li>
                <li>✓ Zertifizierungsaudit</li>
                <li>✓ ISO 9001 Zertifikat</li>
              </ul>
              <button onClick={() => setShowForm(true)} className="w-full btn-primary text-sm py-3">
                Jetzt anfragen
              </button>
            </div>

            {/* Paket 2 - Beliebteste */}
            <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-primary-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                BELIEBTESTE
              </div>
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-2">6-20 Mitarbeiter</div>
                <div className="text-4xl font-black text-primary-600">3.500€</div>
                <div className="text-xs text-gray-500 mt-1">zzgl. MwSt.</div>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ QM-Dokumentation</li>
                <li>✓ Internes Audit</li>
                <li>✓ Audit-Vorbereitung</li>
                <li>✓ Zertifizierungsaudit</li>
                <li>✓ ISO 9001 Zertifikat</li>
              </ul>
              <button onClick={() => setShowForm(true)} className="w-full btn-primary text-sm py-3">
                Jetzt anfragen
              </button>
            </div>

            {/* Paket 3 */}
            <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-2xl">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-2">21-50 Mitarbeiter</div>
                <div className="text-4xl font-black text-primary-600">5.500€</div>
                <div className="text-xs text-gray-500 mt-1">zzgl. MwSt.</div>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ QM-Dokumentation</li>
                <li>✓ Internes Audit</li>
                <li>✓ Audit-Vorbereitung</li>
                <li>✓ Zertifizierungsaudit</li>
                <li>✓ ISO 9001 Zertifikat</li>
              </ul>
              <button onClick={() => setShowForm(true)} className="w-full btn-primary text-sm py-3">
                Jetzt anfragen
              </button>
            </div>

            {/* Paket 4 */}
            <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-2xl">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-2">51-100 Mitarbeiter</div>
                <div className="text-4xl font-black text-primary-600">7.000€</div>
                <div className="text-xs text-gray-500 mt-1">zzgl. MwSt.</div>
              </div>
              <ul className="space-y-2 text-sm mb-6">
                <li>✓ QM-Dokumentation</li>
                <li>✓ Internes Audit</li>
                <li>✓ Audit-Vorbereitung</li>
                <li>✓ Zertifizierungsaudit</li>
                <li>✓ ISO 9001 Zertifikat</li>
              </ul>
              <button onClick={() => setShowForm(true)} className="w-full btn-primary text-sm py-3">
                Jetzt anfragen
              </button>
            </div>

          </div>

          {/* Was ist drin */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Im Festpreis enthalten:</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold mb-3 text-lg">📋 Dokumentation</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ QM-Handbuch nach ISO 9001:2015</li>
                  <li>✓ Verfahrensanweisungen</li>
                  <li>✓ Prozessbeschreibungen</li>
                  <li>✓ Formulare & Checklisten</li>
                  <li>✓ Managementbewertung</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-lg">🔍 Audits & Vorbereitung</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ <strong>Internes Audit</strong> (Lückenanalyse)</li>
                  <li>✓ <strong>Vorbereitung Zertifizierungsaudit</strong></li>
                  <li>✓ Mitarbeiter-Schulung</li>
                  <li>✓ Audit-Simulation</li>
                  <li>✓ Maßnahmenplan</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-lg">🎯 Zertifizierung</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Zertifizierungsaudit (Online)</li>
                  <li>✓ ISO 9001:2015 Zertifikat (PDF)</li>
                  <li>✓ Zertifikat in Druckversion</li>
                  <li>✓ Logo für Webseite</li>
                  <li>✓ 1 Jahr Gültigkeit</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-lg">💼 Service</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Persönlicher Ansprechpartner</li>
                  <li>✓ 100% online</li>
                  <li>✓ 2-3 Wochen Gesamtdauer</li>
                  <li>✓ Festpreis-Garantie</li>
                  <li>✓ Geld-zurück bei Portal-Ablehnung*</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary-50 border-2 border-secondary-500 rounded-lg p-4 text-center">
              <p className="font-bold text-secondary-900 mb-2">
                🎯 NEU: Internes Audit & Vorbereitung im Preis enthalten!
              </p>
              <p className="text-sm text-secondary-700">
                Bei der Konkurrenz Aufpreis. Bei QM-Guru inklusive.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-400 mb-4">
              *Falls Ihr Zertifikat vom Portal nicht akzeptiert wird (ist uns noch nie passiert)
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="btn-primary text-xl"
            >
              Unverbindliches Angebot anfordern
            </button>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Häufige Fragen
          </h2>

          <div className="space-y-6">

            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-bold text-lg cursor-pointer">
                Ich habe NULL Dokumentation. Geht das wirklich in 2-3 Wochen?
              </summary>
              <p className="mt-4 text-gray-600">
                Ja. Wir erstellen ALLES für Sie – basierend auf Ihren echten Prozessen.
                Sie müssen uns nur erklären, wie Sie arbeiten. Den Rest machen wir.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-bold text-lg cursor-pointer">
                Wird das Zertifikat von Portalen wie Jagger akzeptiert?
              </summary>
              <p className="mt-4 text-gray-600">
                Ja, zu 98%. Wir sind eine anerkannte Zertifizierungsstelle.
                ISO 9001 verlangt KEINE Akkreditierung. Selbst Toyota akzeptiert unsere Zertifikate.
                Bei Portal-Ablehnung: Geld zurück.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-bold text-lg cursor-pointer">
                Was ist im Preis enthalten?
              </summary>
              <p className="mt-4 text-gray-600">
                ALLES: QM-Dokumentation erstellen, internes Audit, Vorbereitung auf Zertifizierungsaudit,
                Online-Zertifizierungsaudit, ISO 9001:2015 Zertifikat (PDF + Druck), Logo für Webseite.
                Festpreis, keine versteckten Kosten.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-bold text-lg cursor-pointer">
                Was bedeutet "internes Audit inklusive"?
              </summary>
              <p className="mt-4 text-gray-600">
                Anders als die Konkurrenz führen wir ein internes Audit durch BEVOR das Zertifizierungsaudit stattfindet.
                So identifizieren wir Lücken frühzeitig und Sie gehen mit 100% Sicherheit ins Zertifizierungsaudit.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-bold text-lg cursor-pointer">
                Wie läuft das Online-Audit ab?
              </summary>
              <p className="mt-4 text-gray-600">
                Per Video-Call (Zoom/Teams), 3-4 Stunden. Sie zeigen uns Ihre Prozesse am Bildschirm,
                wir stellen Fragen. Kein Vor-Ort-Termin nötig. Pragmatisch, nicht bürokratisch.
              </p>
            </details>

            <details className="bg-white rounded-xl p-6 shadow-lg">
              <summary className="font-bold text-lg cursor-pointer">
                Was kostet die Rezertifizierung im nächsten Jahr?
              </summary>
              <p className="mt-4 text-gray-600">
                Ab 1.290€. Viel weniger, weil die Dokumentation bereits existiert.
                Nur noch Update + kurzes Audit.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black mb-6">
            Deadline einhalten statt Auftrag verlieren
          </h2>
          <p className="text-2xl mb-8">
            Ausschreibung läuft? Jede Stunde zählt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold px-12 py-5 rounded-lg text-xl shadow-2xl transition-all hover:scale-105"
            >
              Express-Anfrage stellen
            </button>

            <a
              href={`tel:${import.meta.env.VITE_PHONE}`}
              className="bg-primary-700 hover:bg-primary-800 font-bold px-12 py-5 rounded-lg text-xl border-2 border-white transition-all hover:scale-105"
            >
              <Phone className="inline-block w-6 h-6 mr-2" />
              Sofort anrufen
            </a>
          </div>

          <p className="text-sm mt-6 opacity-90">
            ⚡ Rückmeldung innerhalb 2 Stunden • Mo-Fr 8-20 Uhr • Sa 9-16 Uhr
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-white font-bold mb-4">QM-Guru</h3>
              <p className="text-sm">
                Holger Grosser<br />
                Seit 1994 in der Qualitätsmanagement-Beratung<br />
                Über 1.000 durchgeführte Audits
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Kontakt</h3>
              <p className="text-sm">
                <Phone className="inline w-4 h-4 mr-2" />
                <a href={`tel:${import.meta.env.VITE_PHONE}`} className="hover:text-white">
                  {import.meta.env.VITE_PHONE}
                </a>
              </p>
              <p className="text-sm mt-2">
                <Mail className="inline w-4 h-4 mr-2" />
                <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="hover:text-white">
                  {import.meta.env.VITE_EMAIL}
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Rechtliches</h3>
              <ul className="text-sm space-y-2">
                <li><a href="https://qm-guru.de/impressum" className="hover:text-white">Impressum</a></li>
                <li><a href="https://qm-guru.de/datenschutz" className="hover:text-white">Datenschutz</a></li>
                <li><a href="https://qm-guru.de/agb" className="hover:text-white">AGB</a></li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} QM-Guru • Express-Zertifizierung für KMUs</p>
          </div>
        </div>
      </footer>

      {/* Formular Modal */}
      {showForm && <AnfrageForm onClose={() => setShowForm(false)} />}

    </div>
  )
}

export default App
