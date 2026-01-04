import "@/app/(public)/globals.css";

import { ThemeProvider } from "next-themes";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import DarkModeToggle from "./components/DarkModeToggle";
import Footer from "./components/Footer";
import { initAdminIfNeeded } from "./lib/init";
import HeaderNavbar from "./components/HeaderNavbar";

export default async function Layout({ children }: { children: React.ReactNode }) {
    await initAdminIfNeeded();

  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          {/* <Header /> */}
          {/* <Navbar /> */}
          <HeaderNavbar />
          <main className="max-w-[1200px] mx-auto px-4">{children}</main>
          <ScrollToTop />
          <DarkModeToggle />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
