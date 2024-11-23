import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Middle East IQ",
  description: "Find, book, rend a car quick and super easy!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
