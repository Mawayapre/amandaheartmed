import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "../globals.css";
import NavLinks from "./components/navLinks";
import Contacts from "./components/contacts";
import Footer from './components/footer';
import BackToTop from './components/backaToTop';

// Main text font
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Monospace font
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Amanda Hospital",
  description:
    "Amanda Hospital is a healthcare facility dedicated to providing high-quality medical services to patients. We offer a wide range of medical specialties and treatments, staffed by experienced healthcare professionals.",
  icons: {
    icon: "/logo.png", // make sure this exists in /public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <Contacts />
        <NavLinks />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}