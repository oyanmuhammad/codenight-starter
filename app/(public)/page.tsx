import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <Card className="border-2 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Terminal className="h-4 w-4 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            CodeNight Starter
          </CardTitle>
        </div>
        <CardDescription className="text-base">
          Lightweight Next.js 16 starter kit with Better Auth, Prisma, and
          UploadThing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-md bg-muted/50 p-3 border border-border/50">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-background border text-xs font-medium">
              i
            </span>
            Edit{" "}
            <code className="rounded bg-background border px-1.5 py-0.5 text-xs font-mono text-foreground">
              app/(public)/page.tsx
            </code>{" "}
            to customize this page.
          </p>
        </div>

        <div className="space-y-3">
          <p className="font-semibold text-sm flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Quick Start Guide
          </p>
          <ul className="space-y-2.5 text-sm text-muted-foreground ml-6">
            <li className="flex items-start gap-2">
              <span className="text-primary/60 mt-0.5">•</span>
              <span>
                Fill environment variables in{" "}
                <code className="text-xs font-mono bg-muted px-1 rounded">
                  .env
                </code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary/60 mt-0.5">•</span>
              <span>
                Run{" "}
                <code className="text-xs font-mono bg-muted px-1 rounded">
                  prisma migrate
                </code>{" "}
                and{" "}
                <code className="text-xs font-mono bg-muted px-1 rounded">
                  generate
                </code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary/60 mt-0.5">•</span>
              <span>
                Run{" "}
                <code className="text-xs font-mono bg-muted px-1 rounded">
                  seed
                </code>{" "}
                script
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary/60 mt-0.5">•</span>
              <span>Run dev server</span>
            </li>
          </ul>
        </div>

        <div className="pt-4 border-t flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Ready to start?</p>
          <Button asChild size="sm" className="gap-1.5">
            <Link href="/login">
              Login to Dashboard <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
