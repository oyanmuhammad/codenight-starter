"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useUploadThing } from "@/lib/uploadthing-client";
import { CloudUpload, Loader2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageUpload() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      if (res?.[0]) {
        setImageUrl(res[0].ufsUrl);
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
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    setError(null);
    setUploading(true);
    await startUpload([file]);
  }

  return (
    <div className="w-full h-full flex flex-col">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* Uploaded State */}
      {imageUrl ? (
        <div className="relative group w-full flex-1 min-h-[250px] rounded-xl overflow-hidden border border-border/50 bg-muted/20">
          <Image
            src={imageUrl}
            alt="Uploaded image"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle overlay gradient for the remove button */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setImageUrl(null);
            }}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-destructive text-white rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 transform translate-y-[-10px] group-hover:translate-y-0"
            title="Remove image"
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
                <CloudUpload className={cn(
                  "w-6 h-6 transition-colors duration-300",
                  isDragging ? "text-primary" : "text-muted-foreground group-hover:text-primary/80"
                )} />
              )}
            </div>

            <div className="text-center space-y-1">
              <p className="text-sm font-normal text-foreground/80">
                {uploading ? "Uploading..." : "Click or drag image here"}
              </p>
              {!uploading && (
                <p className="text-[11px] text-muted-foreground/70">
                  SVG, PNG, JPG or GIF (max. 4MB)
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
