import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-xl p-6 transition-all duration-300 hover:border-indigo-500/40 hover:shadow-indigo-500/10 ${className}`}
    >
      {children}
    </div>
  );
}