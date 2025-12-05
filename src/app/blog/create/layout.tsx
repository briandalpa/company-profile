import { ReactNode } from "react";
import "../../globals.css";
import DashboardNavbar from "./_components/navbar";

type CreateLayoutProps = {
  children: ReactNode;
};

export default function CreateLayout({ children }: CreateLayoutProps) {
  return (
    <>
      <DashboardNavbar />
      <main>{children}</main>
    </>
  );
}
