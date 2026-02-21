import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import { getLocaleDirection, getGT } from "gt-next/server";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const gt = await getGT();
  return {
    title: gt("RTL Support Demo | General Translation"),
    description: gt(
      "Demo of getLocaleDirection() and useLocaleDirection() for RTL language support with General Translation"
    ),
    openGraph: {
      title: gt("RTL Support Demo | General Translation"),
      description: gt(
        "Demo of getLocaleDirection() and useLocaleDirection() for RTL language support with General Translation"
      ),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const dir = await getLocaleDirection();
  return (
    <html lang={locale} dir={dir}>
      <body className={`${geistSans.variable} antialiased`}>
        <GTProvider>{children}</GTProvider>
      </body>
    </html>
  );
}
