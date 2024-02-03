"use client";
import { FileContextProvider } from "@/contexts/FileContext";
import ResetStyle from "../styles/index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ResetStyle />
      <FileContextProvider>
        <body>{children}</body>
      </FileContextProvider>
    </html>
  );
}
