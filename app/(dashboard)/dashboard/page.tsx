import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageUpload } from "@/components/upload/ImageUpload";
import { FileUpload } from "@/components/upload/FileUpload";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Selamat Datang di Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Edit{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            app/(dashboard)/dashboard/page.tsx
          </code>{" "}
          untuk kustomisasi halaman ini.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tes Upload</CardTitle>
          <CardDescription>
            Upload gambar dan file untuk menguji integrasi UploadThing
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ImageUpload />
          <div className="border-t pt-6">
            <FileUpload />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
