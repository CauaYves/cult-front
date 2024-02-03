"use client";
import StyledComponentsRegistry from "@/lib/registry";
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
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </FileContextProvider>
    </html>
  );
}
