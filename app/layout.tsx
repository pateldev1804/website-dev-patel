import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Patel | Software Engineer Portfolio",
  description: "Personal portfolio of Dev Patel showcasing projects, experience, and skills in Computer Science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
