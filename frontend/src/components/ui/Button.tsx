import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  ...props
}: Props) {
  const base =
    "px-8 py-4 rounded-xl font-semibold transition";

  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-white",
    secondary:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}