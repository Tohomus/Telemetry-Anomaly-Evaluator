import type{ ReactNode } from "react";
import Navbar from "../components/layout/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />

      <main>{children}</main>
    </div>
  );
}

export default MainLayout;