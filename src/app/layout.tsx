import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import SiteNav from "./site-nav";
import SiteFooter from "./site-footer";
import "./globals.css";

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Journey Through Ages | Discover India",
  description:
    "Explore India's heritage, nature, destinations, food, and traditions with Journey Through Ages.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={kalam.variable}>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
