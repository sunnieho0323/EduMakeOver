import type { Metadata } from "next";
import { LoginView } from "@/components/auth/LoginView";

export const metadata: Metadata = {
  title: "Login | EduMakeover AI",
  description: "Enter the EduMakeover studio.",
};

export default function LoginPage() {
  return <LoginView />;
}
