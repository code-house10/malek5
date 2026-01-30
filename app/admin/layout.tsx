import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "./components/Sidebar";
import "./admin.css";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  if (!session) redirect("/login");

  return (
    <div className="admin-layout">
      <Sidebar user={session.user} />
      <main className="admin-main">
        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
}
