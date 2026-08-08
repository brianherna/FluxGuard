import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div
      className="
      rounded-3xl
      bg-slate-900/60
      backdrop-blur-xl
      border
      border-slate-800
      p-8
      transition-all
      duration-300
      hover:-translate-y-3
      hover:border-cyan-400
      hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]
      "
    >
      {children}
    </div>
  );
}