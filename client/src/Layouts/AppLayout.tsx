import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-8">
        <Navbar />

        <div className="mt-8">
          {children}
        </div>
      </main>
    </div>
  );
}