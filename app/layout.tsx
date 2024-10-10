import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShopBD | Tanzir Ibne Ali",
  description: "ShopBD - The best place to find top-quality products",
  icons: {
    icon: '/favicon.ico', 
  },
  openGraph: {
    title: 'ShopBD | Tanzir Ibne Ali',
    description: 'ShopBD - Your one-stop shop for premium products!',
    url: 'https://tanziribneali.vercel.app',
    siteName: 'ShopBD',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    site: '@tanziribneali',
    creator: '@tanziribneali',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  appearance={{
      layout: {
        socialButtonsPlacement: 'bottom',
        socialButtonsVariant: 'iconButton',
        logoImageUrl: "https://cdn2.iconfinder.com/data/icons/shopping-and-ecommerce-40/512/19_E-Commerce_Optimization-512.png"
      }
    }}>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  </ClerkProvider>
  );
}
