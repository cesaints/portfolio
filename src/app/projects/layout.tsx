// src/app/layout.tsx
import "@/app/globals.css";
import type { Metadata } from "next";
import Header from "@shared/ui/Header";
import Galaxy from "@shared/ui/fx/Galaxy";

export const metadata = {
  title: "Projetos — Carlos Eduardo",
  description: "Cases e estudos",
};
export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

