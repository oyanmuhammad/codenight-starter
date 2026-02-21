"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useUploadThing } from "@/lib/uploadthing-client";
import { Button } from "@/components/ui/button";

export function ImageUpload() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  async function handleSelect() {
    inputRef.current?.click();
  }

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError(null);
    setUploading(true);
    await startUpload([file]);
  }

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium">Upload Image</p>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
      <Button variant="outline" onClick={handleSelect} disabled={uploading}>
        {uploading ? "Uploading..." : "Choose Image"}
      </Button>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {imageUrl && (
        <div className="space-y-2">
          <Image
            src={imageUrl}
            alt="Uploaded image"
            width={300}
            height={200}
            className="rounded-md border object-cover"
          />
          <p className="text-xs text-muted-foreground break-all">{imageUrl}</p>
        </div>
      )}
    </div>
  );
}
