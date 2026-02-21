import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageUpload } from "@/components/upload/ImageUpload";
import { FileUpload } from "@/components/upload/FileUpload";
import { CloudUpload, LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <LayoutDashboard className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome to Dashboard
          </h1>
        </div>
        <div className="rounded-md bg-muted/50 p-3 border border-border/50 w-fit mt-2">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-background border text-xs font-medium">
              i
            </span>
            Edit{" "}
            <code className="rounded bg-background border px-1.5 py-0.5 text-xs font-mono text-foreground">
              app/(dashboard)/dashboard/page.tsx
            </code>{" "}
            to customize this page.
          </p>
        </div>
      </div>

      <Card className="border-2 shadow-sm overflow-hidden">
        <CardHeader className="pb-4 bg-muted/30 border-b">
          <div className="flex items-center gap-2 mb-1">
            <CloudUpload className="h-5 w-5 text-primary" />
            <CardTitle className="text-xl">Test Upload</CardTitle>
          </div>
          <CardDescription>
            Upload images and files to test UploadThing integration
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <ImageUpload />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <FileUpload />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
