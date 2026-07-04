"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message ?? "Login failed");
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
        return;
      }

      router.push("/dashboard");
    } catch {
      setError("An unexpected error occurred");
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid min-h-[100dvh] lg:grid-cols-2 bg-background">
      <div className="flex flex-col gap-4 p-6 md:p-10 relative">
        <div className="flex justify-start items-center animate-in fade-in slide-in-from-top-4 duration-700">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground rounded-full -ml-3">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 fill-mode-both">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-4px); }
                40%, 80% { transform: translateX(4px); }
              }
              .animate-shake {
                animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
              }
            `}} />
            <form className={cn("flex flex-col gap-6", isShaking && "animate-shake")} onSubmit={handleSubmit}>
              <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                  <h1 className="text-2xl font-bold">Login to your account</h1>
                  <p className="text-sm text-balance text-muted-foreground">
                    Enter your email below to login to your account
                  </p>
                </div>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    className={cn(
                      "focus-visible:ring-0 transition-colors",
                      error ? "border-destructive/50 focus-visible:border-destructive/50" : "focus-visible:border-foreground/40"
                    )}
                    required 
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-muted-foreground"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (error) setError("");
                    }}
                    className={cn(
                      "focus-visible:ring-0 transition-colors",
                      error ? "border-destructive/50 focus-visible:border-destructive/50" : "focus-visible:border-foreground/40"
                    )}
                    required 
                  />
                </Field>

                <Field>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Signing in..." : "Login"}
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block overflow-hidden animate-in fade-in duration-1000 ease-out fill-mode-both border-l border-border/40">
        <img
          src="/image.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
