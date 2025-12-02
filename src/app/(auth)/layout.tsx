import { ReactNode } from "react";
import "../globals.css";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="min-h-screen pt-20">{children}</div>;
}
