import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { LogoutButton } from "./logout-button";
import { DashboardLoadingSkeleton } from "./loading-skeleton";
import { NavLinks } from "./nav-links";
import { MobileSidebar } from "./mobile-sidebar";
import { Hexagon } from "lucide-react";

async function SessionCheck({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background md:flex-row">
      
      {/* 
        DESKTOP SIDEBAR 
        Hidden on mobile (md:flex), pure 1px right border only. No internal box borders.
      */}
      <aside className="hidden md:flex flex-col w-64 border-r border-border/40 fixed inset-y-0 left-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        
        {/* Clean Logo without bottom border */}
        <div className="flex h-16 items-center px-6 mt-2">
          <div className="flex items-center gap-2">
            <Hexagon className="h-5 w-5 text-primary fill-primary/10" />
            <p className="font-bold tracking-tight text-lg">CodeNight</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <NavLinks />
        </nav>

        {/* Sidebar Footer without top border */}
        <div className="mt-auto p-4 pb-6">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium text-muted-foreground px-2 truncate">
              {session.user.email}
            </p>
            <div className="w-full">
              <LogoutButton email={session.user.email} />
            </div>
          </div>
        </div>
      </aside>

      {/* 
        MAIN CANVAS
      */}
      <main className="flex-1 w-full md:pl-64">
        {/* Mobile Nav (Top Header + Sliding Drawer) */}
        <MobileSidebar email={session.user.email} />

        <div className="mx-auto max-w-6xl p-4 md:p-8 lg:p-12">
          {children}
        </div>
      </main>

    </div>
  );
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<DashboardLoadingSkeleton />}>
      <SessionCheck>{children}</SessionCheck>
    </Suspense>
  );
}
