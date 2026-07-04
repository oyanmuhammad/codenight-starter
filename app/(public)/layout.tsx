export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background w-full overflow-x-hidden">
      <div className="w-full">{children}</div>
    </div>
  );
}
