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
    <html lang="pt-BR">
      <meta
        name="description"
        content="breve descrição do sistema para fins SEO"
      />
      <title>Culturalize</title>
      <ResetStyle />
      <FileContextProvider>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </FileContextProvider>
    </html>
  );
}
