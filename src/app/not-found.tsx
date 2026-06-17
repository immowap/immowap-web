import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center">
      <p className="text-label mb-4 text-gold-600">404</p>
      <h1 className="text-h2 text-brand-800">Seite nicht gefunden</h1>
      <p className="mt-4 max-w-md text-muted">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button href="/de">Zur Startseite (DE)</Button>
        <Button href="/en" variant="secondary">
          Back to home (EN)
        </Button>
      </div>
    </div>
  );
}
