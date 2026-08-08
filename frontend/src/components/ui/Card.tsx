import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Card({ children }: Props) {
  return (
    <div
      className="
      rounded-3xl
      bg-slate-900
      border
      border-slate-800
      p-8
      transition
      duration-300
      hover:border-cyan-400
      hover:-translate-y-2
      "
    >
      {children}
    </div>
  );
}