import DashboardNavbar from "@/components/dashboardNavbar";
import { RootSidebar } from "@/components/rootSidebar";

export default async function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardNavbar>{children}</DashboardNavbar>
      </body>
    </html>
  );
}
