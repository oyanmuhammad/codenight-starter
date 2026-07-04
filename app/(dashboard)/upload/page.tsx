import { ImageUpload } from "@/components/upload/ImageUpload";
import { FileUpload } from "@/components/upload/FileUpload";

export default function UploadPage() {
  return (
    <div className="w-full space-y-8 lg:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
      
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          Upload
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
          Securely upload and manage your system assets, images, and documents.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both delay-150">
        
        {/* Bento Box 1: Image Upload */}
        <div className="flex flex-col rounded-2xl border border-border/40 bg-card p-6 md:p-8 transition-colors">

          
          <div className="relative z-10 flex flex-col space-y-1.5 mb-8">
            <h2 className="text-xl font-bold tracking-tight">Media Assets</h2>
            <p className="text-sm text-muted-foreground">
              Upload and organize visual assets.
            </p>
          </div>
          
          <div className="relative z-10 flex-1">
            <ImageUpload />
          </div>
        </div>

        {/* Bento Box 2: File Upload */}
        <div className="flex flex-col rounded-2xl border border-border/40 bg-card p-6 md:p-8 transition-colors">

          
          <div className="relative z-10 flex flex-col space-y-1.5 mb-8">
            <h2 className="text-xl font-bold tracking-tight">Documents</h2>
            <p className="text-sm text-muted-foreground">
              Securely upload raw data and PDF files.
            </p>
          </div>
          
          <div className="relative z-10 flex-1">
            <FileUpload />
          </div>
        </div>

      </div>
    </div>
  );
}
