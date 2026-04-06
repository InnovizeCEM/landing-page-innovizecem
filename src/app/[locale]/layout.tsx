import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Script from "next/script";

const raleway = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innovizecem",
  description: "Discover how Innovizecem is revolutionizing Software development, consulting, and Cloud computing with cutting-edge technology solutions. We offer enhanced efficiency, robust security, and scalable infrastructure to boost your business. Contact us!",
  keywords: "Cloud computing, Software development, Consultoring, Design",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {

  const { locale } = await params;
  if (!routing.locales.includes('en')) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={raleway.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Script src="https://unpkg.com/@phosphor-icons/web@2.1.1" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
