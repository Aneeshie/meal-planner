import { ReactNode } from "react";
import { DashBoardLayout } from "./_components/dashboard-layout";
type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <DashBoardLayout>{children}</DashBoardLayout>;
};

export default Layout;
