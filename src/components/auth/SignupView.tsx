"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { useCallback } from "react";
import { authInputClass } from "./authFieldClasses";
import { AuthBranding } from "./AuthBranding";
import { AuthCard } from "./AuthCard";
import { AuthShell } from "./AuthShell";
import { SocialLoginButtons } from "./SocialLoginButtons";

export function SignupView() {
  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <AuthShell>
      <div className="w-full max-w-md">
        <AuthBranding />

        <AuthCard title="Join the Lab">
          <form className="space-y-6 pl-2" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label
                className="block text-xs text-[var(--on-surface-variant)] font-medium ml-1"
                htmlFor="signup-email"
              >
                ACADEMIC EMAIL
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)] text-sm pointer-events-none">
                  alternate_email
                </span>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@university.edu"
                  className={authInputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="block text-xs text-[var(--on-surface-variant)] font-medium ml-1"
                htmlFor="signup-password"
              >
                STUDIO KEY
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)] text-sm pointer-events-none">
                  lock
                </span>
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••••••"
                  className={authInputClass}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                className="block text-xs text-[var(--on-surface-variant)] font-medium ml-1"
                htmlFor="signup-password-confirm"
              >
                CONFIRM STUDIO KEY
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[var(--on-surface-variant)] text-sm pointer-events-none">
                  verified_user
                </span>
                <input
                  id="signup-password-confirm"
                  name="passwordConfirm"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••••••"
                  className={authInputClass}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold text-lg tracking-wide text-[#582300] bg-gradient-to-br from-[#fd9b64] to-[#ff6b96] hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-[#fd9b64]/20 mt-4"
            >
              Create account
            </button>
          </form>

          <SocialLoginButtons />
        </AuthCard>

        <div className="text-center mt-8">
          <p className="text-sm text-[var(--on-surface-variant)]">
            Already in the lab?{" "}
            <Link
              href="/login"
              className="text-[#ff6b96] font-bold hover:underline ml-1"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </AuthShell>
  );
}
