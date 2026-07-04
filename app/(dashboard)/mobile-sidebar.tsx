"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NavLinks } from "./nav-links";
import { LogoutButton } from "./logout-button";

export function MobileSidebar({ email }: { email?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the sidebar when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Header Trigger */}
      <div className="md:hidden flex h-14 items-center gap-3 px-4 border-b border-border/40 bg-background/95 backdrop-blur z-40 sticky top-0">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 -ml-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <p className="font-bold tracking-tight">CodeNight</p>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-border/40 shadow-2xl transform transition-transform duration-300 ease-out flex flex-col md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-6 border-b border-border/40">
          <p className="font-bold tracking-tight">Menu</p>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 -mr-2 rounded-md hover:bg-muted transition-colors text-muted-foreground"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <NavLinks />
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-auto border-t border-border/40 p-4">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium text-muted-foreground px-2 truncate">
              {email}
            </p>
            <div className="w-full">
              <LogoutButton email={email} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
