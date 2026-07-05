import type { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

function Section({ title, children }: Props) {
  return (
    <section className="mb-8">
      {title && (
        <h2 className="mb-4 font-heading text-lg font-semibold text-text">
          {title}
        </h2> // Fixed: Changed } to </h2>
      )}

      {children}
    </section>
  );
}

export default Section;