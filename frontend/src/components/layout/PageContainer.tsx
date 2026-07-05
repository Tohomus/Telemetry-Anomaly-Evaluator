import type{ ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function PageContainer({ children }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-6">
      {children}
    </div>
  );
}

export default PageContainer;