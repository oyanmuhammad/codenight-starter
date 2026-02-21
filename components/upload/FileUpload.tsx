"use client";

import { useState, useRef } from "react";
import { useUploadThing } from "@/lib/uploadthing-client";
import { Button } from "@/components/ui/button";

export function FileUpload() {
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
      <p className="text-sm font-medium">Upload File</p>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
      />
      <Button variant="outline" onClick={handleSelect} disabled={uploading}>
        {uploading ? "Uploading..." : "Choose File"}
      </Button>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {fileName && fileUrl && (
        <div className="space-y-1">
          <p className="text-sm">{fileName}</p>
          <p className="text-xs text-muted-foreground break-all">{fileUrl}</p>
        </div>
      )}
    </div>
  );
}
