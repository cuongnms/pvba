import "@/app/(public)/globals.css";

import { ThemeProvider } from "next-themes";
import ScrollToTop from "./components/ScrollToTop";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import HeaderNavbar from "./components/HeaderNavbar";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./providers/AuthProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {/* <Header /> */}
            {/* <Navbar /> */}
            <HeaderNavbar />
            <main className="max-w-[1200px] mx-auto px-4">{children}</main>
            <ScrollToTop />
            <DarkModeToggle />
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
