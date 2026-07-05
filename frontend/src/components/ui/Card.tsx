import type{ ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Card({ children, className="" }: Props) {
  return (
    <div className={`rounded-xl border border-slate-700 bg-card p-5 ${className}`}>
      {children}
    </div>
  );
}

export default Card;