import type { Metadata } from "next";
import { SignupView } from "@/components/auth/SignupView";

export const metadata: Metadata = {
  title: "Sign up | EduMakeover AI",
  description: "Join the EduMakeover lab.",
};

export default function SignupPage() {
  return <SignupView />;
}
