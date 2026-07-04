"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton({ email }: { email?: string }) {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut();
    router.push("/login");
  }

  return (
    <Button 
      variant="ghost" 
      size="default" 
      onClick={handleLogout} 
      className="w-full justify-start gap-3 px-3 py-2.5 h-auto text-destructive hover:text-destructive hover:bg-destructive/10 transition-colors cursor-pointer"
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </Button>
  );
}
