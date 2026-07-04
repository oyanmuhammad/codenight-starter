"use client";

import { useState, useRef } from "react";
import { useUploadThing } from "@/lib/uploadthing-client";
import { FileUp, Loader2, X, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export function FileUpload() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { startUpload } = useUploadThing("fileUploader", {
    onClientUploadComplete: (res) => {
      if (res?.[0]) {
        setFileUrl(res[0].ufsUrl);
        setFileName(res[0].name);
      }
      setUploading(false);
    },
    onUploadError: (err) => {
      setError(err.message);
      setUploading(false);
    },
  });

  function handleSelect() {
    inputRef.current?.click();
  }

  async function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;

    setError(null);
    setUploading(true);
    await startUpload([file]);
  }

  return (
    <div className="w-full h-full flex flex-col">
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* Uploaded State */}
      {fileUrl && fileName ? (
        <div className="relative group flex flex-col items-center justify-center w-full flex-1 min-h-[250px] rounded-xl border border-border/50 bg-muted/10 transition-colors hover:bg-muted/30">
          <div className="flex flex-col items-center space-y-4 text-center p-6">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <FileText className="w-10 h-10" />
            </div>
            <div className="space-y-1 max-w-[200px]">
              <p className="text-sm font-medium text-foreground truncate" title={fileName}>
                {fileName}
              </p>
              <p className="text-xs text-muted-foreground truncate" title={fileUrl}>
                Ready for processing
              </p>
            </div>
          </div>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFileUrl(null);
              setFileName(null);
            }}
            className="absolute top-4 right-4 p-2 bg-muted hover:bg-destructive hover:text-white text-muted-foreground rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0"
            title="Remove file"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Dropzone State */
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
          }}
          onClick={handleSelect}
          className={cn(
            "relative flex flex-col items-center justify-center w-full flex-1 min-h-[250px] py-10 px-4 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-300 ease-out-quint group overflow-hidden",
            isDragging 
              ? "border-primary bg-primary/5" 
              : "border-border/60 hover:border-primary/50 hover:bg-muted/30"
          )}
        >
          {/* Subtle glow effect behind the icon on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
            <div className={cn(
              "p-3 rounded-full transition-all duration-500 ease-out-quint",
              uploading ? "bg-transparent" : "bg-transparent group-hover:bg-primary/5 group-hover:scale-105",
              isDragging && "scale-105 bg-primary/5"
            )}>
              {uploading ? (
                <Loader2 className="w-6 h-6 text-primary animate-spin" />
              ) : (
                <FileUp className={cn(
                  "w-6 h-6 transition-colors duration-300",
                  isDragging ? "text-primary" : "text-muted-foreground group-hover:text-primary/80"
                )} />
              )}
            </div>

            <div className="text-center space-y-1">
              <p className="text-sm font-normal text-foreground/80">
                {uploading ? "Uploading..." : "Click or drag document here"}
              </p>
              {!uploading && (
                <p className="text-[11px] text-muted-foreground/70">
                  PDF, DOCX, TXT or CSV (max. 8MB)
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm text-destructive flex items-center gap-2 animate-in slide-in-from-top-1 fade-in duration-300">
          <X className="w-4 h-4 shrink-0" />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
