import { Link } from "react-router-dom";
import { Container } from "../components/Container.jsx";

export default function NotFound() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Seite nicht gefunden</h1>
        <p className="mt-4 text-slate-700">Die Seite existiert nicht (404).</p>
        <Link className="mt-6 inline-block text-brand-700 underline" to="/">
          Zur Startseite
        </Link>
      </Container>
    </main>
  );
}
