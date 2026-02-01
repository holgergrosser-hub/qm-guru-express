import { Container } from "../components/Container.jsx";

export default function Impressum() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Impressum</h1>
        <p className="mt-4 text-slate-700">
          Platzhalter – bitte Impressumsdaten ergänzen. (Name/Firma, Anschrift, Kontakt, ggf. USt-IdNr.,
          Verantwortliche/r i.S.d. § 18 Abs. 2 MStV, etc.)
        </p>
      </Container>
    </main>
  );
}
