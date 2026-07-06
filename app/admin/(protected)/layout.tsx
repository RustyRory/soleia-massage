import { Suspense } from "react";
import { verifySession } from "@/lib/auth";
import { logout } from "../actions";

async function AuthGate({ children }: { children: React.ReactNode }) {
  await verifySession();
  return <>{children}</>;
}

function DashboardLoading() {
  return <p className="text-sm tracking-widest uppercase text-[#7A6652]">Chargement…</p>;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAF2EE]">
      <header className="border-b border-[#2D2416]/10 bg-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="font-[family-name:var(--font-serif)] text-lg text-[#2D2416]">
            Dashboard — Soleia Massage
          </p>
          <form action={logout}>
            <button
              type="submit"
              className="text-xs tracking-widest uppercase text-[#7A6652] hover:text-[#C07A4A] transition-colors"
            >
              Déconnexion
            </button>
          </form>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-12">
        <Suspense fallback={<DashboardLoading />}>
          <AuthGate>{children}</AuthGate>
        </Suspense>
      </main>
    </div>
  );
}
