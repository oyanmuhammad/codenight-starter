import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function CreditBadge({ className }: { className?: string }) {
  return (
    <div className={`items-center gap-1.5 text-xs text-muted-foreground ${className}`}>
      <span>Brought to you by</span>
      <Link 
        href="https://github.com/oyanmuhammad/codenight-starter" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
      >
        Oyan Liberta
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[14px] w-[14px] text-blue-500">
          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="w-full px-4 md:px-12 lg:px-24 max-w-6xl mx-auto flex flex-col justify-center py-4 md:py-8">
      
      {/* Main Grid: Split Layout on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        
        {/* Left Column: Hero Typography & CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8">
          
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both w-full flex justify-center lg:justify-start">
            <div className="inline-flex max-w-[90%] sm:max-w-none items-center text-center sm:text-left gap-2.5 rounded-xl sm:rounded-full border border-border/40 bg-muted/20 px-3 sm:px-4 py-1.5 sm:py-1 text-[11px] sm:text-xs md:text-sm text-muted-foreground transition-colors hover:bg-muted/40">
              <span className="shrink-0 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-background border text-[10px] sm:text-xs font-bold">
                i
              </span>
              <span className="leading-tight">
                <span className="block sm:inline">Edit <code className="font-mono font-medium text-foreground">app/(public)/page.tsx</code></span>
                <span className="hidden sm:inline"> </span>
                <span className="block sm:inline">to customize this page.</span>
              </span>
            </div>
          </div>
          
          <div className="space-y-3 md:space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both delay-150">
            <div className="flex justify-center lg:justify-start mb-2 lg:mb-0">
              <Terminal className="h-10 w-10 md:h-12 md:w-12 text-foreground/80" strokeWidth={1.5} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance">
              CodeNight Starter
            </h1>
            
            <p className="text-base sm:text-lg text-muted-foreground text-balance max-w-[450px]">
              Lightweight Next.js 16 starter kit with Better Auth, Prisma, and
              UploadThing
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 md:pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both delay-300">
            <p className="text-sm font-medium text-muted-foreground">Ready to start?</p>
            <Button asChild>
              <Link href="/login">
                Login to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Desktop Credit (Hidden on Mobile/Tablet) */}
          <CreditBadge className="hidden lg:flex pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both delay-500" />
          
        </div>
        
        {/* Right Column: Terminal Window Showcase */}
        <div className="w-full max-w-[420px] mx-auto lg:max-w-none animate-in fade-in zoom-in-95 duration-1000 ease-out fill-mode-both delay-500">
          <div className="relative flex flex-col rounded-xl border border-border/40 bg-background/50 shadow-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5 backdrop-blur-sm">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40 bg-muted/20">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Quick Start Guide</span>
              </div>
              <div className="w-10" /> {/* Spacer for centering text */}
            </div>
            
            {/* Terminal Body */}
            <div className="p-5 sm:p-6 bg-muted/5">
              <ul className="space-y-4 text-xs sm:text-sm text-muted-foreground font-mono">
                <li className="flex items-start gap-3">
                  <span className="text-primary/40 mt-0.5 select-none">•</span>
                  <span className="font-sans">
                    Fill environment variables in{" "}
                    <code className="text-[10px] sm:text-xs font-mono bg-muted/60 px-1.5 py-0.5 rounded text-foreground border border-border/30">
                      .env
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary/40 mt-0.5 select-none">•</span>
                  <span className="font-sans">
                    Run{" "}
                    <code className="text-[10px] sm:text-xs font-mono bg-muted/60 px-1.5 py-0.5 rounded text-foreground border border-border/30">
                      prisma migrate
                    </code>{" "}
                    and{" "}
                    <code className="text-[10px] sm:text-xs font-mono bg-muted/60 px-1.5 py-0.5 rounded text-foreground border border-border/30">
                      generate
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary/40 mt-0.5 select-none">•</span>
                  <span className="font-sans">
                    Run{" "}
                    <code className="text-[10px] sm:text-xs font-mono bg-muted/60 px-1.5 py-0.5 rounded text-foreground border border-border/30">
                      seed
                    </code>{" "}
                    script
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary/40 mt-0.5 select-none">•</span>
                  <span className="font-sans">Run dev server</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
        
      </div>

      {/* Mobile/Tablet Credit (Hidden on Desktop) */}
      <CreditBadge className="flex lg:hidden justify-center pt-10 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both delay-700" />
      
    </main>
  );
}
