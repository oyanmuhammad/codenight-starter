"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hexagon, CloudUpload } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: Hexagon },
  { name: "Upload", href: "/upload", icon: CloudUpload },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-1">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 text-sm transition-colors duration-200",
              isActive 
                ? "text-foreground font-semibold" 
                : "text-muted-foreground hover:text-foreground font-medium"
            )}
          >
            <Icon className={cn("h-4 w-4 transition-colors duration-200", isActive ? "text-foreground" : "text-muted-foreground/60")} />
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export function MobileNavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-around w-full">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex flex-col items-center justify-center gap-1 p-2 text-[11px] font-medium transition-all duration-200",
              isActive 
                ? "text-foreground" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <div className={cn(
              "flex items-center justify-center rounded-full p-1.5 transition-colors",
              isActive ? "bg-muted" : "bg-transparent"
            )}>
              <Icon className="h-5 w-5" />
            </div>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
