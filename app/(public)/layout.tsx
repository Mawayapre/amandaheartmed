import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google"; // <-- new fonts
import "../globals.css";
import NavLinks from "./components/navLinks";
import Contacts from "./components/contacts";
import Footer from './components/footer'

// Main text font
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // normal, medium, bold
});

// Monospace font (optional, for code or special labels)
const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Amanda Hospital",
  description:
    "Amanda Hospital is a healthcare facility dedicated to providing high-quality medical services to patients. We offer a wide range of medical specialties and treatments, staffed by experienced healthcare professionals. Our mission is to deliver compassionate care and improve the health and well-being of our community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        <Contacts />
        <NavLinks />
        {children}
        <Footer />
      </body>
    </html>
  );
}