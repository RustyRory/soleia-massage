import { verifySession } from "@/lib/auth";
import { logout } from "../actions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await verifySession();

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
      <main className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-12">{children}</main>
    </div>
  );
}
