export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] md:min-h-[calc(100vh-8rem)] w-full text-center animate-in fade-in zoom-in-95 duration-1000 ease-out-quint fill-mode-both px-4">
      
      {/* The Restored Elegant "Edit Page" Badge */}
      <div className="inline-flex flex-col sm:flex-row items-center gap-2.5 rounded-2xl sm:rounded-full border border-border/40 bg-muted/20 p-4 sm:px-3 sm:py-1.5 text-xs sm:text-sm text-muted-foreground transition-colors hover:bg-muted/40 mb-10 max-w-full">
        <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-background border text-[10px] font-bold shadow-sm">
          i
        </span>
        <span className="leading-relaxed sm:leading-tight flex flex-col sm:block text-center sm:text-left">
          <span>Edit </span>
          <code className="font-mono font-medium text-foreground bg-background/50 rounded px-1.5 py-0.5 border border-border/50 mx-0 sm:mx-1 my-1 sm:my-0 break-all sm:break-normal">app/(dashboard)/dashboard/page.tsx</code>
          <span> to customize this page.</span>
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl mb-6">
        Thank you for using <br className="hidden sm:block" /> CodeNight Starter.
      </h1>
      
      <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Everything is ready to go. Your application starts with a production-ready foundation built to modern industry standards. Customize every part of this starter to match your brand, build powerful features, and launch with confidence.
      </p>
    </div>
  );
}
