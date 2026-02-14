import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">CodeNight Starter</CardTitle>
        <CardDescription>
          Starter kit Next.js 16 yang ringan dengan Better Auth, Prisma, dan UploadThing
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Edit{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono">
            app/(public)/page.tsx
          </code>{" "}
          untuk kustomisasi halaman ini.
        </p>
        <div className="space-y-2 text-sm">
          <p className="font-medium">Panduan Cepat:</p>
          <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
            <li>Isi environment variables di .env</li>
            <li>Jalankan prisma migrate dan generate</li>
            <li>Jalankan script seed</li>
            <li>Jalankan dev server</li>
            <li>Login di /login</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}
